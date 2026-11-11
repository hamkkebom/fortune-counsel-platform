const MYPAGE_MENUS = [
  { title: "상담 내역", href: "/mypage/consult", icon: "📋" },
  { title: "찜한 상담사", href: "/mypage/like", icon: "❤️" },
  { title: "코인 내역", href: "/mypage/coin", icon: "💰" },
  { title: "1:1 문의", href: "/mypage/qna", icon: "💬" },
  { title: "설정", href: "/mypage/settings", icon: "⚙️" },
];

export default function MypageLayout({ children }) {
  return (
    <main className="min-h-[50vh]">
      <div className="bg-[#6335b4] p-[2rem] text-white">
        <h1 className="text-[2.4rem] font-bold">마이페이지</h1>
        <p className="text-[1.4rem] mt-[0.5rem] opacity-70">로그인이 필요합니다</p>
      </div>
      <nav className="grid grid-cols-3 gap-[1px] bg-[#e9e9e9]">
        {MYPAGE_MENUS.map((menu) => (
          <a key={menu.href} href={menu.href} className="flex flex-col items-center justify-center gap-[0.8rem] h-[8rem] bg-white text-[1.4rem]">
            <span className="text-[2.4rem]">{menu.icon}</span>
            <span>{menu.title}</span>
          </a>
        ))}
      </nav>
      <div className="p-[2rem]">{children}</div>
    </main>
  );
}
