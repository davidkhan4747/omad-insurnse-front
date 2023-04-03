import { useState } from "react";
import Link from "next/dist/client/link";
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
import {  MainBtn, AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import {
  FinancialYears,
  FinancialBlock,
  YearSpan,
  FinancialBlockTitle,
  FinicialBloclContent,
  DownloadBlock,
  FinicialP,
  DwBtnBlock,
  DwBlockBorder,
} from "./financial-performance.e";
import Image from "next/image";
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";

const main_image = "/slider1.jpg";
const PDFImage = "/carbon_document-pdf.png";
const FinancialPerformance = ({
  title,
  description,
  sidebars,
  data,
}) => {
  // console.log("inner ->>>>", data[0]);
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
                <YearSpan>2020 год</YearSpan>
              </FinancialYears>
              <FinancialYears
                onClick={HandlPrivate}
                className={active == "active2" ? "active" : " "}
              >
                <YearSpan>2021 год</YearSpan>
              </FinancialYears>
            </FinancialBlock>

            {data.length > 0 &&
              data.map((item, idx) =>
                item.files.length == 1 ? (
                  <>
                    <FinancialBlockTitle>{item.title}</FinancialBlockTitle>
                    <FinicialBloclContent>
                      {parse(item.description)}
                    </FinicialBloclContent>

                    {item.files.map((DATA, idx) => (
                      <DwBlockBorder key={idx}>
                        <DownloadBlock>
                          <Image
                            src={PDFImage}
                            alt="s"
                            width={100}
                            height={100}
                          />
                          <FinicialBloclContent>
                            {DATA.title}
                            <FinicialP>{DATA.size}</FinicialP>{" "}
                            <FinicialP>Обновлено {DATA.updated_at}</FinicialP>
                          </FinicialBloclContent>
                        </DownloadBlock>
                        <DwBtnBlock>
                          <MainBtn
                            onClass="download"
                            text={t("common:Download")}
                            url={DATA.file}
                          />
                        </DwBtnBlock>
                      </DwBlockBorder>
                    ))}
                  </>
                ) : item.files.length == 2 ? (
                  <DwBlockBorder>
                    <FinancialBlockTitle>{data[1].title}</FinancialBlockTitle>
                    <DownloadBlock>
                      {item.files.map((DATA, idx) => (
                        <div key={idx}>
                          <DownloadBlock>
                            <Image
                              src={PDFImage}
                              alt="s"
                              width={100}
                              height={100}
                            />
                            <FinicialBloclContent>
                              {DATA.title}
                              <FinicialP>{DATA.size}</FinicialP>{" "}
                              <FinicialP>Обновлено {DATA.updated_at}</FinicialP>
                            </FinicialBloclContent>
                          </DownloadBlock>
                          <DwBtnBlock>
                            <MainBtn
                              onClass="download"
                              text={t("common:Download")}
                              url={DATA.file}
                            />
                          </DwBtnBlock>
                        </div>
                      ))}
                    </DownloadBlock>
                  </DwBlockBorder>
                ) : (
                  ""
                )
              )}
          </div>
          <AboutNav sidebars={sidebars} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default FinancialPerformance;
