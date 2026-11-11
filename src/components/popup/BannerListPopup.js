"use client";
import { useState } from "react";

export default function BannerListPopup({ banners = [], onClose }) {
  if (!banners.length) return null;

  return (
    <div className="fixed inset-0 z-[50] flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-[718px] bg-white rounded-t-[16px] max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-[1.6rem] border-b">
          <h2 className="text-[1.8rem] font-bold">전체보기</h2>
          <button onClick={onClose} className="text-[2rem]">✕</button>
        </div>
        <ul className="p-[1.6rem] grid grid-cols-2 gap-[1.2rem]">
          {banners.map((banner, i) => (
            <li key={i}>
              <a href={banner.link || "#"} className="block rounded-[8px] overflow-hidden">
                <img src={banner.image} alt="" className="w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
