"use client";
import { useState } from "react";
import { CONSULT_HISTORY } from "@/lib/seed-data";

const TABS = ["전체", "전화", "채팅", "클래스"];
const TAB_KEYS = ["all", "call", "chat", "class"];

export default function MypageConsultPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? CONSULT_HISTORY
    : CONSULT_HISTORY.filter(h => h.type === activeTab);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Tabs */}
      <div className="flex border-b border-[#e9e9e9] bg-white">
        {TABS.map((tab, i) => {
          const key = TAB_KEYS[i];
          const count = key === "all" ? CONSULT_HISTORY.length : CONSULT_HISTORY.filter(h => h.type === key).length;
          return (
            <button key={key} onClick={() => setActiveTab(key)} className={`flex-1 h-[4.8rem] text-[1.5rem] font-bold relative ${activeTab === key ? "text-[#6335b4]" : "text-[#666]"}`}>
              {tab} {count}
              {activeTab === key && <div className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-[#6335b4]" />}
            </button>
          );
        })}
      </div>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="text-center text-[1.6rem] text-[#999] py-[10rem]">상담 내역이 없습니다.</div>
      ) : (
        <div className="px-[1.6rem] py-[1.2rem] space-y-[1rem]">
          {filtered.map(h => (
            <div key={h.id} className="bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
              <div className="flex items-center justify-between mb-[0.8rem]">
                <div className="flex items-center gap-[1rem]">
                  <span className={`px-[0.8rem] h-[2.4rem] leading-[2.4rem] text-[1.1rem] font-bold rounded-[0.4rem] text-white ${h.type === "call" ? "bg-[#6335b4]" : h.type === "chat" ? "bg-[#029f7a]" : "bg-[#1ab8be]"}`}>
                    {h.type === "call" ? "전화" : h.type === "chat" ? "채팅" : "클래스"}
                  </span>
                  <span className="text-[1.6rem] font-bold text-[#222]">{h.consultant_name}</span>
                </div>
                <span className={`text-[1.2rem] font-bold px-[0.6rem] h-[2.2rem] leading-[2.2rem] rounded-[0.4rem] ${h.status === "completed" ? "bg-[#f0f0f0] text-[#666]" : "bg-[#fff3e0] text-[#ff9800]"}`}>
                  {h.status === "completed" ? "완료" : "진행중"}
                </span>
              </div>
              <div className="flex items-center gap-[1.2rem] text-[1.4rem] text-[#666] mb-[0.8rem]">
                <span>{h.date}</span>
                {h.type === "call" && <span>통화 {Math.floor(h.duration / 60)}분 {h.duration % 60}초</span>}
                {h.type === "chat" && <span>채팅 상담</span>}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1.5rem] font-bold text-[#6335b4]">{h.cost.toLocaleString()}코인</span>
                <div className="flex gap-[0.8rem]">
                  {h.has_review ? (
                    <span className="text-[1.2rem] text-[#029f7a]">후기 작성 완료</span>
                  ) : (
                    <button className="px-[1.2rem] h-[3rem] border border-[#6335b4] rounded-[0.6rem] text-[1.2rem] text-[#6335b4] font-bold">후기 작성</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
