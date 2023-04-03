import {
  Layout,
  Navbar,
  ContactsHome,
  News,
  ContactsCards,
} from "../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { api_url } from "../../services/api";
import BreadcrumbsBlock from "../../components/common/bread-crumbs/Breadcrumbs";
import { useRouter } from "next/router";



export default function Contacts (props) {

  const contact = props.data
  return (
    <Layout  title="КОНТАКТЫ">
      <Navbar />
      {contact && (
        <>
          <ContactsHome data={contact.main_content} /> 
          <ContactsCards data={contact.filials} />
        </>
      )}

      <News/>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  
  try{
    const result = await fetch(`${api_url}/contacts`,{ headers: {'x-lang': context.locale}});
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
