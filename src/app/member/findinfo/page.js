export default function FindInfoPage() {
  return (
    <main className="flex flex-col items-center min-h-[50vh] p-[2rem]">
      <h1 className="text-[2.4rem] font-bold mb-[2rem]">이메일/비밀번호 찾기</h1>
      <form className="w-full max-w-[40rem] flex flex-col gap-[1.6rem]">
        <input type="text" placeholder="가입시 등록한 이름" className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <input type="email" placeholder="가입시 등록한 이메일" className="w-full h-[5rem] px-[1.6rem] border border-[#ddd] rounded-[4px] text-[1.6rem]" />
        <button type="submit" className="w-full h-[5rem] bg-[#6335b4] text-white font-bold text-[1.8rem] rounded-[4px]">찾기</button>
      </form>
    </main>
  );
}
