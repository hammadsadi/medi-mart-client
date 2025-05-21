"use client";

import { JSX } from "react";
import { FaAppleAlt, FaRunning, FaWater, FaBed, FaSmile } from "react-icons/fa";

interface Tip {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const tips: Tip[] = [
  {
    id: 1,
    title: "Stay Hydrated",
    description:
      "Drink at least 8 glasses of water daily to keep your body hydrated.",
    icon: <FaWater className="text-primary text-4xl" />,
  },
  {
    id: 2,
    title: "Balanced Diet",
    description:
      "Eat a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.",
    icon: <FaAppleAlt className="text-primary text-4xl" />,
  },
  {
    id: 3,
    title: "Regular Exercise",
    description:
      "Engage in at least 30 minutes of physical activity most days of the week.",
    icon: <FaRunning className="text-primary text-4xl" />,
  },
  {
    id: 4,
    title: "Adequate Sleep",
    description:
      "Ensure 7-9 hours of quality sleep to help your body recover and rejuvenate.",
    icon: <FaBed className="text-primary text-4xl" />,
  },
  {
    id: 5,
    title: "Manage Stress",
    description:
      "Practice relaxation techniques like meditation, yoga, or deep breathing to reduce stress.",
    icon: <FaSmile className="text-primary text-4xl" />,
  },
];

export default function HealthTips() {
  return (
    <section className="bg-gray-50 py-14 px-6 md:px-12 lg:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          Health Tips for a Better Life
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map(({ id, title, description, icon }) => (
            <article
              key={id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-5">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
