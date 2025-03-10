/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Banner from "./Banner/Banner";
import FeaturesSection from "./Features";
import CustomerReviews from "./CustomerReviews";
import { getAllMedicines } from "@/services/Medicine";

const HomePageManage = async ({ searchParams }: { searchParams: any }) => {
  const { query } = await searchParams;
  const { searchTerm } = await searchParams;
  const { data: allMedicineInfo } = await getAllMedicines(
    undefined,
    searchTerm,
    query
  );
  return (
    <div>
      <Banner />
      <FeaturesSection allMedicineInfo={allMedicineInfo?.data} />
      <CustomerReviews />
    </div>
  );
};

export default HomePageManage;
