import Layout from '../components/Layout'

export default function app({ Component, pageProps }) {
  // return(
  // <Layout>
  //   <Component {...pageProps} />
  // </Layout>
  // );

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
