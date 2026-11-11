"use client";
import { useState } from "react";
import { CLASSES } from "@/lib/seed-data";

const CATEGORIES = [
  { key: "all", label: "전체" },
  { key: "tarot", label: "타로" },
  { key: "saju", label: "사주" },
  { key: "naming", label: "작명" },
  { key: "topography", label: "풍수" },
];

const TYPE_LABELS = { online: "온라인", offline: "오프라인" };

export default function ClasshCategoryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");

  let filtered = [...CLASSES];
  if (activeCategory !== "all") filtered = filtered.filter(c => c.category === activeCategory);
  if (activeType !== "all") filtered = filtered.filter(c => c.type === activeType);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Header */}
      <div className="bg-white px-[2rem] py-[2.5rem] border-b border-[#e9e9e9]">
        <h1 className="text-[2.4rem] font-bold text-[#222]">클래스</h1>
        <p className="text-[1.4rem] text-[#999] mt-[0.6rem]">전문가에게 직접 배우는 운세 클래스</p>
      </div>

      {/* Category Filter */}
      <div className="bg-white mt-[1rem] px-[2rem] py-[1.6rem]">
        <div className="flex gap-[0.8rem] overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-[1.6rem] h-[3.6rem] rounded-[2rem] text-[1.4rem] font-bold whitespace-nowrap border ${activeCategory === cat.key ? "bg-[#6335b4] text-white border-[#6335b4]" : "bg-white text-[#666] border-[#e9e9e9]"}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div className="bg-white mt-[0.4rem] px-[2rem] py-[1.2rem] border-b border-[#e9e9e9]">
        <div className="flex gap-[0.8rem]">
          {[{ key: "all", label: "전체" }, { key: "online", label: "온라인" }, { key: "offline", label: "오프라인" }].map(t => (
            <button key={t.key} onClick={() => setActiveType(t.key)} className={`px-[1.2rem] h-[3rem] rounded-[0.6rem] text-[1.3rem] font-bold ${activeType === t.key ? "bg-[#029f7a] text-white" : "bg-[#f5f5f5] text-[#666]"}`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Class Grid */}
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {filtered.length === 0 ? (
          <div className="text-center text-[1.6rem] text-[#999] py-[10rem]">해당하는 클래스가 없습니다.</div>
        ) : (
          filtered.map(cls => (
            <div key={cls.id} className="bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
              <div className="flex items-start gap-[1.2rem]">
                <div className="w-[7rem] h-[7rem] rounded-[0.8rem] bg-gradient-to-br from-[#6335b4] to-[#1ab8be] flex items-center justify-center text-white text-[1.1rem] font-bold shrink-0">
                  {cls.category === "tarot" ? "타로" : cls.category === "saju" ? "사주" : cls.category === "naming" ? "작명" : "풍수"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-[0.6rem] mb-[0.4rem]">
                    <span className={`px-[0.6rem] h-[2rem] leading-[2rem] rounded-[0.3rem] text-[1rem] font-bold text-white ${cls.type === "online" ? "bg-[#6335b4]" : "bg-[#ff9800]"}`}>
                      {TYPE_LABELS[cls.type]}
                    </span>
                  </div>
                  <p className="text-[1.6rem] font-bold text-[#222] mb-[0.4rem] line-clamp-2">{cls.title}</p>
                  <p className="text-[1.3rem] text-[#666] mb-[0.6rem]">{cls.sessions}</p>
                  <p className="text-[1.2rem] text-[#999] mb-[0.6rem]">{cls.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.3rem] text-[#999]">강사: {cls.instructor}</span>
                    <span className="text-[1.6rem] font-bold text-[#6335b4]">{cls.price.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
