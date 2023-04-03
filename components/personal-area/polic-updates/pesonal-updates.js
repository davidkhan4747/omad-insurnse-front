import {useEffect, useContext, useState, forwardRef } from "react";
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
} from "../personal-buy/pesonal-buy.e";
import { useRouter } from "next/router";
import { UptadeSelect } from "./pesonal-.updates.e";
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Router from "next/router";
import { api } from "../../../services/api";
import { AuthContext } from "../../../context/AuthContext";

const Alert = forwardRef(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PersonalUdates  = () => {
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
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [polis, setPolis] = useState();
  const [insurance, setInsurance] = useState();
  const handleChange = (event, field) => {
    setPolis((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const router = useRouter();

  useEffect(() => {
    api.get("cabinet/insurance/all").then((res) => {
      setInsurance(res.data.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("cabinet/polis/post", polis)
      .then((res) => {
        console.log("object ==>", res);
        setOpen(true);
        setPolis({});
        Router.push("/personal-area/polic-updates");
      })
      .catch((err) => {
        // console.log("object ==>", err.response.data);
        setAlert(true);
        // console.log(err.response.data);
        setErrorMsg({
          type: "polis",
          message: err.response.data,
        });
      });
  };
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
            errorMsg.type == "polis" &&
            // @ts-ignore
            errorMsg.message.map((item, idx) => {
              <div key={idx}>{item}</div>;
            })}
        </Alert>
      </Snackbar>
      <BodyForm>
        <FormBody>
          <FormHeading>{t("common:Insurance_renewal_request")}</FormHeading>
          <PageForm onSubmit={handleSubmit}>
            <UptadeSelect
              onChange={(e) => handleChange(e, "insurance_id")}
              name="insurance_id"
              id="insurance_id"
              value={polis?.insurance_id}
            >
              <option selected>Страховой продукт</option>
              {insurance?.map((item, idx) => (
                <option value={item?.id} key={idx}>
                  {item?.title}
                </option>
              ))}
            </UptadeSelect>
            <p>
              <UserInfoInput
                placeholder="Иванов Иван Иванович"
                label={t("common:name_data")}
                onChange={(e) => handleChange(e, "full_name")}
                name="full_name"
                value={insurance?.full_name}
                required
                id="full_name"
              />
            </p>
            <UserNumber
              id="polis_seriya_number"
              label={t("common:Insurance_policy_series_and_umber")}
              onChange={(e) => handleChange(e, "polis_seriya_number")}
              name="polis_seriya_number"
              value={insurance?.polis_seriya_number}
              required
            />
            {/* <FormMessage placeholder="Сообщение"/> */}
            <p>
              <UserNumber
                className="phonenumber1"
                placeholder="998 90 989-89-89"
                id="demo-helper-text-misaligned"
                label={t("common:Phone_number")}
                onChange={(e) => handleChange(e, "phonenumber1")}
                name="phonenumber1"
                required
                value={insurance?.phonenumber1}
              />
              <UserEmail
                placeholder="email1"
                id="demo-helper-text-misaligned"
                label="Email"
                onChange={(e) => handleChange(e, "email1")}
                name="email1"
                required
                value={insurance?.email1}
              />
            </p>
            <FormMessage
              placeholder={t("common:Message")}
              onChange={(e) => handleChange(e, "text")}
              name="text"
              value={insurance?.text}
            />
            <ButtonBlock>
              <CardButton type="submit">{t("common:send")}</CardButton>
            </ButtonBlock>
          </PageForm>
        </FormBody>
      </BodyForm>
    </>
  );
};

export default PersonalUdates;
