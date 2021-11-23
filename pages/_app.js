//Layouts
import Layout from '../components/Layout/Layout'
//next
import Head from 'next/dist/shared/lib/head';
//Componentns

//Context
import { SnackBarProvider } from '../contexts/SnackBarContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import { ListingProvider } from '../contexts/ListingContext';
//Styles
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
    </Head>
    <LoadingProvider>
      <SnackBarProvider>
        <ListingProvider>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </ListingProvider>
      </SnackBarProvider>
    </LoadingProvider>
    </>
  )
}

export default MyApp
