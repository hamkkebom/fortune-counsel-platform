"use client";
import { CAFE_INFO, SERVICES } from "@/lib/seed-data";

const SERVICE_CATEGORIES = [
  { key: "phone", title: "전화상담 소개", desc: "전화로 즉시 연결되는 실시간 상담 서비스입니다. 타로, 사주, 신점 분야의 전문 상담사가 24시간 대기 중입니다.", color: "#6335b4" },
  { key: "chat", title: "채팅상담 소개", desc: "채팅으로 편하게 상담을 받아보세요. 기록이 남아 다시 볼 수 있고, 천천히 생각하며 상담할 수 있습니다.", color: "#4a9e6b" },
  { key: "class", title: "클래스 소개", desc: "타로 카드, 사주명리학 등 다양한 분야의 클래스를 온라인과 오프라인에서 수강할 수 있습니다.", color: "#e67e22" },
];

const BENEFITS = [
  { icon: "👥", title: "1,100+ 상담사", desc: "검증된 전문 상담사들이 상시 대기" },
  { icon: "⭐", title: "88만+ 후기", desc: "실제 이용자들의 생생한 후기" },
  { icon: "🕐", title: "24시간 운영", desc: "언제든지 원할 때 상담 가능" },
  { icon: "🔒", title: "비밀 보장", desc: "모든 상담 내용은 철저히 보호" },
];

export default function InfoServiceIntroPage() {
  return (
    <main className="min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[0.8rem]">서비스 소개</h1>
      <p className="text-[1.4rem] text-[#666] mb-[2rem]">{CAFE_INFO.description}</p>

      {/* 서비스 카테고리 */}
      <div className="flex flex-col gap-[2rem] mb-[3rem]">
        {SERVICE_CATEGORIES.map(({ key, title, desc, color }) => (
          <div key={key} className="bg-white rounded-[8px] p-[1.6rem] border border-[#e9e9e9]">
            <h2 className="text-[1.8rem] font-bold mb-[0.8rem]" style={{ color }}>{title}</h2>
            <p className="text-[1.4rem] leading-[2.2rem] text-[#555]">{desc}</p>
          </div>
        ))}
      </div>

      {/* 혜택 섹션 */}
      <h2 className="text-[1.8rem] font-bold mb-[1.2rem]">샘플카페의 특별한 혜택</h2>
      <div className="grid grid-cols-2 gap-[1.2rem] mb-[3rem]">
        {BENEFITS.map(({ icon, title, desc }) => (
          <div key={title} className="bg-[#f9f7ff] rounded-[8px] p-[1.4rem] text-center border border-[#e9e9e9]">
            <span className="text-[2.4rem]">{icon}</span>
            <h3 className="text-[1.4rem] font-bold mt-[0.6rem]">{title}</h3>
            <p className="text-[1.2rem] text-[#666] mt-[0.3rem]">{desc}</p>
          </div>
        ))}
      </div>

      {/* 서비스 상품 */}
      <h2 className="text-[1.8rem] font-bold mb-[1.2rem]">추천 서비스</h2>
      <div className="grid grid-cols-2 gap-[1.2rem]">
        {SERVICES.slice(0, 6).map((service) => (
          <div key={service.id} className="bg-white rounded-[8px] p-[1.2rem] border border-[#e9e9e9]">
            <h3 className="text-[1.4rem] font-bold">{service.name}</h3>
            <p className="text-[1.2rem] text-[#6335b4] font-bold mt-[0.4rem]">{service.price.toLocaleString()}원</p>
            <p className="text-[1.2rem] text-[#666] mt-[0.4rem]">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
