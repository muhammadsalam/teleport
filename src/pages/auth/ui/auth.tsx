import { BtnDefault, BtnHug, BtnTertiary, Input, Logo } from "shared/ui";
import style from "./auth.module.css";
import { FC } from "react";
import { ReactComponent as AuthSVG } from "../assets/auth.svg";

export const Auth: FC = () => {
    const handleFormSubmiting = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Logo />
            </header>
            <div className={style.left}>
                <AuthSVG className={style.left_svg} />
            </div>
            <div className={style.right}>
                <form className={style.form} onSubmit={handleFormSubmiting}>
                    <div className={style.right_title}>Войти</div>
                    <Input
                        type="text"
                        placeholder="Введите логин"
                        label="Имя пользователя"
                        className={style.input}
                    />
                    <Input
                        type="password"
                        placeholder="Введите пароль"
                        label="Пароль"
                        className={style.input}
                    />
                    <a className={style.recovery} href="#">
                        Забыли пароль?
                    </a>
                    <BtnHug className={style.button} grow onClick={() => {}}>
                        Войти
                    </BtnHug>
                    <BtnTertiary
                        className={style.button}
                        grow
                        onClick={() => {}}
                    >
                        Создать Аккаунт
                    </BtnTertiary>
                </form>
            </div>
        </div>
    );
};
