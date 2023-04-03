import {  useState, useContext, forwardRef } from "react";
import NextLink from "next/link";
 import Router from "next/router";
import {
  BodyForm,
  FormBody,
  FormHeading,
  PageForm,
  UserInfoInput,
  UserNumber,
  UserEmail,
  ButtonAdd,
  FormMessage,
  ButtonBlock,
} from "./pesonal-buy.e";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { FormControl, Input, InputLabel, TextField } from "@mui/material";
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { AuthContext } from "../../../context/AuthContext";
import { api } from "../../../services/api";
// const UserInfoInput = styled(TextField)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });

const Alert = forwardRef(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const BuyPolis = () => {
  const { t } = useTranslation();
  const [add, isAdd] = useState("");
  const [addButt, setAddBut] = useState("yes");
  const [contact, setContact] = useState({});
  const AddHand = () => {
    isAdd("addet");
    setAddBut("");
  };
  const RemoveBtn = () => {
    isAdd("");
    setAddBut("yes");
  };
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
  //   const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await api
      .post("/cabinet/contact-us", contact)
      .then((res) => {
        console.log("object ==>", res);
        setOpen(true);
        setContact({});
        Router.push("/personal-area/buy");
      })
      .catch((err) => {
        console.log("object ==>", err.response.data);
        setAlert(true);
        setErrorMsg({
          type: "contact",
          message: err.response.data,
        });
        console.log(errorMsg);
      });
  };
  const handleChange = (event, field) => {
    setContact((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };
  //@ts-ignore
  const [message, setMessage] = useState(t("common:Message"));
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
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>

      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {/* @ts-ignore */}
          {/* {errorMsg && errorMsg.type == "polis" && errorMsg.message} */}

          {errorMsg &&
            errorMsg.type == "contact" &&
            // @ts-ignore
            errorMsg.message.map((item, idx) => {
              <div key={idx}>{item}</div>;
            })}
        </Alert>
      </Snackbar>
      <BodyForm>
        <FormBody>
          <FormHeading>{t("common:contact_us")}</FormHeading>
          <FormControl>
            <PageForm onClick={handleSubmit}>
              <UserInfoInput
                id="demo-helper-text-misaligned"
                placeholder="Иванов Иван Иванович"
                label={t("common:name_data")}
                onChange={(e) => handleChange(e, "full_name")}
                name="full_name"
                value={contact?.full_name}
                required
              />
              <br />
              <UserNumber
                className="myInput"
                placeholder="998 90 989-89-89"
                id="demo-helper-text-misaligned"
                label={t("common:Phone_number")}
                onChange={(e) => handleChange(e, "phonenumber1")}
                name="phonenumber1"
                value={contact?.phonenumber1}
                required
              />
              <UserEmail
                className="myInput"
                placeholder="status585@mail?.ru"
                id="demo-helper-text-misaligned"
                label="Email"
                onChange={(e) => handleChange(e, "email1")}
                name="email1"
                value={contact?.email1}
                required
              />
              {add == "addet" ? (
                <>
                  <UserNumber
                    className="myInput"
                    id="demo-helper-text-misaligned"
                    label={t("common:Phone_number")}
                    onChange={(e) => handleChange(e, "phonenumber2")}
                    name="phonenumber2"
                    value={contact?.phonenumber2}
                  />
                  <UserEmail
                    className="myInput"
                    // helperText="Please enter your email"
                    id="demo-helper-text-misaligned"
                    label="Email"
                    onChange={(e) => handleChange(e, "email2")}
                    name="email2"
                    value={contact?.email2}
                  />
                </>
              ) : (
                ""
              )}
              <div>
                {addButt == "yes" ? (
                  <ButtonAdd onClick={AddHand}> + {t("common:Add")}</ButtonAdd>
                ) : (
                  <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>
                )}
              </div>
              {/* @ts-ignore */}
              <FormMessage
                onChange={(e) => handleChange(e, "text")}
                name="text"
                value={contact?.text}
                // placeholder={message}
              />
              <ButtonBlock>
                <CardButton type="submit">{t("common:send")}</CardButton>
              </ButtonBlock>
            </PageForm>
          </FormControl>
        </FormBody>
      </BodyForm>
    </>
  );
};

export default BuyPolis;
