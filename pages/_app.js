//Layouts
import Layout from '../components/Layout/Layout'
//next
import Head from 'next/dist/shared/lib/head';
//Nprogress
import NProgress from 'nprogress';
// import "nprogress/nprogress.css";
import Router from 'next/router';

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
//Styles
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <meta name="description" content="Portál Roomie se zaměřuje na zprostředkování moderní platformy pro hledání spolubydlících či bytů ke spolubydlení. Hledejte spolubydlení a spolubydlící jednoduše a podle vašich představ. Jsme sociální sítí pro spolubydlení."></meta>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9969104196645961"
     crossOrigin="anonymous"></script>
    </Head>
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
    </>
  )
}

export default MyApp
