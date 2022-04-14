import React, { useEffect, useState } from "react";
//next
import Link from "next/link";
//Contexts
import { useAuth } from "../../../contexts/AuthContext";

const ExploreFlatmate = ({
  name,
  age,
  gender,
  location,
  money,
  available,
  bio,
  pfp,
  premium,
  lastActive,
  id,
}) => {
  const { currentUser, userLoaded } = useAuth();
  const timePassed = (date) => {
    console.log(lastActive);
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
    <Link href={`/flatmate/${id}`}>
      <div className={`explore-flatmate ${premium && "premium"}`}>
        <div className="listing-pfp-container">
          {gender ? (
            <>
              {pfp ? (
                <img className="listing-pfp" src={pfp} alt="" />
              ) : (
                <img
                  src={
                    gender === "male"
                      ? "/img/pfps/radek-pfp.png"
                      : "/img/pfps/radka-pfp.png"
                  }
                  className="listing-pfp"
                  alt=""
                />
              )}
            </>
          ) : (
            <div className="listing-pfp"></div>
          )}
        </div>
        <div className="listing-content">
          {currentUser && (
            <div className="content-last-active content-last-active-m">
              Naposledy aktivní: {timePassed(lastActive?.toDate())}
            </div>
          )}
          <div className="content-header">
            <span>{name}</span>, {age}{" "}
            {premium && <i className="fas fa-check-circle"></i>}
          </div>
          <div className="content-bio">
            <p>
              {bio.substr(0, 70)}
              {bio.length > 70 && "..."}
            </p>
          </div>

          {currentUser && (
            <div className="content-last-active">
              Naposledy aktivní: ${timePassed(lastActive?.toDate())}
            </div>
          )}
          {!currentUser && userLoaded && (
            <div className="content-more">Zobrazit více...</div>
          )}

          <div className="content-info">
            <div className="info-row">
              <div className="info-budget row-col">
                <span>Rozpočet: </span>
                {money >= 10000
                  ? money.toString().substr(0, 2) +
                    " " +
                    money.toString().substr(2, 6)
                  : money.toString().substr(0, 1) +
                    " " +
                    money.toString().substr(1, 5)}
                ,-
              </div>
              <div className="info-locations row-col">
                <span>Lokace:</span> {location.substr(0, 7)}
                {location.length > 7 && "..."}
              </div>
            </div>
            <div className="info-row">
              <div className="info-gender row-col">
                <span>Pohlaví:</span>{" "}
                {gender == "female"
                  ? "Žena"
                  : gender == "male"
                  ? "Muž"
                  : "Jiné"}
              </div>
              <div className="info-available row-col">
                <span>Dostupnost:</span> {available}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExploreFlatmate;
