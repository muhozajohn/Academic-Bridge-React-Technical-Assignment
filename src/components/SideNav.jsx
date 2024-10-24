import { FaStore} from "react-icons/fa";
import { MdDashboard, MdListAlt } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/sidebar/sidebarSlice";

const SideNav = () => {
  const dispatch = useDispatch();

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <MdDashboard />,
    },
    {
      name: "Events",
      path: "/events",
      icon: <GrArticle />,
    },
    {
      name: "Tickets",
      path: "/tickets",
      icon: <MdListAlt />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <VscFeedback />,
    },
    {
      name: "Users",
      path: "/users",
      icon: <RiContactsLine />,
    },
  ];

  const subMenu = [
    {
      name: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline />,
    },
  ];

  const [open, setOpen] = useState(false); // Changed to default false

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(toggleSidebar());
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <div
      className={`bg-secondaryLight shadow-md backdrop-blur-md  !h-screen p-6 z-50 flex flex-col justify-between duration-300 fixed top-0 left-0 ${
        open ? "!w-68" : "!w-20"
      }`}
    >
      <div>
        <NavLink
          to="/"
          className="!inline-flex items-center px-2 py-2 gap-2 text-black"
        >
          <FaStore
            className={`duration-500 text-xl ${!open && "rotate-[360deg]"}`}
          />
        </NavLink>

        <div className="mt-5 w-full flex flex-col gap-3">
          {menu.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={(active) =>
                active.isActive
                  ? `bg-red-100 !w-full px-2 py-2 text-black text-base flex items-center gap-3 cursor-pointer duration-100 rounded`
                  : `text-black hover:bg-red-100 !w-full px-2 py-2 hover:text-black text-base flex items-center gap-3 cursor-pointer duration-100 rounded`
              }
              title={!open ? item.name : ""} 
            >
              <span className="text-xl">{item.icon}</span>
              {open && (
                <span className="transition-all duration-200">{item.name}</span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Sub Menu */}
      <div className="flex flex-col gap-2 mt-auto">
        {subMenu.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="text-black hover:bg-red-100 !w-full px-2 py-2 hover:text-black text-base flex items-center gap-3 cursor-pointer duration-100 rounded"
            title={!open ? item.name : ""} 
          >
            <span className="text-xl">{item.icon}</span>
            {open && (
              <span className="transition-all duration-200">{item.name}</span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;