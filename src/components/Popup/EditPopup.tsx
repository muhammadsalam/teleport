import { FC, useState } from "react";
import style from "./EditPopup.module.scss";
import Popup from "./Popup";
import { BtnHug } from "../Button/Button";
import { PopupProps } from "./Popup.types";
import { Input } from "../Input/Input";

const EditPopup: FC<PopupProps> = ({ cancel, agree }) => {
    const [isEditingPopupActive, setIsEditingPopupActive] =
        useState<boolean>(true);

    return isEditingPopupActive ? (
        <Popup setActive={setIsEditingPopupActive}>
            <div className={style.title}>Переименовать папку</div>
            <Input
                type="text"
                placeholder="Введите название папки"
                label="Название папки"
            />
            <div className={style.buttons}>
                <BtnHug grow variant="secondary" onClick={cancel}>
                    Отмена
                </BtnHug>
                <BtnHug grow onClick={agree}>
                    Сохранить
                </BtnHug>
            </div>
        </Popup>
    ) : (
        <></>
    );
};

export default EditPopup;
