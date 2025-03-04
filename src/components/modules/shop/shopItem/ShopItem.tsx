import { FileText, MoveRight, Stethoscope } from "lucide-react";
import Link from "next/link";

const ShopItem = () => {
  return (
    <div className="block rounded-lg p-4 bg-white shadow-xs shadow-indigo-100">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>

            <dd className="text-sm text-gray-500">$240,000</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>

            <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-5 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Stethoscope className="size-5 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Category</p>

              <p className="font-medium">Pain Reliever</p>
            </div>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FileText className="size-5 text-primary" />

            <div className="mt-1.5 sm:mt-0">
              <p className="text-gray-500">Prescription</p>

              <p className="font-medium">Yes</p>
            </div>
          </div>

          <Link
            href=""
            className=" hover:text-primary sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
          >
            <div className="mt-1.5 sm:mt-0">
              <p className="">Details</p>

              {/* <p className="font-medium">4 rooms</p> */}
            </div>
            <MoveRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopItem
