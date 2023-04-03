import Head from "next/head";
import { Footer } from "..";
import ToTop from "../../ToTop";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { forwardRef, useContext } from "react";
import { Snackbar } from "@mui/material";
const Layout  = ({ 
  children, 
  title,
  meta_title,
  meta_description,
  meta_keywords,
  meta_image
  }) => {

    const Alert = forwardRef(function Alert(
      props,
      ref
    ) {
      return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
    });
   
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="meta_title" content={meta_title?meta_title:'OMAD SUG`URTA'} />
        <meta name="meta_description" content={meta_description?meta_description:'OMAD SUG`URTA'} />
        <meta name="meta_keywords" content={meta_keywords?meta_keywords:'OMAD SUG`URTA'} />
        <meta property="og:image" content={meta_image?meta_image:''}></meta>
        <meta property="og:title" content={meta_title?meta_title:'OMAD SUG`URTA'} key="title" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ToTop/>

      <Snackbar open={true} autoHideDuration={6000}>
          <Alert
            severity="error"
            sx={{ width: "100%" }}
          >
            Сайт находится в разработке
          </Alert>
          </Snackbar>
      <main>{children}</main>

      <Footer/>
    </>
  );
};

export default Layout;
