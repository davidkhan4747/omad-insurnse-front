import { MainBtn } from "../../../common";
import { Formik, Field, Form } from "formik";
import parse from "html-react-parser";
import {
  FormControl,
  RightButton,
  RightDescription,
  RightTitle,
  RightWrapper,
  Wrapper,
} from "./right-panel.e";



import { useTranslation } from "react-i18next";
const RightPanel = ({ dataRight }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      {dataRight && (
        <RightWrapper className="vacancies">
          <RightTitle className="white"> {t("common:Vacancies")}</RightTitle>
          <RightDescription className="white">
            {parse(dataRight.description)}
          </RightDescription>

          <RightButton>
            <MainBtn
              onClass="white"
              text={t("common:Learn_more")}
              url={dataRight.slug}
            />
          </RightButton>
        </RightWrapper>
      )}

      <RightWrapper>
        <RightTitle>{t("common:Form_of_strict_accountability")}</RightTitle>
        <RightDescription>{t("common:Policy_check")}</RightDescription>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <FormControl>
              <Field
                id="firstName"
                name="firstName"
                placeholder={t("common:Series")}
              />
            </FormControl>
            <FormControl>
              <Field
                id="lastName"
                name="lastName"
                placeholder={t("common:Policy_number")}
              />
            </FormControl>

            <RightButton className="bottom-button">
              <MainBtn
                onClass="blue"
                text={t("common:Check_policy")}
                url={null}
              />
            </RightButton>
          </Form>
        </Formik>
      </RightWrapper>
    </Wrapper>
  );
};

export default RightPanel;
