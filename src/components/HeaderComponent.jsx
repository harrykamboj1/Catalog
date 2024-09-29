import React from "react";
import { formatNumber } from "../utils/format";

const HeaderComponent = ({ latestValue, diff, percentage }) => {
  return (
    <>
      <div className="flex justify-start items-center pt-[50px] ">
        <h1
          style={{ fontWeight: 500 }}
          className="text-[#1A243A] text-[70px] font-customFont leading-[88.56px] w-[269px] h-[88px]  "
        >
          {formatNumber(latestValue)}
        </h1>
        <h1
          style={{ fontWeight: 500 }}
          className="text-[#BDBEBF] w-[49px] h-[30px] font-customFont leading-[30.36px] text-2xl   p-2 bottom-9 left-1 inset-x-0 relative"
        >
          USD
        </h1>
      </div>

      <h1
        style={{ fontWeight: 500 }}
        className={`pt-[4px] text-[18px] font-customFont leading-[22.77px]  ${
          diff < 0 ? "text-red-500" : "text-[#67BF6B]"
        }`}
      >
        {diff < 0 ? formatNumber(diff) : "+ " + formatNumber(diff)} (
        {Math.abs(percentage.toFixed(2))}%)
      </h1>
    </>
  );
};

export default HeaderComponent;
