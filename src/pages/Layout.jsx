import React, { useState } from "react";
import leather from "../assets/images/WIN1.jpg";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
// import { useRouter } from "next/navigation";
import { Link , Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import SearchBar from "../components/SearchBar";



const Layout = () => {
  const cartNo = useSelector(state => state.cart.totalQuantity)
const [nav, setNav] = useState(false);
 const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
  // const handleLogout = async () => {
  //   const { success, error } = await destroySession();
  //   if (success) {
  //     router.push("/login");
  //   } else {
  //     console.log("Logout Error");
  //   }
  // };

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, to: "/", txt: "Home" },
    { id: 2, to: "/about", txt: "About" },
    { id: 3, to: "/contact", txt: "Contact" },
    { id: 4, to: "/product", txt: "Product" },
    { id: 5, to: "/manageRooms", txt: "Manage" },
    // { id: 6, to: "/blog", txt: "Blog" },
    // { id: 6, to: "/login", txt: "Login" },
    // { id: 7, to: "/register", txt: "Register" },
    // { id: 8, to: "/cart", txt: v+" "+`${cartNo}`},
  ];

  // Handle Logout

  return (
    <div className="bg-white-0 z-50">
      <header className="shadow-md bg-white tracking-wide relative z-50">
            <section
              className="flex items-center flex-wrap lg:justify-center gap-4 py-2.5 sm:px-10 px-4 border-gray-200 border-b min-h-[70px]">
      
              <div className="left-10 absolute z-50 border border-gray-300 flex items-center px-4 py-2.5 rounded max-lg:hidden focus-within:bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                  className="cursor-pointer fill-gray-400 mr-2.5 inline-block w-[18px] h-[18px]">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              <SearchBar />
              </div>
      
              <a href="javascript:void(0)" className="max-sm:hidden"><img src={leather} alt="logo" className="w-36 h-10 rounded-full" />
              </a>
              <a href="javascript:void(0)" className="hidden max-sm:block"><img src={leather} alt="logo" className="w-9 rounded-full" />
              </a>
      
              <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
                <span className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                    className="cursor-pointer fill-gray-800 hover:fill-blue-700 inline-block" viewBox="0 0 64 64">
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000" />
                  </svg>
                  <span className="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs min-w-[15px] text-center text-white">1</span>
                </span>
              <Link to={'/cart'}>
                <span className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                    className="cursor-pointer fill-gray-800 hover:fill-blue-700 inline-block" viewBox="0 0 512 512">
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      data-original="#000000"></path>
                  </svg>
                  <span className="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs min-w-[15px] text-center text-white">{Math.round(cartNo*100)/100}</span>
                </span>
              </Link>
                <div className="inline-block cursor-pointer border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
                    className="hover:fill-blue-700" onClick={toggleDropdown}>
                    <circle cx="10" cy="7" r="6" data-original="#000000" />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000" />
                  </svg>
                  {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-30 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                    
                >
                    <ul className="py-3" role="none">
                        <Link
                           to={'/register'}
                            className="block p-4 text-sm text-gray-700 
                            hover:bg-gray-100"
                            role="menuitem"
                        >
                           Register
                        </Link>
                     <li>
      <Link to={'/login'} className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Login</Link>
                     </li>
                     
                    </ul>
                </div>
            )}
                </div>
              </div>
            </section>
      
            <div className="flex flex-wrap justify-center sm:px-10 px-4 py-3 relative">

            


     {/* Mobile Search Bar */}
           <div className="mr-20 md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                  className="cursor-pointer fill-gray-400 mr-2.5 inline-block w-[18px] h-[18px]">
                  <path
                    d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                  </path>
                </svg>
              <SearchBar />
              </div>




      
              <div id="collapseMenu"
                className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
                <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"></path>
                  </svg>
                </button>
      {/* Large Screen Menu Bar Started */}
      <nav className="relative md:mb-0 border-gray-200 dark:bg-gray-900">
              <div className="max-w-screen-xl flex flex-wrap bg-white-0 items-center justify-evenly mx-auto">
               
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
                            to={item.to}
                            className="text-blue-500 no-underline font-serif font-bold bg-white-0"
                          >
                            {item.txt}
                          </Link>
                        </li>
                       
                      </div>
                    ))}
                    <div>
                      {/* <Link to={'/cart'} >
                  <HiShoppingCart /> 
                  </Link> */}
                    {/* <p>{cartNo}</p> */}
                    </div>
                     
                  </ul>
                </div>
              </div>
            </nav>
      {/* Large Screen Menu Bar Ended */}
              </div>
      {/* Toggle Open */}
              {/* <div id="toggleOpen" className="flex ml-auto lg:hidden">
                <button className="cursor-pointer">
                  <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"></path>
                  </svg>
                </button>
              </div> */}
              {/* Mobile Navigation Icon */}
                    <div className="relative z-[20px] mt-10">
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
                              to={item.to}
                              className="no-underline text-blue-500 ml-[260px]"
                            >
                              {item.txt}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
            </div>
          </header>
     
      <Outlet />
      <Footer />
    </div>
  );

}

export default Layout
