import { FC } from "react";
import style from "./ui.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as InternalServerSVG } from "./assets/500.svg";
import { BtnHug } from "shared/ui";
import { SplitView } from "widgets/split-view";

export const InternalServerError: FC = () => {
    return (
        <SplitView
            handleFormSubmiting={(e) => e.preventDefault()}
            Image={InternalServerSVG}
        >
            <h1 className={style.title}>Упс, что-то пошло не так</h1>
            <p className={style.description}>
                Ошибка сервера 500. Приносим извинения, мы исправляем проблему.
                Пожалуйста, попробуйте еще раз чуть позже
            </p>
            <Link to="/" className={style.link}>
                <BtnHug className={style.button} grow typeof="button">
                    Назад
                </BtnHug>
            </Link>
        </SplitView>
    );
};
