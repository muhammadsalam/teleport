import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Input.module.sass";
import { ReactComponent as ArrowLeftSVG } from "Icon/arrow-left.svg";
import { ReactComponent as ArrowRightSVG } from "Icon/arrow-right.svg";
import { combineClassNames } from "Util/combineClassNames";
import { ru } from "date-fns/locale";
import Button from "../Button/Button";

const Calendar = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [activeTab, setActiveTab] = useState("Выбрать");

    const onChange = (dates: [Date, Date]) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

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
            <DatePicker
                onChange={onChange}
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd.MM.yyyy"
                placeholderText="Дата"
                monthsShown={2}
                className={styles.datepicker__input}
                wrapperClassName={styles.datepicker__wrapper}
                popperClassName={styles.datepicker__popper}
                calendarClassName={styles.datepicker__calendar}
                dayClassName={(date) => styles.datepicker__day}
                weekDayClassName={(date) => styles.datepicker__day_name}
                calendarContainer={({ children }) => {
                    return (
                        <div
                            className={combineClassNames(
                                styles.datepicker__calendar,
                                "react-datepicker"
                            )}
                        >
                            <CalendarLeft />
                            <div className={styles.calendar_right}>
                                <div className={styles.calendar_middle}>
                                    {children}
                                </div>
                                <div className={styles.calendar_right__buttons}>
                                    <Button.Hug variant="secondary">
                                        Отмена
                                    </Button.Hug>
                                    <Button.Hug>Применить</Button.Hug>
                                </div>
                            </div>
                        </div>
                    );
                }}
                selectsRange
                renderCustomHeader={({
                    monthDate,
                    customHeaderCount,
                    decreaseMonth,
                    increaseMonth,
                }) => (
                    <div className={styles.datepicker__header}>
                        <button
                            aria-label="Previous Month"
                            className={combineClassNames(
                                styles.datepicker__navigation,
                                styles.datepicker__navigation_previous
                            )}
                            style={
                                customHeaderCount === 1
                                    ? { visibility: "hidden" }
                                    : {}
                            }
                            onClick={decreaseMonth}
                        >
                            <ArrowLeftSVG />
                        </button>
                        <span className={styles.datepicker__month}>
                            {monthDate
                                .toLocaleString("ru", {
                                    month: "long",
                                    year: "numeric",
                                })
                                .replace(/(\sг\.)$/g, "")}
                        </span>
                        <button
                            aria-label="Next Month"
                            className={combineClassNames(
                                styles.datepicker__navigation,
                                styles.datepicker__navigation_next
                            )}
                            style={
                                customHeaderCount === 0
                                    ? { visibility: "hidden" }
                                    : {}
                            }
                            onClick={increaseMonth}
                        >
                            <ArrowRightSVG />
                        </button>
                    </div>
                )}
                locale={ru}
            />
        </div>
    );
};

export default Calendar;
