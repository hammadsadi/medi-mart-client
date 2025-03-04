import FilterSidebar from "../filterSidebar/filterSidebar";
import ShopItem from "../shopItem/ShopItem";

const AllMedicines = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="flex gap-5 my-10 relative">
      {/* Sidebar */}
      <FilterSidebar />

      {/* Products Section */}
      <div className="flex-1">
        <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
          {/* {products?.map((product: TProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          ))} */}
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </div>
      </div>
    </div>
  );
};

export default AllMedicines;
