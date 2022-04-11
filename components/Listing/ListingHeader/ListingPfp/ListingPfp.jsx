import React, { useEffect, useState } from "react";

//COntexts
import { useListing } from "../../../../contexts/ListingContext";

const ListingPfp = () => {
  const {
    type,
    listingInfo,
    editListing,
    setGalleryInput,
    addedPfp,
    pfp,
    listingImgs,
    addedListingImgs,
    handleImgDelete,
  } = useListing();
  const [lastActive, setLastActive] = useState(null);
  const [lastActiveSeverity, setLastActiveSeverity] = useState("gray");

  useEffect(() => {
    if (listingInfo) {
      const t = new Date(listingInfo.userInfo.lastActive?.seconds * 1000);
      setLastActive(timePassed(t));
      //Check if t is less than a week ago
      if (t.getTime() > Date.now() - 604800000) {
        setLastActiveSeverity("green");
      } else if (t.getTime() > Date.now() - 1209600000) {
        //Check if t is less than a two months ago
        setLastActiveSeverity("orange");
      } else if (t.getTime() < Date.now() - 1209600000) {
        //Check if t is more than a month ago
        setLastActiveSeverity("red");
      }
    }
  }, [listingInfo]);

  const timePassed = (date) => {
    if (!date || !date.getTime()) {
      return "Neurčito";
    }
    const currentDate = new Date();
    const timePassed = currentDate - date;
    const days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timePassed % (1000 * 60)) / 1000);
    if (days > 0) {
      return `${days} ${
        days === 1 ? "den" : days > 1 && days < 5 ? "dny" : "dní"
      }`;
    } else if (hours > 0) {
      return `${hours} ${
        hours === 1 ? "hodina" : hours > 1 && hours < 5 ? "hodiny" : "hodin"
      }`;
    } else if (minutes > 0) {
      return `${minutes} ${
        minutes === 1
          ? "minuta"
          : minutes > 1 && minutes < 5
          ? "minuty"
          : "minut"
      }`;
    } else {
      return `${seconds} ${
        seconds === 1
          ? "sekunda"
          : seconds > 1 && seconds < 5
          ? "sekundy"
          : "sekund"
      }`;
    }
  };

  if (type === "flatmate") {
    return (
      <div className="header-pfp-container">
        {editListing && (
          <div className={`container-edit-icon ${editListing && "active"}`}>
            <i
              onClick={() => {
                setGalleryInput({
                  open: true,
                  index: -1,
                });
              }}
              className="fas fa-camera"
            ></i>
            {(addedPfp || pfp) && (
              <i
                onClick={() => handleImgDelete("pfp")}
                className="fas fa-trash"
              ></i>
            )}
          </div>
        )}

        <div className="pfp-container-edit"></div>
        {listingInfo ? (
          <>
            {addedPfp ? (
              <img className="header-pfp" src={URL.createObjectURL(addedPfp)} />
            ) : (
              <>
                {pfp ? (
                  <img className="header-pfp" src={pfp} alt="" />
                ) : (
                  <img
                    src={
                      listingInfo.userInfo.gender === "male"
                        ? "/img/pfps/radek-pfp.png"
                        : "/img/pfps/radka-pfp.png"
                    }
                    className="header-pfp"
                  ></img>
                )}
              </>
            )}
          </>
        ) : (
          <div className="header-pfp"></div>
        )}
        <div className={`container-activity-status ${lastActiveSeverity}`}>
          {lastActive ? lastActive : "..."}
        </div>
      </div>
    );
  }
  if (type === "flat") {
    return (
      <div className="header-pfp-container">
        {editListing && (
          <div className={`container-edit-icon`}>
            <i
              onClick={() => {
                setGalleryInput({
                  open: true,
                  index: 0,
                });
              }}
              className="fas fa-camera"
            ></i>
            {(addedListingImgs[0] || listingImgs[0]) && (
              <i
                onClick={() => handleImgDelete("main")}
                className="fas fa-trash"
              ></i>
            )}
          </div>
        )}

        {listingInfo ? (
          <>
            {addedListingImgs && addedListingImgs[0] ? (
              <img
                src={URL.createObjectURL(addedListingImgs[0])}
                className="header-pfp"
              />
            ) : (
              <>
                {listingImgs && listingImgs[0] ? (
                  <img className="header-pfp" src={listingImgs[0]} alt="" />
                ) : (
                  <img
                    src={"/img/listing/default-byt.jpg"}
                    className="header-pfp"
                  ></img>
                )}
              </>
            )}
          </>
        ) : (
          <div className="header-pfp"></div>
        )}
        <div className={`container-activity-status ${lastActiveSeverity}`}>
          {listingInfo ? lastActive : "..."}
        </div>
      </div>
    );
  }
};

export default ListingPfp;
