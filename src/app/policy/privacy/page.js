"use client";
import { POLICIES } from "@/lib/seed-data";

export default function PolicyPrivacyPage() {
  return (
    <main className="min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">개인정보처리방침</h1>
      <div className="w-full max-w-[50rem] mx-auto bg-white border border-[#e9e9e9] rounded-[8px] p-[2rem]">
        <pre className="text-[1.4rem] leading-[2.4rem] text-[#444] whitespace-pre-wrap font-sans">
          {POLICIES.privacy}
        </pre>
      </div>
    </main>
  );
}
