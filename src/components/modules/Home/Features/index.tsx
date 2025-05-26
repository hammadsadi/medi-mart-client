"use client";
import React, { useEffect, useState } from "react";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import FeaturesItem from "./FeaturesItem/FeaturesItem";
import { TMedicine } from "@/types/medicines.types";
import { getAllFeaturesMedicines } from "@/services/Medicine";
import { SkeletonItem } from "./FeaturesItem/SkeletonItem";

const FeaturesSection = () => {
  const [allMedicineInfo, setAllMedicineInfo] = useState<TMedicine[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get Data
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllFeaturesMedicines();
        setAllMedicineInfo(data?.data);
      } catch (error) {
        console.error("Failed to fetch medicines", error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const skeletonCount = 6;

  return (
    <div>
      <MyContainer>
        <div>
          <SectionTitle
            sectionTitle="Features Medicines"
            sectionSubTitle="Latest Medicines Here"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 2xl:grid-cols-4 2xl:gap-8">
          {isLoading
            ? Array.from({ length: skeletonCount }).map((_, i) => (
                <SkeletonItem key={i} />
              ))
            : allMedicineInfo
                ?.slice(0, skeletonCount)
                ?.map((item) => (
                  <FeaturesItem medicine={item} key={item?._id} />
                ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default FeaturesSection;
