"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { getSingleMedicinesReviews } from "@/services/ReviewServices";
import { TMedicine } from "@/types/medicines.types";
import { TReview } from "@/types/reviews";
import { getAverageRating } from "@/utils/getAverageRating";
import { FileText, MoveRight, Star, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShopItem = ({ medicine }: { medicine: TMedicine }) => {
  const dispatch = useAppDispatch();
  const [medicinesReviewsList, setMedicinesReviewsList] = useState<TReview[]>(
    []
  );

  useEffect(() => {
    const getReviews = async () => {
      const { data: reviewsData } = await getSingleMedicinesReviews(
        medicine?._id
      );
      setMedicinesReviewsList(reviewsData);
    };
    getReviews();
  }, [medicine?._id]);

  const averageRating = getAverageRating(medicinesReviewsList);

  return (
    <div className="block rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition duration-200 border">
      {/* Image */}
      <div className="relative w-full h-56 mb-4">
        <Image
          src={
            medicine?.imageUrl ||
            "https://res.cloudinary.com/dro1r3fxd/image/upload/v1748098603/no-image-sadipng_p01msq.png"
          }
          alt={medicine.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>

      {/* Basic Info */}
      <div className="space-y-1 mb-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {medicine?.name}
        </h3>
        <p className="text-primary font-medium text-sm">
          {currencyFormatter(medicine?.price)}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="font-medium">{averageRating}</span>
          <span className="text-gray-400">
            ({medicinesReviewsList?.length})
          </span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-primary" />
          <span>{medicine?.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-primary" />
          <span>
            {medicine?.prescriptionRequired
              ? "Prescription Required"
              : "No Prescription"}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <Link
          href={`/medicine/${medicine?._id}`}
          className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
        >
          Details <MoveRight className="w-4 h-4" />
        </Link>

        <Button
          onClick={() => dispatch(addToCart(medicine))}
          size="sm"
          className="text-sm px-4 py-1"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ShopItem;
