import React from 'react'
import arrowDown from "../../assets/Icons/VectorDown.svg";

const Faq = () => {
  return (
    <div className="w-full px-4 md:px-[150px] py-15 bg-[#0A4F48]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 md:gap-40 w-full">
        <div className="flex flex-col justify-between items-start gap-10">
          <div className="flex flex-col items-start gap-4 text-white">
            <h2 className="md:text-[75px] text-[36px] tracking-[-4%] leading-none font-bold">
              Frequently <br /> asked <br className="hidden md:block" />{" "}
              questions
            </h2>
            <p className="text-[13px] md:text-[20px] leading-[150%]">
              Have more questions? Reach <br className="hidden md:block" /> out
              to our team.
            </p>
          </div>
          <button className="py-4 px-13 rounded-full text-white text-4 font-semibold border-white border">
            Start Today
          </button>
        </div>

        <div className="flex flex-col justify-between items-start gap-6 w-full text-white">
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                What is weight loss management?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                Which is the best online weight loss program?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                Do I need supplements for weight loss?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                How does TwoFit support postpartum depression?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                What are common diabetes symptoms and how can TwoFit help?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                Do you offer personalized diabetic diets?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
          <div className="pb-5 border-b border-b-gray-500 w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[20px] font-semibold tracking-[-4%]">
                Can I get a PCOD diet plan?
              </p>
              <img src={arrowDown} alt="arrow down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq