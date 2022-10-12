import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const menuBarClickHandler = () => {
    setShow(!show);
  };

  const navStyle1 = "sm:ml-4 font-medium text-slate-600 hover:text-slate-900 py-1 underline";
  const navStyle2 = "sm:ml-4 font-medium text-slate-600 hover:text-slate-900 py-1";

  return (
    <nav className="bg-green-50 sticky top-0">
      <div className="sm:container mx-auto lg:max-w-7xl flex items-center justify-between h-16 relative  px-3">
        <div className="grow flex items-center justify-between sm:grow-0">
          <img src="./images/logo.png" alt="logo" className="w-36 h-12" />
          <div className="h-6 w-6 sm:hidden" onClick={menuBarClickHandler}>
            {show ? <XMarkIcon /> : <Bars3Icon />}
          </div>
        </div>
        <div
          className={`absolute right-0 ${
            show ? "top-16" : "top-[-200px]"
          } -z-10 sm:z-0 duration-500 ease-in-out flex flex-col sm:flex-row w-full sm:w-auto py-2 sm:py-0 pl-3 sm:pl-0 sm:static bg-green-50`}
        >
          <NavLink
            to="/"
            className={({isActive}) => isActive? navStyle1 : navStyle2}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({isActive}) => isActive? navStyle1 : navStyle2}
          >
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
