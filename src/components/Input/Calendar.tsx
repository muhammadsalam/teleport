import { FC, forwardRef, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { ReactComponent as ArrowLeftSVG } from "Icon/arrow-left.svg";
import { ReactComponent as ArrowRightSVG } from "Icon/arrow-right.svg";
import { combineClassNames } from "Util/combineClassNames";
import {
    addDays,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    subWeeks,
    subMonths,
    subDays,
    addMonths,
    startOfDay,
    endOfDay,
    subYears,
    startOfYear,
    endOfYear,
} from "date-fns";
import { ru } from "date-fns/locale";
import { BtnHug } from "components";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Input.module.sass";

export const Calendar = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [selectedDates, setSelectedDates] = useState<any>([null, null]);
    const [activeTab, setActiveTab] = useState<leftItem>({
        title: "Выбрать",
    });

    type leftItem = {
        title: string;
        start?: Date;
        end?: Date;
    };

    const today = new Date();
    const startOfWeekDate = startOfWeek(today);
    const endOfWeekDate = endOfWeek(today);
    const startOfMonthDate = startOfMonth(today);
    const endOfMonthDate = endOfMonth(today);
    const lastWeekStartDate = subWeeks(startOfWeekDate, 1);
    const lastWeekEndDate = subDays(endOfWeekDate, 1);
    const nextMonthStartDate = addMonths(startOfMonthDate, 1);
    const nextMonthEndDate = endOfDay(endOfMonth(nextMonthStartDate));
    const last7DaysStartDate = subDays(today, 6);
    const last7DaysEndDate = today;
    const pastYearStartDate = subYears(startOfYear(today), 1);
    const pastYearEndDate = endOfYear(subYears(today, 1));

    const leftArray: leftItem[] = [
        { title: "Выбрать" },
        { title: "День", start: today, end: today },
        { title: "Неделя", start: startOfWeekDate, end: endOfWeekDate },
        { title: "Месяц", start: startOfMonthDate, end: endOfMonthDate },
        {
            title: "Последние 7 дней",
            start: last7DaysStartDate,
            end: last7DaysEndDate,
        },
        {
            title: "Будущий месяц",
            start: nextMonthStartDate,
            end: nextMonthEndDate,
        },
        {
            title: "Последние 6 месяцев",
            start: subMonths(today, 6),
            end: today,
        },
        {
            title: "Прошедший год",
            start: pastYearStartDate,
            end: pastYearEndDate,
        },
        {
            title: "Все время",
            start: new Date(2022, 10, 9), // месяцы начинаются с 0, поэтому ноябрь - это 10
            end: new Date(),
        },
    ];

    const CalendarLeft: FC = () => {
        const handleTabClick = (item: leftItem) => {
            setActiveTab({ title: item.title });
            setSelectedDates([item.start, item.end]);
        };

        return (
            <ul className={styles.leftList}>
                {leftArray.map((item) => (
                    <li
                        className={combineClassNames(
                            styles.left__item,
                            activeTab.title === item.title &&
                                styles.left__item_active
                        )}
                        key={item.title}
                        onClick={() => handleTabClick(item)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };

    const datePickerRef = useRef<DatePicker>(null);

    const handleApplyClick = () => {
        setStartDate(selectedDates[0]);
        setEndDate(selectedDates[1]);
        datePickerRef.current?.setOpen(false);
    };

    const handleCancelClick = () => {
        datePickerRef.current?.setOpen(false);
        setActiveTab(leftArray[0]);
        setSelectedDates([startDate, endDate]);
    };

    const handleCalendarChange = (dates: [Date, Date]) => {
        setSelectedDates(dates);
        setActiveTab(leftArray[0]);
    };

    const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => (
        <input
            placeholder={props.placeholder}
            value={props.value}
            type="text"
            className={props.className}
            onChange={props.onChange}
            onClick={props.onClick}
            ref={ref}
        />
    ));

    return (
        <div className={styles.datepicker}>
            <span className={styles.datepicker__title}>Выбрать период</span>
            <DatePicker
                openToDate={selectedDates[0]}
                disabledKeyboardNavigation
                ref={datePickerRef}
                onChange={handleCalendarChange}
                selected={selectedDates[0]}
                startDate={selectedDates[0]}
                endDate={selectedDates[1]}
                customInput={<CustomInput />}
                dateFormat="dd.MM.yyyy"
                placeholderText="Дата"
                onClickOutside={handleCancelClick}
                monthsShown={2}
                className={styles.datepicker__input}
                wrapperClassName={styles.datepicker__wrapper}
                popperClassName={styles.datepicker__popper}
                calendarClassName={styles.datepicker__calendar}
                dayClassName={(date) => styles.datepicker__day}
                weekDayClassName={(date) => styles.datepicker__day_name}
                shouldCloseOnSelect={false}
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
                                    <BtnHug
                                        onClick={handleCancelClick}
                                        variant="secondary"
                                    >
                                        Отмена
                                    </BtnHug>
                                    <BtnHug
                                        disabled={
                                            selectedDates[0] === startDate &&
                                            selectedDates[1] === endDate
                                        }
                                        onClick={handleApplyClick}
                                    >
                                        Применить
                                    </BtnHug>
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
