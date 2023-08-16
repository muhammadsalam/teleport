import { Folder, FolderItem } from "entities/folder-item";
import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import style from "./Slider.module.css";
import { EditPopup } from "entities/edit-popup";
import { DeletePopup } from "entities/delete-popup";

export const Slider: FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const [activeFolder, setActiveFolder] = useState<Folder>({
        folderId: 0,
    });

    const handleFolderActive = (folderItem: Folder) => {
        setActiveFolder(folderItem);
    };

    return (
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                onSlideChange={() => console.log("slide change")}
                className={style.slider}
                slideActiveClass={style.slide__active}
            >
                <div slot="container-start">
                    {isEditing && (
                        <EditPopup
                            isActive={isEditing}
                            setIsActive={setIsEditing}
                            agree={() => {}}
                        />
                    )}
                    {isDeleting && (
                        <DeletePopup
                            isActive={isDeleting}
                            setIsActive={setIsDeleting}
                            agree={() => {}}
                        />
                    )}
                </div>
                {/* ПАПКИ БУДУТ БРАТЬСЯ ИЗ СЕРВЕРА В ЭТОМ ФАЙЛЕ. ИСПОЛЬЗУЙ ТУТ ЛОГИКУ.
            СЕЙЧАС ТЕБЕ НУЖНО ВЫДАТЬ КЛАССЫ ДЛЯ SWIPERSLIDE И СДЕЛАТЬ МАЛЕНЬКИМИ БЛОКИ */}
                {[...new Array(7)].map((item, folderId) => (
                    <SwiperSlide key={folderId} className={style.slide}>
                        <FolderItem
                            folderId={folderId}
                            setIsDeleting={setIsDeleting}
                            setIsEditing={setIsEditing}
                            activeFolder={activeFolder}
                            handleActive={handleFolderActive}
                            text="text"
                            count={folderId}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
