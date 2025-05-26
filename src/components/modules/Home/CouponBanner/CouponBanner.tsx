"use client";

import React, { useEffect, useState } from "react";
import { Counter } from "./Counter";
import { getTimeUnits } from "@/utils/getTimeUnits";

interface CouponBannerCountdownProps {
  couponCode?: string;
  discount?: number;
  expiryDate: Date;
  onClaim?: () => void;
}

export default function CouponBannerCountdown({
  couponCode = "MEDI20",
  discount = 10,
  expiryDate,
  onClaim = () => alert("Coupon Claimed!"),
}: CouponBannerCountdownProps) {
  const [secondsLeft, setSecondsLeft] = useState(() => {
    if (!expiryDate) return 0;
    return Math.max(0, Math.floor((expiryDate.getTime() - Date.now()) / 1000));
  });

  useEffect(() => {
    if (!expiryDate) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [expiryDate]);

  const { days, hours, minutes, seconds } = getTimeUnits(secondsLeft);

  return (
    <div className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl shadow-lg p-6 text-center space-y-4">
      <h2 className="text-xl md:text-2xl font-bold uppercase text-white">
        Sales Countdown Timer
      </h2>
      <p className="text-sm md:text-base">
        Guiding video on how to install and use
      </p>

      <div className="text-lg font-semibold">Offer ends in</div>

      <div className="flex justify-center gap-4">
        <div className="text-center">
          <Counter value={days} />
          <div className="text-xs mt-1">Days</div>
        </div>
        <div className="text-center">
          <Counter value={hours} />
          <div className="text-xs mt-1">Hours</div>
        </div>
        <div className="text-center">
          <Counter value={minutes} />
          <div className="text-xs mt-1">Minutes</div>
        </div>
        <div className="text-center">
          <Counter value={seconds} />
          <div className="text-xs mt-1">Seconds</div>
        </div>
      </div>

      <div className="bg-white text-black p-4 rounded-md flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base font-medium shadow">
        <div className="flex items-center gap-2">
          🎉 Congratulations! Order in
          <span className="bg-black text-white px-2 py-1 rounded font-mono">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </span>
          to get {discount}% OFF cart. Hurry up!
        </div>
        <button
          onClick={onClaim}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
