"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CONSULTANTS } from "@/lib/seed-data";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const popularKeywords = ["타로", "사주", "신점", "연애", "재회", "궁합", "취업", "결혼", "건강", "진로"];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setRecentSearches(saved);
  }, []);

  const handleSearch = (q) => {
    const search = q || query;
    if (!search.trim()) return;
    const updated = [search, ...recentSearches.filter(s => s !== search)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("searchHistory", JSON.stringify(updated));
    const filtered = CONSULTANTS.filter(c =>
      c.it_nick.includes(search) || c.it_060_code.includes(search) || c.tags.some(t => t.includes(search))
    );
    setResults(filtered);
    setSearched(true);
  };

  const clearHistory = () => { setRecentSearches([]); localStorage.removeItem("searchHistory"); };

  return (
    <main className="min-h-screen bg-white">
      {/* Search Header */}
      <div className="flex items-center border-b border-[#6335b4] px-[2rem] md:px-[3rem] py-[1.6rem]">
        <div className="flex items-center flex-1 mr-[2rem]">
          <svg viewBox="0 0 24 24" className="w-[2.4rem] fill-[#6335b4] mr-[1rem]"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <input type="text" placeholder="상담사 이름 또는 코드를 입력하세요" value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearch()} className="flex-1 text-[1.8rem] text-[#6335b4] font-bold outline-none placeholder:text-[#999]" />
        </div>
        <button onClick={() => handleSearch()} className="text-transparent"><span className="sr-only">검색</span></button>
      </div>

      {/* Popular Keywords */}
      {!searched && (
        <div className="px-[3rem] py-[2rem]">
          <div className="flex flex-wrap gap-[1rem]">
            {popularKeywords.map(kw => (
              <button key={kw} onClick={() => { setQuery(kw); handleSearch(kw); }} className="px-[1.6rem] h-[3.6rem] bg-[#f5f5f5] border border-[#e9e9e9] rounded-[2rem] text-[1.4rem] text-[#666]">{kw}</button>
            ))}
          </div>
        </div>
      )}

      {/* Recent Searches */}
      {recentSearches.length > 0 && !searched && (
        <div className="px-[3rem]">
          <div className="flex items-center justify-between mb-[1rem]">
            <h3 className="text-[1.6rem] font-bold">최근 검색어</h3>
            <button onClick={clearHistory} className="text-[1.2rem] text-[#999]">전체 삭제</button>
          </div>
          <ul>
            {recentSearches.map((s, i) => (
              <li key={i} className="flex items-center justify-between py-[1.5rem] border-b border-[#e9e9e9]">
                <button onClick={() => { setQuery(s); handleSearch(s); }} className="flex items-center gap-[0.8rem] text-[1.6rem] text-[#999]">
                  <svg viewBox="0 0 24 24" className="w-[2rem] fill-[#999]"><path d="M13 3a9 9 0 00-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21a9 9 0 000-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                  {s}
                </button>
                <button onClick={() => { const updated = recentSearches.filter((_, j) => j !== i); setRecentSearches(updated); localStorage.setItem("searchHistory", JSON.stringify(updated)); }} className="w-[2.4rem] h-[2.4rem]">
                  <svg viewBox="0 0 24 24" className="fill-[#ccc]"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Results */}
      {searched && (
        <div className="px-[3rem] py-[2rem]">
          <p className="text-[1.8rem] mb-[2rem]"><em className="text-[#6335b4] font-bold">{query}</em> 검색 결과 {results.length}건</p>
          {results.length > 0 ? results.map(c => (
            <a key={c.it_code} href={`/items/profile/${c.it_code}`} className="flex items-center gap-[2rem] py-[1.5rem] border-b border-[#e9e9e9]">
              <div className="w-[8rem] h-[8rem] rounded-[0.8rem] bg-gradient-to-br from-[#6335b4] to-[#7f5bc8] flex items-center justify-center text-white text-[1.2rem] font-bold">{c.it_category_name}</div>
              <div className="flex-1">
                <p className="text-[1.8rem] font-bold">{c.it_nick}</p>
                <p className="text-[1.4rem] text-[#666]">#{c.it_style_key} #{c.it_counsel_key}</p>
                <p className="text-[1.4rem] font-bold text-[#6335b4]">{c.it_coin_price.toLocaleString()}원 (30초)</p>
              </div>
            </a>
          )) : (
            <div className="text-center py-[3rem]">
              <p className="text-[2rem] font-bold text-[#222] mb-[0.4rem]"><em className="text-[#6335b4]">{query}</em></p>
              <p className="text-[1.4rem] text-[#999]">일치하는 상담사가 없습니다.</p>
              <p className="text-[1.4rem] text-[#999] mt-[1rem]">다른 키워드로 검색해보세요.</p>
              <ul className="mt-[2rem] text-left max-w-[30rem] mx-auto text-[1.4rem] text-[#999] space-y-[0.8rem]">
                <li>· 상담사 이름 또는 코드를 정확히 입력해주세요.</li>
                <li>· 카테고리 이름으로 검색해보세요. (타로, 사주, 신점)</li>
                <li>· 스타일 키워드로 검색해보세요. (재회, 연애, 취업)</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
