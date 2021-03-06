import React, { useEffect, useState } from "react";
//Next
import { useRouter } from "next/router";
import Link from "next/dist/client/link";
//Contexts
import { AuthProvider } from "../../contexts/AuthContext";
import { DbProvider } from "../../contexts/DbContext";
import { LoadingProvider } from "../../contexts/LoadingContext";
import { NavOverlayProvider } from "../../contexts/NavOverlayContext";
import { RegisterProvider } from "../../contexts/RegisterContext";
import { NotificationsProvider } from "../../contexts/NotificationsContext";
//use Contexts
import { useSnackBar } from "../../contexts/SnackBarContext";
import { useLoading } from "../../contexts/LoadingContext";
import { useExploreDialog } from "../../contexts/ExploreDialogContext";
import { useAuth } from "../../contexts/AuthContext";

//Components
import NavOverlay from "../NavOverlay/NavOverlay";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";
import CustomDialog from "../CustomDialog/CustomDialog";
import UnderConstruction from "../UnderConstruction/UnderConstruction";
//MUI
import { Backdrop } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";

const Layout = ({ children }) => {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [underCon, setUnderCon] = useState(false);
  const { isSnackBarOpen, snackBarSeverity, snackBarMsg } = useSnackBar();
  const [loading, setLoading] = useLoading();
  const [exploreDialog, setExploreDialog] = useExploreDialog();
  useEffect(() => {
    if (currentUser || router.asPath === "/login/") {
      setUnderCon(false);
    }
  }, [currentUser]);

  return (
    <>
      {!underCon ? (
        <LoadingProvider>
          <NotificationsProvider>
            <NavOverlayProvider>
              <RegisterProvider>
                <NavOverlay></NavOverlay>
                <LoadingOverlay />
                <Snackbar open={isSnackBarOpen}>
                  <Alert
                    sx={{ width: "100%" }}
                    severity={snackBarSeverity ? snackBarSeverity : "error"}
                  >
                    {snackBarMsg}
                  </Alert>
                </Snackbar>

                <CustomDialog
                  image={"/img/dialogs/welcome-dialog.png"}
                  heading={"Co v??m roomie m????e nab??dnout?"}
                  open={exploreDialog}
                  setOpen={setExploreDialog}
                >
                  <div className="dialog-body">
                    Zde si m????ete prohl??dnout existuj??c?? inzer??ty, pokud v??ak
                    chcete u??ivatele kontaktovat a zalo??it si vlastn?? inzer??t,
                    je nutn?? se <Link href="/register">zaregistrovat</Link> nebo{" "}
                    <Link href="/login">p??ihl??sit.</Link>
                  </div>
                  <div className="dialog-action">
                    <button
                      onClick={() => setExploreDialog(false)}
                      className="main-btn"
                    >
                      Jen se d??v??m
                    </button>
                    <button
                      onClick={() => {
                        setExploreDialog(false);
                        router.push("/register");
                      }}
                      className="acc-btn"
                    >
                      Registrovat
                    </button>
                  </div>
                </CustomDialog>
                {children}
              </RegisterProvider>
            </NavOverlayProvider>
          </NotificationsProvider>
        </LoadingProvider>
      ) : (
        <UnderConstruction />
      )}
    </>
  );
};

export default Layout;
