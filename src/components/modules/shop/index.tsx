import React from "react";
import CommonBanner from "../shared/CommonBanner/CommonBanner";
import MyContainer from "../shared/MyContainer/MyContainer";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import AllMedicines from "./allMedicines";

const ShopManage = async () => {
  return (
    <div>
      <CommonBanner mainComponentTitle="Home" subComponentTitle="Shop" />
      <MyContainer>
        <SectionTitle
          sectionSubTitle="Latest Breakthroughs in Medicine"
          sectionTitle="Latest Medicines"
        />
        <div>
          <AllMedicines />
        </div>
      </MyContainer>
    </div>
  );
};

export default ShopManage;
