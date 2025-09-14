import React, { useState } from "react";
import leather from "../assets/images/WIN1.jpg";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      router.push("/login");
    } else {
      console.log("Logout Error");
    }
  };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, to: "/", txt: "Home" },
    { id: 2, to: "/about", txt: "About" },
    { id: 3, to: "/contact", txt: "Contact" },
    { id: 4, to: "/rooms", txt: "Rooms" },
    { id: 5, to: "/manageRooms", txt: "Manage" },
    // { id: 6, to: "/blog", txt: "Blog" },
    { id: 6, to: "/login", txt: "Login" },
    { id: 7, to: "/register", txt: "Register" },
  ];

  // Handle Logout

  return (
    <div className="bg-white-0 z-50">
      <nav className="relative md:mb-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap bg-white-0 items-center justify-evenly mx-auto p-4 mt-[20px]">
          <Link
            href={"/"}
            className="items-center space-x-1 rtl:space-x-reverse no-underline"
          >
            <img
              src={leather}
              height={50}
              width={50}
              alt="Logo"
              className="rounded-full"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          ></button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="bg-white-0 flex ml-[200px]">
              {navItems.map((item) => (
                <div key={item.id} className="bg-white-0">
                  <li className="p-4 bg-white-0 rounded-xl m-2 cursor-pointer duration-300 hover:text-blue-700">
                    <Link
                      href={item.to}
                      className="text-blue-500 no-underline font-serif font-bold bg-white-0"
                    >
                      {item.txt}
                    </Link>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Icon */}
      <div className="relative z-[20px]">
        <div
          onClick={handleNav}
          className=" block ml-[300px] mb-1 mt-[-55px] md:hidden"
        >
          {nav ? <BiX size={50} /> : <BiMenu size={50} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "md:hidden mt-4 w-screen bg-white-0 ease-in-out duration-500"
              : "ease-in-out w-screen duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}

          {/* Mobile Navigation Items */}

          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative p-2 font-extrabold duration-300 h-8"
            >
              <Link
                href={item.to}
                className="no-underline text-blue-500 ml-[260px]"
              >
                {item.txt}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
