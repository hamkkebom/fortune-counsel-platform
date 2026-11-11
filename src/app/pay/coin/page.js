"use client";
import { useState } from "react";

const COIN_AMOUNTS = [
  { label: "10,000원", value: 10000 },
  { label: "30,000원", value: 30000 },
  { label: "50,000원", value: 50000 },
  { label: "100,000원", value: 100000 },
  { label: "200,000원", value: 200000 },
  { label: "500,000원", value: 500000 },
];

export default function PayCoinPage() {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handlePayment = () => {
    if (!selectedAmount) {
      alert("금액을 선택해주세요.");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    user.coinBalance = (user.coinBalance || 0) + selectedAmount;
    localStorage.setItem("user", JSON.stringify(user));
    alert(`${selectedAmount.toLocaleString()}원 충전 완료!`);
    setSelectedAmount(null);
  };

  return (
    <main className="flex flex-col min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">코인 충전</h1>
      <h2 className="text-[1.4rem] text-[#666] mb-[1.6rem]">충전할 금액을 선택해주세요</h2>
      <div className="grid grid-cols-2 gap-[1.2rem] max-w-[40rem] w-full">
        {COIN_AMOUNTS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setSelectedAmount(value)}
            className={`flex items-center justify-center h-[6rem] border-2 rounded-[4px] text-[1.8rem] font-bold transition-colors ${
              selectedAmount === value ? "border-[#6335b4] bg-[#f3edff] text-[#6335b4]" : "border-[#e9e9e9] hover:border-[#6335b4]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={handlePayment}
        className="mt-[3rem] w-full max-w-[40rem] h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]"
      >
        {selectedAmount ? `${selectedAmount.toLocaleString()}원 결제하기` : "결제하기"}
      </button>
    </main>
  );
}
