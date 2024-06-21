import { useState } from "react";

export default function ConversationTitle() {
  const [isHover, setIsHover] = useState(false);

  const handleHoverIn = () => {
    setIsHover(true);
  };
  const handleHoverOut = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      className="hover:bg-[#212121] rounded-[8px] px-[8px] py-[8px] mr-[9px] cursor-pointer flex items-center overflow-hidden relative"
    >
      <span className="text-[14px] text-[#ececec] font-roboto-regular flex-none">
        Date Picker asd asd asd asda asd sda asd
      </span>
      <div
        className={`z-[30] absolute right-[8px] ${
          isHover ? "bg-[#212121]" : "hidden"
        }`}
      >
        <svg
          className="fill-current text-gray-400 hover:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            /*     fill="#b4b4b4" */
            d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          />
        </svg>
      </div>

      <div
        className={` ${
          isHover
            ? "absolute inset-y-0 right-[26px] w-[30px] bg-gradient-to-l from-[#212121] to-transparent"
            : "absolute inset-y-0 right-0 w-[30px] bg-gradient-to-l from-[#171717] to-transparent"
        }`}
      ></div>
      {isHover && (
        <div className="absolute inset-y-0 right-0 w-[30px] bg-[#212121]"></div>
      )}
    </div>
  );
}
