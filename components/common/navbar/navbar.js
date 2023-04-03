import { FC, useState, useContext } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Link from "next/link";
import NavbarModal from "./navbar-modal/navbar-modal";
import { parseCookies } from "nookies";

import { GWrapper } from "../../../styles/global-styles.e";
import {
  Wrapper,
  NavbarRow,
  NavbarLeft,
  NavbarRight,
  NavbarLogo,
  NavbarLink,
  NavbarBtn,
  LangSwitch,
  LangSwitchSelect,
  TestDiv,
} from "./navbar.e";
import setLanguage from "next-translate/setLanguage";
import { useRouter } from "next/router";
import Logo from "../../../assets/images/navbar/logo.png";
import User from "../../../assets/images/navbar/user.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { i18n, useTranslation } from "next-i18next";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


const Navbar  = ({ onClass }) => {
  const { "nextauth.token": token } = parseCookies();
  const [navbarModal, setNavbarModal] = useState(false);
 
  const router = useRouter();
  // const { logOut } = useContext(AuthContext);

  const handleNavbar = () => {
    setNavbarModal(!navbarModal);
  };
  const setRu = () => {
    setLanguage("ru");
  };
  const setEn = () => {
    console.log(router.locale);
    setLanguage("en");

  };
  const setUz = () => {
    setLanguage("uz");
  };
  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (eventx) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper className={onClass}>
      <GWrapper>
        <NavbarRow>
          <NavbarLeft>
            <NavbarLogo>
              <Link href={"/"} passHref>
                <a>
                  <Image src={Logo} alt="navbar-logo" id="top" />
                </a>
              </Link>
            </NavbarLogo>

            <NextLink scroll={false} href="/shop" passHref>
              <NavbarLink className="toremove">
                {t("common:polit_market")} 
              </NavbarLink>
            </NextLink>

            <NextLink href="/catalog/insurance" passHref>
              <NavbarLink className="toremove">
                {t("common:Insurance_case")}
              </NavbarLink>
            </NextLink>

            <NextLink href="/polis-chack" passHref>
              <NavbarLink className="toremove">
                {t("common:Policy_check")}
              </NavbarLink>
            </NextLink>

          </NavbarLeft>
          <NavbarRight>

            <TestDiv>
              <LangSwitch onClick={async () => await setRu()} value={"ru"} 
              className={router.locale == "ru" ? "active" : ""} > RU </LangSwitch>
              
              <NextLink href={"/"} locale="en">
                <LangSwitch onClick={async () => await setEn()} value={"en"}
                  className={router.locale == "en" ? "active" : ""}
                > EN </LangSwitch>
              </NextLink>

              <LangSwitch onClick={async () => await setUz()} value={"uz"}
                className={router.locale == "uz" ? "active" : ""}
              > UZ </LangSwitch>
            </TestDiv>


            {!!token ? (
              <>
    
                <Menu
                  id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}
                  MenuListProps={{ 
                    "aria-labelledby": "basic-button",
                  }}>

                  <MenuItem onClick={handleClose}>
                    <Link href={"/personal-area"} passHref>
                      <a>{t('common:my_cabinet')}</a>
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>{t('common:my_cabinet')}</MenuItem> */}
                  <MenuItem onClick={() => {
                      // logOut();
                      handleClose();
                    }} >
                    {t('common:logout')}
                  </MenuItem>
                </Menu>
                <NavbarBtn
                  className="navbar-user  avtive net "
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick} >
                  <Image src={'/user.svg'} width={20} height={20} alt="admin-user" />
                </NavbarBtn>
              </>
            ) : (
              <NavbarBtn className="navbar-user net">
                <Link href={"/auth"} passHref>
                  <a>
                    <Image src={'/user.svg'} width={20} height={20} alt="admin-user" />
                  </a> 
                </Link>
              </NavbarBtn>
            )}

            <NavbarBtn className="navbar-menu" onClick={handleNavbar}>
              {t("common:menu")}
              <MenuIcon />
            </NavbarBtn>
          </NavbarRight>
        </NavbarRow>
      </GWrapper>

      <NavbarModal isModal={navbarModal} />
    </Wrapper>
  );
};

export default Navbar;
