"use client";
import { TMedicine } from "@/types/medicines.types";
import FilterSidebar from "../filterSidebar/filterSidebar";
import { useEffect, useState } from "react";
import { getAllMedicines } from "@/services/Medicine";
import ShopItem from "../shopItem/ShopItem";
import ShopItemSkeleton from "../shopItem/ShopItemSkeleton";
import { useSearchParams } from "next/navigation";
import Pagination from "../../shared/Pagination/Pagination";
import { set } from "date-fns";

const AllMedicines = () => {
  const [medicines, setMedicines] = useState<TMedicine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [metaList, setMetaList] = useState<{
    limit: number;
    page: number;
    total: number;
    totalPages: number;
  }>();
  const searchParams = useSearchParams();

  const prescriptionRequired = searchParams.get("prescriptionRequired");
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    const getMedicines = async () => {
      setLoading(true);
      try {
        const query = {
          prescriptionRequired,
          category,
          price,
        };

        const { data } = await getAllMedicines(page, null, query);
        setMetaList(data?.meta);
        setMedicines(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch medicines", error);
      } finally {
        setLoading(false);
      }
    };

    getMedicines();
  }, [prescriptionRequired, category, price, page]);

  return (
    <div>
      <div className="flex gap-5 my-10 relative">
        <FilterSidebar />

        <div className="flex-1">
          <div className="grid xl:grid-cols-3 xl:gap-5 lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-2">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ShopItemSkeleton key={i} />
                ))
              : medicines.map((medicine) => (
                  <ShopItem key={medicine._id} medicine={medicine} />
                ))}
          </div>
        </div>
      </div>
      <div>
        <Pagination
          currentPage={metaList?.page as number}
          totalPages={metaList?.totalPages as number}
        />
      </div>
    </div>
  );
};

export default AllMedicines;
