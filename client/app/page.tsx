import Header from "./components/common/Header";
import Banner from "./components/HomePage/Banner";
import Category from "./components/HomePage/Category";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between   mx-auto">

      <Header />
      <main className="">

        <Banner />
        <Category />
      </main>
    </div>
  );
}
