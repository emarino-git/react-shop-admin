import MainLayout from '@layout/mainLayout';
import Layout from '@layout/mainLayout'
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component  {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp;
