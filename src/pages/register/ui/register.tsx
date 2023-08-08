import { FC } from "react";
import { ReactComponent as RegisterSVG } from "../assets/register.svg";
import { SplitView, handleFormSubmiting } from "widgets/split-view";
import style from "./register.module.css";
import { BtnHug, BtnTertiary, Input } from "shared/ui";
import { Link } from "react-router-dom";

export const Register: FC = () => {
    const handleFormSubmit: handleFormSubmiting = (e) => {
        e.preventDefault();
    };

    return (
        <SplitView handleFormSubmiting={handleFormSubmit} Image={RegisterSVG}>
            <div className={style.title}>Регистрация</div>
            <Input
                type="text"
                label="Имя пользователя"
                placeholder="Введите логин"
                className={style.input}
            />
            <Input
                type="text"
                label="Email адрес"
                placeholder="Введите Email"
                className={style.input}
            />
            <Input
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                className={style.input}
            />
            <Input
                type="password"
                label="Подтвердить Пароль"
                placeholder="Подтвердите пароль"
                className={style.input}
            />
            <BtnHug className={style.button} grow onClick={() => {}}>
                Создать аккаунт
            </BtnHug>
            <Link to="/auth" className={style.link}>
                <BtnTertiary className={style.button} grow onClick={() => {}}>
                    Войти
                </BtnTertiary>
            </Link>
        </SplitView>
    );
};
