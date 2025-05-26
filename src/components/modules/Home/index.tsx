/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Banner from "./Banner/Banner";
import FeaturesSection from "./Features";
import CustomerReviews from "./CustomerReviews";
import { getAllFeaturesMedicines } from "@/services/Medicine";
import { getAllReviews } from "@/services/ReviewServices";
import OfferSection from "./OfferSection/OfferSection";
import BlogSection from "./BlogSection/BlogSection";
import CategorySection from "./CategorySection/CategorySection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import LicensedBadgeSection from "./LicensedBadgeSection/LicensedBadgeSection";

const HomePageManage = async ({ searchParams }: { searchParams: any }) => {
  const { data: allFeaturesMedicines } = await getAllFeaturesMedicines();
  const { data: allReviews } = await getAllReviews();
  return (
    <div>
      <Banner />
      <FeaturesSection allMedicineInfo={allFeaturesMedicines?.data} />
      <CategorySection />
      <WhyChooseUs />
      <LicensedBadgeSection />
      <OfferSection />
      <CustomerReviews allReviews={allReviews} />
      <BlogSection />
    </div>
  );
};

export default HomePageManage;
