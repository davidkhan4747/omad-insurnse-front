import {  useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import { Wrapper } from "./news-body.e";
import { MWrapper } from "../../../styles/global-styles.e";
import { SectionTitle } from "../..";

import FourSlider from "./four-slider/four-slider.js";
import { api } from "../../../services/api";
import { useRouter } from "next/router";


const NewsBody= () => {

  const router = useRouter();
  const [news, setNews] = useState();
  
  

  useEffect(() => {
    api.get("v2/news/show/" + router.query.slug).then(async (response) => {
      await setNews(response.data.data.data);
    });
    router.push('news/'+router.query.slug)

  }, [router.query.slug]);
  
  return (
    <Wrapper>
      <MWrapper>
        {news && (
          <>
          {/* @tsignore */}
            <SectionTitle title={news?.title} color="black" classN="title" />
            {parse(news.text)}
          </>   
        )}
       
        <SectionTitle
          title="Други новости"
          color="black"
          classN="title-slider"
        />
        <div className="four-sldier">
          {/* <FourSlider news={} /> */}
        </div>
      </MWrapper>
    </Wrapper>
  );
};

export default NewsBody;
