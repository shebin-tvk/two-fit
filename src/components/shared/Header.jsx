import React from 'react'
import Logo from "../../assets/images/navbarLogo.svg"
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute top-4 z-10 w-full">
      <div className="flex items-center justify-between mx-[150px] p-3 bg-white rounded-full ">
        <img src={Logo} alt="Logo" className="w-35 h-8" />
        <div className="flex items-center justify-between space-x-5">
          <span
            className="cursor-pointer text-4 font-semibold "
            onClick={() => navigate("/")}
          >
            Home
          </span>
          <span
            className="cursor-pointer text-4 font-semibold "
            onClick={() => navigate("/programs")}
          >
            All Program
          </span>
          <span
            className="cursor-pointer text-4 font-semibold "
            onClick={() => navigate("/ourstory")}
          >
            Our Story
          </span>
          <span
            className="cursor-pointer text-4 font-semibold "
            onClick={() => navigate("/blog")}
          >
            Blog
          </span>
          <span
            className="cursor-pointer text-4 font-semibold "
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </span>
        </div>
        <button className="py-4 px-16 bg-[#0a4f48] rounded-full text-white text-4 font-semibold">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;