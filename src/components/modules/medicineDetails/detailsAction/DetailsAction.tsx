'use client'
import { Button } from '@/components/ui/button';
import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { TMedicine } from '@/types/medicines.types';
import React from 'react'

const DetailsAction = ({ medicineData }: { medicineData: TMedicine}) => {
  const dispatch = useAppDispatch();

  // Handle Add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(medicineData));
  };
  return (
    <div>
      <Button
        onClick={handleAddToCart}
        variant="outline"
        className="w-full my-3"
      >
        Add To Cart
      </Button>
      <Button className="w-full">Buy Now</Button>
    </div>
  );
};

export default DetailsAction
