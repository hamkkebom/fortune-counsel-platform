import { COIN_HISTORY } from "@/lib/seed-data";

export default function MypageCoinPage() {
  const currentBalance = COIN_HISTORY[COIN_HISTORY.length - 1]?.balance_after || 0;
  const charged = COIN_HISTORY.filter(h => h.type === "charge").reduce((s, h) => s + h.amount, 0);
  const used = COIN_HISTORY.filter(h => h.type === "use").reduce((s, h) => s + Math.abs(h.amount), 0);
  const bonuses = COIN_HISTORY.filter(h => h.type === "bonus").reduce((s, h) => s + h.amount, 0);

  const typeLabel = (type) => {
    switch (type) {
      case "charge": return { text: "충전", color: "text-[#029f7a] bg-[#e8f5f1]" };
      case "use": return { text: "사용", color: "text-[#ff5252] bg-[#ffebee]" };
      case "bonus": return { text: "보너스", color: "text-[#6335b4] bg-[#f3eff9]" };
      case "refund": return { text: "환불", color: "text-[#ff9800] bg-[#fff3e0]" };
      default: return { text: type, color: "text-[#666] bg-[#f5f5f5]" };
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Balance Card */}
      <div className="bg-gradient-to-r from-[#6335b4] to-[#7f5bc8] px-[2rem] py-[3rem]">
        <p className="text-[1.4rem] text-white/80 mb-[0.4rem]">보유 코인</p>
        <p className="text-[4rem] font-bold text-white">{currentBalance.toLocaleString()}<span className="text-[2rem] font-normal">코인</span></p>
        <div className="flex gap-[2rem] mt-[2rem]">
          <div><p className="text-[1.2rem] text-white/70">총 충전</p><p className="text-[1.6rem] font-bold text-white">{charged.toLocaleString()}코인</p></div>
          <div><p className="text-[1.2rem] text-white/70">총 사용</p><p className="text-[1.6rem] font-bold text-white">{used.toLocaleString()}코인</p></div>
          <div><p className="text-[1.2rem] text-white/70">보너스</p><p className="text-[1.6rem] font-bold text-white">{bonuses.toLocaleString()}코인</p></div>
        </div>
      </div>

      {/* History */}
      <div className="px-[1.6rem] py-[1.6rem]">
        <h2 className="text-[1.8rem] font-bold mb-[1.6rem]">코인 내역</h2>
        {COIN_HISTORY.map(h => {
          const label = typeLabel(h.type);
          return (
            <div key={h.id} className="flex items-center justify-between py-[1.4rem] border-b border-[#e9e9e9]">
              <div className="flex items-center gap-[1.2rem]">
                <span className={`px-[0.8rem] h-[2.4rem] leading-[2.4rem] rounded-[0.4rem] text-[1.1rem] font-bold ${label.color}`}>{label.text}</span>
                <div>
                  <p className="text-[1.5rem] text-[#222]">{h.description}</p>
                  <p className="text-[1.2rem] text-[#999] mt-[0.2rem]">{h.date}{h.payment_method ? ` · ${h.payment_method}` : ""}</p>
                </div>
              </div>
              <span className={`text-[1.6rem] font-bold ${h.amount > 0 ? "text-[#029f7a]" : "text-[#ff5252]"}`}>
                {h.amount > 0 ? "+" : ""}{h.amount.toLocaleString()}코인
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
