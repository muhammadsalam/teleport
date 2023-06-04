import "./Input.sass";

import React, { ChangeEvent, FC, useState } from "react";
import { ReactComponent as UnhideSVG } from "../../assets/images/icons/unhide.svg";
import { ReactComponent as HideSVG } from "../../assets/images/icons/hide.svg";

interface InputProps {
    type: "text" | "password";
    placeholder: string;
    label: string;
}

const Input: FC<InputProps> = ({ type = "text", label, placeholder }) => {
    const [isError, setIsError] = useState<boolean>(true);
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
        <label className="input">
            <span className="input_title">{label}</span>
            <div className="input-container">
                <input
                    className={`input_field ${
                        isError ? "input_field__error" : ""
                    }`}
                    type={getInputType()}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    onChange={handleInputChange}
                />
                {type === "password" && (
                    <button
                        className="input_button"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? <UnhideSVG /> : <HideSVG />}
                    </button>
                )}
            </div>
            <span className="input_status">
                {isError && "Код введен неверно"}
            </span>
        </label>
    );
};

export default Input;
