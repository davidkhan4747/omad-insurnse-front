import { useState } from "react";
import {MissionBody,MissionContent,MissionContentTitle, } from '../about/mission/Mission.e'
import { ContainerHero, HeroBgItem, PageHeading, PageText } from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import {
  ChtoDelat,
  CHtototTam,
  Danger,
  DangerDes,
  FireLine, LineNumber, Punkt, PunktDes, Punkts, TitleDoc,PP
} from './car-accident.e'
const main_image = '/slider1.jpg'
const CardAccident = ({data}) => {
const {t} = useTranslation()
const PDFImage = '/carbon_document-pdf.png'
  console.log(data)

  return (
  <>
   <ContainerHero imgUrl={main_image}>
      <GWrapper>
        <HeroBgItem>
          <PageHeading>{data[0].title}</PageHeading>
        </HeroBgItem>
      </GWrapper>
    </ContainerHero>
    <MissionBody>
      <MissionContent>
      <div>
        <MissionContentTitle>{data[0].title}</MissionContentTitle>
        <CHtototTam>
          {data[0].contents.map((item,index)=>(
             <Punkts>
               <PP>
               <Punkt>
                 {index+1}
             </Punkt>
               </PP>
             <PunktDes>
               {item.title}
               <ChtoDelat> {parse(item.text)}</ChtoDelat>
             </PunktDes>
           </Punkts>
          ))}
         

        </CHtototTam>
      
       
      </div>
      
      
      </MissionContent>
     
    </MissionBody>
  </>
   
    
  );


};

export default CardAccident;
