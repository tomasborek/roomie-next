import React from "react";
import BackdropTimes from "../BackdropTimes/BackdropTimes";
import Backdrop from "@mui/material/Backdrop";

const CustomDialog = ({ image, heading, open, setOpen, children }) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={(e) => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="custom-dialog">
        <div className="dialog-heading">
          <h2>{heading}</h2>
          <i onClick={() => setOpen(false)} className="fas fa-times"></i>
        </div>
        {image && (
          <div className="dialog-image">
            <img src={image} alt="" />
          </div>
        )}
        {children}
      </div>
    </Backdrop>
  );
};

export default CustomDialog;
