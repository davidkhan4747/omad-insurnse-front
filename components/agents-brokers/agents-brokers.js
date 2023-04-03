import {
  MissionBody,
  MissionContent,
  MissionContentTitle,
} from "../about/mission/Mission.e";

import parse from "html-react-parser";
import {
  ContainerHero,
  HeroBgItem,
  PageHeading,
  PageText,
} from "../yur-face-page/hero-bg/hero-bg.e";
import { GWrapper } from "../../styles/global-styles.e";
import { AboutNav, InviteCooperationForm, PartnersComp } from "../common";
import { useTranslation } from "react-i18next";
import Image from "next/dist/client/image";
import {
  AggentsTable,
  AgentsTd,
  AgentsTR,
  TableDes,
  TitleTable,
  DesTitle,
  SecontTable,
  NumTable,
  TdTitle,
  ResponseTable,
  СenterМ,
} from "./agents-brokers.e";
const main_image = "/slider1.jpg";
const AgentsBrokers  = ({
  description,
  title,
  data,
  table,
}) => {
  const { t } = useTranslation();
  const yes = "/yes.png";
  const no = "/no.png";
  const pdf = "/pdf.png";
  const { content } = data;
  return (
    <>
      <ContainerHero imgUrl={main_image}>
        <GWrapper>
          <HeroBgItem>
            <PageHeading>{title}</PageHeading>
            <PageText>{description}</PageText>
          </HeroBgItem>
        </GWrapper>
      </ContainerHero>

      <MissionBody>
        <MissionContent>
          <div>
            {!!data && (
              <>
                <MissionContentTitle>
                  {data.content[0].title}
                </MissionContentTitle>
                {parse(data.content[0].text)}

                <MissionContentTitle>
                  {data.content[1].title}
                </MissionContentTitle>
                {parse(data.content[1].text)}
              </>
            )}

            {!!table.tableOne && (
              <>
                <AggentsTable>
                  <tbody>
                    <AgentsTR className="none">
                      <AgentsTd className="oneT ">
                        &nbsp; <TitleTable>Преимуществ</TitleTable>{" "}
                      </AgentsTd>
                      <AgentsTd className="twoT ">
                        &nbsp;{" "}
                        <TableDes className="title">
                          {" "}
                          Стандартный агентский договор
                        </TableDes>{" "}
                      </AgentsTd>
                      <AgentsTd className="threeT ">
                        &nbsp;{" "}
                        <TableDes className="title">
                          Онлайн агентский договор
                        </TableDes>{" "}
                      </AgentsTd>
                    </AgentsTR>
                    {table.tableOne?.map((item, idx) => (
                      <AgentsTR key={idx}>
                        <AgentsTd className="oneT">
                          &nbsp; <TitleTable> {item.title}</TitleTable>
                          <DesTitle>{parse(item.description)}</DesTitle>
                        </AgentsTd>
                        <AgentsTd className="twoT">
                          &nbsp;{" "}
                          {item.standart ? (
                            <TdTitle>
                              <Image src={yes} height={40} width={40} />{" "}
                            </TdTitle>
                          ) : (
                            <TdTitle>
                              <Image src={no} height={40} width={40} />{" "}
                            </TdTitle>
                          )}
                        </AgentsTd>
                        <AgentsTd className="threeT">
                          &nbsp;{" "}
                          {item.online ? (
                            <TdTitle>
                              <Image src={yes} height={40} width={40} />{" "}
                            </TdTitle>
                          ) : (
                            <TdTitle>
                              <Image src={no} height={40} width={40} />{" "}
                            </TdTitle>
                          )}
                        </AgentsTd>
                      </AgentsTR>
                    ))}
                  </tbody>
                </AggentsTable>

                <ResponseTable>
                  <tbody>
                    {table.tableOne?.map((item, idx) => (
                      <>
                        <AgentsTR>
                          <AgentsTd>
                            <TableDes className="title">{item.title}</TableDes>
                          </AgentsTd>
                        </AgentsTR>
                        <AgentsTR>
                          <AgentsTd>
                            <TdTitle> Стандартный агентский договор </TdTitle>
                            <СenterМ>
                              {item.standart ? (
                                <TdTitle>
                                  <Image src={yes} height={40} width={40} />{" "}
                                </TdTitle>
                              ) : (
                                <TdTitle>
                                  <Image src={no} height={40} width={40} />{" "}
                                </TdTitle>
                              )}
                            </СenterМ>
                          </AgentsTd>
                        </AgentsTR>
                        <AgentsTR>
                          <AgentsTd>
                            <TdTitle> Онлайн агентский договор</TdTitle>
                            <СenterМ>
                              {item.online ? (
                                <TdTitle>
                                  <Image src={yes} height={40} width={40} />{" "}
                                </TdTitle>
                              ) : (
                                <TdTitle>
                                  <Image src={no} height={40} width={40} />{" "}
                                </TdTitle>
                              )}
                            </СenterМ>
                          </AgentsTd>
                        </AgentsTR>
                      </>
                    ))}
                  </tbody>
                </ResponseTable>
              </>
            )}

            <MissionContentTitle>
              {!!data && data.content[2].title}
            </MissionContentTitle>

            {!!table.tableTwo && (
              <SecontTable>
                <tbody>
                  <AgentsTR>
                    <AgentsTd>
                      <TableDes className="title">
                        Стандартный агентский договор
                      </TableDes>
                    </AgentsTd>
                    <AgentsTd>
                      <TableDes className="title">
                        Онлайн агентский договор
                      </TableDes>
                    </AgentsTd>
                  </AgentsTR>
                  {table.tableTwo.map((item, idx) => (
                    <AgentsTR key={idx}>
                      <AgentsTd>
                        <TdTitle className="Nocenter">
                          <NumTable>{idx + 1}</NumTable>
                          {item.standart_title}
                        </TdTitle>
                        <DesTitle>{parse(item.standart_description)}</DesTitle>
                      </AgentsTd>
                      <AgentsTd>
                        <TdTitle className="Nocenter">
                          <NumTable>{idx + 1}</NumTable>
                          {item.onlayn_title}
                        </TdTitle>
                        <DesTitle>{parse(item.onlayn_description)}</DesTitle>
                      </AgentsTd>
                    </AgentsTR>
                  ))}
                </tbody>
              </SecontTable>
            )}
            {!!data && (
              <>
                {parse(data.content[2].text)}
                {data.content[2].files.length > 0 &&
                  data.content[2].files.map((item, idx) => (
                    <TdTitle className="Nocenter" key={idx}>
                      <Image src={pdf} height={87} width={90} />
                      &nbsp;&nbsp; {item.title} {item.size}
                    </TdTitle>
                  ))}
              </>
            )}

            <InviteCooperationForm />
          </div>

        </MissionContent>

      </MissionBody>
    </>
  );
};

export default AgentsBrokers;
