import Input from "../components/form/Input";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoSettingsOutline, IoNotifications } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getSidebarStatus } from "../redux/sidebar/sidebarSlice";

const TopNav = () => {
  const open = useSelector(getSidebarStatus);
  const navBar = [
    {
      path: "/settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/tickets",
      icon: <IoNotifications />,
    },
  ];
  return (
    <div
      className=" fixed top-0 right-0 flex shadow-md  gap-2 md:flex-row px-1 items-center justify-between bg-secondaryLight  backdrop-blur-md duration-150  z-40 "
      style={{ width: `calc(100% - ${open ? "180px" : "80px"})` }}
    >
      <Input type="input" style={`!rounded-full w-full md:!w-1/3 !flex-row-reverse !mb-2 `} icon={<FaSearch />} />
      <div className="flex p-1 items-center gap-3">
        <div className="flex items-center gap-3">
          {navBar.map((nav, index) => {
            return (
              <NavLink key={index} to={nav.path}>
                <div className="flex bg-slate-300 text-primary p-2 rounded-full ">
                  {nav.icon}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
