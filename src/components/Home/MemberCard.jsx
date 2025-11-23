import React from "react";

const MemberCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((data) => (
        <div className="p-2 flex justify-between items-center gap-2 rounded-full bg-[#F1F1F1] pr-8 w-100">
          <img
            src={data.img}
            alt="profileImg"
            className="rounded-full w-15 h-15"
          />
          <p className="text-[20px] font-semibold tracking-[-4%] text-[#0A4F48]">
            {data.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default MemberCard;
