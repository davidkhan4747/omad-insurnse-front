import {  useEffect, useState ,useContext} from "react";
import NextLink from "next/link";
import { Link } from "@mui/material";
import { api } from "../../../../services/api";
import slugify from "slugify";
import User from "../../../../assets/images/navbar/user.svg";
import { AuthContext } from "../../../../context/AuthContext";

import Image from 'next/image'
import {
  NavbarBtn,
  LangSwitch
} from '../navbar.e'
import {
  ModalMenuItem,
  ModalMenuList,
  ModalRow,
  ModalSubInnerMenu,
  ModalSubMenuItem,
  Wrapper,
} from "./navbar-modal.e";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GWrapper } from "../../../../styles/global-styles.e";
import setLanguage from "next-translate/setLanguage";
import { parseCookies } from "nookies";
import { i18n, useTranslation } from "next-i18next";

import { useRouter } from "next/router";
const NavbarModal  = ({ isModal }) => {
  let [menuHover, setMenuHover] = useState(false);

  let [menus, setMenus] = useState();
  const router = useRouter()
  useEffect(() => {
    api.get("layout" ,{ headers: {'x-lang': router.locale}}).then((response) => {
      if (response.data.success) {
        setMenus(response.data.data);
      }
    });
  }, [router.query]);

  const [navbarModal, setNavbarModal] = useState(false);
 
  const { logOut } = useContext(AuthContext);
  const { "nextauth.token": token } = parseCookies();

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
    <Wrapper className={isModal ? "active" : ""}>
      <GWrapper className="container">
        <ModalRow>
          <ModalMenuList>
          <ModalMenuItem onMouseMove={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                <NextLink href={`/catalog/individuals/${menus?.categories[0].link}`} >
                  <a>
                  <Link> {menus?.categories[0].name} </Link>
                  </a>
                </NextLink>
                {menus?.categories[0].isSubMenu && (
                  <ModalSubInnerMenu className="inner-menu">
                    {menus?.categories[0].sub?.map((itemChild, idx) => (
                      <ModalSubMenuItem> 
                        <NextLink href={`/individuals/${itemChild.link}`} passHref >
                          <Link>{itemChild.name}</Link>
                        </NextLink>
                      </ModalSubMenuItem>
                    ))}
                  </ModalSubInnerMenu>
                )}
          </ModalMenuItem>
          <ModalMenuItem onMouseMove={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                <NextLink href={`/catalog/individuals/${menus?.categories[1].link}`} >
                  <a>
                  <Link> {menus?.categories[1].name} </Link>
                  </a>
                </NextLink>
                {menus?.categories[1].isSubMenu && (
                  <ModalSubInnerMenu className="inner-menu">
                    {menus?.categories[1].sub?.map((itemChild, idx) => (
                      <ModalSubMenuItem> 
                        <NextLink href={`/individuals/${itemChild.link}`} passHref >
                          <Link>{itemChild.name}</Link>
                        </NextLink>
                      </ModalSubMenuItem>
                    ))}
                  </ModalSubInnerMenu>
                )}
          </ModalMenuItem>
          <ModalMenuItem onMouseMove={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                <NextLink href={`/catalog/per/${menus?.categories[2].link}`} >
                  <a>
                  <Link> {menus?.categories[2].name} </Link>
                  </a>
                </NextLink>
                {menus?.categories[2].isSubMenu && (
                  <ModalSubInnerMenu className="inner-menu">
                    {menus?.categories[2].sub?.map((itemChild, idx) => (
                      <ModalSubMenuItem> 
                        <NextLink href={`/partners/${itemChild.link}`} passHref >
                          <Link>{itemChild.name}</Link>
                        </NextLink>
                      </ModalSubMenuItem>
                    ))}
                  </ModalSubInnerMenu>
                )}
          </ModalMenuItem>
          <ModalMenuItem onMouseMove={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                <NextLink href={`/about`} >
                  <a>
                  <Link> {menus?.categories[3].name} </Link>
                  </a>
                </NextLink>
          </ModalMenuItem>
          <ModalMenuItem onMouseMove={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
                <NextLink href={`/shop`} >
                  <a>
                  <Link> {menus?.categories[4].name} </Link>
                  </a>
                </NextLink>
          </ModalMenuItem>
          
       
          <ModalMenuItem>
            <a href={`/contacts`} >
            <Link >
              Контакты              
            </Link>
          </a>
          </ModalMenuItem>
          <ModalMenuItem className="langs">
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
                  
            </ModalMenuItem>
          
          </ModalMenuList>
        </ModalRow>
      </GWrapper>
    </Wrapper>
  );
};

export default NavbarModal;
