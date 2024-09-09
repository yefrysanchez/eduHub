import { CgFeed } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { IoBookOutline, IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";

const NavLinks = () => {
  return (
    <ul className="h-24 items-center flex w-full lg:flex-col justify-around lg:h-full lg:max-h-[600px]">
      <li className={` text-gray-500`}>
        <a className="flex flex-col justify-center group items-center" href="">
          <span className="text-3xl p-2 lg:p-3 group-hover:bg-blue-200 duration-200 rounded-full">
            <CgFeed />
          </span>
          <span className="text-xs font-bold">Feed</span>
        </a>
      </li>
      <li className={` text-gray-500 rounded-full `}>
        <a className="flex flex-col justify-center group items-center" href="">
          <span className="text-3xl p-2 lg:p-3 group-hover:bg-blue-200 duration-200 bg-blue-700 text-white rounded-full">
          <IoBookOutline />

          </span>
          <span className="text-xs font-bold">Classes</span>
        </a>
      </li>{" "}
      <li className={` text-gray-500`}>
        <a className="flex flex-col justify-center group items-center" href="">
          <span className="text-3xl p-2 lg:p-3 group-hover:bg-blue-200 duration-200 rounded-full">
          <IoChatboxEllipsesOutline />

          </span>
          <span className="text-xs font-bold">Chat</span>
        </a>
      </li>{" "}
      <li className={` text-gray-500`}>
        <button className="flex flex-col justify-center group items-center">
          <span className="text-3xl p-2 lg:p-3 group-hover:bg-red-200 duration-200 rounded-full">
          <CiLogout />
          </span>
          <span className="text-xs font-bold">Logout</span>
        </button>
      </li>{" "}
      <li className={` text-gray-500`}>
        <a className="flex flex-col justify-center group items-center" href="">
          <span className="text-3xl p-2 lg:p-3 group-hover:bg-blue-200 duration-200 rounded-full">
          <IoSettingsOutline />

          </span>
          <span className="text-xs font-bold">Settings</span>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
