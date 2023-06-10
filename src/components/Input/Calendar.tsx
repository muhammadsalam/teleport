import { FC, useState } from "react";
import "@y0c/react-datepicker/assets/styles/calendar.scss";
import styles from "./Input.module.sass";
import { RangeDatePicker } from "@y0c/react-datepicker";
import { combineClassNames } from "~/utils/combineClassNames";

export const Calendar: FC = () => {
    const [activeTab, setActiveTab] = useState("Выбрать");

    type leftItem = {
        title: string;
        start?: {
            m: number;
            d: number;
            y: number;
        };
        end?: {
            m: number;
            d: number;
            y: number;
        };
    };

    const leftArray: leftItem[] = [
        { title: "Выбрать" },
        { title: "День" },
        { title: "Неделя" },
        { title: "Месяц" },
        { title: "Последние  7 дней" },
        { title: "Будущий месяц" },
        { title: "Последние 6 месяцев" },
        { title: "Прошедший год" },
        { title: "Все время" },
    ];

    const handleTabClick = (title: string) => {
        setActiveTab(title);
    };

    const CalendarLeft: FC = () => {
        return (
            <ul className={styles.leftList}>
                {leftArray.map((item) => (
                    <li
                        className={combineClassNames(
                            styles.left__item,
                            activeTab === item.title && styles.left__item_active
                        )}
                        key={item.title}
                        onClick={() => handleTabClick(item.title)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className={styles.datepicker}>
            <span className={styles.datepicker__title}>Выбрать период</span>
            <div className={styles.datepicker__block}>
                <RangeDatePicker
                    locale="ru"
                    wrapper={(calendar) => (
                        <div className={styles.datepicker__wrapper}>
                            <CalendarLeft />
                            {calendar}
                        </div>
                    )}
                    dateFormat="DD-MM-YYYY"
                    className={styles.datepicker_calendar}
                    customDayClass={() => styles.datepicker_day}
                />
            </div>
        </div>
    );
};
