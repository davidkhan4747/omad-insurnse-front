import {
  NotFoundBg,
  NotFoundBlock,
  NotFound,
  NotFoundText,
  NotFoundInfo,
  NoTbtn,
} from "./not-found.e";
import { CardButton } from "../yur-face-page/CardBlock/CardBlock.e";
import Link from "next/link";

const NotFoundPage  = () => {
  return (
    <>
      <NotFoundBg>
        <NotFoundBlock>
          <NotFound>404</NotFound>
          <NotFoundText>Страница не найдена</NotFoundText>
          <NotFoundInfo>
            Неправильно выбран адрес или такой страницы не существует
          </NotFoundInfo>
          <NoTbtn>
            <Link href={"/"} passHref>
              <a>
                <CardButton>Вернутся на главную</CardButton>
              </a>
            </Link>
          </NoTbtn>
        </NotFoundBlock>
      </NotFoundBg>
    </>
  );
};
export default NotFoundPage;
