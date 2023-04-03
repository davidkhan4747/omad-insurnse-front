
import {
  CardsHead,
  CardsHeadItem,
  CardsText,
  CardImg,
  CardContacts,
  CardsTextMini,
  CardContactsHeading,
  CardContactsText,
  MLoc,
  CardsData,
  ContentsCard,
  CardAdress,
} from "./contacts-cards.e";
import parse from "html-react-parser";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ContactsCards  = ({ data }) => {
  const { t } = useTranslation();
  return (
    data && (
      <>
        <CardsHead>
          <CardsHeadItem>
            <CardsText>{t("common:Contacts_of_branches")}</CardsText>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Address")} </CardsTextMini>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Telephones")}</CardsTextMini>
          </CardsHeadItem>
          <CardsHeadItem>
            <CardsTextMini>{t("common:Opening_")}</CardsTextMini>
          </CardsHeadItem>
        </CardsHead>
        {data.map((item, idx) => (
          <CardContacts key={idx}>
            <CardImg>
              <img src={item.image} />
            </CardImg>
            <ContentsCard>
              <CardsData>
                <CardContactsHeading>{item.city}</CardContactsHeading>
                <CardContactsText>{parse(item.address ?? '')}</CardContactsText>
                {item.is_metro == 1 ? (
                <CardAdress>
                  <MLoc>M</MLoc>
                     { item.metro}
                </CardAdress>
                ) : ''}
              </CardsData>
              <CardsData>
                <CardContactsHeading>{parse(item.phone_number ?? '')}</CardContactsHeading>
              </CardsData>
              <CardsData>{parse(item.working_time ?? '')}</CardsData>
            </ContentsCard>
          </CardContacts>
        ))}
      </>
    )
  );
};
export default ContactsCards;
