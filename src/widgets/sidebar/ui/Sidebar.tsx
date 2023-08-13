import { FC, useState } from "react";
import styles from "./Sidebar.module.sass";
import { Icon, Logo } from "shared/ui";
import { ccn } from "shared/lib";
import { Link } from "react-router-dom";
import { tabListType } from "./Sidebar.types";

export const Sidebar: FC = () => {
    const [isSwitchActive, setIsSwitchActive] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>(
        window.location.pathname === "/" ? "/pages" : window.location.pathname
    );

    const handleSwitchClick: () => void = () => {
        setIsSwitchActive(!isSwitchActive);
    };

    const tabList: tabListType = [
        {
            icon: <Icon name="page" />,
            title: "Мои страницы",
            to: "/pages",
        },
        {
            icon: <Icon name="coin" />,
            title: "Баланс",
            span: <span className={styles.list__item__span}>50,00 ₽</span>,
            to: "/balance",
        },
        {
            icon: <Icon name="net" />,
            title: "Домены",
            to: "/domains",
        },
        {
            icon: <Icon name="partners" />,
            title: "Партнерская программа",
            to: "/affiliate",
        },
        {
            icon: <Icon name="book" />,
            title: "Обучающие материалы",
            to: "/materials",
        },
        {
            icon: <Icon name="gear-wheel" />,
            title: "Настройки",
            to: "/settings",
        },
    ];

    const handleActiveTabChange = (title: string) => {
        setActiveTab(title);
    };

    return (
        <div className={styles.sidebar}>
            <Logo />
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {tabList.map((item) => (
                        <li
                            key={item.title}
                            className={styles.list__item}
                            onClick={() => handleActiveTabChange(item.to)}
                        >
                            <Link
                                className={ccn(
                                    styles.list__link,
                                    activeTab.includes(item.to) &&
                                        styles.list__link_active
                                )}
                                to={item.to}
                            >
                                {item.icon}
                                {item.title}
                                {item.span}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={styles.bottom}>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <a className={styles.list__link} href="#">
                            <Icon name="exit" />
                            Выход
                        </a>
                    </li>
                    <li
                        className={ccn(
                            styles.list__item,
                            isSwitchActive && styles.list__item_active
                        )}
                        onClick={handleSwitchClick}
                    >
                        <a className={styles.list__link} href="#">
                            <Icon name="lamp" />
                            Светлая тема
                            <span
                                className={ccn(
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
