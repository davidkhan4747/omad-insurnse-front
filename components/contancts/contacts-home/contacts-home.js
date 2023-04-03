import {
  ContactsHomeBlock,
  ContactsHomeBG,
  ContactsBlock,
  ContactsBlockHeading,
  ContactsBlockSlogan,
  ContactsBlockLokations,
  ConImg,
} from "./contacts-home.e";
import Image from "next/image";
import { useTranslation } from "react-i18next";
const ContactsHome  = ({ data }) => {
  const { t } = useTranslation();
  return (
    data && (
      <ContactsHomeBG>
        <ContactsHomeBlock>
          <ContactsBlock>
            
            <ContactsBlockHeading> Контакты</ContactsBlockHeading>
            <ContactsBlockSlogan>«OMAD SUG’URTA»</ContactsBlockSlogan>
            <ContactsBlockLokations>
              {data[0].address}
            </ContactsBlockLokations>
            <ContactsBlockLokations>
              {data[0].phone_number} <br />
              {data[0].email}
            </ContactsBlockLokations>
          </ContactsBlock>
          <ConImg>
            <img src={data[0].image} />
            
          </ConImg>
        </ContactsHomeBlock>
      </ContactsHomeBG>
    )
  );
};
export default ContactsHome;
