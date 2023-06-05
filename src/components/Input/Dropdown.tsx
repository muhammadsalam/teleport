import { FC, useRef, useState } from "react";
import styles from "./Input.module.sass";
import { combineClassNames } from "Util/combineClassNames";
import { ReactComponent as ArrowBottom } from "Icon/arrow-bottom.svg";
import { CSSTransition } from "react-transition-group";

interface DropdownProps {
    placeholder: string;
    label: string;
    options: string[];
}

const Dropdown: FC<DropdownProps> = ({ options = [], label, placeholder }) => {
    const [dropdownValue, setDropdownValue] = useState<string>(placeholder);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const dropdownRef = useRef(null);

    function handleButton() {
        setIsMounted(!isMounted);
    }

    function handleItemClick(option: string) {
        setDropdownValue(option);
    }

    return (
        <label className={styles.input}>
            <span className={styles.input_title}>{label}</span>
            <div className={styles.input_container}>
                <button
                    className={combineClassNames(
                        styles.dropdown_button,
                        styles.input_field,
                        isMounted && styles.dropdown_button__opened
                    )}
                    onClick={handleButton}
                >
                    <span
                        className={
                            dropdownValue !== placeholder &&
                            styles.dropdown_button_span
                        }
                    >
                        {dropdownValue}
                    </span>
                    <ArrowBottom />
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
                                <>
                                    {option !== dropdownValue && (
                                        <li
                                            key={option}
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
                                </>
                            ))}
                        </ul>
                    </div>
                </CSSTransition>
            </div>
        </label>
    );
};

export default Dropdown;
