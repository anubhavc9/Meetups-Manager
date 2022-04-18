import '../styles/globals.css';
// add bootstrap css 
import './../node_modules/bootstrap/dist/css/bootstrap.css'

import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
