import { Button } from "@/components/ui/button";
// import { currencyFormatter } from "@/lib/currencyFormatter";

import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function CustomerCartProductCard() {

 
  return (
    <div className="bg-white rounded-lg flex p-5 gap-5">
      <div className="h-full w-32 rounded-md overflow-hidden">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/000/300/621/non_2x/vector-a-set-of-medicine-and-prescription.jpg"
          height={200}
          width={200}
          alt="product"
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-semibold">Peracimatol</h1>
        <div className="flex gap-5 my-2">
          <p>
            <span className="text-gray-500">Category:</span>{" "}
            <span className="font-semibold">Black</span>
          </p>
          <p>
            <span className="text-gray-500">Stock Availability:</span>{" "}
            <span className="font-semibold">33</span>
          </p>
        </div>
        <hr className="my-1" />
        <div className="flex md:flex-row flex-col items-start md:items-center justify-between">
          <h2>
            Price: &nbsp;
           22
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 font-semibold md:block hidden">Quantity</p>
            <Button
            //   onClick={() => handleDecreamentCartItem(product._id)}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Minus />
            </Button>
            <p className="font-semibold text-xl p-2">
              32
            </p>
            <Button
            //   onClick={() => {
            //     if (product.stock > product.productQuantity) {
            //       handleIncreamentCartItem(product._id);
            //     }
            //   }}
              variant="outline"
              className="size-8 rounded-sm"
            >
              <Plus />
            </Button>
            <Button variant="outline" className="size-8 rounded-sm">
              <Trash className="text-red-500/50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
