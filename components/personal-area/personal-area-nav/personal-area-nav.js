import NextLink from "next/link";
import {HeaderNavBody,
        PersonalAreaUserNav,
        PersonalAreaNavbar,
        PersonalAreaUserNavLi,
        PersonalAreaSettings,
        NavBurger
        
        } from './pesonal-area-nav.e'
import PersonalNavBurger from '../../common/personal-nav-burger/pesonal-nav-burger'
import { useTranslation } from "react-i18next";
import { GWrapper } from "../../../styles/global-styles.e";
const PersonalAreaNav = () => {
    const {t} = useTranslation()
    return (
        <>
        <HeaderNavBody/>
        <GWrapper>
        <PersonalAreaNavbar>
            <NavBurger>
              <PersonalNavBurger/>
            </NavBurger>
            
            <PersonalAreaUserNav>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/info'>{t('common:Information')}</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/user-data'>{t('common:My_details')}</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/my-polic'>{t('common:My_insurance_policies')}</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/buy'>{t('common:buy_online')}</NextLink>
                </PersonalAreaUserNavLi>
                <PersonalAreaUserNavLi>
                    <NextLink href='/personal-area/polic-updates'>{t('common:ubdate_onliine')}</NextLink>
                </PersonalAreaUserNavLi>
            </PersonalAreaUserNav>
            <PersonalAreaSettings> <NextLink href='/personal-area/settings'>{t('common:settings')}</NextLink></PersonalAreaSettings>
        </PersonalAreaNavbar>
        </GWrapper>
        </>

    )

}

export default PersonalAreaNav;
