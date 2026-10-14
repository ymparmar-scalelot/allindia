import CartPage from "../components/CartPage/page";
import Header from "../components/common/Header";


export default function Cart() {
  return (

    <div className="flex w-full flex-col items-center justify-between   dark:bg-black mx-auto">
      <Header />
      <CartPage />


    </div>
  );
}
