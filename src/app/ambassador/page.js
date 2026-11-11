"use client";

export default function AmbassadorPage() {
  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem] text-center">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">샘플카페 앰배서더</h1>
      <p className="text-[1.6rem] text-[#666] mb-[3rem]">샘플카페를 소개하고 수익을 창출하세요.</p>
      <button onClick={() => alert("앰배서더 신청은 준비 중입니다")} className="w-full max-w-[40rem] h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">앰배서더 신청하기</button>
    </main>
  );
}
