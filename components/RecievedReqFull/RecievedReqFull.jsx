import React from "react";
//next
import Link from "next/link";
import { useRouter } from "next/router";
//Context
import { useDb } from "../../contexts/DbContext";
import { useLoading } from "../../contexts/LoadingContext";
import { useAuth } from "../../contexts/AuthContext";
import { arrayRemove, arrayUnion } from "@firebase/firestore";
import { useFunctions } from "../../contexts/FunctionsContext";
import { useSnackBar } from "../../contexts/SnackBarContext";

const RecievedReqFull = ({
  reqInfo,
  id,
  setOpen,
  setRequestLoading,
  setReqResolved,
}) => {
  //Variables---
  //Contexts
  const {
    updateUser,
    getUser,
    updateListing,
    addNotification,
    deleteNotification,
  } = useDb();
  const [loading, setLoading] = useLoading();
  const { currentUser } = useAuth();
  const { callable } = useFunctions();
  const { snackBar } = useSnackBar();
  const router = useRouter();

  //Functions
  const handleAction = (action) => {
    let reciever;
    setRequestLoading(true);
    setOpen(false);
    const resolveRequest = callable("requests-resolveRequest");
    getUser(currentUser.uid).then((user) => {
      setReqResolved({
        state: true,
        type: action,
      });
      setRequestLoading(false);
      reciever = user;
      const resolvingInfo = {
        senderUid: id,
        senderListing: reqInfo.listingId,
        recieverUid: currentUser.uid,
        recieverListing: reciever.data().listing.id,
      };
      resolveRequest(JSON.stringify(resolvingInfo));
      if (action === "accepted") {
        handleFriendship(reciever);
      }
    });
  };

  const handleFriendship = (user) => {
    const createFriend = callable("requests-createFriend");
    const friendInfo = {
      reciever: user.data(),
      recieverUid: user.id,
      recieverListing: user.data().listing.id,
      sender: reqInfo,
      senderUid: id,
      senderListing: reqInfo.listingId,
    };
    createFriend(JSON.stringify(friendInfo));
  };
  return (
    <div className={`recieved-req-full ${reqInfo.premium && "premium"}`}>
      <i
        onClick={() => setOpen(false)}
        className="fas fa-times full-close-icon"
      ></i>
      <div className="full-pfp-container">
        {reqInfo.pfp ? (
          <img src={reqInfo.pfp} className="container-pfp"></img>
        ) : (
          <img
            src={`img/pfps/${
              reqInfo.gender === "male" ? "radek-pfp.png" : "radka-pfp.png"
            }`}
            className="container-pfp"
          ></img>
        )}
      </div>
      <div className="full-name">
        {reqInfo.username}{" "}
        {reqInfo.premium && <i className="fas fa-circle-check"></i>}
      </div>
      <div className="full-description">
        {reqInfo.gender === "male"
          ? "Muž"
          : reqInfo.gender === "female"
          ? "Žena"
          : reqInfo.gender === "other"
          ? "Jiné"
          : ""}
        , {reqInfo.age}
      </div>
      <div className="full-message">{reqInfo.message}</div>
      <div className="full-actions">
        <button onClick={() => handleAction("rejected")} className="acc-btn">
          Odmítnout
        </button>
        <button onClick={() => handleAction("accepted")} className="main-btn">
          Přijmout
        </button>
      </div>
      <Link href={`/${reqInfo.type}/${reqInfo.listingId}`}>
        <a className="full-profile-link">Zobrazit inzerát...</a>
      </Link>
    </div>
  );
};

export default RecievedReqFull;
