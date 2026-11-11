"use client";
import { useRouter } from "next/navigation";

export default function MypageSettingsPage() {
  const router = useRouter();

  const handleWithdraw = () => {
    if (confirm("정말 탈퇴하시겠습니까?")) {
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col gap-[1.6rem]">
      <button onClick={() => alert("프로필 수정 기능은 준비 중입니다")} className="w-full text-left h-[5rem] px-[1.6rem] border border-[#e9e9e9] rounded-[4px] text-[1.6rem] bg-white">
        프로필 수정
      </button>
      <button onClick={() => alert("알림 설정은 준비 중입니다")} className="w-full text-left h-[5rem] px-[1.6rem] border border-[#e9e9e9] rounded-[4px] text-[1.6rem] bg-white">
        알림 설정
      </button>
      <button onClick={() => alert("차단 관리 기능은 준비 중입니다")} className="w-full text-left h-[5rem] px-[1.6rem] border border-[#e9e9e9] rounded-[4px] text-[1.6rem] bg-white">
        차단 관리
      </button>
      <button onClick={handleWithdraw} className="w-full text-left h-[5rem] px-[1.6rem] border border-[#e9e9e9] rounded-[4px] text-[1.6rem] bg-white text-[#e74c3c]">
        회원 탈퇴
      </button>
    </div>
  );
}
