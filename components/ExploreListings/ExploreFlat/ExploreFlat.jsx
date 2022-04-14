import React, { useEffect, useState } from "react";
//next
import Link from "next/link";
//Contexts
import { useAuth } from "../../../contexts/AuthContext";

const ExploreFlat = ({
  name,
  bio,
  price,
  size,
  startTime,
  stayTime,
  mainImg,
  premium,
  lastActive,
  id,
}) => {
  const { currentUser, userLoaded } = useAuth();
  const timePassed = (date) => {
    if (!date) {
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
  return (
    <Link href={`/flat/${id}`}>
      <div className={`explore-flat ${premium && "premium"}`}>
        <div className="listing-pfp-container">
          {mainImg ? (
            <img src={mainImg} className="listing-pfp" />
          ) : (
            <img src="/img/listing/default-byt.jpg" className="listing-pfp" />
          )}
        </div>
        <div className="listing-content">
          {currentUser && (
            <div className="content-last-active content-last-active-m">
              Naposledy aktivní: {timePassed(lastActive?.toDate())}
            </div>
          )}
          <div className="content-header">
            <span>{name}</span>{" "}
            {premium && <i className="fas fa-check-circle"></i>}
          </div>
          <div className="content-bio">
            <p>{bio.substr(0, 75)}...</p>
          </div>
          {currentUser && (
            <div className="content-last-active">
              Naposledy aktivní: {timePassed(lastActive?.toDate())}
            </div>
          )}
          {!currentUser && userLoaded && (
            <div className="content-more">Zobrazit více...</div>
          )}
          <div className="content-info">
            <div className="info-row">
              <div className="info-budget row-col">
                <span>Cena: </span>
                {price >= 10000
                  ? price.toString().substr(0, 2) +
                    " " +
                    price.toString().substr(2, 6)
                  : price.toString().substr(0, 1) +
                    " " +
                    price.toString().substr(1, 5)}
                ,-
              </div>
              <div className="info-locations row-col">
                <span>Smlouva:</span> {stayTime}
              </div>
            </div>
            <div className="info-row">
              <div className="info-gender row-col">
                <span>Plocha:</span> {size ? size : ""}m<sup>2</sup>
              </div>
              <div className="info-available row-col">
                <span>Dostupnost:</span> {startTime.substr(0, 5)}.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreFlat;
