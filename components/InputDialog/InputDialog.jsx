import React from "react";
import { Backdrop } from "@mui/material";
import BackdropTimes from "../BackdropTimes/BackdropTimes";

const InputDialog = ({
  heading,
  description,
  setMessage,
  message,
  open,
  setOpen,
  handleSend,
}) => {
  const textAreaChange = (e) => {
    let text = e.target.value;
    while (text.includes("\n\n\n")) {
      text = text.replace("\n\n\n", "\n\n");
    }
    setMessage(text);
  };
  return (
    <Backdrop
      onClick={() => setOpen(false)}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <div onClick={(e) => e.stopPropagation()} className="req-dialog">
        {/* <BackdropTimes onClose={() => setOpen(false)} /> */}
        <div className="dialog-heading">
          <h2>{heading}</h2>
          <i onClick={() => setOpen(false)} className="fas fa-times"></i>
        </div>
        <div className="dialog-description">{description}</div>
        <textarea
          maxLength={250}
          onChange={(e) => textAreaChange(e)}
          value={message}
          className="dialog-input"
          placeholder="Sem zadejte svou zprávu..."
        ></textarea>
        <button
          onClick={() => {
            handleSend();
            setOpen(false);
          }}
          className="main-btn"
        >
          Poslat <i className="fas fa-envelope"></i>
        </button>
      </div>
    </Backdrop>
  );
};

export default InputDialog;
