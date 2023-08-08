import { BtnHug, BtnTertiary, Input } from "shared/ui";
import style from "./auth.module.css";
import { FC } from "react";
import { ReactComponent as AuthSVG } from "../assets/auth.svg";
import { SplitView } from "widgets/split-view/ui/SplitView";
import { handleFormSubmiting } from "widgets/split-view";

export const Auth: FC = () => {
    const handleFormSubmit: handleFormSubmiting = (e) => {
        e.preventDefault();
    };

    return (
        <SplitView handleFormSubmiting={handleFormSubmit} Image={AuthSVG}>
            <div className={style.title}>Войти</div>
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
            <BtnTertiary className={style.button} grow onClick={() => {}}>
                Создать Аккаунт
            </BtnTertiary>
        </SplitView>
    );
};
