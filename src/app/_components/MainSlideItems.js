'use client'
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import useCateStore from "@/store/useCateStore";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import { bgColors, cateText, formatter } from "@/lib/constants";

const MainSlideItems = ({data, pageCate}) => {
    const [isMount, setIsMount] = useState(false);
    const [items, setItems] = useState([...data.items]);
    const isFirstRender = useRef(true);
    const cate = useCateStore((state) => state.cate);
    const themeBanner = [
        {title: 'VIP 고객들이 선택하는 인기 상담사', link: '/themebanner/theme/popular'},
        {title: '많은 분이 다시 찾는 상담사', link: '/themebanner/theme/revisiting'},
        {title: '재회를 위한 조언, 이 상담사 최고에요', link: '/themebanner/theme/reunion'},
        {title: '진솔한 공감과 조언! 대화가 잘 통한 상담사', link: '/themebanner/theme/effective'},
        {title: '나만 알고 싶은 단골 상담사', link: '/themebanner/theme/regular'},
    ];

    useEffect(() => {
        setIsMount(true);

        return () => {
            isFirstRender.current = true;
        }
    }, []);

    useEffect(() => {
        const getSlideRender = async (listCate, type) => {
            try {
                let reqData = {
                    offset: 0,
                    limit: 20,
                    cate: pageCate,
                    order: 'suggest',
                }
                const greenData = {
                    isGreen: 'Y', 
                    page_pg_type: listCate ?? cate
                }
                if(listCate === 'green') reqData = {...reqData, ...greenData};
                const response = await fetch('/api/items/getListMobile', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqData)
                });
                const data = await response.json();
                data.response === 'success' && setItems(data.items);
            } catch (err) {
                console.error('getSlideRender failed:', err);
            } finally {

            }
        }

        if(isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        getSlideRender(cate);
    }, [cate]);

    return (
        <section className="py-[2rem] mo:py-[2.4rem] px-[1.6rem] mo:px-[2rem] mx-[-2rem] mt-[1.2rem]">
            <div className="flex justify-between items-center px-[2rem] mb-[1rem] mo:mb-[1.2rem]">
                <p className="font-bold text-[1.8rem] mo:text-[2rem] leading-[1]">샘플카페 추천</p>
                <Link href="" className="flex items-center justify-between gap-[.6rem]">
                    <p className="text-[1.3rem] mo:text-[1.4rem]">더보기</p>
                    <Image src="/img/icon/ic-arrow-black-right.svg" alt="샘플카페 추천 더보기" width={5} height={9} />
                </Link>
            </div>
            {isMount 
            ? <Swiper slidesOffsetBefore={16} spaceBetween={8} slidesPerView={3} breakpoints={{ 720: { slidesPerView: 4, spaceBetween: 12, slidesOffsetBefore: 20 } }} style={{paddingRight: '1.6rem'}}>
                {items.map(({it_code, it_main_pic, it_category_name, it_category_code, it_nick, it_coin_price, it_new, status}, idx) => (
                    <SwiperSlide key={idx}>
                        <Link href={`/profile/${it_code}`} className="flex flex-col gap-[.5rem]">
                            <div style={{backgroundImage: `url(/img/list/bg_${it_category_code}.${it_category_code === 'fortune' ? 'png' : 'jpg'})`}} className={`rounded-[.6rem] overflow-hidden h-[8rem] mo:h-[10.7rem] bg-no-repeat bg-cover`}>
                                <span className={`absolute top-[.6rem] left-[.6rem] flex items-center justify-center w-[2.2rem] mo:w-[2.9rem] p-[.5rem_.4rem_.4rem_.5rem] mo:p-[.6rem_.5rem_.5rem_.6rem] rounded-[.2rem] text-[0.9rem] mo:text-[1rem] font-bold text-[#fff] ${bgColors[it_category_code]} leading-[1.18]`}>{cateText[pageCate]}{it_category_name}</span>
                                {it_main_pic ? <Image src={it_main_pic} alt={it_nick} width={158} height={108} /> : <div className="w-full h-full" />}
                            </div>
                            <p className="mt-[.3rem] text-[1.3rem] mo:text-[1.4rem] font-bold leading-[1]">{it_nick}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-[.2rem] leading-[1]">
                                    <Image src={'/img/list/i-list-won.svg'} alt="원" width={12} height={12} className="mo:w-[1.4rem] mo:h-[1.4rem]" />
                                    <p className="text-[1.1rem] mo:text-[1.3rem] font-bold ml-[.4rem]">{formatter.format(it_coin_price)}</p>
                                    <span className="text-[1rem] mo:text-[1.1rem] text-[#666]">(30초)</span>
                                </div>
                                <div className={`live-state flex items-center justify-center font-bold text-[0.9rem] mo:text-[1rem] rounded-[.2rem] ${status === 'on' ? 'bg-[#1ab8be]' : 'bg-[#6335b4]'} px-[.3rem] mo:px-[.4rem] h-[1.6rem] mo:h-[1.8rem] text-[#fff] leading-[1]`}>{status === 'on' ? '상담중' : '상담가능'}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            : <ul className="flex items-center gap-[1rem] mo:gap-[1.2rem] px-[2rem]">
                {Array.from({length: 4}, (_, idx) => (
                    <li key={idx} className="flex-1">
                        <div className="flex flex-col gap-[.5rem]">
                            <div className="skeleton-ani rounded-[.6rem] overflow-hidden h-[8rem] mo:h-[10.7rem] bg-[#f3f3f3]"></div>
                            <p className="skeleton-ani mt-[.3rem] h-[1.4rem] bg-[#f3f3f3]"></p>
                            <div className="skeleton-ani flex justify-between items-center h-[1.8rem] bg-[#f3f3f3]"></div>
                        </div>
                    </li>
                ))}
            </ul>}
            
            <div className="relative flex items-center gap-[.8rem] mo:gap-[1rem] mt-[2.4rem] mo:mt-[3.2rem] mx-[auto] w-[calc(100%-4rem)] border-[1px] border-solid border-[#eee] rounded-[2.4rem] bg-[#f6f6f6] px-[.6rem] mo:px-[.8rem] after:content-[''] after:absolute after:top-[50%] after:right-[1.6rem] mo:after:right-[2rem] after:w-[.6rem] mo:after:w-[.7rem] after:h-[1rem] mo:after:h-[1.2rem] after:bg-[url('/img/icon/ic-arrow-black.svg')] bg-no-repeat after:translate-y-[-50%]">
                <div className="flex items-center justify-center gap-[.4rem] mo:gap-[.6rem] w-[6rem] mo:w-[7.2rem] h-[3rem] mo:h-[3.4rem] bg-[#fff] rounded-[1.6rem] border-[1px] border-solid border-[#e6e6e6]">
                    <Image src={'/img/icon/i-crown-pp.svg'} alt="" width={12} height={10} className="mo:w-[1.4rem] mo:h-[1.2rem]" />
                    <p className="text-[1.2rem] mo:text-[1.4rem] font-bold leading-[1]">테마</p>
                </div>
                <Swiper direction="vertical" slidesPerView={1} mousewheel={true} autoplay={{delay: 3000, disableOnInteraction: false}} modules={[Autoplay, Mousewheel]} loop={true} loopAdditionalSlides={2} speed={600} style={{ flex: '1', height: '4rem', margin: '0' }}>
                {themeBanner.map(({title, link}, idx) => (
                    <SwiperSlide key={idx}>
                        <Link href={link} className="flex items-center h-[100%] text-[1.3rem] mo:text-[1.6rem]">{title}</Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}

export default MainSlideItems;