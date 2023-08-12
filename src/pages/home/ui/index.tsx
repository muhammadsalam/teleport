import { FC } from "react";
import style from "./ui.module.css";
import { Sidebar } from "widgets/sidebar";
import { Header } from "widgets/header";

export const Home: FC = () => {
    return (
        <div className={style.grid}>
            <Sidebar />
            <Header />
            <div className={style.main}>Routing</div>
        </div>
    );
};
