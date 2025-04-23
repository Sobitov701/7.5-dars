import style from "./MainLayput.module.scss";
import { Sidebar } from "../componets";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className={style.main_layout}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
