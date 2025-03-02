import { Button } from "@/components/ui/button";
import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://res.cloudinary.com/dhfvwgwty/image/upload/v1740941927/doctor-wearing-medical-equipment-with-copy-space_sm6n76.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/20"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Your Health our Priority
            <strong className="block font-extrabold text-primary">
              Fast Delivery
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            We provide reliable and fast delivery of prescription and over the
            counter medications to ensure your health and wellness
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button> Shop Now</Button>
            <Button variant="secondary"> Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
