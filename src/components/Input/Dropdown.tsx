import { ChangeEvent, FC, MouseEvent, useState } from "react";
import styles from "./Input.module.sass";
import { combineClassNames } from "Util/combineClassNames";
import { ReactComponent as ArrowBottom } from "Icon/arrow-bottom.svg";

interface DropdownProps {
    placeholder: string;
    label: string;
    options: string[];
}

const Dropdown: FC<DropdownProps> = ({ options = [], label, placeholder }) => {
    const [dropdownValue, setDropdownValue] = useState<string>(placeholder);
    const [isActive, setIsActive] = useState<boolean>(false);

    function handleButton() {
        setIsActive(!isActive);
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
                        isActive && styles.dropdown_button__opened
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
                {isActive && (
                    <div className={styles.dropdown_menu}>
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
                )}
            </div>
        </label>
    );
};

export default Dropdown;
