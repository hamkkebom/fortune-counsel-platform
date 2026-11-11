"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasLoggedIn", "true");
    localStorage.setItem("user", JSON.stringify({ nickname: email.split("@")[0], email, coinBalance: 10000 }));
    alert("로그인 되었습니다.");
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">로그인</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-[40rem] flex flex-col gap-[1.6rem]">
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <button type="submit" className="w-full h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">로그인</button>
      </form>
      <div className="mt-[2rem] flex gap-[1rem] text-[1.4rem] text-[#666]">
        <a href="/member/joinselect">회원가입</a>
        <span>|</span>
        <a href="/member/findinfo">이메일/비밀번호 찾기</a>
      </div>
    </main>
  );
}
