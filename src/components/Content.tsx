"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Answer from "./Answer";

export default function Content() {
  const { toggleSidebar, isContentHidden } = useSidebar();
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(52);
  const [isOpenGPTOption, setIsOpenGPTOption] = useState(false);
  const gptOptionRef = useRef(null);
  const buttonRef = useRef(null);

  const openGPTOptionHandler = () => {
    setIsOpenGPTOption(!isOpenGPTOption);
  };

  const handleClickOutside = (event) => {
    if (
      gptOptionRef.current &&
      !gptOptionRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpenGPTOption(false);
    }
  };

  useEffect(() => {
    if (isOpenGPTOption) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenGPTOption]);

  const handleChange = (event) => {
    setText(event.target.value);
    adjustHeight(event.target);
  };

  const handleBlur = (event) => {
    if (text.trim() === "") {
      setTextareaHeight(52);
      event.target.style.height = "52px";
      event.target.style.overflow = "hidden";
    }
  };

  const adjustHeight = (element) => {
    if (element.scrollHeight >= 74) {
      console.log(element.style.height, "height");
      element.style.height = "auto";
      const newHeight = element.scrollHeight;
      console.log(newHeight, "scrollHeight");

      if (newHeight > 200) {
        element.style.overflow = "auto";
        element.style.height = `200px`;
        setTextareaHeight(200);
      } else {
        element.style.overflow = "hidden";
        element.style.height = `${newHeight}px`;
        setTextareaHeight(newHeight);
      }
    }
  };

  const firstDivHeight =
    textareaHeight >= 52 ? `calc(100% - ${textareaHeight}px)` : "91%";

  return (
    <div className="bg-[#212121] w-full h-screen transition duration-300 flex flex-col">
      <div className="overflow-auto" style={{ height: firstDivHeight }}>
        <div className="sticky top-0 bg-[#212121] w-full h-[56px] flex items-center">
          <div
            className={`w-[40px] h-[40px] hover:bg-[#2f2f2f] p-[8px] rounded-[8px] cursor-pointer ml-[12px] ${
              !isContentHidden ? "hidden" : ""
            } z-[90]`}
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#b4b4b4"
                d="M8.857 3h6.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961.058.708.058 1.582.058 2.666v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C17.1 21 16.227 21 15.143 21H8.857c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C1.5 15.6 1.5 14.727 1.5 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.23 3.544c.592-.302 1.233-.428 1.961-.487C6.9 3 7.773 3 8.857 3M6.354 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216-.05.617-.051 1.41-.051 2.546v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h.6V5h-.6c-1.137 0-1.929 0-2.546.051M11.5 5v14h3.6c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C17.029 5.001 16.236 5 15.1 5zM5 8.5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="relative">
            {isOpenGPTOption && (
              <div
                ref={gptOptionRef}
                className="absolute left-[12px] top-[56px] bg-[#2f2f2f] w-[340px] h-[207px] flex-col rounded-[16px] border-[1px] border-[#444444]"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                }}
              >
                <div className="flex mt-[9px] ml-[9px] mr-[9px]">ANJAY</div>
                <div className="flex ml-[9px] mr-[9px]">ANJAY</div>
                <div className="flex">ANJAY</div>
              </div>
            )}
            <div
              ref={buttonRef}
              className="flex items-center justify-center ml-[12px] mt-[8px] w-[116px] h-[40px] rounded-[8px] hover:bg-[#2f2f2f] cursor-pointer"
              onClick={openGPTOptionHandler}
            >
              <div className="ml-[12px]">
                <span className="text-[#b4b4b4] text-[18px] font-semibold">
                  ChatGPT
                </span>
              </div>
              <div className="ml-[4px] mr-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#9b9b9b"
                    d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
      <div className="flex flex-col">
        <div className="bg-[#212121] flex justify-center">
          <form action="">
            <div
              className="relative bg-[#2f2f2f] w-[768px] rounded-[26px] h-[52px] flex items-end"
              style={{ height: textareaHeight }}
            >
              <div className="absolute left-[16px] mb-[14px] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
                  />
                </svg>
              </div>
              <textarea
                id="chatTextarea"
                placeholder="Kirim pesan ke ChatGPT"
                className="bg-transparent ml-[52px] mr-[50px] w-[768px] rounded-[26px] resize-none p-[13.5px] h-[52px] text-[#ececec] font-roboto-regular focus:outline-none focus:border-transparent"
                value={text}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="absolute right-[10px] mb-[10px] cursor-pointer">
                <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#000000"
                      d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center h-[35px]">
          <span className="text-[#b4b4b4] font-roboto-regular text-[12px]">
            ChatGPT dapat membuat kesalahan. Periksa info penting.
          </span>
        </div>
      </div>
    </div>
  );
}
