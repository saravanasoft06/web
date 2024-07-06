import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faFacebook , faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="">
      <footer className="footer footer-center p-10 bg-[#3085C3] text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <p className="link link-hover text-white hover:text-[#FFCC70]"  onClick={() => handleScrollTo("about-us")}>About Us</p>
          <p className="link link-hover text-white hover:text-[#FFCC70]"  onClick={() => handleScrollTo("contact-us")}>Contact Us</p>
          <p className="link link-hover text-white hover:text-[#FFCC70]"  onClick={() => handleScrollTo("products")}>Products</p>
          <p className="link link-hover text-white hover:text-[#FFCC70]"  onClick={() => handleScrollTo("services")}>Services</p>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="text-white">
             <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:cursor-pointer hover:text-[#FFCC70]"/>
            </a>
            <a className="text-white">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="hover:cursor-pointer hover:text-[#FFCC70]"/>
            </a>
            <a className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="hover:cursor-pointer hover:text-[#FFCC70]"/>
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-white">Copyright © 2023 - All right reserved by Saravana Soft Pvt Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
