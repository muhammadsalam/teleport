import { FC, useState } from "react";
import { ReactComponent as RecoverySVG } from "../assets/recovery.svg";
import { SplitView, handleFormSubmiting } from "widgets/split-view";
import style from "./recovery.module.css";
import { BtnHug, BtnTertiary, Input } from "shared/ui";
import { Link } from "react-router-dom";

export const Recovery: FC = () => {
    const handleFormSubmit: handleFormSubmiting = (e) => {
        e.preventDefault();
    };

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleRequest = () => {};

    return (
        <SplitView handleFormSubmiting={handleFormSubmit} Image={RecoverySVG}>
            <div className={style.title}>Восстановление пароля</div>
            <>
                <Input
                    state={email}
                    setState={setEmail}
                    type="email"
                    label="Email адрес"
                    placeholder="Введите Email"
                    className={style.input}
                />
                <BtnHug className={style.button} grow onClick={() => {}}>
                    Отправить письмо
                </BtnHug>
                <Link to="/auth" className={style.link}>
                    <BtnTertiary
                        className={style.button}
                        grow
                        onClick={() => {}}
                    >
                        Войти
                    </BtnTertiary>
                </Link>
            </>
            <>
                {/* <Input
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
                className={style.input}
            /> */}
                {/* <Input
                type="password"
                label="Подтвердить Пароль"
                placeholder="Подтвердите пароль"
                className={style.input}
            /> */}
            </>
        </SplitView>
    );
};
