import { CONTENTS } from "@/lib/seed-data";

export default function ContentsInsidePage() {
  const items = CONTENTS.filter(c => c.category === "inside");

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="bg-white px-[2rem] py-[2.5rem] border-b border-[#e9e9e9]">
        <h1 className="text-[2.4rem] font-bold text-[#222]">인사이드</h1>
        <p className="text-[1.4rem] text-[#999] mt-[0.6rem]">운세 인사이트 & 아티클</p>
      </div>
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {items.map(c => (
          <a key={c.id} className="flex flex-col bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
            <p className="text-[1.7rem] font-bold text-[#222] mb-[0.6rem] line-clamp-2">{c.title}</p>
            <p className="text-[1.4rem] text-[#666] leading-[2.1rem] mb-[1rem] line-clamp-3">{c.excerpt}</p>
            <div className="flex items-center gap-[1rem] text-[1.2rem] text-[#999] mt-auto">
              <span>{c.author}</span>
              <span className="w-[0.3rem] h-[0.3rem] rounded-full bg-[#ccc]" />
              <span>{c.date}</span>
              <span className="w-[0.3rem] h-[0.3rem] rounded-full bg-[#ccc]" />
              <span>조회 {c.view_count.toLocaleString()}</span>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
