import { ccn } from "shared/lib";
import { Icon } from "shared/ui";
import styles from "./Input.module.sass";
import React, { ChangeEvent, FC, HTMLAttributes, useState } from "react";

interface InputProps extends HTMLAttributes<HTMLLabelElement> {
    type: "text" | "password" | "email";
    placeholder: string;
    label: string;
}

export const Input: FC<InputProps> = ({
    type = "text",
    label,
    placeholder,
    className,
    ...otherProps
}) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    function togglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible);
    }

    function getInputType() {
        return isPasswordVisible ? (type === "email" ? "email" : "text") : type;
    }

    const defaultValue = type === "password" ? "" : inputValue;

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
