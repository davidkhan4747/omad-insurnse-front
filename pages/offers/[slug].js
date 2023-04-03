import {
  Layout,
  Navbar,
  News
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { api_url } from "../../services/api";
import SpecialOffersSingle from "../../components/common/special-offers-single/special-offers-single";


export default function Banks(props) {
  const offer  = props.data;

  const breadcrumb = [
    {
      slug: '/',
      title: 'Главный'
    },
    {
      slug: '/offers/'+offer.data.slug,
      title: offer.data.title
    }
  ]
  return (
    <Layout title={offer?.data.title}>
      <Navbar onClass="active" />
      <BreadcrumbsBlock breadcrumb={breadcrumb} />
      
    <SpecialOffersSingle data={offer?.data}/>
      <News />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  try{
    const { slug } = context.params;
    const result = await fetch(`${api_url}/offers/${slug}` ,{ headers: {'x-lang': context.locale}});
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