"use client";
import { useState } from "react";
import { FAQ } from "@/lib/seed-data";

export default function InfoGuidePage() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <main className="min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[0.8rem]">이용 가이드</h1>
      <p className="text-[1.4rem] text-[#666] mb-[2rem]">자주 묻는 질문을 확인하세요.</p>
      <div className="w-full max-w-[50rem] mx-auto flex flex-col gap-[0.8rem]">
        {FAQ.map((item) => (
          <div key={item.id} className="border border-[#e9e9e9] rounded-[8px] overflow-hidden bg-white">
            <button
              onClick={() => toggleFaq(item.id)}
              className="w-full flex items-center justify-between p-[1.6rem] text-left text-[1.5rem] font-bold transition-colors hover:bg-[#f9f7ff]"
            >
              <span>{item.question}</span>
              <span
                className={`text-[2rem] font-bold transition-transform duration-200 ${
                  openId === item.id ? "text-[#6335b4] rotate-45" : "text-[#6335b4]"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openId === item.id ? "max-h-[50rem] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-[1.6rem] pb-[1.6rem] text-[1.4rem] leading-[2.4rem] text-[#555] border-t border-[#e9e9e9] pt-[1.2rem] bg-[#fafafa]">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
