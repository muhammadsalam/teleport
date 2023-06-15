import "./Button.scss";
import { ReactComponent as PlusSVG } from "Icon/plus.svg";
import { ReactComponent as PencilSVG } from "Icon/pencil.svg";
import { ReactComponent as OpenSVG } from "Icon/open.svg";
import { ReactComponent as CopySVG } from "Icon/copy.svg";
import { FC } from "react";

interface ButtonProps {
    children: any;
    disabled?: boolean;
    onClick: () => void;
}

interface ButtonHugProps extends ButtonProps {
    variant?: "red" | "secondary";
}

export const BtnHug: FC<ButtonHugProps> = ({
    disabled = false,
    variant = "red",
    children,
    onClick = () => {},
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`button button--hug button--${variant}`}
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
            <PlusSVG className="button_icon" />
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
            <PencilSVG className="button_icon" />
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
            <OpenSVG className="button_icon" />
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
            <PlusSVG className="button_icon" />
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
            <CopySVG className="button_icon" />
            {children}
        </button>
    );
};
