import {  useState } from "react";
import { ChackTitle, CheckBlock, CheckForm, FormTitle, PolisNum, Wrapper } from "./polis-chack.e";
import { useTranslation } from "next-i18next";
import { UserInfoInput } from "../personal-area/personal-buy/pesonal-buy.e";
import { FlexBlock, FormBtnCheck, FormButtonBlock, FormInsBtn, UserNumber } from "../common/forms-for-insurance/casco/casco.e";
import { FormSog, UserEmail } from "../common/Invite-cooperation-form/Invite-cooperation-form.e";
import { BTNblock } from "../common/partners-comp/partners-comp.e";
import { FormGroup, Checkbox } from "@mui/material";
import Link from "next/link";


const PolisChack = () => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const [check, setCheck] = useState(false);
    const {t} = useTranslation()
  
  return (
    <Wrapper>
        <ChackTitle>{t("common:Policy_check")}</ChackTitle>   
        <CheckBlock>
            <CheckForm>
                <FormTitle>{t("common:danniye")}</FormTitle>
                <PolisNum
                    label={t('common:polis_number')}
                    placeholder='1234567-123456789/20-ТФ'
                /><br/><br/>
                <UserInfoInput
                    label={t('common:name_data')} 
                    placeholder="Иванов Иван Иванович"
                />
                <FormTitle>{t("common:contact")}</FormTitle>
                <FlexBlock className="al-center ">
                    <UserNumber
                    className="chack"
                    label={t('common:number_tel')}
                    placeholder="998 90 989-89-89"
                    />
                    <UserEmail
                        className="chack"
                        label={t('common:Email')}
                        placeholder="status585@mail.ru"
                    />
                </FlexBlock>
                <FormButtonBlock>
                        <FormBtnCheck>
                            <FormGroup>
                                <Checkbox {...label} onClick={() => setCheck(!check)} />
                            </FormGroup>
                            <FormSog className="label">
                                {t('common:policy_conf')}
                                <Link href="" passHref>
                                <a></a>
                                </Link>
                            </FormSog>
                            <FormInsBtn type="submit"   disabled={!check}>
                          {t('common:send')}
                            </FormInsBtn>
                        </FormBtnCheck>
                            
                    
                </FormButtonBlock>
                
            </CheckForm>
        </CheckBlock>
    </Wrapper>
  );
};

export default PolisChack;