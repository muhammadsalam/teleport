import { ccn } from "shared/lib";
import { Icon } from "shared/ui";
import styles from "./Input.module.sass";
import { ChangeEvent, FC, useState } from "react";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
    type = "text",
    label,
    placeholder,
    state,
    setState,
    className,
    disabled,
    ...otherProps
}) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setState(event.target.value);
    }

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    function getInputType() {
        return isPasswordVisible ? (type === "email" ? "email" : "text") : type;
    }

    const defaultValue = type === "password" ? "" : state;

    return (
        <label className={ccn(styles.input, className)} {...otherProps}>
            <span className={styles.input_title}>{label}</span>
            <div className={styles.input_container}>
                <input
                    className={ccn(
                        styles.input_field,
                        isError && styles.input_field__error
                    )}
                    type={getInputType()}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onChange={handleInputChange}
                />
                {type === "password" && (
                    <button
                        className={styles.input_button}
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <Icon name="unhide" />
                        ) : (
                            <Icon name="hide" />
                        )}
                    </button>
                )}
            </div>
            <span className={styles.input_status}>
                {isError && "Код введен неверно"}
            </span>
        </label>
    );
};
