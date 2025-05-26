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
import CouponBannerCountdown from "./CouponBanner/CouponBanner";
const expiry = new Date("2025-06-01T23:59:59");
const HomePageManage = async () => {
  const { data: allFeaturesMedicines } = await getAllFeaturesMedicines();
  const { data: allReviews } = await getAllReviews();
  return (
    <div>
      <Banner />
      <FeaturesSection allMedicineInfo={allFeaturesMedicines?.data} />
      <CouponBannerCountdown
        couponCode="MEDI20"
        discount={20}
        expiryDate={expiry}
      />
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
