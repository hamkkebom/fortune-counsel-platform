"use client";
import { useState } from "react";
import { FAQ } from "@/lib/seed-data";

export default function MypageQnaPage() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="px-[1.6rem] py-[2rem]">
        <div className="space-y-[0.8rem]">
          {FAQ.map(faq => (
            <div key={faq.id} className="bg-white rounded-[0.8rem] overflow-hidden shadow-sm">
              <button onClick={() => toggle(faq.id)} className="w-full flex items-center justify-between p-[1.6rem] text-left">
                <div className="flex items-center gap-[1rem] flex-1">
                  <span className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#f3eff9] flex items-center justify-center text-[1.4rem] font-bold text-[#6335b4] shrink-0">Q</span>
                  <span className="text-[1.5rem] font-bold text-[#222]">{faq.question}</span>
                </div>
                <svg viewBox="0 0 24 24" className={`w-[2.4rem] fill-[#ccc] shrink-0 transition-transform ${openId === faq.id ? "rotate-180" : ""}`}>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                </svg>
              </button>
              {openId === faq.id && (
                <div className="px-[1.6rem] pb-[1.6rem] border-t border-[#f0f0f0]">
                  <div className="flex gap-[1rem]">
                    <span className="w-[2.8rem] h-[2.8rem] rounded-full bg-[#e8f5f1] flex items-center justify-center text-[1.4rem] font-bold text-[#029f7a] shrink-0">A</span>
                    <p className="text-[1.4rem] leading-[2.2rem] text-[#555] pt-[0.4rem]">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
