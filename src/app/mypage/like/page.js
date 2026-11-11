import { CONSULTANTS } from "@/lib/seed-data";

export default function MypageLikePage() {
  const favorites = CONSULTANTS.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      <div className="px-[1.6rem] py-[2rem]">
        <p className="text-[1.4rem] text-[#999] mb-[2rem]">찜한 상담사 {favorites.length}명</p>
        <div className="space-y-[1.2rem]">
          {favorites.map(c => (
            <a key={c.it_code} href={`/items/profile/${c.it_code}`} className="flex items-center gap-[1.6rem] bg-white rounded-[0.8rem] p-[1.6rem] shadow-sm">
              <div className="w-[7rem] h-[7rem] rounded-[0.8rem] bg-gradient-to-br from-[#6335b4] to-[#7f5bc8] flex items-center justify-center text-white text-[1.3rem] font-bold shrink-0">{c.it_category_name}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-[0.8rem] mb-[0.4rem]">
                  <p className="text-[1.7rem] font-bold text-[#222]">{c.it_nick}</p>
                  <span className={`px-[0.6rem] h-[2rem] leading-[2rem] rounded-[0.4rem] text-[1rem] font-bold text-white ${c.status === "on" ? "bg-[#029f7a]" : c.status === "standby" ? "bg-[#ff9800]" : "bg-[#ccc]"}`}>
                    {c.status === "on" ? "상담중" : c.status === "standby" ? "대기중" : "부재중"}
                  </span>
                </div>
                <p className="text-[1.3rem] text-[#666] truncate">#{c.it_style_key} #{c.it_counsel_key}</p>
                <div className="flex items-center gap-[0.8rem] mt-[0.4rem]">
                  <span className="text-[1.2rem] text-[#feb02a]">★ {c.rating_avg}</span>
                  <span className="text-[1.2rem] text-[#999]">상담 {c.consult_count.toLocaleString()}건</span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-[1.6rem] font-bold text-[#6335b4]">{c.it_coin_price.toLocaleString()}원</p>
                <p className="text-[1.1rem] text-[#999]">30초</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
