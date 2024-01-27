import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import NavbarCmp from "../components/NavbarCmp";

const Layout = () => {
  const location = useLocation();
  const [menuList, setMenuList] = useState(['Dashboard', 'Members', 'Spaces', 'Message%20Center', 'Tickets', 'Calendar', 'Files', 'Finances', 'Settings']);

  return (
    <>
        <div className="flex h-[100vh] w-[100%]">
            { menuList.filter(item => '/'+item.toLowerCase() == location.pathname.toLowerCase()).length != 0 && <NavbarCmp />}
            <Outlet />
        </div>
    </>
  )
};

export default Layout;