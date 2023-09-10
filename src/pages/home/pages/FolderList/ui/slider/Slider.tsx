import { Folder, FolderItem } from "entities/folder-item";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import style from "./Slider.module.css";
import { EditPopup } from "entities/edit-popup";
import { DeletePopup } from "entities/delete-popup";
import { ccn } from "shared/lib";

export const Slider: FC = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const [activeFolder, setActiveFolder] = useState<Folder>({
        folderId: 0,
    });

    const handleFolderActive = (folderItem: Folder) => {
        setActiveFolder(folderItem);
    };

    const [activeContextFolderId, setActiveContextFolderId] = useState<
        number | null
    >(null);

    useEffect(() => {
        setActiveContextFolderId(null);
    }, [isEditing, isDeleting]);

    return (
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView="auto"
                onSlideChange={() => console.log("slide change")}
                className={style.slider}
                slideActiveClass={style.slide__active}
                navigation
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
                    <SwiperSlide
                        key={folderId}
                        className={ccn(
                            style.slide,
                            activeContextFolderId === folderId &&
                                style.slide__context
                        )}
                    >
                        <FolderItem
                            activeContextFolderId={activeContextFolderId}
                            setActiveContextFolderId={setActiveContextFolderId}
                            folderId={folderId}
                            setIsDeleting={setIsDeleting}
                            setIsEditing={setIsEditing}
                            activeFolder={activeFolder}
                            handleActive={handleFolderActive}
                            text={folderId + "text"}
                            count={folderId}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
