import Avatar from "../Avatar/Avatar";
import NavLinks from "./NavLinks";


const Navbar = () => {
  return (
    <nav className="p-4 flex gap-4 shrink-0 lg:flex-col items-center lg:h-screen h-20 sticky left-0 bottom-0 lg:top-0 bg-white w-full lg:min-w-24 lg:max-w-36 lg:w-[10%] border shadow rounded-r-2xl">
      <div className="hidden lg:block">
        <Avatar />
        <div className="text-center tracking-tighter shrink-0 leading-none">
          <p className="font-bold">Name</p>
          <p className="text-gray-500 text-xs">@userdd</p>
        </div>
      </div>
      <NavLinks />
    </nav>
  );
};

export default Navbar;
