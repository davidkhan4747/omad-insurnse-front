import { useState } from "react";
import {
        BodyForm,
        FormBody,
        FormHeading,
        UserInfoInput,
        ButtonAdd,
        ButtonBlock,
        PageForm
        
        
        } from '../personal-buy/pesonal-buy.e'
import { CardButton } from "../../yur-face-page/CardBlock/CardBlock.e";
import { useTranslation } from "react-i18next";
const Settings  = () => {
    const {t} = useTranslation()
    const [ ukraina , setUkraina] = useState(true)

    return (
        <>
        <BodyForm>
            <FormBody>
                <PageForm>
                    <FormHeading>{t('common:Change_Password')}</FormHeading>
                    <UserInfoInput  placeholder={t('common:Enter_new_password')}/>
                    <br/><br/>
                    <UserInfoInput placeholder={t('common:Confirm_new_password')}/>
                </PageForm>
                <ButtonBlock>
                        <CardButton disabled={ukraina} className={  ukraina == true ?  'disablet ' : '' } >{t('common:send')}</CardButton>
                    </ButtonBlock>
            </FormBody>
        </BodyForm>
     


        </>

    )

}



export default Settings ;
