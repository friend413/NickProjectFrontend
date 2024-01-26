import { Outlet, Link } from "react-router-dom";

import NavbarCmp from "../components/NavbarCmp";

const Layout = () => {
  return (
    <>
        <div className="flex h-[100vh] w-[100%]">
            <NavbarCmp />
            <Outlet />
        </div>
    </>
  )
};

export default Layout;