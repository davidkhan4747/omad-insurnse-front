import { useState } from "react";
import parse from "html-react-parser";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import {
  MissionBody,
  MissionContent,
} from "../mission/Mission.e";
import { SectionTitle, MainBtn, AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import {
  FinancialYears,
  FinancialBlock,
  FinancialBlockTitle,
  FinicialBloclContent,
} from "../financial-performance/financial-performance.e";
import Image from "next/image";

import {
  RulesSearch,
  Slogan,
  Pravila,
  InfoDoc,
  InfoDocItem,
  BlockDocs,
  Suk,
} from "./Insurance-rules.e";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";

const main_image = "/slider1.jpg";
const PDFImage = "/carbon_document-pdf.png";

const InsuranceRules = ({
  title,
  description,
  data,
  sidebars,
}) => {
  const [active, setActive] = useState("active");

  const HandlAct = () => {
    setActive("active");
  };
  const HandlPrivate = () => {
    setActive("active2");
  };
  const { t } = useTranslation();
  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          <div>
            <FinancialBlock>
              <FinancialYears
                onClick={HandlAct}
                className={active == "active" ? "active" : ""}
              >
                <Slogan>Правила страхования</Slogan>
              </FinancialYears>
              <FinancialYears
                onClick={HandlPrivate}
                className={active == "active2" ? "active" : " "}
              >
                <Slogan>Архив </Slogan>
              </FinancialYears>
            </FinancialBlock>

            {active === "active" ? (
              <>
                <FinancialBlockTitle>Текущие закупки</FinancialBlockTitle>
                <RulesSearch
                  placeholder="lorem lorem "
                  label={t("Найти правила")}
                  type={"search"}
                />
                {data.length > 0 &&
                  data.map((item, idx) =>
                    item.files.length > 0 && item.code == "pravila" ? (
                      <>
                        <Pravila>{item.title}</Pravila>
                        <BlockDocs>
                          {item.files.map((data, id) => (
                            <div key={id}>
                              <Image src={PDFImage} width={85} height={82} />
                              <InfoDoc>{data.title}</InfoDoc>
                              <InfoDocItem>
                                {data.size} Обновлено {data.updated_at}
                              </InfoDocItem>
                              <Suk>
                                <MainBtn
                                  onClass="download"
                                  text={t("common:Download")}
                                  url={data.file} // url={item.files[0].file}
                                />
                              </Suk>
                            </div>
                          ))}
                        </BlockDocs>
                      </>
                    ) : item.code !== "arxiv" ? (
                      <>
                        <FinancialBlockTitle>{item.title}</FinancialBlockTitle>
                        <FinicialBloclContent>
                          {parse(item.description)}
                        </FinicialBloclContent>
                      </>
                    ) : (
                      ""
                    )
                  )}
              </>
            ) : (
              <>
                {data.length > 0 &&
                  data.map((item, idx) =>
                    item.files.length > 0 && item.code == "arxiv" ? (
                      <>
                        <Pravila>{item.title}</Pravila>
                        <BlockDocs>
                          {item.files.map((data, id) => (
                            <div key={id}>
                              <Image src={PDFImage} width={85} height={82} />
                              <InfoDoc>{data.title}</InfoDoc>
                              <InfoDocItem>
                                {data.size} Обновлено {data.updated_at}
                              </InfoDocItem>
                              <Suk>
                                <MainBtn
                                  onClass="download"
                                  text={t("common:Download")}
                                  url={data.file} // url={item.files[0].file}
                                />
                              </Suk>
                            </div>
                          ))}
                        </BlockDocs>
                      </>
                    ) : item.code == "arxiv" ? (
                      <>
                        <FinancialBlockTitle>{item.title}</FinancialBlockTitle>
                        <FinicialBloclContent>
                          {parse(item.description)}
                        </FinicialBloclContent>
                      </>
                    ) : (
                      ""
                    )
                  )}
              </>
            )}
          </div>
          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default InsuranceRules;
