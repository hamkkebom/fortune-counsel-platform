import Link from "next/link";

const Footer = () => {
    const footerData = [
        {title: '홈', img: 'icoFooternavHome.svg', link: '/call'},
        {title: '카테고리', img: 'icoFooternavCategory.svg', link: '/category'},
        {title: '단골', img: 'icoFooternavCustomer.svg', link: '/call'},
        {title: '로그인', img: 'icoFooternavLogin.svg', link: '/call'},
        {title: '코인충전', img: 'icoFooternavCoin.svg', link: '/call'},
    ]
    return (
        <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] border-t border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.9)] backdrop-blur-[3px] z-10">
            <ul className="flex items-center px-[1rem]">
                {footerData.map(({title, img, link}, idx) => (
                    <li key={idx} className="flex-1">
                        <Link href={link} className="flex flex-col items-center justify-center gap-[0.6rem] h-[6.4rem] md:h-[7.2rem]">
                            <img src={`/img/footer/${img}`} alt={title} className="w-[1.8rem] md:w-[2.4rem] h-auto" />
                            <span className="text-[1rem] md:text-[1.4rem]">{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;