import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex items-center justify-end lg:justify-start gap-2 mb-10">
      <div className="relative hidden md:block">
        <input
          className="bg-stone-100 w-full p-2 rounded-lg border"
          type="search"
          name="Search"
          placeholder="Search"
        />
        <div className="absolute top-3 right-3 text-gray-400">
          <IoSearchOutline />
        </div>
      </div>
      <div className="font-bold text-2xl">
        <h1>
         Welcome back, Name!
        </h1>
      </div>
    </div>
  );
};

export default Header;
