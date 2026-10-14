
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";



export default function Products() {
    return (

        <div className="flex w-full flex-col items-center justify-between  mx-auto">
            <ProductCard />
            <ProductFilter />
        </div>
    );
}
