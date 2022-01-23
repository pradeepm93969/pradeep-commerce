import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <link rel="icon" href="/img/favicons/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
            rel="stylesheet"
          />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/img/favicons/android-192x192.png"
          />
          <link
            href="/img/favicons/android-chrome-192x192.png"
            sizes="192x192"
            type="image/png"
          />
          <link
            href="/img/favicons/android-chrome-512x512.png"
            sizes="512x512"
            type="image/png"
          />
          <link
            href="/img/favicons/android-chrome-maskable-192x192.png"
            sizes="192x192"
            type="image/png"
            purpose="maskable"
          />
          <link
            href="/img/favicons/android-chrome-maskable-512x512.png"
            sizes="512x512"
            type="image/png"
            purpose="maskable"
          />

          <link rel="manifest" href="/img/favicons/manifest.json" />
          {/* PWA primary color */}
          <meta name="theme-color" content="#121B94" />
          {/*  Facebook */}
          <meta property="author" content="Pradeep" />
          <meta property="og:site_name" content="pradeep-commerce.com" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="pradeep-commerce.com" />
          <meta property="og:title" content="startup-title" />
          <meta property="og:description" content="startup-description" />
          <meta property="og:image" content="/images/favicon.ico" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          {/*  Twitter */}
          <meta property="twitter:site" content="pradeep-commerce.com" />
          <meta property="twitter:domain" content="pradeep-commerce.com" />
          <meta property="twitter:creator" content="Pradeep" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:image:src" content="/images/favicon.ico" />
          <meta name="twitter:site" content="pradeep-commerce.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
