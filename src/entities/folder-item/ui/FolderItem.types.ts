import { HTMLAttributes } from "react";

export interface FolderItemProps extends HTMLAttributes<HTMLDivElement>, Folder {
    count: number;
    text: string;
    setIsEditing: (state: boolean) => void;
    setIsDeleting: (state: boolean) => void;
    activeFolder: Folder;
    handleActive: (state: Folder) => void;
}

export type MenuPosition = {
    top: number;
    left: number;
}

export type Folder = {
    folderId: number;
}