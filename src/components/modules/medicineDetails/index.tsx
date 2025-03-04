import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MedicineDetailsTabs } from "./details/medicineDetailsTabs/MedicineDetailsTabs";

const MedicineDetgails = () => {
  return (
    <>
      <div className="border rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 md:mt-24">
        <div>
          <Image
            src="https://cdn.pixabay.com/photo/2023/10/01/14/40/medicine-8287535_640.jpg"
            alt="name"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-80"
          />
        </div>
        <div className="bg-white rounded-md p-4">
          <h2 className="font-bold text-xl mb-4">Medicine Name</h2>
          <p className="text-justify text-gray-500 font-light text-sm">
            Medicine Description Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className="flex items-center justify-between my-5 text-gray-500 text-xs">
            <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
              <Star className="w-4 h-4" fill="orange" stroke="orange" />
              Ratings
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">Stock: 3</p>
            <p className="rounded-full px-4 py-1 bg-gray-100">Brand: br</p>
            <p className="rounded-full px-4 py-1 bg-gray-100">Category: ct</p>
          </div>
          <hr />
          {/* <p className="my-2 font-bold">
          Price:{" "}
          {product?.offerPrice ? (
            <>
              <span className="font-semibold mr-2 text-orange-400">
                $ {product?.offerPrice}
              </span>
              <del className="font-semibold text-xs">$ {product?.price}</del>
            </>
          ) : (
            <span className="font-semibold">$ {product?.price}</span>
          )}
        </p>
        <hr /> */}

          <Button variant="outline" className="w-full my-5">
            Add To Cart
          </Button>
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
      <div>
        <MedicineDetailsTabs/>
      </div>
    </>
  );
};

export default MedicineDetgails;
