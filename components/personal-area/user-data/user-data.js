import {  useState, useEffect } from "react";
import NextLink from "next/link";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
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
  Seriya
} from "../personal-buy/pesonal-buy.e";
import { SNumber, UserHome, UserApartment ,} from "./user-data.e";
import {
  UptadeSelect,
  UptadeSelectRayon,
} from "../polic-updates/pesonal-.updates.e";
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
import { FormElements } from "../../common";
import { api } from "../../../services/api";
const Schema = Yup.object().shape({
  full_name: Yup.string().required("This field is required"),
  data_birthday: Yup.string().required("This field is required"),
  phonenumber: Yup.array().required("This field is required"),
  documentTypeId: Yup.number().required("This field is required"),
  documentSerieAndNumber: Yup.string().required("This field is required"),
  documentIssuedBy: Yup.string().required("This field is required"),
  documentDateOfIsue: Yup.string().required("This field is required"),
  region_id: Yup.number().required("This field is required"),
  district_id: Yup.number().required("This field is required"),
  street: Yup.string().nullable(true),
  home: Yup.string().nullable(true),
  flat: Yup.string().nullable(true),
});

const UserData = () => {
  const [regions, setRegions] = useState();
  const [districts, setDistricts] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    api.get("cabinet/regions-list").then((res) => {
      setRegions(res.data.data);
    });

    api.get("cabinet/user/get").then((res) => {
      // console.log(res);
      setUserInfo(res.data.data);
      console.log(res.data.data)
    });
  }, []);

  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [add, isAdd] = useState("");
  const [addButt, setAddBut] = useState("yes");

  const AddHand = () => {
    isAdd("addet");
    setAddBut("");
  };
  const RemoveBtn = () => {
    isAdd("");
    setAddBut("yes");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("cabinet/user/post", userInfo)
      .then((res) => {
        console.log("object ==>", userInfo);
      })
      .catch((err) => {
        console.log("object ==>", err.response.data);
      });
  };
  const handleChange = (event, field) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const getDistrict = (id) => {
    api
      .get("cabinet/district-list", {
        params: { regionId: id },
      })
      .then((res) => {
        setDistricts(res.data.data);
      });
  };
  // if(userInfo.region_id != null)
  //  getDistrict(userInfo.region_id);
  return (
    <>
      <BodyForm>
        <FormBody>
          <FormHeading>{t("common:Personal_ata")}</FormHeading>
          <PageForm onSubmit={handleSubmit}>
            <p>
              <UserInfoInput
                placeholder="Иванов Иван Иванович"
                label={t("common:name_data")}
                onChange={(e) => handleChange(e, "full_name")}
                name="full_name"
                value={userInfo?.full_name}
                required
                id="full_name"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </p>
            <p>
              <UserNumber
                className="myInput"
                placeholder="01/01/2000"
                label={t("common:birth_data")}
                onChange={(e) => handleChange(e, "data_birthday")}
                name="data_birthday"
                type="date"
                id="data_birthday"
                defaultValue="00-00-2000"
                value={userInfo?.data_birthday}
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
            </p>
            <FormHeading>{t("common:Personal_ata")}</FormHeading>
            <UptadeSelect
              name="documentTypeId"
              required
              id="documentTypeId"
              onChange={(e) => handleChange(e, "documentTypeId")}
              value={userInfo?.documentTypeId}
            >
              <option selected>{t("common:Citizens_passport")}</option>
              <option value={1}>Паспорт</option>
              <option value={2}>ID карта</option>
            </UptadeSelect>

            <Seriya
              placeholder=" Например: 470347034703477"
              // label={t("common:Series_number_pas")}
              onChange={(e) => handleChange(e, "documentSerieAndNumber")}
              name="documentSerieAndNumber"
              required
              type={'text'}
              id="documentSerieAndNumber"
              value={userInfo?.documentSerieAndNumber}
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
            {/* <SNumber
              className="myInput"
              //  id="demo-helper-text-misaligned"

              id="documentSerieAndNumber"
              value={userInfo.documentSerieAndNumber}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            <p>
              <UserInfoInput
                label={t("common:Issued_by")}
                placeholder={t("Например: IIV 3411")}
                onChange={(e) => handleChange(e, "documentIssuedBy")}
                name="documentIssuedBy"
                required
                id="documentIssuedBy"
                value={userInfo?.documentIssuedBy}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </p>
            <p>
              <UserNumber
                className="myInput"
                placeholder="01/01/2000"
                // id="demo-helper-text-misaligned"
                label={t("common:Date_issue")}
                onChange={(e) => handleChange(e, "documentDateOfIsue")}
                name="documentDateOfIsue"
                type="date"
                id="documentDateOfIsue"
                defaultValue="00-00-2000"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                value={userInfo?.documentDateOfIsue}
              />
            </p>
            <FormHeading>{t("common:Contact_details")}</FormHeading>
            <p>
              <UserNumber
                className="myInput"
                placeholder="998 90 989-89-89"
                label={t("common:Phone_number")}
                onChange={(e) => handleChange(e, "phonenumber")}
                name="phonenumber "
                required
                value={userInfo?.phonenumber  }
                id="phonenumber1"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <UserEmail
                placeholder="status585@mail.ru"
                label="Email"
                onChange={(e) => handleChange(e, "email")}
                name="email1"
                required
                id="email1"
                value={userInfo?.email}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              {add == "addet" ? (
                <>
                  <UserNumber
                    className="myInput"
                    // id="demo-helper-text-misaligned"
                    label={t("common:Phone_number")}
                    onChange={(e) => handleChange(e, "phonenumber1")}
                    name="phonenumber1"
                    id="phonenumber1"
                    value={userInfo?.phonenumber1}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <UserEmail
                    className="myInput"
                    label="Email"
                    onChange={(e) => handleChange(e, "email2")}
                    name="email2"
                    id="email2"
                    value={userInfo?.email1}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
            </p>
            <FormHeading>{t("common:Residence_address")}</FormHeading>
            <UserInfoInput
              label={t("common:index")}
              placeholder={t("Например : 100012")}
              onChange={(e) => handleChange(e, "box_index")}
              name="box_index"
              required
              id="box_index"
              value={userInfo?.box_index}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <UptadeSelect
              placeholder="Область"
              onChange={(e) => {
                handleChange(e, "region_id");
                // getDistrict(e.target.value);
              }}
              name="region_id"
              required
            >
              <option >{t("common:Region")}</option>
              {regions?.map((item, idx) => (
                <option value={item?.id} selected = {item.id == userInfo?.region_id ? true : false} key={idx}>
                  {item.title}
                </option>
              ))}
            </UptadeSelect>
            
            <UptadeSelectRayon
              className="rayon"
              placeholder="Область"
              onChange={(e) => {
                handleChange(e, "district_id");
              }}
              name="region_id"
            >
              <option selected value="Область" >
                {t("common:District_city")}
              </option>
              {districts?.map((item, idx) => (
                <option  value={item?.id }  selected = {item.id == userInfo.district_id ? true : false} key={idx} >
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
              value={userInfo?.street}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <UserHome
              label={t("common:House")}
              placeholder={t("47")}
              onChange={(e) => handleChange(e, "home")}
              name="home"
              id="home"
              value={userInfo?.home}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <UserApartment
              label={t("common:Apartment")}
              placeholder={t("9")}
              onChange={(e) => handleChange(e, "flat")}
              name="flat"
              id="flat"
              
              value={userInfo?.flat}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <ButtonBlock>
              <CardButton type="submit">{t("common:Save")}</CardButton>
            </ButtonBlock>
          </PageForm>
          
        </FormBody>
      </BodyForm>
    </>
  );
};

export default UserData;