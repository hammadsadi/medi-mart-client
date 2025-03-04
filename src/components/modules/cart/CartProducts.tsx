"use client";

import CustomerCartProductCard from "./CustomerCartProductCard";


export default function CartProducts() {

  return (
    <div className=" border rounded-md lg:col-span-8 h-full row-span-3 p-10 space-y-5">
      {/* {products.length === 0 && (
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold">Your cart is empty</p>
          <p className="mt-2">
            Looks like your cart is on vacation—bring it back to work by adding
            some items!
          </p>
          <div className="flex justify-center items-center ">
            <Image src={emptyCart} alt="empty cart" />
          </div>
        </div>
      )} */}
      <CustomerCartProductCard />
      <CustomerCartProductCard />
    </div>
  );
}
