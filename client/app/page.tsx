import Header from "./components/Header";
import Banner from "./components/HomePage/Banner";
import Category from "./components/HomePage/Category";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-between   dark:bg-black mx-auto">

      <Header />
      <main className="">

        <Banner />
        <Category />
      </main>
    </div>
  );
}
