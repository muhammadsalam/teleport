import { FC, Fragment, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./Input.module.sass";
import { Icon } from "shared/ui";
import { ccn, useOutsideClick } from "shared/lib";

interface DropdownProps {
    placeholder: string;
    label: string;
    options: string[];
}

export const Dropdown: FC<DropdownProps> = ({
    options = [],
    label,
    placeholder,
}) => {
    const [dropdownValue, setDropdownValue] = useState<string>(placeholder);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleMountedChange() {
        setIsMounted(!isMounted);
    }

    function handleItemClick(option: string) {
        setDropdownValue(option);
    }

    useOutsideClick(dropdownRef, handleMountedChange);

    return (
        <label className={styles.input}>
            <span className={styles.input_title}>{label}</span>
            <div className={styles.input_container}>
                <button
                    className={ccn(
                        styles.dropdown_button,
                        styles.input_field,
                        isMounted && styles.dropdown_button__opened
                    )}
                    onClick={handleMountedChange}
                >
                    <span
                        className={
                            dropdownValue !== placeholder
                                ? styles.dropdown_button_span
                                : ""
                        }
                    >
                        {dropdownValue}
                    </span>
                    <Icon name="arrow-bottom" />
                </button>

                <CSSTransition
                    in={isMounted}
                    timeout={300}
                    nodeRef={dropdownRef}
                    classNames={{
                        enterActive: styles.dropdown_menu_enter__active,
                        enterDone: styles.dropdown_menu_enter__done,
                    }}
                    unmountOnExit
                >
                    <div className={styles.dropdown_menu} ref={dropdownRef}>
                        <ul className={styles.dropdown_list}>
                            {options.map((option) => (
                                <Fragment key={option}>
                                    {option !== dropdownValue && (
                                        <li
                                            className={
                                                styles.dropdown_menu_item
                                            }
                                            onClick={() =>
                                                handleItemClick(option)
                                            }
                                        >
                                            {option}
                                        </li>
                                    )}
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                </CSSTransition>
            </div>
        </label>
    );
};
