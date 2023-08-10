import { FC, useEffect } from "react";
import { SplitView } from "widgets/split-view";
import { ReactComponent as NotFoundSVG } from "./assets/404.svg";
import style from "./ui.module.css";
import { BtnHug } from "shared/ui";
import { Link, useNavigate } from "react-router-dom";

export const NotFoundError: FC = () => {
    const navigate = useNavigate();

    useEffect(() => navigate("/404"), []);

    return (
        <SplitView handleFormSubmiting={() => {}} Image={NotFoundSVG}>
            <h1 className={style.title}>Такой страницы не существует</h1>
            <p className={style.description}>
                Страница, которую Вы запрашиваете еще не создана или, возможно,
                была удалена. Если вы считаете, что это ошибочная ситуация,
                сообщите, пожалуйста, разработчикам об ошибке.
            </p>
            <Link to="/">
                <BtnHug className={style.button} typeof="button">
                    Вернуться на главную
                </BtnHug>
            </Link>
        </SplitView>
    );
};
