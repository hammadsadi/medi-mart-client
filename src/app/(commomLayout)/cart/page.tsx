import CartProducts from '@/components/modules/cart/CartProducts';
import CommonBanner from '@/components/modules/shared/CommonBanner/CommonBanner';
import MyContainer from '@/components/modules/shared/MyContainer/MyContainer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const CartPage = () => {
  return (
    <div>
      <div>
        <CommonBanner mainComponentTitle="Shop" subComponentTitle="Cart" />
        <MyContainer>
          <h3 className="text-center font-bold text-lg md:text-3xl mb-3">
            Your Cart List
          </h3>
          <div className=" max-w-4xl mx-auto">
            <CartProducts />
            <div className="text-right mt-2">
              <Link href="/checkout">
                <Button>Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </MyContainer>
      </div>
    </div>
  );
}

export default CartPage
