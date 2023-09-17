import useInitialState from '@hooks/useInitialState';
import AppContext from '@context/AppContext';

import Header from '@components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
