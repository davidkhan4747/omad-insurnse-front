import Image from "next/image";
import parse from "html-react-parser";
import {
  LeftButton,
  LeftWrapper,
  LeftWrapperDescription,
  LeftWrapperPDF,
  LeftWrapperRow,
  PDFData,
  PDFIcon,
  PDFInfo,
  PDFTitle,
  Wrapper,
} from "./left-panel.e";
import { SectionTitle, MainBtn } from "../../../common";

import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";
import { useTranslation } from "react-i18next";
const LeftPanel = ({ dataLeft }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
        
            <LeftWrapper>
              <SectionTitle title="Лицензии" color="black" classN="title" />
              <LeftWrapperRow>
                <LeftWrapperDescription>
                  {parse(dataLeft.licence_text)}
                </LeftWrapperDescription>
                <LeftWrapperPDF>
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{dataLeft.licence_file.title} </PDFTitle>
                    <PDFData>{dataLeft.licence_file.size} </PDFData>
                    <PDFData>
                    Обновлено в {dataLeft.licence_file.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={dataLeft.licence_file.url ?? ''}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
              </LeftWrapperRow>
            </LeftWrapper>

            <LeftWrapper>
              <SectionTitle title="Капитал" color="black" classN="title" />
              <LeftWrapperRow>
                <LeftWrapperDescription>
                  {parse(dataLeft.capital_text)}
                </LeftWrapperDescription>
              </LeftWrapperRow>
            </LeftWrapper>

            <LeftWrapper className="bottom-wrap">
              <SectionTitle title="Основные сведения" color="black" classN="title" />
              <LeftWrapperDescription className="description">
                {parse(dataLeft.basic_text)}
              </LeftWrapperDescription>

              <LeftWrapperRow className="left-wrapper-row">
                <LeftWrapperPDF className="icon">
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{dataLeft.basic_file1.title} </PDFTitle>
                    <PDFData>{dataLeft.basic_file1.size} </PDFData>
                    <PDFData>
                    Обновлено в {dataLeft.basic_file1.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={dataLeft.basic_file1.url}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
                <LeftWrapperPDF className="icon">
                  <PDFIcon>
                    <Image src={PDFImage} alt="test2" />
                  </PDFIcon>
                  <PDFInfo>
                    <PDFTitle>{dataLeft.basic_file2.title} </PDFTitle>
                    <PDFData>{dataLeft.basic_file2.size} </PDFData>
                    <PDFData>
                    Обновлено в {dataLeft.basic_file2.updated_at}
                    </PDFData>
                    <LeftButton>
                      <MainBtn
                        onClass="download"
                        text={t("common:Download")}
                        url={dataLeft.basic_file2.url}
                      />
                    </LeftButton>
                  </PDFInfo>
                </LeftWrapperPDF>
              
              </LeftWrapperRow>
              </LeftWrapper>
    </Wrapper>
  );
};

export default LeftPanel;
