"use client";

export default function PartnerPage() {
  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem] text-center">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">파트너 상담사 가입</h1>
      <p className="text-[1.6rem] text-[#666] mb-[3rem]">샘플카페에서 상담사로 활동하고 싶으신가요?</p>
      <div className="w-full max-w-[40rem] flex flex-col gap-[1.6rem]">
        <button onClick={() => alert("파트너 가입은 준비 중입니다")} className="w-full h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">파트너 가입 신청</button>
        <button onClick={() => alert("파트너 가입은 준비 중입니다")} className="w-full h-[5rem] bg-white border border-[#ddd] text-[#222] font-bold text-[1.8rem] rounded-[4px]">파트너 로그인</button>
      </div>
    </main>
  );
}
