import { FC } from "react";
import style from "./EditPopup.module.scss";
import { BtnHug, Input, Popup, PopupProps } from "shared/ui";

export const EditPopup: FC<PopupProps> = ({ isActive, setIsActive, agree }) => {
    return isActive ? (
        <Popup setActive={setIsActive}>
            <div className={style.title}>Переименовать папку</div>
            <Input
                type="text"
                placeholder="Введите название папки"
                label="Название папки"
            />
            <div className={style.buttons}>
                <BtnHug
                    grow
                    variant="secondary"
                    onClick={() => {
                        setIsActive(false);
                    }}
                >
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
