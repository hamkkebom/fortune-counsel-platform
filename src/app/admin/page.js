"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { label: "총 상담사", value: "1,100", change: "+12" },
    { label: "오늘 상담건수", value: "2,847", change: "+15%" },
    { label: "오늘 신규가입", value: "156", change: "+8" },
    { label: "오늘 매출", value: "₩12,450,000", change: "+23%" },
  ];

  const recentConsults = [
    { id: 1, user: "user***", consultant: "티아라", type: "전화", duration: "12분", amount: "₩5,200", time: "방금 전" },
    { id: 2, user: "user***", consultant: "보리", type: "채팅", duration: "8분", amount: "₩4,000", time: "3분 전" },
    { id: 3, user: "user***", consultant: "도원", type: "전화", duration: "5분", amount: "₩2,000", time: "10분 전" },
    { id: 4, user: "user***", consultant: "천신암", type: "전화", duration: "3분", amount: "₩3,000", time: "15분 전" },
    { id: 5, user: "user***", consultant: "청운", type: "전화", duration: "10분", amount: "₩5,000", time: "25분 전" },
  ];

  const tabs = [
    { id: "dashboard", label: "대시보드" },
    { id: "consultants", label: "상담사 관리" },
    { id: "users", label: "회원 관리" },
    { id: "consults", label: "상담 내역" },
    { id: "reviews", label: "후기 관리" },
    { id: "payments", label: "결제 관리" },
    { id: "banners", label: "배너 관리" },
    { id: "contents", label: "콘텐츠 관리" },
  ];

  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Admin Header */}
      <div className="bg-[#222] text-white px-[2rem] py-[1.6rem]">
        <div className="flex items-center justify-between">
          <h1 className="text-[2rem] font-bold">관리자</h1>
          <Link href="/" className="text-[1.4rem] text-[#999] hover:text-white">사이트 보기</Link>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-[#e9e9e9] flex overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 px-[2rem] h-[5rem] text-[1.4rem] font-medium whitespace-nowrap border-b-[2px] transition-colors ${
              activeTab === tab.id
                ? "text-[#6335b4] border-[#6335b4] font-bold"
                : "text-[#666] border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard */}
      {activeTab === "dashboard" && (
        <div className="p-[2rem] space-y-[2rem]">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.2rem]">
            {stats.map(s => (
              <div key={s.label} className="bg-white p-[1.6rem] rounded-[0.8rem] shadow-sm">
                <p className="text-[1.3rem] text-[#999]">{s.label}</p>
                <p className="text-[2.4rem] font-bold mt-[0.4rem]">{s.value}</p>
                <span className="text-[1.2rem] text-[#00af79]">{s.change}</span>
              </div>
            ))}
          </div>

          {/* Recent Consults */}
          <div className="bg-white rounded-[0.8rem] shadow-sm overflow-hidden">
            <div className="px-[1.6rem] py-[1.2rem] border-b border-[#e9e9e9] flex items-center justify-between">
              <h2 className="text-[1.6rem] font-bold">최근 상담 내역</h2>
              <button className="text-[1.3rem] text-[#6335b4]">전체보기</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-[#f5f5f5] text-[1.3rem] text-[#666]">
                  <th className="text-left p-[1rem_1.6rem] font-medium">사용자</th>
                  <th className="text-left p-[1rem_1.6rem] font-medium">상담사</th>
                  <th className="text-left p-[1rem_1.6rem] font-medium">유형</th>
                  <th className="text-left p-[1rem_1.6rem] font-medium">시간</th>
                  <th className="text-right p-[1rem_1.6rem] font-medium">금액</th>
                  <th className="text-right p-[1rem_1.6rem] font-medium">일시</th>
                </tr>
              </thead>
              <tbody>
                {recentConsults.map(c => (
                  <tr key={c.id} className="border-t border-[#e9e9e9] text-[1.4rem]">
                    <td className="p-[1rem_1.6rem]">{c.user}</td>
                    <td className="p-[1rem_1.6rem] font-medium">{c.consultant}</td>
                    <td className="p-[1rem_1.6rem]">
                      <span className={`px-[0.8rem] py-[0.2rem] rounded-[0.2rem] text-[1.2rem] font-bold text-white ${c.type === "전화" ? "bg-[#6335b4]" : "bg-[#1ab8be]"}`}>{c.type}</span>
                    </td>
                    <td className="p-[1rem_1.6rem] text-[#666]">{c.duration}</td>
                    <td className="p-[1rem_1.6rem] text-right font-medium">{c.amount}</td>
                    <td className="p-[1rem_1.6rem] text-right text-[#999] text-[1.2rem]">{c.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1.2rem]">
            {["상담사 등록", "배너 등록", "공지사항 작성", "정산 내역"].map(action => (
              <button key={action} className="bg-white h-[8rem] rounded-[0.8rem] shadow-sm flex items-center justify-center text-[1.5rem] font-medium text-[#444] hover:text-[#6335b4] transition-colors">
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Other tabs - placeholder */}
      {activeTab !== "dashboard" && (
        <div className="p-[4rem] text-center text-[1.6rem] text-[#999]">
          <p className="text-[2rem] font-bold mb-[1rem]">{tabs.find(t => t.id === activeTab)?.label}</p>
          <p>준비 중인 기능입니다.</p>
        </div>
      )}
    </main>
  );
}
