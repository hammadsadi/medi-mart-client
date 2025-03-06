import React from 'react'
import CommonBanner from '../shared/CommonBanner/CommonBanner'
import MyContainer from '../shared/MyContainer/MyContainer';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import AllMedicines from './allMedicines/allMedicines';
import { getAllMedicines } from "@/services/Medicine";

const ShopManage = async () => {
  const { data: medicines } = await getAllMedicines();
  return (
    <div>
      <CommonBanner mainComponentTitle="Home" subComponentTitle="Shop" />
      <MyContainer>
        <SectionTitle
          sectionSubTitle="By Your Medicines What Your need"
          sectionTitle="Latest Medicines"
        />
        <div>
          <AllMedicines medicines={medicines?.data} />
        </div>
      </MyContainer>
    </div>
  );
};

export default ShopManage
