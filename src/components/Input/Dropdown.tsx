import { ChangeEvent, FC, useState } from "react";
import styles from "./Input.module.sass";
import { combineClassNames } from "../../utils/combineClassNames";
import { ReactComponent as ArrowBottom } from "icons/arrow-bottom.svg";

interface DropdownProps {
    placeholder: string;
    label: string;
}

const Dropdown: FC<DropdownProps> = ({ label, placeholder }) => {
    const [isError, setIsError] = useState<boolean>(true);
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <label className={styles.input}>
            <span className={styles.input_title}>{label}</span>
            <div className={styles.input_container}>
                <button className={styles.dropdown_button}>
                    {placeholder}
                    <ArrowBottom />
                </button>
                <input
                    className={combineClassNames(
                        styles.input_field,
                        isError && styles.input_field_error
                    )}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                />
            </div>
        </label>
    );
};

export default Dropdown;
