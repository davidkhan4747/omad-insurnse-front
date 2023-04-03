import "../assets/fonts/Roboto/stylesheet.css";
import "../assets/fonts/Montserrat/stylesheet.css";

import "swiper/css/bundle";

import "../styles/_normalize.scss";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { AuthProvider } from "../context/AuthContext";
import { appWithTranslation } from 'next-i18next';



function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
       <NextNProgress color="#f0803d" />
        <Component {...pageProps} />
    </AuthProvider>

  );
}

export default appWithTranslation(MyApp)
