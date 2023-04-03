import {
  Layout,
  Navbar,
  News,
  AgentsBrokers,
} from "../../../../components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import BreadcrumbsBlock from "../../../../components/common/bread-crumbs/Breadcrumbs";
import { api_url } from "../../../../services/api";


export default function  Banks(props) {

  const pageInfo = props.pageInfo;
  const table = props.table;

  const { t } = useTranslation();

  return (
    <Layout title={t("Агентам и брокерам")}>
      <Navbar />
      <BreadcrumbsBlock
        breadcrumb={pageInfo?.data?.breadcrumb}
      />
      {!!pageInfo && !!table ? (
        <AgentsBrokers title={pageInfo.data.head.title}
          data={pageInfo.data}
          table={table.data} />
      ) : (
        ""
      )}

      <News/>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  try{
    const { id } = context.params;
    const result = await fetch(`${api_url}/partners/find?id=${id}`,{ headers: {'x-lang': context.locale}});
    const resultTable = await fetch(`${api_url}/partners/tablesAgentAndBrokers`,{ headers: {'x-lang': context.locale}});
    const pageInfo = await result.json();
    const table = await resultTable.json();
    return {
      props: {
        pageInfo,
        table,
        ...(await serverSideTranslations(context.locale, ["common"])),
      }
    }
  }catch(error){
      return { 
        notFound: true
      }
    }
}
