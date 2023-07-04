import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';

function myApp({Component, pageProps}) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true.toString()} />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500;1,600;1,700;1,800&family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
      <GlobalStyle />
      <Component {...pageProps}/>
    </>
  )
}

export default myApp;
