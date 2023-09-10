import { useEffect, RefObject } from "react";

export const useOutsideClick = <T extends HTMLElement>(
    ref: RefObject<T>,
    callback: () => void,
): void => {
    const handleClick = (event: MouseEvent) => {
        const isOutsideClick = !ref.current?.contains(event.target as Node);
        if (ref.current && isOutsideClick) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, []);
};
