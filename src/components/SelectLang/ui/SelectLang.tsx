import style from "./SelectLang.module.scss";
import { ReactComponent as ArrowDown } from "../assets/common/arrow-bottom.svg";

import { useOutsideClick } from "~/hooks/useOutsideClick";
import { FC, useRef, useState } from "react";
import { combineClassNames } from "~/utils/combineClassNames";
import { CSSTransition } from "react-transition-group";

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
            <div
                className={combineClassNames(
                    style.selected,
                    isMounted && style.selected__opened
                )}
                onClick={handleMount}
            >
                <img
                    className={style.selected_icon}
                    src={require(`../assets/countries/${value}.svg`)}
                />
                <span className={style.selected_text}>{value}</span>
                <ArrowDown />
            </div>

            <CSSTransition
                in={isMounted}
                timeout={300}
                nodeRef={dropdownRef}
                classNames={{
                    enterActive: style.menu__enter_active,
                    enterDone: style.menu__enter_done,
                }}
                unmountOnExit
            >
                <div className={style.menu} ref={dropdownRef}>
                    <ul className={style.list}>
                        <li className={style.listItem}>
                            <img
                                className={style.listItem_icon}
                                src={require(`../assets/countries/${value}.svg`)}
                            />
                            <span className={style.listItem_text}>RU</span>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
};
