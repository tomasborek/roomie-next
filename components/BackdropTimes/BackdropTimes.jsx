import React from "react";

const BackdropTimes = ({ onClose }) => {
  return (
    <i
      onClick={onClose}
      className="fas fa-times backdrop-times"
      style={{
        position: "absolute",
        zIndex: "100",
        width: "50px",
        height: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        top: "16px",
        right: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "24px",
        cursor: "pointer",
      }}
    ></i>
  );
};

export default BackdropTimes;
