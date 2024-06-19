"use client";

import React, { useState, useEffect } from "react";
import { useSidebar } from "@/contexts/SidebarContext";

export default function Content() {
  const { toggleSidebar, isContentHidden } = useSidebar();
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(52);

  const handleChange = (event) => {
    setText(event.target.value);
    adjustHeight(event.target);
  };

  const adjustHeight = (element) => {
    console.log(element.style.height, "height");
    element.style.height = "auto";
    const newHeight = element.scrollHeight;
    console.log(newHeight, "scrollHeight");

    if (newHeight == 74) {
      element.style.height = "52px";
    }

    if (newHeight > 200) {
      element.style.overflow = "auto";
      element.style.height = `200px`;
      setTextareaHeight(200);
    } else {
      element.style.overflow = "hidden";
      element.style.height = `${newHeight}px`;
      setTextareaHeight(newHeight);
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
        </div>
        <div className="flex justify-center">
          <div className="w-[768px] bg-red-600">
            <div>
              <span className="text-[#ececec] font-roboto-regular">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis omnis, quibusdam quidem dolores, voluptates
                adipisci facilis in vel veniam similique ut vitae. Voluptatum
                pariatur quisquam quod accusantium. Debitis voluptatum optio
                harum odit, repudiandae velit aliquam ex praesentium iste
                voluptates eveniet ratione maiores libero earum? Saepe eveniet
                possimus natus voluptatibus rem repudiandae repellat ex
                explicabo iusto nemo dolorem nesciunt sequi excepturi aliquid
                quibusdam perferendis soluta, quos nobis veritatis architecto.
                Excepturi, animi voluptates a qui ipsum fugit atque delectus hic
                libero architecto neque amet beatae doloremque dolorem obcaecati
                molestias esse illum aspernatur odit exercitationem provident
                consectetur mollitia? Animi, ea molestias! Fugiat aperiam ad
                eius. Corrupti voluptatum vitae accusantium tenetur aperiam
                maiores voluptates, tempora sint, unde earum inventore error,
                alias porro! Magni iusto impedit quidem harum nesciunt, minima
                nisi architecto ratione nobis, quasi, error nam ipsum cumque
                earum aliquid quam voluptatibus commodi laudantium? Sint quia
                aut sed impedit laborum voluptas earum rerum cupiditate mollitia
                aliquam ipsa explicabo culpa, labore molestias placeat, odio sit
                saepe distinctio voluptates nisi, dignissimos ipsam voluptatum
                iusto vitae? Qui consectetur dolorum maiores ducimus nulla quod
                temporibus nisi repudiandae! Sit facilis nam perspiciatis sed
                quis deserunt ratione impedit tenetur et dignissimos inventore
                consectetur doloremque est, ipsa, voluptatem iure beatae
                necessitatibus ea eaque architecto reprehenderit odio corporis
                debitis! Similique inventore necessitatibus est velit, a vero
                deleniti laudantium? Velit molestias ut tempora obcaecati? Est
                deleniti iste placeat expedita nulla velit aliquid, doloribus
                nisi dignissimos, consequatur cum quos, corporis eligendi? Iste
                nisi voluptatibus necessitatibus similique eligendi, temporibus,
                in totam natus placeat consectetur quia, nihil eum nemo minus
                quasi praesentium pariatur earum ipsum voluptates. Voluptates
                laborum libero inventore dolor perferendis vero reprehenderit
                cupiditate blanditiis cumque iusto ut tempore saepe accusantium
                id ratione repudiandae totam, autem distinctio beatae ipsum,
                quas excepturi nostrum dolore. Soluta temporibus laborum
                laudantium, ex quis laboriosam voluptatibus eum alias. Hic
                perferendis facilis maiores eaque temporibus, quo modi animi
                quis magni quisquam officiis necessitatibus distinctio minus
                eveniet nemo dicta alias culpa illo nesciunt enim. Voluptatem
                quisquam est eveniet explicabo. Blanditiis sed provident quia
                voluptatem quibusdam? Voluptatum, sunt doloribus, optio eius
                modi voluptatem, accusamus esse consectetur voluptate hic
                distinctio sapiente! Voluptates vitae minima autem laboriosam
                fuga totam fugiat eius laudantium possimus cumque incidunt est
                quia, iusto distinctio? Dicta ea aliquam atque placeat
                consequatur corrupti, fugit exercitationem labore mollitia
                distinctio laborum nemo ipsum? Praesentium ullam tenetur est
                labore corporis placeat velit qui ducimus molestiae iure
                similique, ratione quis debitis vitae accusantium? Possimus
                nesciunt eveniet repudiandae ullam nam earum itaque, ut, officia
                consequatur ducimus odit esse, neque architecto obcaecati
                corrupti. Nesciunt aliquam natus possimus eligendi, pariatur aut
                laboriosam debitis corrupti molestiae saepe error deleniti harum
                voluptate, id ad libero nam tempora non impedit, adipisci rerum
                asperiores ex dolores maiores? Facilis rerum eius soluta minus
                nostrum facere, necessitatibus, accusamus at id quod magni
                quisquam animi ducimus explicabo modi sint laboriosam. Sit animi
                quia consequatur. Rem, ea, placeat fuga dolorum eaque voluptas
                esse labore perferendis provident praesentium, blanditiis
                laboriosam qui. Aut veniam magni ipsum, magnam non repellendus,
                voluptate eos quia obcaecati enim esse assumenda. Reprehenderit,
                ullam odio?
              </span>
            </div>
            <div>
              <span className="text-[#ececec] font-roboto-regular">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis omnis, quibusdam quidem dolores, voluptates
                adipisci facilis in vel veniam similique ut vitae. Voluptatum
                pariatur quisquam quod accusantium. Debitis voluptatum optio
                harum odit, repudiandae velit aliquam ex praesentium iste
                voluptates eveniet ratione maiores libero earum? Saepe eveniet
                possimus natus voluptatibus rem repudiandae repellat ex
                explicabo iusto nemo dolorem nesciunt sequi excepturi aliquid
                quibusdam perferendis soluta, quos nobis veritatis architecto.
                Excepturi, animi voluptates a qui ipsum fugit atque delectus hic
                libero architecto neque amet beatae doloremque dolorem obcaecati
                molestias esse illum aspernatur odit exercitationem provident
                consectetur mollitia? Animi, ea molestias! Fugiat aperiam ad
                eius. Corrupti voluptatum vitae accusantium tenetur aperiam
                maiores voluptates, tempora sint, unde earum inventore error,
                alias porro! Magni iusto impedit quidem harum nesciunt, minima
                nisi architecto ratione nobis, quasi, error nam ipsum cumque
                earum aliquid quam voluptatibus commodi laudantium? Sint quia
                aut sed impedit laborum voluptas earum rerum cupiditate mollitia
                aliquam ipsa explicabo culpa, labore molestias placeat, odio sit
                saepe distinctio voluptates nisi, dignissimos ipsam voluptatum
                iusto vitae? Qui consectetur dolorum maiores ducimus nulla quod
                temporibus nisi repudiandae! Sit facilis nam perspiciatis sed
                quis deserunt ratione impedit tenetur et dignissimos inventore
                consectetur doloremque est, ipsa, voluptatem iure beatae
                necessitatibus ea eaque architecto reprehenderit odio corporis
                debitis! Similique inventore necessitatibus est velit, a vero
                deleniti laudantium? Velit molestias ut tempora obcaecati? Est
                deleniti iste placeat expedita nulla velit aliquid, doloribus
                nisi dignissimos, consequatur cum quos, corporis eligendi? Iste
                nisi voluptatibus necessitatibus similique eligendi, temporibus,
                in totam natus placeat consectetur quia, nihil eum nemo minus
                quasi praesentium pariatur earum ipsum voluptates. Voluptates
                laborum libero inventore dolor perferendis vero reprehenderit
                cupiditate blanditiis cumque iusto ut tempore saepe accusantium
                id ratione repudiandae totam, autem distinctio beatae ipsum,
                quas excepturi nostrum dolore. Soluta temporibus laborum
                laudantium, ex quis laboriosam voluptatibus eum alias. Hic
                perferendis facilis maiores eaque temporibus, quo modi animi
                quis magni quisquam officiis necessitatibus distinctio minus
                eveniet nemo dicta alias culpa illo nesciunt enim. Voluptatem
                quisquam est eveniet explicabo. Blanditiis sed provident quia
                voluptatem quibusdam? Voluptatum, sunt doloribus, optio eius
                modi voluptatem, accusamus esse consectetur voluptate hic
                distinctio sapiente! Voluptates vitae minima autem laboriosam
                fuga totam fugiat eius laudantium possimus cumque incidunt est
                quia, iusto distinctio? Dicta ea aliquam atque placeat
                consequatur corrupti, fugit exercitationem labore mollitia
                distinctio laborum nemo ipsum? Praesentium ullam tenetur est
                labore corporis placeat velit qui ducimus molestiae iure
                similique, ratione quis debitis vitae accusantium? Possimus
                nesciunt eveniet repudiandae ullam nam earum itaque, ut, officia
                consequatur ducimus odit esse, neque architecto obcaecati
                corrupti. Nesciunt aliquam natus possimus eligendi, pariatur aut
                laboriosam debitis corrupti molestiae saepe error deleniti harum
                voluptate, id ad libero nam tempora non impedit, adipisci rerum
                asperiores ex dolores maiores? Facilis rerum eius soluta minus
                nostrum facere, necessitatibus, accusamus at id quod magni
                quisquam animi ducimus explicabo modi sint laboriosam. Sit animi
                quia consequatur. Rem, ea, placeat fuga dolorum eaque voluptas
                esse labore perferendis provident praesentium, blanditiis
                laboriosam qui. Aut veniam magni ipsum, magnam non repellendus,
                voluptate eos quia obcaecati enim esse assumenda. Reprehenderit,
                ullam odio?
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-[#212121] flex justify-center relative">
          <textarea
            id="chatTextarea"
            placeholder="Kirim pesan ke ChatGPT"
            className="bg-[#2f2f2f] w-[768px] rounded-[26px] resize-none transition-all duration-300 p-[13px] h-[52px]"
            value={text}
            onChange={handleChange}
          />
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
