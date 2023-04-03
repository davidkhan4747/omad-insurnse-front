import {
  Layout,
  Navbar,
  News,
  CardAccident,
} from "../../../components";
import { Wrapper } from "../../../styles/global-styles.e";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { api_url } from "../../../services/api";


export default function  InsuranceCase(props) {
  console.log(props.data.data)
  return (
    <Layout title={'Произошло ДТП'} >
      <Wrapper>
        <Navbar  />
          <CardAccident data={props.data.data} />
        <News />
      </Wrapper>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  try{
    const result = await fetch(`${api_url}/insurance-case/content?slug=${slug}`,{ headers: {'x-lang': context.locale}});
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
