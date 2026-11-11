import { CONTENTS } from "@/lib/seed-data";

export default function ContentsSuccessPage() {
  const items = CONTENTS.filter(c => c.category === "success");

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="bg-white px-[2rem] py-[2.5rem] border-b border-[#e9e9e9]">
        <h1 className="text-[2.4rem] font-bold text-[#222]">성공사례</h1>
        <p className="text-[1.4rem] text-[#999] mt-[0.6rem]">실제 상담 성공 후기 모음</p>
      </div>
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {items.map(c => (
          <a key={c.id} className="flex flex-col bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
            <div className="flex items-center gap-[0.8rem] mb-[0.8rem]">
              <span className="px-[0.8rem] h-[2.2rem] leading-[2.2rem] bg-[#029f7a] text-white text-[1rem] font-bold rounded-[0.4rem]">성공후기</span>
              <span className="text-[1.2rem] text-[#999]">{c.date}</span>
            </div>
            <p className="text-[1.7rem] font-bold text-[#222] mb-[0.6rem] line-clamp-2">{c.title}</p>
            <p className="text-[1.4rem] text-[#666] leading-[2.1rem] mb-[1rem] line-clamp-3">{c.excerpt}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[1.2rem] text-[#999]">{c.author}</span>
              <span className="text-[1.2rem] text-[#999]">조회 {c.view_count.toLocaleString()}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
