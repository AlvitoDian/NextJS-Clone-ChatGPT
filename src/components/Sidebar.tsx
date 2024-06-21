"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import ConversationTitle from "./ConversationTitle";

export default function Sidebar() {
  const {
    isOpen,
    isContentHidden,
    toggleSidebar,
    isOptionClick,
    handleClickOption,
  } = useSidebar();
  const conversationRef = useRef(null);
  const popUpRef = useRef(null);
  const [isHoverLocation, setIsHoverLocation] = useState(0);

  const handlePopUpClick = (event) => {
    const { clientX, clientY } = event;
    setIsHoverLocation(clientY);
    handleClickOption(false);
  };

  /*
  const handleClickOutside = (event) => {
    if (!popUpRef.current.contains(event.target)) {
      handleClickOption(false);
    }
  };

  useEffect(() => {
    if (isOptionClick) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOptionClick]); */

  return (
    <div
      className={`bg-[#171717] h-screen transition-all duration-300 flex-none flex-col  ${
        isOpen ? "w-[0px]" : "w-[260px]"
      }`}
    >
      <div className={`w-[260px] `}>
        {/* Icon Top */}
        <div className="flex justify-between mx-[12px] pt-[8px] pb-[8px]">
          <div className="w-[40px] h-[40px] hover:bg-[#212121] p-[8px] rounded-[8px] cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={toggleSidebar}
            >
              <path
                fill="#b4b4b4"
                d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
              />
            </svg>
          </div>

          <div className="w-[40px] h-[40px] hover:bg-[#212121] p-[8px] rounded-[8px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#b4b4b4"
              viewBox="0 0 24 24"
            >
              <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4" />
            </svg>
          </div>
        </div>
        {/* Icon Top End */}

        {/* Conversation Option */}
        <div className="flex-col pt-[20px] ml-[12px] mr-[5px] flex-none h-[86vh] overflow-auto">
          <div>
            <div className="pl-[8px] pr-[8px] pb-[8px] pt-[12px]">
              <span className="text-[12px] text-[#b4b4b4] font-roboto-bold">
                Hari ini
              </span>
            </div>
            <div className="bg-[#212121] rounded-[8px] px-[8px] py-[8px] cursor-pointer flex justify-between items-center overflow-hidden relative">
              <span className="text-[14px] text-[#ececec] font-roboto-regular flex-none">
                Date Picker zIndex Fix
                asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
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
          </div>

          <div className="mt-[20px]">
            <div className="pl-[8px] pr-[8px] pb-[8px] pt-[12px]">
              <span className="text-[12px] text-[#b4b4b4] font-roboto-bold">
                7 Hari Sebelumnya
              </span>
            </div>
            <div ref={conversationRef} /* onClick={handleMouseOver} */>
              <ConversationTitle />
            </div>
            <div ref={conversationRef} /* onClick={handleMouseOver} */>
              <ConversationTitle />
            </div>
            <div ref={conversationRef} /* onClick={handleMouseOver} */>
              <ConversationTitle />
            </div>
            <div ref={conversationRef} /* onClick={handleMouseOver} */>
              <ConversationTitle />
            </div>
            <div ref={conversationRef} /* onClick={handleMouseOver} */>
              <ConversationTitle />
            </div>
          </div>
        </div>
        {/* Conversation Option */}

        {/* Pop up Option */}
        <div
          className={`absolute bg-[#2f2f2f] h-auto flex-col left-[170px] rounded-[16px] border-[1px] border-[#444444] z-[999] ${
            !isOptionClick ? "hidden" : ""
          }`}
          /*     style={{ top: `${isHoverLocation}px` }} */
          ref={popUpRef}
        >
          <div className="flex mt-[9px] mr-[9px] ml-[9px] p-[12px]">
            <div className="mr-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e3e3e3"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
                ></path>
              </svg>
            </div>
            <div>
              <span className="font-roboto-regular text-white">Bagikan</span>
            </div>
          </div>
          <div className="flex mr-[9px] ml-[9px] p-[12px]">
            <div className="mr-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e3e3e3"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
                ></path>
              </svg>
            </div>
            <div>
              <span className="font-roboto-regular text-white">Bagikan</span>
            </div>
          </div>
          <div className="flex mb-[9px] mr-[9px] ml-[9px] p-[12px]">
            <div className="mr-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#e3e3e3"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
                ></path>
              </svg>
            </div>
            <div>
              <span className="font-roboto-regular text-white">Bagikan</span>
            </div>
          </div>
        </div>
        {/* Pop up Option */}
      </div>
    </div>
  );
}
