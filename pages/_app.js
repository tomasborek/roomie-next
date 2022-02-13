import React, {useEffect, useState} from "react";
//Layouts
import Layout from '../components/Layout/Layout'
//next
import Head from 'next/dist/shared/lib/head';
//Nprogress
import NProgress from 'nprogress';
// import "nprogress/nprogress.css";
import Router from 'next/router';
import CookieBot from 'react-cookiebot';

import {analytics} from "../Firebase";

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
//Componentns

//Context
import { SnackBarProvider } from '../contexts/SnackBarContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import FunctionsProvider from '../contexts/FunctionsContext';
import { StorageProvider } from '../contexts/StorageContext';
import {ExploreDialogProvider} from '../contexts/ExploreDialogContext';
import { ExploreProvider } from '../contexts/ExploreContext';
import { AuthProvider } from '../contexts/AuthContext';
import { DbProvider } from '../contexts/DbContext';
//Styles
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  const [cookie, setCookie] = useState(false);
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics();
    }
  }, []);

  useEffect(() => {
    setCookie(true);
  }, []);

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <link rel="icon" type="image/png" href="/img/logos/logo-small.png"/>
      <meta name="description" content="Portál Roomie se zaměřuje na zprostředkování moderní platformy pro hledání spolubydlících či bytů ke spolubydlení. Hledejte spolubydlení a spolubydlící jednoduše a podle vašich představ. Jsme sociální sítí pro spolubydlení."></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9969104196645961"
     crossOrigin="anonymous"></script>
    </Head>
    {cookie && <CookieBot domainGroupId={"3d818e39-653d-4a0d-b674-7e1099e97f24"}/>}
    <DbProvider>
      <AuthProvider>
        <LoadingProvider>
            <SnackBarProvider>
                    <FunctionsProvider>
                      <StorageProvider>
                        <ExploreDialogProvider>
                          <ExploreProvider>
                              <Layout>
                                    <Component {...pageProps} />
                              </Layout>
                            </ExploreProvider>
                          </ExploreDialogProvider>
                        </StorageProvider>
                    </FunctionsProvider>
              </SnackBarProvider>
        </LoadingProvider>
      </AuthProvider>
    </DbProvider>

    </>
  )
}

export default MyApp
