import styles from "./Input.module.sass";

import React, { ChangeEvent, FC, useState } from "react";
import { ReactComponent as UnhideSVG } from "Icon/unhide.svg";
import { ReactComponent as HideSVG } from "Icon/hide.svg";
import { ccn } from "~/shared/lib/combine-class-names";

interface InputProps {
    type: "text" | "password";
    placeholder: string;
    label: string;
}

export const Input: FC<InputProps> = ({
    type = "text",
    label,
    placeholder,
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
        return isPasswordVisible ? "text" : type;
    }

    const defaultValue = type === "password" ? "" : inputValue;

    return (
        <label className={styles.input}>
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
                        {isPasswordVisible ? <UnhideSVG /> : <HideSVG />}
                    </button>
                )}
            </div>
            <span className={styles.input_status}>
                {isError && "Код введен неверно"}
            </span>
        </label>
    );
};