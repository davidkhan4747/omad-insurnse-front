import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Tag,
  TagsRow,
  TagsTitle,
  Wrapper,
  WrapperCategories,
  WrapperCategory,
  WrapperRow,
  WrapperTags,
} from "./wrapper-category.e";
import { useRouter } from "next/router";

const HeroCase = ({
  data
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { insurance } = router.query;
  const { sortId } = router.query;
  const { id } = router.query;
  const { slug } = router.query;

  return (
    <Wrapper>
      <WrapperRow>
        <WrapperCategories>
        <Link href={`/shop?insurance=chastnym-licam`}>
          
          <WrapperCategory className={insurance != "yuridicheskim-licam" ? "active" : ""}>
              {t("common:For_individuals")}
          </WrapperCategory>
          </Link>
          <Link href={`/shop/?insurance=yuridicheskim-licam`}>
          <WrapperCategory className={insurance == "yuridicheskim-licam" ? "active" : ""} >
              {t("common:home_card_title3_Legal_entities")}
          </WrapperCategory>
          </Link>

        </WrapperCategories>
        
        <WrapperTags key=''>
            <Link href={`/shop?insurance=${insurance}`} scroll={false}>
              <TagsTitle className={!sortId ? 'active' : ''}>
                {t("common:All_categories")} 
              </TagsTitle>
            </Link>

            <TagsRow>
              {data?.map((item, idx) => (
                <Link href={`/shop?insurance=${insurance}&sortId=${item.id}`} scroll={false}>
                  <Tag className={sortId == item.id ? 'active' : ''}>
                    {item.name}
                  </Tag>
                </Link>
              ))} 
            </TagsRow>
          </WrapperTags>
      </WrapperRow>
    </Wrapper>
  );
};

export default HeroCase;
