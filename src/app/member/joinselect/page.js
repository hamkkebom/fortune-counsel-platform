"use client";

export default function JoinSelectPage() {
  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[3rem]">회원가입</h1>
      <div className="w-full max-w-[40rem] flex flex-col gap-[1.6rem]">
        <a href="/member/join" className="flex items-center justify-center w-full h-[5.6rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">
          이메일로 가입하기
        </a>
        <button onClick={() => alert("준비 중인 기능입니다")} className="flex items-center justify-center w-full h-[5.6rem] bg-[#FEE500] text-[#3C1E1E] font-bold text-[1.8rem] rounded-[4px]">
          카카오로 가입하기
        </button>
        <button onClick={() => alert("준비 중인 기능입니다")} className="flex items-center justify-center w-full h-[5.6rem] bg-[#03C75A] text-white font-bold text-[1.8rem] rounded-[4px]">
          네이버로 가입하기
        </button>
        <button onClick={() => alert("준비 중인 기능입니다")} className="flex items-center justify-center w-full h-[5.6rem] bg-white border border-[#ddd] text-[#222] font-bold text-[1.8rem] rounded-[4px]">
          Apple로 가입하기
        </button>
        <p className="text-center text-[1.4rem] text-[#666] mt-[1rem]">
          이미 계정이 있으신가요? <a href="/member/login" className="text-[#6335b4] font-bold">로그인</a>
        </p>
      </div>
    </main>
  );
}
