import {  useState } from "react";
import { Link } from "react-router-dom";
//react icons
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";
const Navbar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  //navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full z-50 bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav className={` py-4 lg:px-24 px-4 absolute top-0 left-0 right-0 bg-red-400`}>
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-black flex items-center gap-2"
          >
            <FaBlog className="inline-block " />
            Novel Notion
          </Link>
          {/* nav item for large items */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block cursor-pointer hover:text-blue-700 uppercase text-base text-black"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 md:hidden hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn for the mobile device */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navitems for sm devices */}
        <div className={` space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen? "block fixed top-0 right-0 left-0" : "hidden"} `}>
          {
          navItems.map(({ link, path }) => <Link
              key={path}
              to={path}
              className="block cursor-pointer hover:text-blue-700 uppercase text-base text-white"
            >
              {link}
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
