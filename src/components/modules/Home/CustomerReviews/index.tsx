import React from 'react'
import MyContainer from '../../shared/MyContainer/MyContainer';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import ReviewItem from './ReviewItem/ReviewItem';

const CustomerReviews = () => {
  return (
    <div>
      <MyContainer>
        <div>
          <SectionTitle
            sectionTitle="Coustomers Reviews"
            sectionSubTitle="Read trusted reviews from our customers"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 2xl:grid-cols-4 2xl:gap-8">
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
        </div>
      </MyContainer>
    </div>
  );
}

export default CustomerReviews
