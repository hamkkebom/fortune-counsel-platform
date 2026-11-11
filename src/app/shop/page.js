import MainList from "../_components/MainList";
import MainSlide from "../_components/MainSlide";

export default function ShopPage() {
  return (
    <main>
      <MainSlide pageCate="shop" />
      <MainList pageCate="shop" />
    </main>
  );
}
