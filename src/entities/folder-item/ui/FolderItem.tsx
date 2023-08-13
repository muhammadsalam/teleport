import styles from "./FolderItem.module.scss";
import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { FolderItemProps } from "./FolderItem.types";
import { ccn, useOutsideClick } from "shared/lib";
import { CSSTransition } from "react-transition-group";
import { DeletePopup } from "entities/delete-popup";
import { EditPopup } from "entities/edit-popup";
import { Icon } from "shared/ui";

export const FolderItem: FC<FolderItemProps> = ({
    count,
    text,
    className,
    ...otherProps
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const contextRef = useRef<HTMLDivElement>(null);

    const [leftTransform, setLeftTransform] = useState<number>(0);

    const handleActivating: (event: MouseEvent<HTMLDivElement>) => void = ({
        target,
    }) => {
        const folderItemButton = !(target as Element).closest(
            `.${styles.folderItem_button}`
        );

        if (folderItemButton && !isActive) {
            setIsActive(!isActive);
        }
    };

    useEffect(() => {
        const rect = contextRef.current?.getBoundingClientRect();
        console.log(rect?.left, rect?.width);

        if (rect && checkElementOutX(rect)) {
            setLeftTransform(
                -Math.floor(rect.left + rect.width - window.innerWidth + 5)
            );
            console.log(checkElementOutX(rect) && "rect есть и true");
            return;
        }
        if (rect)
            console.log(
                checkElementOutX(rect) && "тут тоже есть _rect_ и true"
            );

        setLeftTransform(0);
    }, [isMounted]);

    const handleContext = () => {
        setIsMounted(!isMounted);
    };

    const checkElementOutX: (elemRect: {
        left: number;
        width: number;
    }) => boolean = (elemRect) => {
        // Если положение элемента слева + ширина > ширины окна
        console.log(
            "left + width > window",
            elemRect.left + elemRect.width,
            window.innerWidth
        );
        if (elemRect.left + elemRect.width > window.innerWidth) return true;
        return false;
    };

    useOutsideClick(
        contextRef,
        () => {
            setIsMounted(false);
        },
        styles.folderItem_button
    );

    return (
        <div className={ccn(styles.folder, className)} {...otherProps}>
            <div
                className={ccn(styles.folderItem, isActive && styles.active)}
                onClick={handleActivating}
            >
                <div className={styles.folderItem_count}>{count}</div>
                <div
                    className={styles.folderItem_button}
                    onClick={handleContext}
                >
                    <span className={styles.folderItem_button_span}></span>
                    <span className={styles.folderItem_button_span}></span>
                    <span className={styles.folderItem_button_span}></span>
                </div>
                <Icon name="folder" className={styles.folderItem_icon} />
                <p className={styles.folderItem_title}>{text}</p>
            </div>
            <CSSTransition
                in={isMounted}
                timeout={300}
                nodeRef={contextRef}
                classNames={{
                    enterActive: styles.contextBlock__enter,
                    enterDone: styles.contextBlock__done,
                }}
                unmountOnExit
            >
                <div
                    style={{
                        transform: `translateX(${leftTransform}px)`,
                    }}
                    className={styles.contextBlock}
                    ref={contextRef}
                >
                    <ul className={styles.context}>
                        <li
                            className={styles.context_item}
                            onClick={() => {
                                handleContext();
                                setIsEditing(true);
                            }}
                        >
                            <Icon
                                name="pencil"
                                className={styles.context_icon}
                            />
                            Редактировать папку
                        </li>
                        <li
                            className={styles.context_item}
                            onClick={() => {
                                handleContext();
                                setIsDeleting(true);
                            }}
                        >
                            <Icon
                                name="delete"
                                className={styles.context_icon}
                            />
                            Удалить папку
                        </li>
                    </ul>
                </div>
            </CSSTransition>
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
    );
};
