import React, { useState } from "react";

const TabComponent = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
      <div className="pt-[40px] flex gap-[30px] pb-[20px] font-normal font-customFont text-[18px] leading-[22.77px] cursor-pointer">
        {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map(
          (tab, index) => (
            <h1
              key={index}
              className={`${
                index === activeIndex
                  ? "text-[#1A243A] border-[#4B40EE] mb-[-20px]  border-b-[3px] border-solid"
                  : "text-[#6F7177]"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </h1>
          )
        )}
      </div>
      <div className="w-full border-[1px] rounded-[1px] bg-[#EFF1F3] self-center"></div>
    </>
  );
};

export default TabComponent;
