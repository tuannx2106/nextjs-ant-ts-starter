import React from 'react';
import type { AppProps /* , AppContext */ } from 'next/app'
import './globals.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
