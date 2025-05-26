"use client";

import { CheckCircle } from "lucide-react";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const features = [
  {
    title: "Certified Pharmacy",
    description:
      "We are government-licensed and all medicines are 100% genuine.",
  },
  {
    title: "Fast Delivery",
    description: "Receive your medicines at your doorstep within 24-48 hours.",
  },
  {
    title: "Trusted Brands",
    description:
      "We stock medicines from reputed and top pharmaceutical brands.",
  },
  {
    title: "Secure Payment",
    description:
      "Multiple payment methods with end-to-end encryption & SSL security.",
  },
];

export default function WhyChooseUs() {
  return (
    <MyContainer>
      <SectionTitle
        sectionSubTitle="We are committed to delivering trusted healthcare to your doorstep."
        sectionTitle=" Why Choose Us?"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 bg-white shadow-sm rounded-xl border border-gray-200"
          >
            <CheckCircle className="text-green-600 mt-1" size={24} />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </MyContainer>
  );
}
