import { FC } from "react";
import style from "./ui.module.css";
import { Sidebar } from "widgets/sidebar";
import { Header } from "widgets/header";
import { HomeRouting } from "../routing";

export const Home: FC = () => {
    return (
        <div className={style.grid}>
            <Sidebar />
            <Header />
            <div className={style.main}>
                <HomeRouting />
            </div>
        </div>
    );
};
