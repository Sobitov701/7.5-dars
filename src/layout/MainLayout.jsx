import style from "./MainLayput.module.scss";
import { Sidebar } from "../componets";
import { Outlet } from "react-router-dom";
import Overview from "../pages/overview/Overview";

function MainLayout() {
  return (
    <div className={style.main_layout}>
      <Sidebar />
      <main className={style.main_layout_main}>
        <Overview />
      </main>
    </div>
  );
}

export default MainLayout;
