import React, { useEffect, useState } from "react";
//Layouts
import Layout from "../components/Layout/Layout";
//next
import Head from "next/head";
import Script from "next/script";
//Nprogress
import NProgress from "nprogress";
// import "nprogress/nprogress.css";
import Router from "next/router";
// import CookieBot from "react-cookiebot";

import { analytics } from "../Firebase";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
//Componentns

//Context
import { SnackBarProvider } from "../contexts/SnackBarContext";
import { LoadingProvider } from "../contexts/LoadingContext";
import FunctionsProvider from "../contexts/FunctionsContext";
import { StorageProvider } from "../contexts/StorageContext";
import { ExploreDialogProvider } from "../contexts/ExploreDialogContext";
import { ExploreProvider } from "../contexts/ExploreContext";
import { AuthProvider } from "../contexts/AuthContext";
import { DbProvider } from "../contexts/DbContext";
//Styles
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="3KNnGjbrFKY2McWJDSNTsaSfH5hTx6wJfTjhxCWs8og"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" type="image/png" href="/img/logos/logo-small.png" />
        <meta property="og:site_name" content="Roomie"></meta>
        <meta property="og:image" content="/img/poster/poster-mobile.png" />
        <meta
          property="twitter:image"
          content="/img/poster/poster-mobile.png"
        />

        {/* Primary meta tags */}
        <meta
          name="description"
          content="Port??l Roomie se zam????uje na zprost??edkov??n?? modern?? platformy pro hled??n?? spolubydl??c??ch ??i byt?? ke spolubydlen??. Hledejte spolubydlen?? a spolubydl??c?? jednodu??e a podle va??ich p??edstav. Jsme soci??ln?? s??t?? pro spolubydlen??."
        ></meta>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://roomie.cz/" />
        <meta
          property="og:description"
          content="Port??l Roomie se zam????uje na zprost??edkov??n?? modern?? platformy pro hled??n?? spolubydl??c??ch ??i byt?? ke spolubydlen??. Hledejte spolubydlen?? a spolubydl??c?? jednodu??e a podle va??ich p??edstav. Jsme soci??ln?? s??t?? pro spolubydlen??."
        />
        <meta
          property="og:image"
          content="https://roomie.cz/img/poster/poster-mobile.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://roomie.cz/" />
        <meta
          property="twitter:description"
          content="Port??l Roomie se zam????uje na zprost??edkov??n?? modern?? platformy pro hled??n?? spolubydl??c??ch ??i byt?? ke spolubydlen??. Hledejte spolubydlen?? a spolubydl??c?? jednodu??e a podle va??ich p??edstav. Jsme soci??ln?? s??t?? pro spolubydlen??."
        />
        <meta
          property="twitter:image"
          content="https://roomie.cz/img/poster/poster-mobile.png"
        ></meta>
      </Head>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="3d818e39-653d-4a0d-b674-7e1099e97f24"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <DbProvider>
        <FunctionsProvider>
          <AuthProvider>
            <LoadingProvider>
              <SnackBarProvider>
                <StorageProvider>
                  <ExploreDialogProvider>
                    <ExploreProvider>
                      <Layout>
                        <Component {...pageProps} />
                      </Layout>
                    </ExploreProvider>
                  </ExploreDialogProvider>
                </StorageProvider>
              </SnackBarProvider>
            </LoadingProvider>
          </AuthProvider>
        </FunctionsProvider>
      </DbProvider>
    </>
  );
}

export default MyApp;
