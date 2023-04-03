import { useEffect, useState, forwardRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  AuthBlock,
  AuthButton,
  AuthLink,
  FormCheck,
  Wrapper,
} from "../../../auth/auth-page/auth-page.e";
import { Formik, Field, Form } from "formik";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import {
  GlobalFormBody,
  HeIs,
  StepIn,
  FormTitle,
  FormInfo,
  FormBlock,
  FormContainer,
  CostBlock,
  ThisCost,
  CostValue,
  CostInfo,
  CostS,
  AvtoModel,
  BrandCar,
  ModelCar,
  CarsBlock,
  Engine,
  RegionUsage,
  FormButtonBlock,
  FormBtnCheck,
  FormInsBtn,
  Avto,
  InfoUser,
  FormsUser,
  CheckDTp,
  UserStr,
  UserNumber,
  FormUserD,
  FormsDrop,
  UserDataBlock,
  FlexBlock,
} from "./casco.e";
import Link from "next/link";
import {
  CheckBlock,
  FormButton,
  FormSog,
  UserEmail,
} from "../../Invite-cooperation-form/Invite-cooperation-form.e";
import { useTranslation } from "react-i18next";
import { Box, FormControl, InputLabel, Select } from "@mui/material";
import {
  BodyForm,
  ButtonAdd,
  ButtonBlock,
  FormBody,
  FormHeading,
  PageForm,
  UserInfoInput,
} from "../../../personal-area/personal-buy/pesonal-buy.e";
import { CardButton } from "../../../yur-face-page/CardBlock/CardBlock.e";
import {
  UserApartment,
  UserHome,
} from "../../../personal-area/user-data/user-data.e";
import {
  UptadeSelect,
  UptadeSelectRayon,
} from "../../../personal-area/polic-updates/pesonal-.updates.e";
import { api } from "../../../../services/api";

const Alert = forwardRef(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Casco = ({ title, yurFace }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [check, setCheck] = useState(false);
  const [addButt, setAddBut] = useState("yes");
  const [districts, setDistricts] = useState([]);
  const [regions, setRegions] = useState([]);
  const [typeDocumentList, setTypeDocumentList] = useState([]);
  const [docTypes, setDocTypes] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    api
      .get("cabinet/typeDocuments")
      .then((res) => {
        setDocTypes(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
    api
      .get("cabinet/regions-list")
      .then((res) => {
        setRegions(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
    api
      .get("forms/typeDocumentList")
      .then((res) => {
        setTypeDocumentList(res.data.data);
      })
      .catch((err) => {
        console.log("err", err.response.data);
      });
  }, []);
  const getDistrict = (id) => {
    api
      .get("cabinet/district-list", {
        params: { regionId: id },
      })
      .then((res) => {
        setDistricts(res.data.data);
      });
  };
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({});
  const [age, setAge] = useState("");
  const [avto, setAvto] = useState("avto");
  const [insuranse, setInsuranse] = useState("");
  const [calc, setCalc] = useState("");
  const [progres, setPropgres] = useState("40");
  const [credit, setCredit] = useState(true);
  const [sobs, setSobs] = useState(false);
  const [ogrV, setOgrV] = useState(false);
  const [add, isAdd] = useState("");
  const [add2, isAdd2] = useState("");
  const [addButt2, setaddButt2] = useState("yes");

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/forms/avto", userInfo)
      .then((res) => {
        // console.log("object ==>", res);
        setOpen(true);
        setTimeout(() => window.location.reload(), 3000);
      })
      .catch((err) => {
        // console.log("objectERROR ==>", err.response.data);
        setAlert(true);
        setErrorMsg({
          type: "registration",
          message: err.response.data,
        });
      });
  };
  const AddHand = () => {
    isAdd("addet");
    setAddBut("");
  };
  const AddHand2 = () => {
    isAdd2("addet");

    setaddButt2("");
  };
  const RemoveBtn = () => {
    isAdd("");
    setAddBut("yes");
  };
  const RemoveBtn2 = () => {
    isAdd2("");
    setaddButt2("yes");
  };
  const NoAvto = (e) => {
    e.preventDefault();
    setAvto("");
    setInsuranse("insuranse");
    setStep(2);
    setPropgres("80");
  };
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
        type: yurFace ? "yur" : "fiz",
      }));
    }
  };
  // handleChange(yurFace, "type");

  const prevAV = () => {
    setAvto("avto");
    setInsuranse("");
    setPropgres("40");
    setCheck(false);
    setStep(1);
  };

  const CheckCredit = () => {
    setCredit(!credit);
  };
  const NoIns = (e) => {
    e.preventDefault();
    setPropgres("100");
    setStep(3);

    setCalc("calc");
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
    <GlobalFormBody>
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
      <FormContainer>
        <PageForm onSubmit={handleSubmit}>
          <FormBlock>
            <Avto>
              <>
                <HeIs>
                  {title}
                  <small>
                    {" "}
                    {yurFace == true ? "(Юр.чицо)" : "(Физ.лицо)"}
                  </small>{" "}
                  &nbsp; &nbsp;{" "}
                  <StepIn>
                    Шаг <span>{step} </span>из 3
                  </StepIn>{" "}
                </HeIs>
                <FormTitle>Заполните информацию о автомобиле</FormTitle>

                <CarsBlock>
                  <BrandCar
                    label="Марка*"
                    placeholder="Chevrolet"
                    onChange={(e) => handleChange(e, "marka")}
                    name="marka"
                    value={userInfo.marka}
                    required
                  />
                  <ModelCar
                    label="Модель*"
                    placeholder="Spark"
                    onChange={(e) => handleChange(e, "model")}
                    name="model"
                    value={userInfo.model}
                    required
                  />
                  <ModelCar
                    // type={'date'}
                    label="Год*"
                    placeholder="2018"
                    onChange={(e) => handleChange(e, "year")}
                    name="year"
                    value={userInfo.year}
                    required
                  />
                </CarsBlock>

                <Engine
                  label="Двигатьель*"
                  placeholder="2.0 (250.00 л.с.)"
                  onChange={(e) => handleChange(e, "dvigatel")}
                  name="dvigatel"
                  value={userInfo.dvigatel}
                />
                <p></p>
                <RegionUsage
                  label="Регион использование*"
                  placeholder="Ташкент и ТО"
                  onChange={(e) => handleChange(e, "region_usages")}
                  name="region_usages"
                  value={userInfo.region_usages}
                  required
                />
                <UserStr>
                  <FormsUser
                    label="Страховых случаев за год*"
                    placeholder="Страховых случаев за год* "
                    id="strahavoy-za-god"
                    onChange={(e) => handleChange(e, "insurance_year")}
                    name="insurance_year"
                    value={userInfo.insurance_year}
                    required
                  />

                  <CheckDTp>
                    <Checkbox
                      {...label}
                      onChange={(e) => handleChange(e, "was_be_dtp")}
                      name="was_be_dtp"
                      value={userInfo.was_be_dtp}
                      required={false}
                    />{" "}
                    Были ДТП за прошлый год
                  </CheckDTp>
                </UserStr>

                <FormButtonBlock>
                  <FormBtnCheck>
                    <FormGroup>
                      <Checkbox {...label} onClick={() => setCheck(!check)} />
                    </FormGroup>
                    <FormSog className="label">
                      Я принимаю условия передачи информации и страхования
                      <Link href="" passHref>
                        <a></a>
                      </Link>
                    </FormSog>
                    <FormInsBtn
                      onClick={NoAvto}
                      disabled={!check}
                      type="button"
                    >
                      Далее
                    </FormInsBtn>
                  </FormBtnCheck>
                </FormButtonBlock>
              </>
              {insuranse == "insuranse" ? (
                <>
                  <HeIs>
                    {title}
                    <small>
                      {" "}
                      {yurFace == true ? "(Юр.чицо)" : "(Физ.лицо)"}
                    </small>
                  </HeIs>

                  <FormTitle>Период страхования</FormTitle>

                  {/* <FormInfo>Выберите значение из списка, используя поиск по буквам</FormInfo> */}
                  <p>Дата начала действия КАСКО</p>
                  <UserNumber
                    className="myInput"
                    placeholder="Дата начала действия КАСКО"
                    label={t("Дата начала действия КАСКО")}
                    type="date"
                    id=""
                    defaultValue="Дата начала действия КАСКО"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e) => handleChange(e, "start_action")}
                    name="start_action"
                    value={userInfo.start_action}
                    required
                  />
                  <FormInfo>Автомобиль</FormInfo>
                  <FlexBlock>
                    <FormUserD
                      label="VIN*"
                      placeholder=" На пример :  X9L212300A0287536  "
                      id="tel"
                      onChange={(e) => handleChange(e, "vin")}
                      name="vin"
                      value={userInfo.vin}
                      required
                    />
                    <FormUserD
                      disabled={!credit}
                      label="Госномер*"
                      placeholder="Если есть  "
                      id="gov number"
                      onChange={(e) => handleChange(e, "gov_number")}
                      name="gov_number"
                      value={userInfo.gov_number}
                    />
                  </FlexBlock>

                  <InfoUser>
                    <FormsDrop
                      // label='Мин. возраст водителя*'
                      disabled={!credit}
                      placeholder="Тип документа* "
                      id="type doc"
                      onChange={(e) => handleChange(e, "type_document_avto")}
                      name="type_document_avto"
                      value={userInfo.type_document_avto}
                    >
                      <option selected>Тип документа*</option>
                      {typeDocumentList?.map((item, idx) => (
                        <option value={item.id} key={idx}>
                          {item.title}
                        </option>
                      ))}
                    </FormsDrop>
                    <FormsUser
                      disabled={!credit}
                      label="Серия и номер*"
                      placeholder=""
                      onChange={(e) => handleChange(e, "serie_and_number_avto")}
                      name="serie_and_number_avto"
                      id="serie_and_number_avto"
                      value={userInfo.serie_and_number_avto}
                    />
                    <Engine
                      disabled={!credit}
                      label="Дата выдачи*"
                      id="Дата выдачи*"
                      placeholder=""
                      type="date"
                      onChange={(e) => handleChange(e, "given_time_avto")}
                      name="given_time_avto"
                      value={userInfo.given_time_avto}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <div>
                      <Checkbox
                        {...label}
                        onClick={CheckCredit}
                        onChange={(e) => handleChange(e, "avto_credit")}
                        name="avto_credit"
                        value={userInfo.avto_credit}
                      />{" "}
                      Автомобиль взят в кредит
                    </div>
                  </InfoUser>
                  <FormInfo>Водитель</FormInfo>
                  <div>
                    <Checkbox
                      {...label}
                      onClick={() => setOgrV(!ogrV)}
                      onChange={(e) =>
                        handleChange(e, "bez_ogranacheniya_voditel")
                      }
                      name="bez_ogranacheniya_voditel"
                      value={userInfo.bez_ogranacheniya_voditel}
                    />{" "}
                    Без ограничений на водителей
                  </div>
                  {ogrV == false ? (
                    <>
                      <FormInfo>Укажите данные водителя</FormInfo>
                      <FlexBlock className="al-center">
                        <FormsUser
                          label="Фамилия, имя и отчество*"
                          placeholder="Иванов Иван Иванович"
                          type={""}
                          id="nameUser"
                          onChange={(e) =>
                            handleChange(e, "voditel_full_name1")
                          }
                          name="voditel_full_name1"
                          value={userInfo.voditel_full_name1}
                        />

                        <UserNumber
                          className="myInput"
                          label="Дата рождения*"
                          placeholder="Дата рождения"
                          type="date"
                          id="emailUser"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) =>
                            handleChange(e, "voditel_date_rojdeniya1")
                          }
                          name="voditel_date_rojdeniya1"
                          value={userInfo.voditel_date_rojdeniya1}
                        />
                      </FlexBlock>

                      {add == "addet" ? (
                        <FlexBlock>
                          <FormsUser
                            label="Фамилия, имя и отчество*"
                            placeholder="Иванов Иван Иванович"
                            type={""}
                            id="emailUser"
                            onChange={(e) =>
                              handleChange(e, "voditel_full_name2")
                            }
                            name="voditel_full_name2"
                            value={userInfo.voditel_full_name2}
                          />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <UserNumber
                            className="myInput"
                            label="Дата рождения*"
                            placeholder="Дата рождения"
                            type="date"
                            id="emailUser"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) =>
                              handleChange(e, "voditel_date_rojdeniya2")
                            }
                            name="voditel_date_rojdeniya1"
                            value={userInfo.voditel_date_rojdeniya2}
                          />
                        </FlexBlock>
                      ) : (
                        ""
                      )}
                      <div>
                        {addButt == "yes" ? (
                          <ButtonAdd onClick={AddHand}>
                            {" "}
                            {t("common:Add")}
                          </ButtonAdd>
                        ) : (
                          <ButtonAdd onClick={RemoveBtn}>Убрать</ButtonAdd>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}

                  <FormButtonBlock>
                    <div></div>
                    <FormInsBtn onClick={NoIns} type="button">
                      Далее{" "}
                    </FormInsBtn>
                  </FormButtonBlock>
                </>
              ) : (
                ""
              )}

              <div>
                {calc == "calc" ? (
                  <>
                    <HeIs>
                      {title}
                      <small>
                        {" "}
                        {yurFace == true ? "(Юр.чицо)" : "(Физ.лицо)"}
                      </small>{" "}
                    </HeIs>

                    {yurFace == false ? (
                      <BodyForm>
                        <FormBody>
                          <FormHeading>{t("common:Personal_ata")}</FormHeading>
                          <p>
                            <UserInfoInput
                              placeholder="Иванов Иван Иванович"
                              label={t("common:name_data")}
                              onChange={(e) => handleChange(e, "fullname")}
                              name="fullname"
                              value={userInfo.fullname}
                              required
                              id="fullname"
                            />
                          </p>
                          <p>
                            <UserNumber
                              className="myInput"
                              placeholder="01/01/2000"
                              // id="demo-helper-text-misaligned"
                              label={t("common:birth_data")}
                              onChange={(e) =>
                                handleChange(e, "data_rojdeniya")
                              }
                              name="data_rojdeniya"
                              type="date"
                              id="data_rojdeniya"
                              defaultValue="00-00-2000"
                              value={userInfo.data_rojdeniya}
                              required
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </p>
                          <FormHeading>{t("common:Personal_ata")}</FormHeading>
                          <UptadeSelect
                            // onChange={(e) => {
                            //   setValue(e.target.value);
                            // }}
                            name="type_document_id"
                            required
                            id="type_document_id"
                            onChange={(e) =>
                              handleChange(e, "type_document_id")
                            }
                            value={userInfo.type_document_id}
                          >
                            <option selected>
                              {t("common:Citizens_passport")}
                            </option>
                            {docTypes?.map((item, idx) => (
                              <option value={item.id} key={idx}>
                                {item.title}
                              </option>
                            ))}
                            {/* <option value="США">США</option> */}
                          </UptadeSelect>

                          <UserInfoInput
                            placeholder=" Например: 470347034703477"
                            label={t("common:Series_number_pas")}
                            onChange={(e) =>
                              handleChange(e, "serie_and_number")
                            }
                            name="serie_and_number"
                            required
                            id="serie_and_number"
                            value={userInfo.serie_and_number}
                          />

                          <p>
                            <UserInfoInput
                              label={t("common:Issued_by")}
                              placeholder={t("Например: IIV 3411")}
                              onChange={(e) => handleChange(e, "given_place")}
                              name="given_place"
                              required
                              id="given_place"
                              value={userInfo.given_place}
                            />
                          </p>
                          <p>
                            <UserNumber
                              className="myInput"
                              placeholder="01/01/2000"
                              // id="demo-helper-text-misaligned"
                              label={t("common:Date_issue")}
                              onChange={(e) => handleChange(e, "given_time")}
                              name="given_time"
                              type="date"
                              id="given_time"
                              defaultValue="00-00-2000"
                              InputLabelProps={{
                                shrink: true,
                              }}
                              required
                              value={userInfo.given_time}
                            />
                          </p>
                          <FormHeading>
                            {t("common:Contact_details")}
                          </FormHeading>
                          <p>
                            <UserDataBlock>
                              <UserNumber
                                className="myInput"
                                placeholder="998 90 989-89-89"
                                label={t("common:Phone_number")}
                                onChange={(e) =>
                                  handleChange(e, "phonenumber1")
                                }
                                name="phonenumber1"
                                required
                                id="phonenumber1"
                                value={userInfo.phonenumber1}
                              />
                              <UserEmail
                                placeholder="status585@mail.ru"
                                label="Email"
                                onChange={(e) => handleChange(e, "email1")}
                                name="email1"
                                required
                                id="email1"
                                value={userInfo.email1}
                              />
                            </UserDataBlock>

                            {add2 == "addet" ? (
                              <UserDataBlock>
                                <UserNumber
                                  className="myInput"
                                  placeholder="998 90 989-89-89"
                                  label={t("common:Phone_number")}
                                  onChange={(e) =>
                                    handleChange(e, "phonenumber2")
                                  }
                                  name="phonenumber2"
                                  id="phonenumber2"
                                  value={userInfo.phonenumber2}
                                />
                                <UserEmail
                                  placeholder="status585@mail.ru"
                                  label="Email"
                                  onChange={(e) => handleChange(e, "email2")}
                                  name="email2"
                                  id="email2"
                                  value={userInfo.email2}
                                />
                              </UserDataBlock>
                            ) : (
                              ""
                            )}
                            <div>
                              {addButt2 == "yes" ? (
                                <ButtonAdd onClick={AddHand2}>
                                  {" "}
                                  + {t("common:Add")}
                                </ButtonAdd>
                              ) : (
                                <ButtonAdd onClick={RemoveBtn2}>
                                  Убрать
                                </ButtonAdd>
                              )}
                            </div>
                          </p>
                          <FormHeading>
                            {t("common:Residence_address")}
                          </FormHeading>
                          <UserInfoInput
                            label={t("common:index")}
                            placeholder={t("Например : 100012")}
                            onChange={(e) => handleChange(e, "indeks")}
                            name="indeks"
                            required
                            id="indeks"
                            value={userInfo.indeks}
                          />
                          <UptadeSelect
                            placeholder="Область"
                            onChange={(e) => {
                              handleChange(e, "oblast_id");
                              getDistrict(e.target.value);
                            }}
                            name="oblast_id"
                            required
                          >
                            <option selected>{t("common:Region")}</option>
                            {regions.map((item, idx) => (
                              <option value={item.id} key={idx}>
                                {item.title}
                              </option>
                            ))}
                          </UptadeSelect>
                          <UptadeSelectRayon
                            className="rayon"
                            placeholder="Область"
                            onChange={(e) => {
                              handleChange(e, "region_id");
                            }}
                            name="region_id"
                            required
                          >
                            <option selected value="Область">
                              {t("common:District_city")}
                            </option>
                            {districts.map((item, idx) => (
                              <option selected value={item.id} key={idx}>
                                {item.title}
                              </option>
                            ))}
                          </UptadeSelectRayon>
                          <UserInfoInput
                            label={t("common:Street_Quarter")}
                            placeholder={t("Например :MirzoUlugbek 23")}
                            onChange={(e) => handleChange(e, "street")}
                            name="street"
                            id="street"
                            value={userInfo.street}
                          />
                          <UserHome
                            label={t("common:House")}
                            placeholder={t("47")}
                            onChange={(e) => handleChange(e, "dom")}
                            name="dom"
                            id="dom"
                            value={userInfo.dom}
                          />
                          <UserApartment
                            label={t("common:Apartment")}
                            placeholder={t("9")}
                            onChange={(e) => handleChange(e, "home")}
                            name="home"
                            id="home"
                            value={userInfo.home}
                          />

                          <ButtonBlock>
                            <CardButton type="submit">
                              {t("common:Save")}
                            </CardButton>
                          </ButtonBlock>
                        </FormBody>
                      </BodyForm>
                    ) : (
                      <>
                        <FormBody>
                          <FormHeading>Данные для оформления</FormHeading>
                          <UserInfoInput
                            placeholder="Khans"
                            label={"Название компании"}
                            name="company_name"
                            id="company_name"
                            onChange={(e) => handleChange(e, "company_name")}
                            value={userInfo.company_name}
                            required
                          />
                          <br />
                          <br />
                          <UserInfoInput
                            placeholder=""
                            label={"Юридический адрес"}
                            name="yuridik_address"
                            id="yuridik_address"
                            onChange={(e) => handleChange(e, "yuridik_address")}
                            value={userInfo.yuridik_address}
                            required
                          />
                          <br />
                          <br />
                          <UserInfoInput
                            placeholder="10855430604947"
                            label={"Свидетельство"}
                            name="svidetolsva"
                            id="svidetolsva"
                            onChange={(e) => handleChange(e, "svidetolsva")}
                            value={userInfo.svidetolsva}
                            required
                          />
                          <br />
                          <br />
                          <UserInfoInput
                            placeholder="10855430604947"
                            label={"ИНН"}
                            name="inn"
                            id="inn"
                            onChange={(e) => handleChange(e, "inn")}
                            value={userInfo.inn}
                            required
                          />
                          <br />
                          <br />

                          <ButtonBlock>
                            <CardButton type="submit">Отправить</CardButton>
                          </ButtonBlock>
                        </FormBody>
                      </>
                    )}
                  </>
                ) : (
                  ""
                )}
              </div>
            </Avto>
          </FormBlock>
        </PageForm>
        {/* <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            lastName: "",
          }}
          onSubmit={async (values) => {
            // await registration(values);
          }}
          validationSchema={Schema}
        >
          {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
            <></>
          )}
        </Formik> */}

        <CostBlock>
          <ThisCost>Заполните до показа стоимости:</ThisCost>
          <CostValue>{progres}%</CostValue>
          <CostS className={"i" + progres} />
          {progres == "100" ? (
            ""
          ) : (
            <CostInfo>
              {" "}
              {progres == "80" ? "+20%" : "+40% "} за заполнение следующего шага
            </CostInfo>
          )}
        </CostBlock>
      </FormContainer>
    </GlobalFormBody>
  );
};

export default Casco;
