import { Icon } from "shared/ui";
import "./Button.scss";
import { FC, HTMLAttributes } from "react";
import { ccn } from "shared/lib";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: any;
    disabled?: boolean;
    onClick: () => void;
    grow?: boolean;
}

interface ButtonHugProps extends ButtonProps {
    variant?: "red" | "secondary";
}

export const BtnHug: FC<ButtonHugProps> = ({
    disabled = false,
    variant = "red",
    children,
    onClick = () => {},
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--hug",
                `button--${variant}`,
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const BtnDefault: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick = () => {},
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--red",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
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
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--primary",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
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
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--secondary",
                "button--secondary-open",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
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
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--secondary",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
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
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--tertiary",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export const BtnLink: FC<ButtonProps> = ({
    disabled = false,
    children,
    onClick,
    grow = false,
    className,
    ...otherProps
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={ccn(
                "button",
                "button--fixed",
                "button--secondary",
                "button--link",
                grow ? "button--grow" : "",
                className
            )}
            {...otherProps}
        >
            <Icon name="copy" className="button_icon" />
            {children}
        </button>
    );
};
