import React from "react";
import logo from "../assets/logo-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar bg-[#D4E6F4]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FontAwesomeIcon
                icon={faBarsStaggered}
                size="2x"
                className="text-[#3085C3]"
              />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm text-lg dropdown-content mt-3 z-[100] p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <p
                  onClick={() => handleScrollTo("about-us")}
                  className="text-[#3085C3] hover:text-[#3085C3]"
                >
                  About Us
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleScrollTo("services")}
                  href=""
                  className="text-[#3085C3] hover:text-[#3085C3]"
                >
                  Services
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleScrollTo("products")}
                  className="text-[#3085C3] hover:text-[#3085C3]"
                >
                  Products
                </p>
                <p
                  onClick={() => handleScrollTo("contact-us")}
                  className="text-[#3085C3] hover:text-[#3085C3]"
                >
                  Contact Us
                </p>
              </li>
            </ul>
          </div>
          {/* anchor tag */}
          <a className="hidden md:block hover:cursor-pointer">
            <img src={logo} alt="" className="p-4 h-[80px]" />
          </a>
        </div>
        <div className="navbar-center">
          <a className="block md:hidden">
            <img src={logo} alt="" className="p-4 h-[60px]" />
          </a>
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {/* <li>
              <a className="text-black hover:text-black">Home</a>
            </li> */}
            <li>
              <p
                onClick={() => handleScrollTo("about-us")}
                className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold"
              >
                About Us
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScrollTo("services")}
                className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold"
              >
                Services
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScrollTo("products")}
                className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold"
              >
                Products
              </p>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <p
            onClick={() => handleScrollTo("contact-us")}
            className="text-[#3085C3] hover:text-[#3085C3] text-lg font-bold hover:cursor-pointer"
          >
            Contact Us
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
