import React from "react";
import Image from "next/dist/client/image";

const NoResults = ({ text }) => {
  return (
    <div className="no-results">
      <img src="/img/bad-results/notfound.png" width={184} height={208} />
      <p>{text ? text : "Nebyly nalezené žádné výsledky."}</p>
    </div>
  );
};

export default NoResults;
