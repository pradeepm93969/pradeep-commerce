import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css';

import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { ToastContainer } from 'react-toastify'; //styles of nprogress

//Binding events.
NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  useEffect(() => {
    document.dir = locale === 'ar' ? 'rtl' : 'ltr';
  });

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer limit={4} />
    </>
  );
}

export default appWithTranslation(MyApp);
