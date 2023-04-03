import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  WrapperCategories,
  WrapperCategory,
  WrapperRow,
  WrapperTags,
} from "./wrapper-category.e";
import { useRouter } from "next/router";

const HeroCaseInsurance = ({
  data
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { insurance } = router.query;
  const { id } = router.query;
  const { slug } = router.query;

  return (
    <Wrapper>
      <WrapperRow>
        <WrapperCategories>
            <Link href={`/catalog/insurance?insurance=1`}>
                <WrapperCategory className={insurance != 2 ? "active" : ""}>
                    {t("common:For_individuals")}
                </WrapperCategory>
            </Link>
            <Link href={`/catalog/insurance?insurance=2`}>
                <WrapperCategory className={insurance == 2 ? "active" : ""} >
                    {t("common:home_card_title3_Legal_entities")}
                </WrapperCategory>
            </Link>

        </WrapperCategories>
        
       
      </WrapperRow>
    </Wrapper>
  );
};

export default HeroCaseInsurance;
