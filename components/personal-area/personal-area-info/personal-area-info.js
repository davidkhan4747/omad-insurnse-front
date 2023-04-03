import {
    PersonalAreaBodyBg,
    PersonalAreaBodyHeading,
    PersonalAreaBodyCardBody,
    PersonalAreaBodyCard,
    PersonalAreaBodyCardHeading,
    PersonalAreaBodyCardText,
    ButtonCard,
    
}   from './personal-area-info.e'
import {CardButton} from '../../yur-face-page/CardBlock/CardBlock.e'
import { GWrapper } from "../../../styles/global-styles.e";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const PersonalAreaInfo  = () => {
    const {t} = useTranslation()
    return (
    <PersonalAreaBodyBg>
    <GWrapper>
        <PersonalAreaBodyHeading>{t('common:Welcome')} <br/>{t('common:Welcome2')}</PersonalAreaBodyHeading>
        <PersonalAreaBodyCardBody>
                <PersonalAreaBodyCard>
                    <PersonalAreaBodyCardHeading>{t('common:My_details')}</PersonalAreaBodyCardHeading>
                    <PersonalAreaBodyCardText>{t('common:info_details_personal_area')}</PersonalAreaBodyCardText>
                    <ButtonCard><CardButton><Link href={'/personal-area/user-data'}><a>{t('common:Go_to')}</a></Link></CardButton></ButtonCard>
                </PersonalAreaBodyCard>
                <PersonalAreaBodyCard>
                    <PersonalAreaBodyCardHeading>{t('common:My_insurance_policies')}</PersonalAreaBodyCardHeading>
                    <PersonalAreaBodyCardText>{t('common:infp_ins_polic_List')}</PersonalAreaBodyCardText>
                    <ButtonCard><CardButton><Link href={'/personal-area/my-polic'}><a>{t('common:Go_to')}</a></Link></CardButton></ButtonCard>
                </PersonalAreaBodyCard>
                <PersonalAreaBodyCard>
                    <PersonalAreaBodyCardHeading>{t('common:buy_online')}</PersonalAreaBodyCardHeading>
                    <PersonalAreaBodyCardText>{t('common:buy_online_info')}</PersonalAreaBodyCardText>
                    <ButtonCard><CardButton><Link href={'/personal-area/buy'}><a>{t('common:Go_to')}</a></Link></CardButton></ButtonCard>
                </PersonalAreaBodyCard>
                <PersonalAreaBodyCard>
                    <PersonalAreaBodyCardHeading>{t('common:renew_policy')}</PersonalAreaBodyCardHeading>
                    <PersonalAreaBodyCardText>{t('common:renew_policy_INFO')}</PersonalAreaBodyCardText>
                    <PersonalAreaBodyCardText>{t('common:renew_policy_INFO22')}</PersonalAreaBodyCardText>
                    <ButtonCard><CardButton><Link href={'/personal-area/polic-updates'}><a>{t('common:Go_to')}</a></Link></CardButton></ButtonCard>
                </PersonalAreaBodyCard>
                <PersonalAreaBodyCard>
                    <PersonalAreaBodyCardHeading>{t('common:settings')}</PersonalAreaBodyCardHeading>
                    <PersonalAreaBodyCardText>{t('common:settings_info')}</PersonalAreaBodyCardText>
                    <ButtonCard><CardButton><Link href={'/personal-area/settings'}><a>{t('common:Go_to')}</a></Link></CardButton></ButtonCard>
                </PersonalAreaBodyCard>
        </PersonalAreaBodyCardBody>
    </GWrapper>
    </PersonalAreaBodyBg>
    )
    


    

}

export default PersonalAreaInfo;
