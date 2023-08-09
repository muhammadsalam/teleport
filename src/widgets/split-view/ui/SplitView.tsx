import { FC } from "react";
import style from "./SplitView.module.css";
import { Logo } from "shared/ui";
import { SplitViewProps } from "./SplitView.types";

export const SplitView: FC<SplitViewProps> = ({
    Image,
    children,
    handleFormSubmiting,
}) => {
    return (
        <div className={style.wrapper}>
            <header className={style.header}>
                <Logo />
            </header>
            <div className={style.left}>
                <Image />
            </div>
            <div className={style.right}>
                <form className={style.form} onSubmit={handleFormSubmiting}>
                    {children}
                </form>
            </div>
        </div>
    );
};
