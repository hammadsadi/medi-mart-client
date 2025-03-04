"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";


export default function ShippingDetails() {

  // Handle City Change
  const handleCityChange = (city: string) => {
  };

  // Handle Shipping Address Change
  const handleShippingChange = (address: string) => {
  };

  return (
    <div className=" border bg-white rounded-md col-span-4  p-5 ">
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold text-center">Shipping Details</h1>

        <div className="mt-1 space-y-4">
          <div>
            <p className="text-gray-500">Enter your City.</p>
            <Select onValueChange={(value) => handleCityChange(value)}>
              <SelectTrigger className="mb-5">
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-gray-500">Upload your Prescription.</p>
            <Input type="file" />
          </div>
          <div>
            <p className="text-gray-500">Delivery Detils Area</p>
            <Textarea
              onChange={(e) => handleShippingChange(e.target.value)}
              rows={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
