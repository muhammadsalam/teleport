import { FC, useState, useEffect, useCallback } from "react";
import { ReactComponent as RecoverySVG } from "../assets/recovery.svg";
import { SplitView, handleFormSubmiting } from "widgets/split-view";
import style from "./recovery.module.css";
import { BtnHug, BtnTertiary, Input } from "shared/ui";
import { Link } from "react-router-dom";
import QueryString from "qs";

export const Recovery: FC = () => {
    const handleFormSubmit: handleFormSubmiting = (e) => {
        e.preventDefault();
    };

    const [isEmailGet, setIsEmailGet] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleRequest = () => {};

    useEffect(() => {
        const params = QueryString.parse(window.location.search.substring(1));

        if (params.hasOwnProperty("getPath")) {
            setIsEmailGet(true);
        }
    }, []);

    return (
        <SplitView handleFormSubmiting={handleFormSubmit} Image={RecoverySVG}>
            <div className={style.title}>Восстановление пароля</div>
            {!isEmailGet ? (
                <>
                    <Input
                        state={email}
                        setState={setEmail}
                        type="email"
                        label="Email адрес"
                        placeholder="Введите Email"
                        className={style.input}
                    />
                    <BtnHug
                        className={style.button}
                        grow
                        typeof="button"
                        onClick={() => {}}
                    >
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
            ) : (
                <>
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
                        Восстановить
                    </BtnHug>
                </>
            )}
        </SplitView>
    );
};
