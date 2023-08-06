import { Icon } from "shared/ui";
import "./Button.scss";
import { FC } from "react";

interface ButtonProps {
    children: any;
    disabled?: boolean;
    onClick: () => void;
}

interface ButtonHugProps extends ButtonProps {
    variant?: "red" | "secondary";
    grow?: boolean;
}

export const BtnHug: FC<ButtonHugProps> = ({
    disabled = false,
    variant = "red",
    children,
    onClick = () => {},
    grow = false,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--hug button--${variant} ${
                grow ? "button--grow" : ""
            }`}
        >
            {children}
        </button>
    );
};

export const BtnDefault: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick = () => {},
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--red`}
        >
            <Icon name="plus" className="button_icon" />
            {children}
        </button>
    );
};

export const BtnPrimary: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--primary`}
        >
            <Icon name="pencil" className="button_icon" />
            {children}
        </button>
    );
};

export const BtnSecondary: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--secondary button--secondary-open`}
        >
            <Icon name="open" className="button_icon" />
            {children}
        </button>
    );
};

export const BtnSecondaryTwo: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--secondary`}
        >
            <Icon name="plus" className="button_icon" />
            {children}
        </button>
    );
};

export const BtnTertiary: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--tertiary`}
        >
            {children}
        </button>
    );
};

export const BtnLink: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--fixed button--secondary button--link`}
        >
            <Icon name="copy" className="button_icon" />
            {children}
        </button>
    );
};
