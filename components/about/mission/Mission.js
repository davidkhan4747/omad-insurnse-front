import parse from "html-react-parser";
import {
  MissionBody,
  MissionNav,
  MissionNavItem,
  MissionContent,
  MissionContentTitle,
  MissionContentAbout,
  MissionContentAbItem,
} from "./Mission.e";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { AboutNav, MainBtn } from "../../common";
import { useTranslation } from "react-i18next";
import { DownloadBlock, DwBlockBorder, DwBtnBlock, FinicialBloclContent, FinicialP } from "../financial-performance/financial-performance.e";
const main_image = "/slider1.jpg";
const MissionComp = ({
  data,
}) => {
  const { t } = useTranslation();


  return (
    <>
      <ContainerHero imgUrl={data?.content.image ?? main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{data?.content.title}</PageHeading>
            <PageText>{parse(data?.content.decription ?? '')}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>
      <MissionBody>
        <MissionContent>
          {data?.content.childs.map((item, idx) => (
              <div key={idx}>
                <MissionContentTitle>{item.title}</MissionContentTitle>
                <MissionContentAbout></MissionContentAbout>
                <MissionContentAbItem>
                  {parse(item.text ?? '')}
                </MissionContentAbItem>
               
                {item?.files.map((file,id)=>(
                <DwBlockBorder key={idx}>
                   {console.log(file)}
                        <DownloadBlock>
                          {/* <img src="" alt="s" width={100} height={100} /> */}
                          <FinicialBloclContent>
                            {file?.title}
                            <FinicialP>{file?.size}</FinicialP>{" "}
                            <FinicialP>Обновлено {file?.updated_at}</FinicialP>
                          </FinicialBloclContent>
                        </DownloadBlock>
                        <DwBtnBlock>
                          <MainBtn
                            onClass="download"
                            text={t("common:Download")}
                            url={file?.url ?? ''}
                          />
                        </DwBtnBlock>
                      </DwBlockBorder>
                ))}
              </div>

              
            ))}

          <AboutNav sidebars={data?.sidebar} />
        </MissionContent>
      </MissionBody>
    </>
  );
};

export default MissionComp;
