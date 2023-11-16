import Navbar from '@/components/shared/Navbar';
import '@/styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {Component.name !== 'Login' && <Navbar />}
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default App;
