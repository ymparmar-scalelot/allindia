import Banner from "./Banner";
import Category from "./Category";


export default function HomePage() {
    return (

        <div className="flex w-full flex-col items-center justify-between   dark:bg-black mx-auto">
            <Banner />
            <Category />


        </div>
    );
}
