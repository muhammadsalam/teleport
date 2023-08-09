import { FC, useState } from "react";
import { ReactComponent as RegisterSVG } from "../assets/register.svg";
import { SplitView, handleFormSubmiting } from "widgets/split-view";
import style from "./register.module.css";
import { BtnHug, BtnTertiary, Input } from "shared/ui";
import { Link } from "react-router-dom";

export const Register: FC = () => {
    const [login, setLogin] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleFormSubmit: handleFormSubmiting = (e) => {
        e.preventDefault();
    };

    return (
        <SplitView handleFormSubmiting={handleFormSubmit} Image={RegisterSVG}>
            <div className={style.title}>Регистрация</div>
            <Input
                state={login}
                setState={setLogin}
                type="text"
                label="Имя пользователя"
                placeholder="Введите логин"
                className={style.input}
            />
            <Input
                state={email}
                setState={setEmail}
                type="text"
                label="Email адрес"
                placeholder="Введите Email"
                className={style.input}
            />
            <Input
                state={password}
                setState={setPassword}
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                className={style.input}
            />
            <Input
                state={confirmPassword}
                setState={setConfirmPassword}
                type="password"
                label="Подтвердить Пароль"
                placeholder="Подтвердите пароль"
                className={style.input}
            />
            <BtnHug className={style.button} grow onClick={() => {}}>
                Создать аккаунт
            </BtnHug>
            <Link to="/auth" className={style.link}>
                <BtnTertiary className={style.button} grow typeof="button">
                    Войти
                </BtnTertiary>
            </Link>
        </SplitView>
    );
};
