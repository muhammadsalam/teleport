import { FC } from "react";
import style from "./FolderList.module.css";
import { BtnSecondaryTwo } from "shared/ui";
import { Slider } from "./slider";

export const FolderList: FC = () => {
    return (
        <div className={style.FolderList}>
            <div className={style.top}>
                <div className={style.info}>
                    <div className={style.title}>Папки</div>
                    <div className={style.subtitle}>Всего 6 папок</div>
                </div>
                <BtnSecondaryTwo>Создать папку</BtnSecondaryTwo>
            </div>
            <Slider />
        </div>
    );
};
