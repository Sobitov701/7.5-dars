import style from "./MainLayput.module.scss";
import { Sidebar } from "../componets";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
