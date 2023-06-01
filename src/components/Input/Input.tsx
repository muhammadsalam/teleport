import "./Input.sass";
import { ChangeEvent, FC, useEffect, useState } from "react";

interface InputProps {
    condition: boolean;
    placeholder: string;
    label: string;
    type: "text" | "password";
}

const Input: FC<InputProps> = ({
    condition,
    label,
    placeholder,
    type = "text",
}) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange({ target }: ChangeEvent<HTMLInputElement>) {
        setInputValue(target.value);
    }

    useEffect(() => {
        if (condition) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    }, [inputValue]);

    return (
        <label className="input">
            <span className="input_title">{label}</span>
            <input
                className={
                    "input_field " + (isError ? "input_field__error" : "")
                }
                type={type}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
            />
            <span className="input_status">
                {isError && "Код введен неверно"}
            </span>
        </label>
    );
};

export default Input;
