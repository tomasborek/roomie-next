//Layouts
import Layout from '../components/Layout/Layout'
//next
import Head from 'next/dist/shared/lib/head';
//Componentns

//Context
import { SnackBarProvider } from '../contexts/SnackBarContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import { NotificationsProvider } from '../contexts/NotificationsContext';
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
    </Head>
    <LoadingProvider>
        <SnackBarProvider>
            <NotificationsProvider>
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
            </NotificationsProvider>
          </SnackBarProvider>
    </LoadingProvider>
    </>
  )
}

export default MyApp
