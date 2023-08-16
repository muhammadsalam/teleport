import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Pages } from "../pages";

export const HomeRouting: FC = () => {
    return (
        <Routes>
            <Route path="" element={<Pages />}>
                <Route path="pages" />
            </Route>
            <Route path="balance" element="balance" />
            <Route path="domains" element="domains" />
            <Route path="affiliate" element="affiliate" />
            <Route path="materials" element="materials" />
            <Route path="settings" element="settings" />
        </Routes>
    );
};
