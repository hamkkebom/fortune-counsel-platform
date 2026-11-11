import { CONSULTANTS } from "@/lib/seed-data";

export default function CategoryMainPage() {
  const categories = [
    { name: "타로", code: "tarot", description: "타로 카드로 보는 당신의 운명", color: "from-[#6335b4] to-[#7f5bc8]", count: CONSULTANTS.filter(c => c.it_category_code === "tarot" && !c.it_code.startsWith("CH-") && !c.it_code.startsWith("CL-")).length },
    { name: "사주", code: "saju", description: "사주팔자로 풀어보는 인생", color: "from-[#1ab8be] to-[#2dd4d4]", count: CONSULTANTS.filter(c => c.it_category_code === "saju" && !c.it_code.startsWith("CH-") && !c.it_code.startsWith("CL-")).length },
    { name: "신점", code: "fortune", description: "신통한 신점으로 미래를 예측", color: "from-[#ff9800] to-[#ffb74d]", count: CONSULTANTS.filter(c => c.it_category_code === "fortune" && !c.it_code.startsWith("CH-") && !c.it_code.startsWith("CL-")).length },
    { name: "채팅상담", code: "chat", description: "편하게 채팅으로 상담받기", color: "from-[#029f7a] to-[#26a69a]", count: CONSULTANTS.filter(c => c.it_code.startsWith("CH-")).length },
    { name: "클래스", code: "classh", description: "전문가에게 배우는 운세", color: "from-[#e91e63] to-[#f06292]", count: CONSULTANTS.filter(c => c.it_code.startsWith("CL-")).length },
  ];

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="bg-white px-[2rem] py-[2.5rem] border-b border-[#e9e9e9]">
        <h1 className="text-[2.4rem] font-bold text-[#222]">카테고리</h1>
        <p className="text-[1.4rem] text-[#999] mt-[0.6rem]">원하는 상담 유형을 선택하세요</p>
      </div>
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {categories.map(cat => (
          <a key={cat.code} href={`/call/category/${cat.code}`} className="flex items-center gap-[1.6rem] bg-white rounded-[0.8rem] p-[2rem] shadow-sm">
            <div className={`w-[6rem] h-[6rem] rounded-[0.8rem] bg-gradient-to-br ${cat.color} flex items-center justify-center text-white text-[2.4rem] font-bold shrink-0`}>
              {cat.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-[1rem] mb-[0.4rem]">
                <p className="text-[1.8rem] font-bold text-[#222]">{cat.name}</p>
                <span className="text-[1.3rem] text-[#6335b4] font-bold">{cat.count}명</span>
              </div>
              <p className="text-[1.3rem] text-[#666]">{cat.description}</p>
            </div>
            <svg viewBox="0 0 24 24" className="w-[2rem] h-[2rem] fill-[#ccc] shrink-0"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
          </a>
        ))}
      </div>
    </main>
  );
}
