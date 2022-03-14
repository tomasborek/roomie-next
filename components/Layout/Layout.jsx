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
                  heading={"Co vám roomie může nabídnout?"}
                  open={exploreDialog}
                  setOpen={setExploreDialog}
                >
                  <div className="dialog-body">
                    Zde si můžete prohlédnout existující inzeráty, pokud však
                    chcete uživatele kontaktovat a založit si vlastní inzerát,
                    je nutné se <Link href="/register">zaregistrovat</Link> nebo{" "}
                    <Link href="/login">přihlásit.</Link>
                  </div>
                  <div className="dialog-action">
                    <button
                      onClick={() => setExploreDialog(false)}
                      className="main-btn"
                    >
                      Jen se dívám
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
