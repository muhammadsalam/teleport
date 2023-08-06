import { SelectLang } from "features/select-lang";
import style from "./Header.module.scss";
import { FC } from "react";

export const Header: FC = () => {
    return (
        <header className={style.header}>
            <SelectLang />
            <div className={style.header_name}>Александр Нистеренко</div>
            <img
                className={style.header_img}
                src={require("../assets/avatars/1.jpg")}
                alt="Alexander Nistenko"
            />
        </header>
    );
};
