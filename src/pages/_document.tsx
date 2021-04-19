import {ReactElement} from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt" className="bg-cyan">
        <Head>
          <meta httpEquiv="Content-Language" content="pt-br" />
          <meta name="robots" content="all" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
