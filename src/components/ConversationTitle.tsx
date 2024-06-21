export default function ConversationTitle() {
  return (
    <div className="hover:bg-[#212121] rounded-[8px] px-[8px] py-[8px] cursor-pointer flex items-center overflow-hidden relative">
      <span className="text-[14px] text-[#ececec] font-roboto-regular flex-none">
        Date Picker asd asd asd asda
      </span>
      <div className="z-[30] absolute right-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#b4b4b4"
            d="M3 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
          />
        </svg>
      </div>
    </div>
  );
}
