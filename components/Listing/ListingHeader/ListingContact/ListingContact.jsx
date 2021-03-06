import React, { useEffect, useState } from "react";
//next
import { useRouter } from "next/router";
//Contexts
import { useAuth } from "../../../../contexts/AuthContext";
import { useSnackBar } from "../../../../contexts/SnackBarContext";
import { useListing } from "../../../../contexts/ListingContext";
import { useFunctions } from "../../../../contexts/FunctionsContext";

//COmponents
import InputDialog from "../../../InputDialog/InputDialog";
//MUI
import { CircularProgress, Backdrop } from "@mui/material";

const ListingContact = () => {
  const { currentUser, currentUserInfo } = useAuth();
  const { snackBar } = useSnackBar();
  const router = useRouter();
  const { callable } = useFunctions();
  const {
    listingInfo,
    listingContact,
    editListing,
    setReqDialogOpen,
    contactLoading,
  } = useListing();
  //State
  const [isFriend, setIsFriend] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (listingInfo && currentUser) {
      if (listingInfo.userInfo.uid === currentUser.uid) {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
      if (listingInfo.friends.includes(currentUser.uid)) {
        setIsFriend(true);
      } else {
        setIsFriend(false);
      }
      if (listingInfo.requests.includes(currentUser.uid)) {
        setIsRequested(true);
      } else {
        setIsRequested(false);
      }
      if (listingInfo.sentRequests.includes(currentUser.uid)) {
        setIsRequesting(true);
      } else {
        setIsRequesting(false);
      }
    }
  }, [listingInfo, currentUser]);

  const handleRequestClick = () => {
    if (currentUserInfo) {
      if (currentUserInfo.emailVerified) {
        setReqDialogOpen(true);
      } else {
        snackBar("Prosím, ověřte svůj e-mail.", "error");
      }
    }
  };
  return (
    <>
      {!contactLoading ? (
        <>
          {isFriend || isOwner ? (
            <div className="info-contact unlocked">
              <div className="contact-items">
                <div className="items-main">
                  <div className="items-item">
                    {listingContact.hidden != "phone" && (
                      <i className="fas fa-phone"></i>
                    )}
                    <p>
                      {listingContact.hidden != "phone" &&
                        [
                          listingContact.phone.slice(0, 4),
                          " ",
                          listingContact.phone.slice(4, 7),
                          " ",
                          listingContact.phone.slice(7, 10),
                          " ",
                          listingContact.phone.slice(10),
                        ].join("")}
                    </p>
                  </div>
                  <div className="items-item">
                    {listingContact.hidden != "email" && (
                      <i className="fas fa-envelope"></i>
                    )}
                    <p>
                      {listingContact.hidden != "email" && listingContact.email}
                    </p>
                  </div>
                </div>
                <div className="items-socials">
                  <i
                    onClick={() =>
                      listingContact.fb
                        ? (window.location.href = listingContact.fb)
                        : ""
                    }
                    className={`fab fa-facebook-square socials-item ${
                      listingContact.fb && "active"
                    }`}
                  ></i>
                  <i
                    onClick={() =>
                      listingContact.ig
                        ? (window.location.href = listingContact.ig)
                        : ""
                    }
                    className={`fab fa-instagram socials-item ${
                      listingContact.ig && "active"
                    }`}
                  ></i>
                </div>
              </div>
              {isFriend && (
                <div className="contact-state">
                  <i className="state-icon fas fa-users"></i>
                  <p className="state-description">
                    Vy a {listingInfo.userInfo.username} jste ve spojení.
                  </p>
                </div>
              )}
              {isOwner && !editListing && (
                <button
                  onClick={() => router.push("/requests/recieved")}
                  className="main-btn contact-button"
                >
                  Zobrazit žádosti
                </button>
              )}
            </div>
          ) : (
            <div className="info-contact">
              {(!currentUser || !isRequested) && (
                <div className="contact-icons">
                  <i className="fas fa-phone"></i>
                  <i className="fas fa-envelope"></i>
                  <i className="fab fa-facebook-square"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              )}
              <div className="contact-state">
                <i
                  className={`state-icon fas fa-${
                    isRequested ? "hourglass-half" : "lock"
                  }`}
                ></i>
                <p className="state-description">
                  {!currentUser
                    ? "Pošlete uživateli žádost o přístup ke kontaktním údajům."
                    : isRequested
                    ? "Žádost čeká na vyřízení."
                    : isRequesting
                    ? "Uživatel vám zaslal žádost."
                    : currentUser
                    ? "Pošlete uživateli žádost o přístup ke kontaktním údajům."
                    : ""}
                </p>
              </div>
              {(!currentUser || !isRequested) && (
                <>
                  {!currentUser ? (
                    <button
                      className="main-btn contact-button"
                      onClick={() => router.push("/login")}
                    >
                      Poslat žádost
                    </button>
                  ) : isRequesting ? (
                    <button
                      className="contact-button main-btn"
                      onClick={() => router.push("/requests/recieved")}
                    >
                      Zobrazit žádosti
                    </button>
                  ) : currentUser ? (
                    <button
                      className="main-btn contact-button"
                      onClick={handleRequestClick}
                    >
                      Poslat žádost
                    </button>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="listing-contact-loading">
          <CircularProgress sx={{ padding: "10px" }} />
        </div>
      )}
      {editListing && (
        <div className="listing-contact-notice">
          <p>
            <i className="fas fa-info-circle"></i> Pro úpravu kontaktních údajů
            navštivte sekci Účet a soukromí.
          </p>
        </div>
      )}
    </>
  );
};

export default ListingContact;
