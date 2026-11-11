import TopCate from "@/_components/TopCate";
import MainSlide from "../_components/MainSlide";
import MainList from "../_components/MainList";

const cateList = [
  { title: "전체", img: { width: 36, height: 30, src: "category-all-gr.svg" }, link: "" },
  { title: "타로", img: { width: 35, height: 32, src: "category-tarot-gr.svg" }, link: "" },
  { title: "사주", img: { width: 34, height: 34, src: "category-iching-gr.svg" }, link: "" },
  { title: "신점", img: { width: 30, height: 30, src: "category-oracle-gr.svg" }, link: "" },
  { title: "인기", img: { width: 29, height: 31, src: "category-popularity-gr.svg" }, link: "" },
  { title: "성공사례", img: { width: 34, height: 30, src: "category-success-gr.svg" }, link: "" },
  { title: "이벤트", img: { width: 29, height: 32, src: "category-event-gr.svg" }, link: "" },
  { title: "후기", img: { width: 32, height: 33, src: "category-review-gr.svg" }, link: "" },
];

export default function GreenHomePage() {
  return (
    <main>
      <TopCate cateList={cateList} />
      <MainSlide pageCate="call" />
      <MainList pageCate="call" />
    </main>
  );
}
