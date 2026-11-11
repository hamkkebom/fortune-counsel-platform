import { CAFE_INFO, SERVICES } from "@/lib/seed-data";

export default function CafePage() {
  return (
    <main className="min-h-screen bg-[#f6f6f6]">
      {/* Header */}
      <div className="bg-white px-[2rem] py-[3rem] text-center border-b border-[#e9e9e9]">
        <h1 className="text-[2.8rem] font-bold text-[#222] mb-[1rem]">{CAFE_INFO.name}</h1>
        <p className="text-[1.5rem] text-[#666] leading-[2.2rem]">{CAFE_INFO.description}</p>
      </div>

      {/* Store Info */}
      <div className="bg-white mt-[1rem] px-[2rem] py-[2rem]">
        <h2 className="text-[1.8rem] font-bold text-[#222] mb-[1.6rem]">매장 정보</h2>
        <div className="space-y-[1.2rem]">
          <div className="flex items-center gap-[1rem]">
            <svg viewBox="0 0 24 24" className="w-[2rem] h-[2rem] fill-[#6335b4] shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span className="text-[1.5rem] text-[#444]">{CAFE_INFO.address}</span>
          </div>
          <div className="flex items-center gap-[1rem]">
            <svg viewBox="0 0 24 24" className="w-[2rem] h-[2rem] fill-[#6335b4] shrink-0"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <span className="text-[1.5rem] text-[#444]">{CAFE_INFO.hours}</span>
          </div>
          <div className="flex items-center gap-[1rem]">
            <svg viewBox="0 0 24 24" className="w-[2rem] h-[2rem] fill-[#6335b4] shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span className="text-[1.5rem] text-[#444]">{CAFE_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white mt-[1rem] px-[2rem] py-[2rem]">
        <h2 className="text-[1.8rem] font-bold text-[#222] mb-[1.6rem]">제공 서비스</h2>
        <div className="flex flex-wrap gap-[0.8rem]">
          {CAFE_INFO.services.map((svc, i) => (
            <span key={i} className="px-[1.4rem] h-[3.6rem] leading-[3.6rem] bg-[#f3eff9] text-[#6335b4] text-[1.3rem] font-bold rounded-[2rem]">{svc}</span>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white mt-[1rem] px-[2rem] py-[3rem] mb-[2rem]">
        <div className="w-full h-[20rem] bg-[#f0f0f0] rounded-[0.8rem] flex items-center justify-center border border-[#e9e9e9]">
          <div className="text-center">
            <svg viewBox="0 0 24 24" className="w-[4rem] h-[4rem] fill-[#ccc] mx-auto mb-[1rem]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <p className="text-[1.4rem] text-[#999]">{CAFE_INFO.address}</p>
            <p className="text-[1.2rem] text-[#ccc] mt-[0.4rem]">지도가 여기에 표시됩니다</p>
          </div>
        </div>
      </div>

      {/* Online Services */}
      <div className="bg-white mt-[1rem] px-[2rem] py-[2rem] pb-[4rem]">
        <h2 className="text-[1.8rem] font-bold text-[#222] mb-[1.6rem]">온라인 서비스</h2>
        <div className="grid grid-cols-2 gap-[1rem]">
          {SERVICES.slice(0, 6).map(svc => (
            <div key={svc.id} className="bg-[#f6f6f6] rounded-[0.8rem] p-[1.2rem]">
              <p className="text-[1.4rem] font-bold text-[#222] mb-[0.4rem]">{svc.name}</p>
              <p className="text-[1.2rem] text-[#666] line-clamp-2 mb-[0.8rem]">{svc.description}</p>
              <p className="text-[1.3rem] font-bold text-[#6335b4]">{svc.price.toLocaleString()}원</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
