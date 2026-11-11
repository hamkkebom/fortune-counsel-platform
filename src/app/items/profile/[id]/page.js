import { getConsultantByCode, getReviewsByConsultant } from "@/lib/seed-data";
import Link from "next/link";

export default async function ProfilePage({ params }) {
  const { id } = await params;
  const consultant = getConsultantByCode(id);
  
  if (!consultant) {
    return (
      <main className="min-h-[50vh] flex items-center justify-center text-[#999] text-[1.6rem]">
        <div className="text-center">
          <p className="text-[2rem] mb-[1rem]">상담사를 찾을 수 없습니다</p>
          <Link href="/" className="text-[#6335b4] font-bold">메인으로 돌아가기</Link>
        </div>
      </main>
    );
  }
  
  const { reviews } = getReviewsByConsultant(id, { limit: 5, offset: 0 });
  
  // Helper function to determine background color based on category
  const catBg = {
    tarot: "#6335b4",
    saju: "#d67a00",
    fortune: "#c21129",
  }[consultant.it_category_code] || "#6335b4";

  return (
    <main className="min-h-screen bg-[#f6f6f6] pb-[7.2rem]">
      {/* Purple Header */}
      <header className="relative flex items-center justify-between h-[8rem] bg-[#6335b4] px-[2rem] md:px-[2.4rem] mo:h-[5rem]">
        <div className="flex items-center gap-[1.2rem] mo:gap-[0.8rem]">
          <Link href="/" className="block w-[1.2rem] mo:w-[0.8rem]">
            <svg viewBox="0 0 12 20" className="w-full fill-white"><path d="M10 0l-10 10 10 10 1.4-1.4-8.6-8.6 8.6-8.6z"/></svg>
          </Link>
          <h1 className="text-[2.2rem] font-bold text-white mo:text-[1.7rem] truncate w-[20rem]">{consultant.it_nick}</h1>
        </div>
        <Link href="/items/search" className="block w-[2.4rem] mo:w-[1.8rem]">
          <svg viewBox="0 0 24 24" className="w-full fill-white"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </Link>
      </header>

      {/* Profile Image Area */}
      <div className="relative w-full h-[58vw] md:h-[30vw] min-h-[21rem] bg-gradient-to-b from-[#6335b4] to-[#7f5bc8] overflow-hidden">
        <div 
          className="absolute top-[0.6rem] left-[0.6rem] z-10 flex items-center justify-center px-[0.8rem] h-[2.4rem] rounded-[0.4rem] text-[1.2rem] font-bold text-white"
          style={{ backgroundColor: catBg }}
        >
          전화{consultant.it_category_name}
        </div>
        <div className="absolute bottom-[1rem] left-[1rem] text-white">
          <div className="flex items-center gap-[0.8rem]">
            <p className="text-[2.4rem] font-bold">{consultant.it_nick}</p>
            <p className="text-[1.6rem]">「<span className="font-bold">{consultant.it_060_code}번</span>」</p>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="bg-white px-[2rem] py-[2rem] border-b border-[#e9e9e9]">
        <div className="flex items-center gap-[1.2rem] mb-[1.2rem]">
          {consultant.is_partner && (
            <div className="flex items-center gap-[0.4rem]">
              <div className="w-[1.8rem] h-[1.8rem] rounded-full bg-[#6335b4] flex items-center justify-center">
                <span className="text-white text-[1rem]">P</span>
              </div>
              <span className="text-[1.4rem] font-bold">파트너</span>
            </div>
          )}
          {consultant.it_new === "Y" && (
            <div className="flex items-center gap-[0.4rem]">
              <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-[#6335b4]" />
              <span className="text-[1.4rem] font-bold">신규</span>
            </div>
          )}
          {consultant.ed_cnt_no > 0 && (
            <span className="text-[1.2rem] font-medium border border-[#dcdcdc] bg-[#f8f8f8] px-[0.6rem] py-[0.2rem] rounded-[0.3rem]">교육이수</span>
          )}
        </div>
        
        <div className="flex flex-wrap gap-[0.8rem] mb-[1.2rem]">
          <span className="text-[1.6rem] text-[#666]">#{consultant.it_style_key}</span>
          <span className="text-[1.6rem] text-[#666]">#{consultant.it_counsel_key}</span>
        </div>

        <div className="flex items-center gap-[0.6rem] mb-[1.6rem]">
          <span className="text-[2rem] font-bold">{consultant.it_coin_price.toLocaleString()}</span>
          <span className="text-[1.6rem] text-[#666]">원 (30초)</span>
        </div>

        <div className="flex items-center gap-[1.6rem] mb-[2rem]">
          <div className="flex items-center gap-[0.4rem]">
            <span className="text-[1.8rem]">⭐</span>
            <span className="text-[1.6rem] font-bold">{consultant.rating_avg}</span>
          </div>
          <span className="text-[1.4rem] text-[#666]">후기 {consultant.view_win_comment}개</span>
          <span className="text-[1.4rem] text-[#666]">상담 {consultant.consult_count.toLocaleString()}건</span>
        </div>

        {/* Status Badge */}
        <div className="flex items-center mb-[2rem]">
          <span className={`inline-flex items-center px-[1.2rem] h-[2.8rem] rounded-[0.4rem] text-[1.4rem] font-bold text-white ${
            consultant.status === "on" ? "bg-[#1ab8be]" : 
            consultant.status === "standby" ? "bg-[#6335b4]" : "bg-[#c1c1c1]"
          }`}>
            {consultant.status === "on" ? "상담중" : 
             consultant.status === "standby" ? "전화 상담" :
             consultant.status === "reserv" ? "예약 상담중" : "접속알림"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-[1rem]">
          <Link href={`/call?it_code=${consultant.it_code}`} className="flex-1 flex items-center justify-center gap-[0.8rem] h-[5rem] bg-[#6335b4] text-white text-[1.8rem] font-bold rounded-[0.4rem]">
            <svg viewBox="0 0 24 24" className="w-[2rem] fill-white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            전화상담
          </Link>
          <Link href={`/chat?it_code=${consultant.it_code}`} className="flex-1 flex items-center justify-center gap-[0.8rem] h-[5rem] bg-[#1ab8be] text-white text-[1.8rem] font-bold rounded-[0.4rem]">
            <svg viewBox="0 0 24 24" className="w-[2rem] fill-white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/></svg>
            채팅상담
          </Link>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white mt-[0.8rem]">
        {/* Tab Navigation */}
        <div className="flex border-b border-[#e9e9e9]">
          {["프로필", "후기", "통계"].map((tab, i) => (
            <button key={tab} className="flex-1 h-[5rem] text-[1.8rem] font-bold relative">
              {tab}
              {tab === "프로필" ? <div className="absolute bottom-0 left-0 w-full h-[0.3rem] bg-[#6335b4] rounded-[0.15rem]" /> : null}
            </button>
          ))}
        </div>

        {/* Profile Tab Content */}
        <div className="p-[2rem]">
          <p className="text-[1.6rem] leading-[2.6rem] text-[#444] mb-[2rem]">
            {consultant.it_profile_text}
          </p>
          
          <div className="mb-[2rem]">
            <h3 className="text-[1.6rem] font-bold mb-[1rem]">상담 스타일</h3>
            <div className="flex flex-wrap gap-[0.8rem]">
              {consultant.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-[1.2rem] h-[3.2rem] bg-[#f5f5f5] border border-[#e9e9e9] rounded-[0.4rem] text-[1.4rem]">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[1.6rem] font-bold mb-[1rem]">경력</h3>
            <p className="text-[1.6rem] text-[#666]">{consultant.career}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-white mt-[0.8rem] p-[2rem]">
        <div className="flex items-center justify-between mb-[1.6rem]">
          <h3 className="text-[1.8rem] font-bold">후기 ({consultant.view_win_comment}개)</h3>
          <Link href="/member/login" className="text-[1.4rem] text-[#6335b4] font-bold">후기 작성하기</Link>
        </div>

        {reviews.length > 0 ? reviews.map(review => (
          <div key={review.id} className="border-b border-[#e9e9e9] py-[1.6rem] last:border-b-0">
            <div className="flex items-center gap-[0.8rem] mb-[0.8rem]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[1.6rem]">{i < review.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <span className="text-[1.4rem] font-bold">{review.user_nickname}</span>
              <span className="text-[1.2rem] text-[#999]">{review.created_at}</span>
            </div>
            <p className="text-[1.5rem] leading-[2.2rem] text-[#444] mb-[0.8rem]">{review.content}</p>
            <div className="flex gap-[0.6rem]">
              {review.tags.map(tag => (
                <span key={tag} className="text-[1.2rem] text-[#999]">#{tag}</span>
              ))}
            </div>
            {review.is_best && <span className="inline-block mt-[0.4rem] px-[0.8rem] h-[2rem] leading-[2rem] bg-[#1ab8be] text-white text-[1rem] font-bold rounded-[0.2rem]">BEST</span>}
          </div>
        )) : (
          <p className="text-center text-[1.6rem] text-[#999] py-[3rem]">아직 등록된 후기가 없습니다.</p>
        )}
      </div>
    </main>
  );
}
