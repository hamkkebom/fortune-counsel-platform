"use client";
import Link from "next/link";

const popupData = {
  A: {
    title: "그 고민, 이젠 해결할 시간",
    desc: "지금 신규가입시",
    highlight: "10,000 코인 선물!",
    button: "회원가입하고 무료상담 받기",
    href: "/member/joinselect",
  },
  B: {
    title: "아직 고민 해결 안되셨다면?",
    desc: "10,000코인 받고",
    highlight: "무료상담",
    button: "회원가입 바로가기",
    href: "/member/joinselect",
  },
  C: {
    title: "로그인 후 확인하세요",
    desc: "내게 맞는 상담사부터",
    highlight: "행운의 복권까지",
    button: "내 혜택 확인하기",
    href: "/member/login",
  },
};

export default function AnonPopup({ popupType = "A", onClose = () => {} }) {
  const popup = popupData[popupType];
  if (!popup) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.63)] z-[51] flex items-end justify-center">
      <div className="relative w-full max-w-[718px] bg-gradient-to-b from-[#e1dcff] to-white rounded-t-[16px] p-[5.2rem_1.6rem_3.2rem]">
        <button onClick={onClose} className="absolute top-[6px] right-[6px] p-[8px]">
          <span className="text-[2rem] text-[#999]">✕</span>
        </button>
        <div className="flex flex-col items-center gap-[2rem] text-center">
          <span className="inline-flex items-center justify-center h-[3.6rem] px-[3.2rem] rounded-[1.8rem] bg-[#a075eb] text-[1.7rem] text-white">
            {popup.title}
          </span>
          <p className="flex flex-col items-center gap-[0.8rem] text-[2.4rem] leading-[3.3rem]">
            {popup.desc}
            <b className="block text-[3rem] font-semibold">{popup.highlight}</b>
          </p>
          <Link
            href={popup.href}
            onClick={onClose}
            className="flex items-center justify-center w-[33.6rem] max-w-full h-[5rem] bg-[#6335b4] text-[1.8rem] text-white rounded-[4px]"
          >
            {popup.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
