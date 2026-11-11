import MainList from "../_components/MainList";
import MainSlide from "../_components/MainSlide";

export default function ContentsPage() {
  return (
    <main>
      <MainSlide pageCate="contents" />
      <MainList pageCate="contents" />
    </main>
  );
}
