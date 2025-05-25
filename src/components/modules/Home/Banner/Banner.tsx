"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MyModal } from "../../shared/MyModal/MyModal";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { currencyFormatter } from "@/lib/currencyFormatter";
import Link from "next/link";
import { getAllMedicines } from "@/services/Medicine";
import { TMedicine } from "@/types/medicines.types";

const Banner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [medicinesList, setMedicinesList] = useState<TMedicine[]>([]);

  const handleChangeSearch = async (searchTerm: string) => {
    setIsLoading(true);
    try {
      const { data: medicineData } = await getAllMedicines(
        undefined,
        searchTerm
      );
      if (medicineData?.data) {
        setMedicinesList(medicineData.data);
      }
    } catch (error) {
      console.error("Failed to fetch medicines", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Modal Section */}
      <MyModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        modalTitle="Search Medicines"
      >
        {/* Search Input */}
        <div className="mb-4">
          <Input
            onChange={(e) => handleChangeSearch(e.target.value)}
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border border-gray-300 focus:outline-none py-2.5 px-3 shadow-sm sm:text-sm"
          />
        </div>

        {/* Medicine Card With Skeleton */}
        <div className="space-y-3">
          {isLoading ? (
            <div className="flex items-center gap-3 border p-2 rounded-md animate-pulse">
              <div className="w-28 h-20 bg-gray-300 rounded-md"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ) : medicinesList.length > 0 ? (
            medicinesList.map((medicine) => (
              <Link
                key={medicine._id}
                href={`/medicine/${medicine._id}`}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 border p-2 rounded-md hover:bg-gray-100 transition"
              >
                <Image
                  src={medicine?.imageUrl || "/placeholder.jpg"}
                  alt={medicine.name}
                  width={500}
                  height={600}
                  className="w-full sm:w-28 h-32 sm:h-full object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
                    {medicine.name}
                  </h3>
                  <p className="text-primary font-medium text-sm sm:text-base">
                    {currencyFormatter(medicine.price)}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500">No medicines found.</p>
          )}
        </div>
      </MyModal>

      {/* Banner Section */}
      <section className="relative bg-[url(https://res.cloudinary.com/dhfvwgwty/image/upload/v1740941927/doctor-wearing-medical-equipment-with-copy-space_sm6n76.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/20"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-xl text-center mx-auto">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Your Health our Priority
              <strong className="block font-extrabold text-primary">
                Fast Delivery
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Get medicines at your home within 30 minutes.
            </p>

            {/* Search Trigger Input */}
            <div className="relative mt-4">
              <label htmlFor="Search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="Search"
                onClick={() => setIsOpen(true)}
                readOnly
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 focus:outline-none py-2.5 pe-10 pl-2 shadow-xs sm:text-sm cursor-pointer"
              />
              <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-700"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
