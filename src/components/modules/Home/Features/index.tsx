import React from 'react'
import MyContainer from '../../shared/MyContainer/MyContainer'
import SectionTitle from '../../shared/SectionTitle/SectionTitle'
import FeaturesItem from './FeaturesItem/FeaturesItem';

const FeaturesSection = () => {
  return (
    <div>
      <MyContainer>
        <div>
          <SectionTitle
            sectionTitle="Features Medicines"
            sectionSubTitle="Latest Medicines Here"
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 2xl:grid-cols-4 2xl:gap-8'>
          <FeaturesItem />
          <FeaturesItem />
          <FeaturesItem />
        </div>
      </MyContainer>
    </div>
  );
}

export default FeaturesSection
