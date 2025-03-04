import React from 'react'
import CommonBanner from '../shared/CommonBanner/CommonBanner'
import MyContainer from '../shared/MyContainer/MyContainer';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import AllMedicines from './allMedicines/allMedicines';

const ShopManage = () => {
  return (
    <div>
      <CommonBanner mainComponentTitle="Home" subComponentTitle="Shop" />
      <MyContainer>
        <SectionTitle sectionSubTitle="By Your Medicines What Your need" sectionTitle="Latest Medicines" />
        <div>
          <AllMedicines/>
        </div>
      </MyContainer>
    </div>
  );
}

export default ShopManage
