import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MedicineDetailsTabs } from "./details/medicineDetailsTabs/MedicineDetailsTabs";
import { TMedicine } from "@/types/medicines.types";
import { currencyFormatter } from "@/lib/currencyFormatter";

const MedicineDetails = ({ medicineInfo }: { medicineInfo: TMedicine }) => {
  return (
    <>
      <div className="border rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 md:mt-24">
        <div>
          <Image
            src={medicineInfo?.imageUrl}
            alt="name"
            width={500}
            height={500}
            className="rounded-md w-full object-cover h-80"
          />
        </div>
        <div className="bg-white rounded-md p-4">
          <h2 className="font-bold text-xl mb-4">{medicineInfo?.name}</h2>
          <p className="text-justify text-gray-500 font-light text-sm">
            {medicineInfo?.description?.slice(0, 200)}...
          </p>
          <div className="mt-5 font-bold">
            <h3>Price: {currencyFormatter(medicineInfo?.price)}</h3>
          </div>
          <div className="flex items-center gap-4 my-5 text-gray-500 text-xs">
            <p className="rounded-full px-4 py-1 bg-gray-100 flex items-center justify-center gap-1">
              <Star className="w-4 h-4" fill="orange" stroke="orange" />
              Ratings
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Stock: {medicineInfo?.stock}
            </p>
            <p className="rounded-full px-4 py-1 bg-gray-100">
              Category: {medicineInfo?.category}
            </p>
          </div>
          <hr />

          <Button variant="outline" className="w-full my-5">
            Add To Cart
          </Button>
          <Button className="w-full">Buy Now</Button>
        </div>
      </div>
      <div>
        <MedicineDetailsTabs medicineInfo={medicineInfo} />
      </div>
    </>
  );
};

export default MedicineDetails;
