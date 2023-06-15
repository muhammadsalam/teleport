import { ReactComponent as PageSVG } from "Icon/page.svg";
import { ReactComponent as CoinSVG } from "Icon/coin.svg";
import { ReactComponent as NetSVG } from "Icon/net.svg";
import { ReactComponent as PartnersSVG } from "Icon/partners.svg";
import { ReactComponent as BookSVG } from "Icon/book.svg";
import { ReactComponent as GearSVG } from "Icon/gear-wheel.svg";
import { ReactComponent as ExitSVG } from "Icon/exit.svg";
import { ReactComponent as LampSVG } from "Icon/lamp.svg";

import { FC, ReactNode, useState } from "react";
import styles from "./Sidebar.module.sass";
import { combineClassNames } from "~/utils/combineClassNames";

export const Sidebar: FC = () => {
    const [isSwitchActive, setIsSwitchActive] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>("Мои страницы");

    const handleSwitchClick: () => void = () => {
        setIsSwitchActive(!isSwitchActive);
    };

    type tabListType = {
        icon: ReactNode;
        title: string;
        span?: ReactNode;
    }[];

    const tabList: tabListType = [
        {
            icon: <PageSVG />,
            title: "Мои страницы",
        },
        {
            icon: <CoinSVG />,
            title: "Баланс",
            span: <span className={styles.list__item__span}>50,00 ₽</span>,
        },
        {
            icon: <NetSVG />,
            title: "Домены",
        },
        {
            icon: <PartnersSVG />,
            title: "Партнерская программа",
        },
        {
            icon: <BookSVG />,
            title: "Обучающие материалы",
        },
        {
            icon: <GearSVG />,
            title: "Настройки",
        },
    ];

    const handleActiveTabChange = (title: string) => {
        setActiveTab(title);
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                T<span>ele</span>p<span>ort</span>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {tabList.map((item) => (
                        <li
                            key={item.title}
                            className={styles.list__item}
                            onClick={() => handleActiveTabChange(item.title)}
                        >
                            <a
                                className={combineClassNames(
                                    styles.list__link,
                                    activeTab === item.title &&
                                        styles.list__link_active
                                )}
                                href="#"
                            >
                                {item.icon}
                                {item.title}
                                {item.span}
                            </a>
                        </li>
                    ))}
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
                                    isSwitchActive && styles.switcher_active
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
