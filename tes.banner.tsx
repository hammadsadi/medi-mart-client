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
import { getAllCoupons } from "@/services/CouponServices";
const HomePageManage = async () => {
  const { data: allFeaturesMedicines } = await getAllFeaturesMedicines();
  const { data: allReviews } = await getAllReviews();
  const { data: couponData } = await getAllCoupons();
  console.log(couponData[0]);
  const couponExpiry = new Date(couponData[0]?.endDate);
  return (
    <div>
      <Banner />
      <FeaturesSection allMedicineInfo={allFeaturesMedicines?.data} />
      <CouponBannerCountdown
        couponCode="MEDI20"
        discount={20}
        expiryDate={couponExpiry}
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
