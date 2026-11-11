'use client';
import useCateStore from "@/store/useCateStore";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isLoggedIn, getUser, logoutUser } from "@/lib/store";

const HeaderSearch = () => {
    const {cate, setCate} = useCateStore();
    const [loggedIn, setLoggedIn] = useState(false);
    const [nickname, setNickname] = useState("게스트");

    useEffect(() => {
        setLoggedIn(isLoggedIn());
        setNickname(getUser().nickname);
    }, []);

    const handleLogout = () => {
        logoutUser();
        setLoggedIn(false);
        setNickname("게스트");
    };

    const cateData = [
        {title: '퍼플', attr: 'purple'},
        {title: '그린', attr: 'green'},
    ];
    const cateClickhandler = e => {
        setCate(e);
    }
    return (
        <div className="relative flex items-center justify-between h-[5rem] mo:h-[6.4rem] px-[1.6rem] mo:px-[2rem] bg-[#f5f5f5]">
            <Link href="/" className="w-[8.8rem] mo:w-[14.6rem]">
                <Image src="/img/header/logo-full.svg" width={146} height={36} alt="샘플카페 로고" className="hidden mo:block" />
                <Image src="/img/header/logo-full.svg" width={88} height={24} alt="샘플카페 로고" className="block mo:hidden" />
            </Link>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[.3rem] mo:p-[.4rem] bg-[#fff] rounded-[1.5rem] mo:rounded-[2rem] border-1 border-[#d9d5e2]">
                <ul className={`relative flex items-center before:content-[''] before:absolute before:w-[4.4rem] mo:before:w-[6rem] before:h-[2.4rem] mo:before:h-[3.2rem] before:top-0 ${cate === 'purple' ? 'before:left-0 before:bg-[var(--purple-1)]' : 'before:left-[50%] green-1 before:bg-[var(--green-1)]'} before:rounded-[2.4rem] before:transition-all before:duration-300 before:ease-[cubic-bezier(.17,.67,.85,.69)]`}>
                    {cateData.map(({title, attr}, idx) => (
                        <li className="relative" key={idx}>
                            <button className={`flex items-center justify-center w-[4.4rem] mo:w-[6rem] h-[2.4rem] mo:h-[3.2rem] text-[1.2rem] mo:text-[1.4rem] font-bold transition-all duration-300 ease-[cubic-bezier(.17,.67,.85,.69)] cursor-pointer ${cate === attr ? 'text-[#fff]' : ''}`} onClick={() => cateClickhandler(attr)}>{title}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-[.8rem] mo:gap-[1.2rem]">
                {loggedIn ? (
                    <>
                        <span className="text-[1.2rem] mo:text-[1.4rem] text-[#6335b4] font-medium">{nickname}님</span>
                        <button onClick={handleLogout} className="text-[1.1rem] mo:text-[1.3rem] text-[#999] cursor-pointer">로그아웃</button>
                    </>
                ) : (
                    <>
                        <Link href="/member/login" className="text-[1.1rem] mo:text-[1.3rem] text-[#666]">로그인</Link>
                        <Link href="/member/joinselect" className="text-[1.1rem] mo:text-[1.3rem] text-[#6335b4] font-medium">회원가입</Link>
                    </>
                )}
                <Link href="/items/search" className="w-[1.8rem] mo:w-[2.4rem]">
                    <Image src="/img/header/i-search.svg" width={24} height={24} alt="검색" />
                </Link>
            </div>
        </div>
    )
}

export default HeaderSearch;