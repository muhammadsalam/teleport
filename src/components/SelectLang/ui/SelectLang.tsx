import style from "./SelectLang.module.scss";
import { ReactComponent as ArrowDown } from "../assets/common/arrow-bottom.svg";

import { useOutsideClick } from "~/hooks/useOutsideClick";
import { FC, useRef, useState } from "react";

export const SelectLang: FC = () => {
    const [value, setValue] = useState<string>("ru");
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleMount() {
        setIsMounted(!isMounted);
    }

    function handleItemClick(option: string) {
        setValue(option);
    }

    useOutsideClick(dropdownRef, handleMount, style.select);

    return (
        <div className={style.select}>
            <div className={style.selected}>
                <img
                    className={style.selected_icon}
                    src={`../assets/countries/${value}.svg`}
                />
                <span className={style.selected_text}>{value}</span>
                <ArrowDown />
            </div>
            <div className={style.select_menu} ref={dropdownRef}></div>
        </div>
    );
};
