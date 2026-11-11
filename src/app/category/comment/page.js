"use client";
import { useState } from "react";
import { REVIEWS, CONSULTANTS } from "@/lib/seed-data";

export default function CommentPage() {
  const [activeTab, setActiveTab] = useState("latest");
  const getCName = (code) => CONSULTANTS.find(c => c.it_code === code)?.it_nick || "상담사";
  let sorted = [...REVIEWS];
  if (activeTab === "rating") sorted.sort((a, b) => b.rating - a.rating);
  if (activeTab === "best") sorted.sort((a, b) => b.helpful - a.helpful);

  return (
    <main className="bg-[#f6f6f6] min-h-screen">
      <div className="flex border-b border-[#e9e9e9] bg-white">
        {["latest", "rating", "best"].map((tab, i) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 h-[5rem] text-[1.6rem] font-bold relative ${activeTab === tab ? "text-[#6335b4]" : "text-[#666]"}`}>
            {["최신순", "평점순", "추천순"][i]}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-[#6335b4]" />}
          </button>
        ))}
      </div>
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {sorted.map(r => (
          <div key={r.id} className="bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
            <div className="flex items-center gap-[1.2rem] mb-[0.8rem]">
              <div className="w-[4rem] h-[4rem] rounded-full bg-[#6335b4] flex items-center justify-center text-white text-[1.6rem] font-bold">{getCName(r.consultant_code)[0]}</div>
              <div className="flex-1">
                <p className="text-[1.5rem] font-bold">{getCName(r.consultant_code)}</p>
                <div className="flex items-center gap-[0.4rem]">
                  {[1,2,3,4,5].map(i => <span key={i} className={`text-[1.4rem] ${i <= r.rating ? "text-[#feb02a]" : "text-[#ddd]"}`}>★</span>)}
                  <span className="text-[1.2rem] text-[#999] ml-[0.4rem]">{r.created_at}</span>
                </div>
              </div>
              {r.is_best && <span className="px-[0.8rem] h-[2rem] leading-[2rem] bg-[#1ab8be] text-white text-[1rem] font-bold rounded-[0.2rem]">BEST</span>}
            </div>
            <p className="text-[1.5rem] leading-[2.2rem] text-[#444] mb-[0.8rem]">{r.content}</p>
            <div className="flex gap-[0.6rem]">
              {r.tags.map(t => <span key={t} className="text-[1.2rem] text-[#999]">#{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
