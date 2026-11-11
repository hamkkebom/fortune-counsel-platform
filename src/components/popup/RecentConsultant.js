"use client";
import Link from "next/link";

const MOCK_RECENT = [
  { code: "IT-001", name: "보리", category: "신점", image: "" },
  { code: "IT-002", name: "아리아", category: "타로", image: "" },
];

export default function RecentConsultantSheet() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[40] bg-white border-t rounded-t-[12px] p-[1.6rem]">
      <h3 className="text-[1.6rem] font-bold mb-[1.2rem]">최근 본 상담사</h3>
      <div className="flex gap-[1.2rem] overflow-x-auto">
        {MOCK_RECENT.map((c) => (
          <Link key={c.code} href={`/items/profile/${c.code}`} className="flex-shrink-0 w-[8rem] text-center">
            <div className="w-[6rem] h-[6rem] rounded-full bg-[#e9e9e9] mx-auto mb-[0.8rem]" />
            <p className="text-[1.3rem] font-bold">{c.name}</p>
            <p className="text-[1.1rem] text-[#999]">{c.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
