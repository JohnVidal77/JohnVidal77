import {FC} from 'react';
import {AppProps} from 'next/app';

import 'tailwindcss/tailwind.css';

const MyApp: FC<AppProps> = ({Component, pageProps}: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
