import {  useState, forwardRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  AuthBlock,
  AuthButton,
  AuthLink,
  FormCheck,
  Wrapper,
} from "../../auth/auth-page/auth-page.e";
import FormGroup from "@mui/material/FormGroup";

import {
  InviteFormBody,
  FormTitle,
  FormsContainer,
  UserName,
  UserPhone,
  UserEmail,
  OraganName,
  UserCity,
  MessageIn,
  CheckBlock,
  FormButton,
  FormSog,
} from "./Invite-cooperation-form.e";
import Link from "next/link";
import { api } from "../../../services/api";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = forwardRef(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InviteCooperationForm = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [check, setCheck] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (event, field) => {
    // console.log("==>>", event.target.checked);
    if (
      field == "was_be_dtp" ||
      field == "avto_credit" ||
      field == "bez_ogranacheniya_voditel"
    ) {
      setUserInfo((prevState) => ({
        ...prevState,
        [field]: event.target.checked,
      }));
    } else if (field == "type") {
      setUserInfo((prevState) => ({
        ...prevState,
        [field]: event,
      }));
    } else {
      setUserInfo((prevState) => ({
        ...prevState,
        [field]: event.target.value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("forms/partners", userInfo)
      .then((res) => {
        setOpen(true);
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch((err) => {
        setAlert(true);
        setErrorMsg({
          type: "registration",
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
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Сообщение отправлено успешно !
          </Alert>
        </Snackbar>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {/* @ts-ignore */}
            {/* {errorMsg && errorMsg.type == "login" && errorMsg.message} */}
            {!!errorMsg &&
              errorMsg.message.length > 0 &&
              errorMsg.message.map((item, idx) => (
                <div key={idx}>{item}</div>
              ))}
          </Alert>
        </Snackbar>
      </Stack>

      <form onSubmit={handleSubmit}>
        <InviteFormBody>
          <FormTitle>Пригласить к сотрудничеству</FormTitle>
          <FormsContainer>
            <UserName
              placeholder="Иванов Иван Иванович"
              label={"Ваше имя"}
              onChange={(e) => handleChange(e, "name")}
              name="name"
              value={userInfo.name}
              required
            />
            <UserPhone
              placeholder="998 90 989-89-89"
              label={"Номер теефона"}
              onChange={(e) => handleChange(e, "nomer")}
              name="nomer"
              value={userInfo.nomer}
              required
            />
            <UserEmail
              placeholder="status585@mail.ru"
              label={"Электронная почта"}
              onChange={(e) => handleChange(e, "email")}
              name="email"
              value={userInfo.email}
            />
            <OraganName
              placeholder=""
              label={"Название организации"}
              onChange={(e) => handleChange(e, "company_name")}
              name="company_name"
              value={userInfo.company_name}
              required
            />
            <UserCity
              placeholder="Андижан"
              label={"Город"}
              onChange={(e) => handleChange(e, "city")}
              name="city"
              value={userInfo.city}
              required
            />
          </FormsContainer>
          <MessageIn
            placeholder="Примечание"
            onChange={(e) => handleChange(e, "text")}
            name="text"
            value={userInfo.text}
            required
          />
          <CheckBlock>
            <FormCheck>
              <FormGroup>
                <Checkbox {...label} onClick={() => setCheck(!check)} />
              </FormGroup>
              <FormSog className="label">
                Подтверждаю согласие на обработку моих персональных данных. Я
                даю согласие на обработку указанных мной персональных данных в
                соответствии с Политикой в области обработки и защиты
                персональных данных АО « OMAD SUG'URTA »
                <Link href="/blog/hello-world" passHref>
                  <a></a>
                </Link>
              </FormSog>
            </FormCheck>
            <div>
              <FormButton type="submit" disabled={!check}>
                Отправить
              </FormButton>
            </div>
          </CheckBlock>
        </InviteFormBody>
      </form>
    </>
  );
};

export default InviteCooperationForm;
