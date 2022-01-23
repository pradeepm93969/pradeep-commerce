import '../styles/globals.css';

import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  useEffect(() => {
    document.dir = locale === 'ar' ? 'rtl' : 'ltr';
  });

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
