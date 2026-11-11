"use client";

export default function CampaignRealauthPage() {
  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem] text-center">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">본인인증 캠페인</h1>
      <p className="text-[1.6rem] text-[#666] mb-[3rem]">본인인증을 완료하고 다양한 혜택을 누리세요.</p>
      <button onClick={() => alert("본인인증 기능은 준비 중입니다")} className="w-full max-w-[40rem] h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">본인인증 하기</button>
    </main>
  );
}
