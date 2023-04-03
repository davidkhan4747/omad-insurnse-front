import NextLink from "next/link";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Tag,
  TagsRow,
  TagsTitle,
  TitleRow,
  Wrapper,
  WrapperCategories,
  WrapperTags,
} from "./wrapper-title.e";
import { SectionTitle } from "../index";
import { useState } from "react";
import { useRouter } from "next/router";
const WrapperTitle = ({
  title,
  onClass,
  data,
  sortData,
}) => {
  const { t } = useTranslation();
  const [showBtn, setShowBtb] = useState("show");
  const [activCat , setActivCat] = useState('')
  const [allAc , setAllAc] = useState('All')
  const router = useRouter()
  const{id} = router.query
  const{slug} = router.query
  const activeHandler = (item)=>{

    setActivCat('active')
    setAllAc('')
  }
  const setActiveAll = ()=>{
      setAllAc('All')
    setActivCat('')

  }
  return (
    <Wrapper className={onClass}>
      <TitleRow>
        <WrapperCategories className="wrapper-categories">
          <SectionTitle color="white" title={title} />
        </WrapperCategories>
   
      <WrapperTags className="wrapper-tags">
        <div onClick={setActiveAll} >

        {data != null ? (
          <NextLink href={`/catalog/individuals/${slug}`}>
          <TagsTitle className={allAc}>
                <Link >{t("common:All_categories")}</Link>
          </TagsTitle>
          </NextLink> 
        ) : ('')}
        
        </div>
        
        <TagsRow>
          {data?.map((item, idx) => (
             <NextLink href={`/catalog/individuals/${slug}?sortId=${item.id}`}>
                <Tag onClick={()=>{setAllAc( item.name)}} id={idx} className={ item.name == allAc ? 'active' : item.name} key={idx}>
                  <Link>{item.name}</Link>
                </Tag>
              </NextLink> 
          ))}
        </TagsRow>
      </WrapperTags>
       
      
      </TitleRow>
    </Wrapper>
  );
};

export default WrapperTitle;
