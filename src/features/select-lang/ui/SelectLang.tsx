import style from "./SelectLang.module.scss";
import { FC, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as RuFlag } from "../assets/countries/ru.svg";
import { ccn, useOutsideClick } from "shared/lib";
import { Icon } from "shared/ui";

type langFlagKey = "en" | "ru" | "uk";

type langFlag = {
    [key in langFlagKey]: JSX.Element;
};

const langs: langFlag = { ru: <RuFlag />, en: <RuFlag />, uk: <RuFlag /> };

export const SelectLang: FC = () => {
    const [value, setValue] = useState<langFlagKey>("ru");
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleMount() {
        setIsMounted((state) => !state);
    }

    function handleItemClick(option: langFlagKey) {
        setValue(option);
    }

    useOutsideClick(dropdownRef, () => setIsMounted(false), style.select);

    return (
        <div className={style.select}>
            <div
                className={ccn(
                    style.selected,
                    isMounted && style.selected__opened
                )}
                onClick={handleMount}
            >
                {langs[value]}
                <span className={style.selected_text}>{value}</span>
                <Icon name="arrow-bottom" className={style.selected_arrow} />
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
                        {Object.keys(langs).map(
                            (language) =>
                                language !== value && (
                                    <li
                                        key={language}
                                        className={style.listItem}
                                        onClick={() => {
                                            handleItemClick(
                                                language as langFlagKey
                                            );
                                            setIsMounted((state) => !state);
                                        }}
                                    >
                                        {langs[language as langFlagKey]}
                                        <span className={style.listItem_text}>
                                            {language}
                                        </span>
                                    </li>
                                )
                        )}
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
};
