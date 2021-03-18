import {ReactElement} from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="pt" className="bg-cyan">
        <Head>
          <meta httpEquiv="Content-Language" content="pt-br" />
          <meta name="robots" content="all" />
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
