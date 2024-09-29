const ContentComponent = ({ activeTab, setActiveTab }) => {
  return (
    <div className="pt-[60px] flex justify-between pr-[130px] items-center">
      <div className="flex gap-[31px]">
        <div className="flex  gap-[10px] cursor-pointer">
          <img
            src="full_screen_logo.png"
            height={"20px"}
            width={"20px"}
            alt="fullScreen"
          />
          <h1 className="h-[23px] w-[83px] font-customFont font-normal leading-[22.77px] text-[18px] text-[#6F7177]">
            Fullscreen
          </h1>
        </div>
        <div className="flex gap-[10px] cursor-pointer">
          <img src="plus_logo.png" height={"20px"} width={"20px"} alt="plus" />
          <h1 className="h-[23px] w-[76px] font-customFont font-normal leading-[22.77px] text-[18px] text-[#6F7177]">
            Compare
          </h1>
        </div>
      </div>
      <div className="flex  gap-[34px] font-customFont font-normal leading-[22.77px] text-[18px] cursor-pointer">
        {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((tab, index) => (
          <h1
            key={index}
            className={`${
              index === activeTab
                ? "text-white bg-[#4B40EE] pt-[5px] px-[14px]  rounded-[5px] items-center h-[33px]"
                : "text-[#6F7177]  bg-white pt-[5px] px-[14px]  rounded-[5px] items-center h-[33px]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default ContentComponent;
