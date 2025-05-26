"use client";
import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import FeaturesSection from "./Features";
import CustomerReviews from "./CustomerReviews";
import { getAllReviews } from "@/services/ReviewServices";
import OfferSection from "./OfferSection/OfferSection";
import BlogSection from "./BlogSection/BlogSection";
import CategorySection from "./CategorySection/CategorySection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import LicensedBadgeSection from "./LicensedBadgeSection/LicensedBadgeSection";
import { TReview } from "@/types/reviews";
const HomePageManage = () => {
  const [allReviews, setAllReviews] = useState<TReview[] | []>([]);

  useEffect(() => {
    const getData = async () => {
      const [AllReviews] = await Promise.all([getAllReviews()]);
      setAllReviews(AllReviews.data);
    };
    getData();
  }, []);
  return (
    <div>
      <Banner />
      <FeaturesSection />
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
