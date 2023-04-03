import {
  Layout,
  Navbar,
  HeroBg,
  SectionTitle,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { MWrapper, Wrapper } from "../../styles/global-styles.e";
import bgImg from "../../public/slider1.jpg";
import { api, api_url } from "../../services/api";
import parse from "html-react-parser";
import FourSlider from "../../components/news/news-body/four-slider/four-slider";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { useRouter } from "next/router";

export default function NewsPage(props){
  const post = props.data.data.data;
  const partNews = props.data.data.part;
  const router = useRouter()
  return (
 
    <Layout title={post.title}>
      <Wrapper>
        <Navbar />
        <HeroBg
          data={[
            {
              name: "Новость",
              bg_image: bgImg.src,
              description: "",
            },
          ]}
        />
       <Wrapper>
     
       <MWrapper>
        {post && (
          <>
            <SectionTitle title={post?.title} color="black" classN="title" />
            {parse(post.text)}
          </>   
        )}
       
        <SectionTitle title="Други новости" color="black" classN="title-slider" />
        <div className="four-sldier">
          <FourSlider news={partNews} />
        </div>
      </MWrapper>
  
    </Wrapper>


      </Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  try{
    const { slug } = context.params;
    const result = await fetch(`${api_url}/news/show/${slug}` ,{ headers: {'x-lang': context.locale}});
    const data = await result.json();
    return {
      props: {
        data,
        ...(await serverSideTranslations(context.locale, ["common"])),
      }
    }
  }catch(error){
      return { 
        notFound: true
      }
    }
}
  


