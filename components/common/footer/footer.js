import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Wrapper,
  FooterUL,
  FooterColumn,
  ColumnHeader,
  NumAndAddress,
  FooterBottom,
} from "./footer.e";
import Image from "next/image";
import { useRouter } from "next/router";
import { GWrapper } from "../../../styles/global-styles.e";
import Logo from "../../../assets/images/footer/logo-bottom.png";
import Instagram from "../../../assets/images/footer/instagram.png";
import Facebook from "../../../assets/images/footer/facebook.png";
import Mail from "../../../assets/images/footer/gmail.png";
import { useTranslation } from "next-i18next";
import { api } from "../../../services/api";


const Footer = () => {
  const { t } = useTranslation();
  const [footer, setFooter] = useState();
  const router = useRouter()

  useEffect(() => {
  api.get("layout" , { headers: {'x-lang': router.locale}}).then( async (res) => {
   await setFooter(res.data.data);
  });
  }, [router]);

  return (
    <Wrapper>
      {footer && (
        <GWrapper>
          <div className="footer-container">
            <FooterColumn className="c-column" >
                <ColumnHeader>{footer?.categories[0].name}</ColumnHeader>
                <FooterUL>
                  {footer?.categories[0].sub.map((link, linkId) => (
                    <li key={linkId}>
                      <Link href={`/individuals/${link.link}`} passHref>
                        <a>{link.name}</a>
                      </Link>
                    </li
                    >
                  ))}
                </FooterUL>
              </FooterColumn>
              <FooterColumn className="c-column" >
                <ColumnHeader>{footer?.categories[1].name}</ColumnHeader>
                <FooterUL>
                  {footer?.categories[1].sub.map((link, linkId) => (
                    <li key={linkId}>
                      <Link href={`/individuals/${link.link}`} passHref> 
                        <a>{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </FooterUL>
              </FooterColumn>
              <FooterColumn className="c-column">
                <ColumnHeader>{footer.categories[2].name}</ColumnHeader>
                <FooterUL>
                  {footer?.categories[2].sub.map((link, linkId) => (
                    <li key={linkId}>
                      <Link href={`/partners/${link.link}`} passHref>
                        <a>{link.name}</a>
                      </Link>
                    </li>
                  ))}
                </FooterUL>
              </FooterColumn>
            <FooterColumn>
            <ColumnHeader>{t('common:about_company')}</ColumnHeader>
            <FooterUL>
                <li>
                    <Link href="/contacts" passHref>
                        <a>{t('common:Contacts')}</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/policy" passHref>
                        <a>{t('common:privacy_policy')}</a>
                    </Link>
                  </li>
                </FooterUL>
            </FooterColumn>
            <FooterColumn className="last-column">
              <ul className="social-net">
                    <li>
                      <Link href={footer?.contact.instagram == null ? '' : footer?.contact.instagram}>
                        <a>
                            <Image src={Instagram} alt="instagram" />
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href={footer?.contact.facebook == null ? '' : footer?.contact.facebook}>
                        <a>
                        <Image src={Facebook} alt="facebook" />
                        </a>
                      </Link>
                    </li>
                  
                    <li>
                      <Link href={'mailto:'+footer?.contact.email}>
                        <a>
                        <Image src={Mail} alt="gmail" />
                        </a>
                      </Link>
                    </li>

              </ul>
              <a href={'mailto:' + footer?.contact.email} target='_blank' className={"maillink"}>
              {footer?.contact.email}
              </a>
                <NumAndAddress>
                  <span>{footer?.contact.phone_number}</span>
                  <span>{footer?.contact.address}</span>
                </NumAndAddress>

         
            </FooterColumn>
          </div>
          <FooterBottom>
            <Link href={'/'}>
                <a>
              <Image src={Logo} alt="logo of Omad" className="bottom-logo" />
                </a>
            </Link>
            <span>© El jamal group все   права защищены</span>
            <small className="khan">© Davidkhan khodjayev</small>
          </FooterBottom>
        </GWrapper>
      )}
    </Wrapper>
  );
};

export default Footer;
