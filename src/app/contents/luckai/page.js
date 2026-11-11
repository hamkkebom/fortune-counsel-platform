import { CONTENTS } from "@/lib/seed-data";

export default function ContentsLuckaiPage() {
  const items = CONTENTS.filter(c => c.category === "luckai");

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="bg-white px-[2rem] py-[2.5rem] border-b border-[#e9e9e9]">
        <h1 className="text-[2.4rem] font-bold text-[#222]">럭키 AI</h1>
        <p className="text-[1.4rem] text-[#999] mt-[0.6rem]">AI가 알려주는 나만의 운세</p>
      </div>
      <div className="px-[1.6rem] py-[1.6rem] space-y-[1.2rem]">
        {items.map(c => (
          <a key={c.id} className="flex items-center gap-[1.6rem] bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
            <div className="w-[8rem] h-[8rem] rounded-[0.8rem] bg-gradient-to-br from-[#6335b4] to-[#1ab8be] flex items-center justify-center text-white text-[1.2rem] font-bold shrink-0">AI</div>
            <div className="flex-1 min-w-0">
              <p className="text-[1.6rem] font-bold text-[#222] mb-[0.4rem] line-clamp-2">{c.title}</p>
              <p className="text-[1.3rem] text-[#666] mb-[0.6rem] line-clamp-2">{c.excerpt}</p>
              <div className="flex items-center gap-[1rem] text-[1.2rem] text-[#999]">
                <span>{c.author}</span>
                <span>{c.date}</span>
                <span>조회 {c.view_count.toLocaleString()}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
