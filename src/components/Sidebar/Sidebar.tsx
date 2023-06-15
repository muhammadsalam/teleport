import { ReactComponent as PageSVG } from "Icon/page.svg";
import { ReactComponent as CoinSVG } from "Icon/coin.svg";
import { ReactComponent as NetSVG } from "Icon/net.svg";
import { ReactComponent as PartnersSVG } from "Icon/partners.svg";
import { ReactComponent as BookSVG } from "Icon/book.svg";
import { ReactComponent as GearSVG } from "Icon/gear-wheel.svg";
import { ReactComponent as ExitSVG } from "Icon/exit.svg";
import { ReactComponent as LampSVG } from "Icon/lamp.svg";

import { FC, useState } from "react";
import styles from "./Sidebar.module.sass";
import { combineClassNames } from "~/utils/combineClassNames";

export const Sidebar: FC = () => {
    const [isSwitchActive, setIsSwitchActive] = useState<boolean>(false);

    const handleSwitchClick: () => void = () => {
        setIsSwitchActive(!isSwitchActive);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                T<span>ele</span>p<span>ort</span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <PageSVG />
                            Мои страницы
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a
                            className={combineClassNames(
                                styles.list__link,
                                styles.list__link_active
                            )}
                            href="#"
                        >
                            <CoinSVG />
                            Баланс{" "}
                            <span className={styles.list__item__span}>
                                50,00 ₽
                            </span>
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <NetSVG />
                            Домены
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <PartnersSVG />
                            Партнерская программа
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <BookSVG />
                            Обучающие материалы
                        </a>
                    </li>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <GearSVG />
                            Настройки
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.bottom}>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <ExitSVG />
                            Выход
                        </a>
                    </li>
                    <li
                        className={combineClassNames(
                            styles.list__item,
                            isSwitchActive && styles.list__item_active
                        )}
                        onClick={handleSwitchClick}
                    >
                        <a className={styles.list__link} href="#">
                            <LampSVG />
                            Светлая тема
                            <span
                                className={combineClassNames(
                                    styles.switcher,
                                    styles.switcher_active
                                )}
                            >
                                <span className={styles.switcher__item}></span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
