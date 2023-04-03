import Link from "next/dist/client/link";
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../../styles/global-styles.e";
import { MissionBody, MissionContent, MissionNav, MissionNavItem } from "../mission/Mission.e";
import { SectionTitle, MainBtn , AboutNav } from "../../common";
import { useTranslation } from "react-i18next";
import { FinancialYears ,FinancialBlock, FinancialBlockTitle, FinicialBloclContent, DownloadBlock, FinicialP, DwBtnBlock, DwBlockBorder} from "../financial-performance/financial-performance.e";
import Image from "next/image";


import {RulesSearch,
        Slogan,
        Pravila,
        InfoDoc,
        InfoDocItem,
        BlockDocs,
        Suk
        } from  "../Insurance-rules/Insurance-rules.e"
// import PDFImage from "../../../../assets/images/about/carbon_document-pdf.png";


const main_image = '/slider1.jpg'
const PDFImage = '/carbon_document-pdf.png'

const PressCenter = ({title,description}) => {
  const [active , setActive ] = useState('active')

  const HandlAct = () =>{
    setActive('active')
  }
  const HandlPrivate = () =>{
    setActive('active2')
  }
  const {t} = useTranslation()
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
            <FinancialYears onClick={HandlAct} className={active == 'active' ? 'active' : ''}>
                <Slogan>Правила страхования</Slogan>
            </FinancialYears>
            <FinancialYears onClick={HandlPrivate} className={active == 'active2' ?  'active' : " "}>
                <Slogan>Архив </Slogan>
            </FinancialYears>
            
          </FinancialBlock>
          <FinancialBlockTitle>Информация для подаци заявок</FinancialBlockTitle>
          <FinicialBloclContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo consectetur est facilisis tristique dolor. Congue massa vitae feugiat egestas cras tempus. Ac proin lacus id placerat quis nunc, leo pellentesque. Eros, etiam dui risus non massa tortor at eros. Varius nulla magnis habitant feugiat tortor.</FinicialBloclContent>
          {/* <DwBlockBorder>
            <DownloadBlock>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>
            </DownloadBlock>
            <DwBtnBlock>
              <MainBtn onClass="download" text={t('common:Download')} url="/" />
            </DwBtnBlock>
          </DwBlockBorder> */}
          {/* <DwBlockBorder>
          <FinancialBlockTitle>Отчетность по ГОС стандартам</FinancialBlockTitle>
            <DownloadBlock>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>
              <Image src={PDFImage} alt='s' width={100} height={100}/>
              <FinicialBloclContent>Консолидированная финансовая отчетность за 2020 год.pdf <FinicialP>2.32 МБ</FinicialP> <FinicialP>Обновлено 24.05.2021 в 14:00</FinicialP></FinicialBloclContent>

            </DownloadBlock>
            <DwBtnBlock>
              <MainBtn onClass="download" text={t('common:Download')} url="/" />
            </DwBtnBlock>
          </DwBlockBorder> */}
          <FinancialBlockTitle>Текущие закупки</FinancialBlockTitle>
          <RulesSearch
              placeholder="lorem lorem "
              label={t('Найти Статью')}
              type={'search'}
            />
            <Pravila>№ 3 Правила добровольного медицинского страхования</Pravila>
            <BlockDocs>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
            </BlockDocs>
            <Pravila>№ 3 Правила добровольного медицинского страхования</Pravila>

            <BlockDocs>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
            </BlockDocs>
            <Pravila>№ 3 Правила добровольного медицинского страхования</Pravila>

            <BlockDocs>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
                <div>
                    <Image src={PDFImage} width={85} height={82} /> 
                    <InfoDoc>Актуарное заключение за 2020 год.pdf
                        </InfoDoc>
                    <InfoDocItem> 19.31 МБ
                        Обновлено 24.05.2021 в 14:0</InfoDocItem>
                        <Suk>
                            <MainBtn
                                    onClass="download"
                                    text={t("common:Download")} url={null}                        // url={item.files[0].file}
                        />
                        </Suk>
                        
                </div>
            </BlockDocs>
        </div>
        <AboutNav/>
      </MissionContent>
    </MissionBody>
  </>
   
    
  );


};

export default PressCenter;
