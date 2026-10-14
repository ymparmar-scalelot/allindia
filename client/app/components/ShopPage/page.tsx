import Header from "../common/Header";
import Pagination from "../common/Pagination";
import SideBar from "../common/SideBar";
import Products from "./Products";



export default function ShopePage() {
    return (

        <div className="flex w-full flex-col items-center justify-between  mx-auto">
            <SideBar />
            <Products />
            <Pagination />
        </div>  
    );
}
