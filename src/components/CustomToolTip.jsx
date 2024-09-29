import React from "react";

const CustomToolTip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#4B40EE] w-[98px] h-[33px] rounded-[5px] ">
        <p className="text-white text-[18px]  py-[5px] px-[14px]  font-customFont leading-[22.77px] font-normal">
          {`${payload[0].value.toFixed(2)}`}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
