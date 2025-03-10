import { TMedicine } from "@/types/medicines.types";
import { ExternalLink, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesItem = ({ medicine }: { medicine: TMedicine }) => {
  return (
    <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <Link href={`medicine/${medicine?._id}`} className="block shrink-0">
          <Image
            width={300}
            height={300}
            src={medicine?.imageUrl}
            alt={medicine?.name}
            className="size-14 rounded-lg object-cover"
          />
        </Link>

        <div>
          <h3 className="font-medium sm:text-lg">
            <Link
              href={`medicine/${medicine?._id}`}
              className="hover:underline"
            >
              {medicine?.name}
            </Link>
          </h3>

          <p className="line-clamp-2 text-sm text-gray-700">
            {medicine?.description?.slice(0, 50)}
          </p>

          <div className="mt-2 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <Stethoscope className="size-4 text-primary" />

              <p className="text-xs">{medicine?.category}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">
              &middot;
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          href={`medicine/${medicine?._id}`}
          className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-primary px-3 py-1.5 text-white"
        >
          <ExternalLink className="size-3" />
          <span className="text-[10px] font-medium sm:text-xs">Details</span>
        </Link>
      </div>
    </article>
  );
};

export default FeaturesItem;
