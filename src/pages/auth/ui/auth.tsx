import { BtnDefault, BtnHug, Input, Logo } from "shared/ui";
import style from "./auth.module.css";
import { FC } from "react";
import { ReactComponent as AuthSVG } from "../assets/auth.svg";

export const Auth: FC = () => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Logo />
            </header>
            <div className={style.left}>
                <AuthSVG className={style.left_svg} />
            </div>
            <div className={style.right}>
                <div className={style.right_title}>Войти</div>
                <Input
                    type="text"
                    placeholder="Введите логин"
                    label="Имя пользователя"
                />
                <Input
                    type="password"
                    placeholder="Введите пароль"
                    label="Пароль"
                />
                <a href="#">Забыли пароль?</a>
                <BtnHug grow={true} onClick={() => {}}>
                    Войти
                </BtnHug>
            </div>
        </div>
    );
};
