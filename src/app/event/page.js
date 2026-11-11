"use client";
import { useState } from "react";
import { EVENTS } from "@/lib/seed-data";

export default function EventPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleEvent = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[1rem]">이벤트</h1>
      <p className="text-[1.4rem] text-[#666] mb-[2rem]">샘플카페의 다양한 이벤트를 확인하세요!</p>
      <div className="w-full max-w-[40rem] mx-auto flex flex-col gap-[1.2rem]">
        {EVENTS.map((event) => (
          <div key={event.id} className="bg-white border border-[#e9e9e9] rounded-[8px] overflow-hidden">
            <button
              onClick={() => toggleEvent(event.id)}
              className="w-full flex items-center justify-between p-[1.6rem] text-left"
            >
              <div className="flex-1">
                <span className="text-[1.6rem] font-bold">{event.title}</span>
                <span className="block text-[1.2rem] text-[#999] mt-[0.4rem]">{event.period}</span>
              </div>
              <span
                className={`ml-[1rem] px-[0.8rem] py-[0.3rem] rounded-full text-[1.2rem] font-bold ${
                  event.status === "ongoing"
                    ? "bg-[#6335b4] text-white"
                    : "bg-[#ddd] text-[#666]"
                }`}
              >
                {event.status === "ongoing" ? "진행중" : "종료"}
              </span>
            </button>
            {expandedId === event.id && (
              <div className="px-[1.6rem] pb-[1.6rem] text-[1.4rem] leading-[2.2rem] text-[#555] border-t border-[#e9e9e9] pt-[1.2rem]">
                {event.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
