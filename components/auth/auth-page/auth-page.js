import { useContext, useState, forwardRef } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import FormGroup from "@mui/material/FormGroup";
import { AuthContext } from "../../../context/AuthContext";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import {
  AuthBlock,
  AuthButton,
  AuthLink,
  FormCheck,
  Wrapper,
} from "./auth-page.e";
import { FormElements } from "../..";

import Checkbox from "@mui/material/Checkbox";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="panel">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Schema = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});
const SchemaLogIn = Yup.object().shape({
  email: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

const Alert = forwardRef(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AuthPage = () => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState(0);
  const {
    signIn,
    registration,
    setOpen,
    open,
    alert,
    setAlert,
    errorMsg,
    setErrorMsg,
  } = useContext(AuthContext);

  const handleClose = (
    event,
    reason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setAlert(false);
    setErrorMsg(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Wrapper>
      <Stack spacing={2} sx={{ width: "100%" }}>
        {/* <Button variant="outlined" onClick={handleClick}>
          Open success snackbar
        </Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errorMsg && errorMsg.type == "login" && errorMsg.message}
            {errorMsg &&
              errorMsg.type == "registration" &&
              Object.keys(errorMsg.message).map(function (key) {
                return <div key={key}>{errorMsg.message[key]}</div>;
              })}
          </Alert>
        </Snackbar>
      </Stack>
      <AuthBlock>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabs"
          >
            <Tab label="Регистрация" {...a11yProps(0)} className="tab-item" />
            <Tab label="Вход" {...a11yProps(1)} className="tab-item" />
          </Tabs>
        </Box>
        {/* -------Registration------- */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
          }}
          onSubmit={async (values) => {
            await registration(values);
          }}
          validationSchema={Schema}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit} action="/api/login" method="POST">
              <TabPanel value={value} index={0}>
                <FormElements
                  inputType="input-text"
                  name="name"
                  placeholder="Имя"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormElements
                  inputType="input-text"
                  name="lastName"
                  placeholder="Фамилия"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.lastName}
                />
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="Номер или Электронная почта"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <FormElements
                  inputType="input-text"
                  name="confirmPassword"
                  placeholder="Подтвердить пороль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                />

                <FormCheck>
                  <FormGroup>
                    <Checkbox {...label} onClick={() => setCheck(!check)} />
                  </FormGroup>
                  <span className="label">
                    Я согласен с
                    <Link href="/politics"  passHref>
                      <a> 
                        пользовательским соглашением</a>
                    </Link>
                  </span>
                </FormCheck>

                <AuthButton type="submit" disabled={!check}>
                  Регистрация
                </AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>

        {/* -------Login------- */}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await signIn(values);
            // console.log("login = > ", values);
          }}
          validationSchema={SchemaLogIn}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <TabPanel value={value} index={1}>
                <FormElements
                  inputType="input-text"
                  name="email"
                  placeholder="Номер или Электронная почта"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormElements
                  inputType="input-text"
                  name="password"
                  placeholder="Пароль"
                  type="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={errors.password}
                />
                <AuthLink>
                  <Link href="/auth" passHref>
                    <a>Забыли пароль?</a>
                  </Link>
                </AuthLink>

                <AuthButton type="submit">Вход</AuthButton>
              </TabPanel>
            </form>
          )}
        </Formik>
      </AuthBlock>
    </Wrapper>
  );
};

export default AuthPage;
