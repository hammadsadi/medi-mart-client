"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import doctorsvg from "@/assets/svg/undraw_doctor_aum1.svg";
import { useState } from "react";
import Link from "next/link";

const specialties = [
  "General Physician",
  "Dermatology",
  "Cardiology",
  "Pediatrics",
  "Psychiatry",
  "Orthopedics",
  "Gynecology",
];

const faqs = [
  {
    question: "How do I purchase medicines?",
    answer:
      "You can browse and order medicines directly from our online store with home delivery.",
  },
  {
    question: "Are the medicines authentic?",
    answer:
      "Yes, we provide only verified and genuine medicines sourced from trusted suppliers.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major credit cards, mobile banking, and digital wallets.",
  },
  {
    question: "Do you provide consultation services?",
    answer:
      "Currently, we focus on medicine sales, but professional consultation info is also available here.",
  },
];

export default function ConsultDoctor() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Trusted Medicine & Health Products
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            Shop genuine medicines online easily and get them delivered at your
            doorstep. Explore our extensive range of health products for your
            family.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-md">
            <li>Verified and authentic medicines</li>
            <li>Fast home delivery service</li>
            <li>Secure payment options</li>
            <li>Customer support & guidance</li>
          </ul>

          <Button className="mt-4 w-full md:w-auto px-8 py-3 text-lg font-semibold">
            <Link href="/shop">Shop Medicines</Link>
          </Button>

          {/* Doctor Specialties / Categories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Health Categories & Support
            </h3>
            <ul className="flex flex-wrap gap-3">
              {specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="bg-primary-100 text-primary-800 px-4 py-1 rounded-full text-sm font-medium cursor-default select-none"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content: Image + FAQs */}
        <div className="space-y-10">
          {/* Doctor Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={doctorsvg}
              alt="Health & Medicine"
              width={500}
              height={500}
              className="max-w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* FAQs Section */}
          <div className="max-w-xl mx-auto md:mx-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faq-desc-${index}`}
                    id={`faq-title-${index}`}
                  >
                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id={`faq-desc-${index}`}
                    role="region"
                    aria-labelledby={`faq-title-${index}`}
                    className={`px-4 pb-4 text-gray-700 transition-all duration-300 ${
                      expandedIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
