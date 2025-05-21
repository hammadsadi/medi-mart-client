"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import doctorsvg from "@/assets/svg/undraw_doctor_aum1.svg";
export default function ConsultDoctor() {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Consult a Doctor Online
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Get professional medical advice from verified doctors without
            leaving your home. Book a video or chat consultation in minutes.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Instant video or chat consultations</li>
            <li>Certified and experienced doctors</li>
            <li>Digital prescription after session</li>
            <li>Affordable fees & easy scheduling</li>
          </ul>
          <Button className="mt-4 w-full md:w-auto">Book Now</Button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={doctorsvg}
            alt="Consult a doctor"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
