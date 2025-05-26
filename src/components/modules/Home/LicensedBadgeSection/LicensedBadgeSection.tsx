"use client";

import { ShieldCheck, BadgeCheck, Banknote, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import MyContainer from "../../shared/MyContainer/MyContainer";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const badges = [
  {
    icon: ShieldCheck,
    title: "Licensed Pharmacy",
    description: "Govt. approved & certified pharmacy platform.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted by Thousands",
    description: "More than 10,000 happy customers nationwide.",
  },
  {
    icon: Banknote,
    title: "Secure Payments",
    description: "End-to-end encrypted & safe transactions.",
  },
  {
    icon: CheckCircle,
    title: "Genuine Medicines",
    description: "Only authentic & verified medicines delivered.",
  },
];

export default function LicensedBadgeSection() {
  return (
    <MyContainer>
      <SectionTitle
        sectionSubTitle=" We ensure complete safety, trust, and authenticity in every order."
        sectionTitle="Licensed & Trusted"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-4 text-primary">
              <badge.icon className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {badge.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{badge.description}</p>
          </div>
        ))}
      </div>
    </MyContainer>
  );
}
