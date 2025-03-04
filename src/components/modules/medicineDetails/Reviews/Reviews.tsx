import React from 'react'
import ReviewsItem from './reviewsItem/ReviewsItem'
import { Button } from '@/components/ui/button'

const Reviews = () => {
  return (
    <div className="max-w-lg mt-6">
      <div className="flex justify-around mb-4">
        <h4 className='font-bold'>Reviews ( 6 )</h4>
        <Button>Write Review</Button>
      </div>
      <ReviewsItem />
    </div>
  );
}

export default Reviews
