import React from 'react'
import Logo from "../../assets/images/navbarLogo.svg"
import YoutubeIcon from "../../assets/Icons/youtubeIcon.svg"
import FacebookIcon from "../../assets/Icons/facebookIcon.svg";
import instagramIcon from "../../assets/Icons/InstagramIcon.svg";
import LinkedInIcon from "../../assets/Icons/linkedinIcon.svg";

const Footer = () => {
  return (
    <div className="w-full px-[150px] bg-[#f1ece8] py-15">
      <div className="flex flex-col justify-between items-center gap-13 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="w-1/2">
            <h1 className="font-bold text-[50px] tracking-[-4%] leading-[120%]">
              Stay Active. <br /> Stay Consistent.
            </h1>
          </div>

          <div className=" flex justify-between items-center w-1/2">
            <p className="text-[15px] leading-[150%]">
              Work out anywhere in Kerala with <br /> easy to follow, result
              driven programs.
            </p>
            <button className="py-4 px-16 bg-[#0a4f48] rounded-full text-white text-4 font-semibold">
              Start Today
            </button>
          </div>
        </div>

        <div className="w-full">
          <hr className="border border-gray-300" />
        </div>

        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col justify-between items-start gap-12">
            <div className="flex flex-col items-start gap-3">
              <img src={Logo} alt="logo" className="h-7" />
              <p className="text-[14px] text-[#00000]">
                © 2025 Twofit. All rights reserved
              </p>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-end gap-6">
                <img src={YoutubeIcon} alt="media icon" />
                <img src={FacebookIcon} alt="media icon" />
                <img src={instagramIcon} alt="media icon" />
                <img src={LinkedInIcon} alt="media icon" />
              </div>
              <p className="text-[14px]">
                <span className="font-semibold text-[14px] ">Mail:</span>{" "}
                twofitofficial@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-start justify-between gap-10">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-[16px] font-semibold text-[#0A4F48]">
                Services
              </h2>
              <ul className="flex flex-col items-start gap-2 text-[12px]">
                <li>
                  <a href="#">Weight Loss</a>
                </li>
                <li>
                  <a href="#">Weight Gain</a>
                </li>
                <li>
                  <a href="#">Thyroid Management</a>
                </li>
                <li>
                  <a href="#">PCOD Support</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <ul className="flex flex-col items-start gap-2 text-[12px]">
                <li>
                  <a href="#">Postpartum Care</a>
                </li>
                <li>
                  <a href="#">Diabetes Care</a>
                </li>
                <li>
                  <a href="#">Mindset & Habit Reset</a>
                </li>
                <li>
                  <a href="#">Cholesterol Control</a>
                </li>
                <li>
                  <a href="#">Fatty Liver Support</a>
                </li>
                <li>
                  <a href="#">Body Toning (Level 2)</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-[16px] font-semibold text-[#0A4F48]">
                Company
              </h2>
              <ul className="flex flex-col items-start gap-2 text-[12px]">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-[16px] font-semibold text-[#0A4F48]">
                Others
              </h2>
              <ul className="flex flex-col items-start gap-2 text-[12px]">
                <li>
                  <a href="#">FAQ,s</a>
                </li>
                <li>
                  <a href="#">Testimonial</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer


