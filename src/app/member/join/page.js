"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !passwordConfirm || !nickname) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    const user = { nickname, email, coinBalance: 10000 };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("hasLoggedIn", "true");
    alert("가입 완료! 10,000코인이 지급되었습니다.");
    router.push("/member/login");
  };

  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">이메일로 가입</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-[40rem] flex flex-col gap-[1.6rem]">
        <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <input type="password" placeholder="비밀번호 (8자 이상)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <input type="password" placeholder="비밀번호 확인" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <input type="text" placeholder="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <button type="submit" className="w-full h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">가입하기</button>
      </form>
    </main>
  );
}
