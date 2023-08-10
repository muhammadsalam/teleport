import { FC, useState, useEffect, useRef } from "react";
import { ReactComponent as RecoverySVG } from "../assets/recovery.svg";
import { SplitView, handleFormSubmiting } from "widgets/split-view";
import style from "./recovery.module.css";
import { BtnHug, BtnTertiary, Input } from "shared/ui";
import { Link } from "react-router-dom";
import QueryString from "qs";

export const Recovery: FC = () => {
    const [isEmailGet, setIsEmailGet] = useState<boolean>(false);
    const [isEmailPost, setIsEmailPost] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleFormSubmit: handleFormSubmiting = (e) => {
        if (!isEmailGet) {
            console.log("письмо отправлено");

            setIsEmailPost(true);
            return e.preventDefault();
        }

        console.log("пароль восстановлен мол");

        return e.preventDefault();
    };

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
                        disabled={isEmailPost}
                    />
                    <BtnHug
                        className={style.button}
                        grow
                        disabled={isEmailPost}
                    >
                        {isEmailPost ? "Письмо отправлено" : "Отправить письмо"}
                    </BtnHug>
                    <Link to="/auth" className={style.link}>
                        <BtnTertiary
                            className={style.button}
                            grow
                            typeof="button"
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
