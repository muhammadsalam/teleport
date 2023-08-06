import { FC, ReactNode, useState } from "react";
import styles from "./Sidebar.module.sass";
import { Icon, Logo } from "shared/ui";
import { ccn } from "shared/lib";

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
            icon: <Icon name="page" />,
            title: "Мои страницы",
        },
        {
            icon: <Icon name="coin" />,
            title: "Баланс",
            span: <span className={styles.list__item__span}>50,00 ₽</span>,
        },
        {
            icon: <Icon name="net" />,
            title: "Домены",
        },
        {
            icon: <Icon name="partners" />,
            title: "Партнерская программа",
        },
        {
            icon: <Icon name="book" />,
            title: "Обучающие материалы",
        },
        {
            icon: <Icon name="gear-wheel" />,
            title: "Настройки",
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
                            onClick={() => handleActiveTabChange(item.title)}
                        >
                            <a
                                className={ccn(
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
