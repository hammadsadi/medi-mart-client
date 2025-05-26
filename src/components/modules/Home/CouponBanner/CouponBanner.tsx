"use client";
import React, { useEffect, useState } from "react";

import "./Counter.css";
import { Counter } from "./Counter";
import { getTimeUnits } from "@/utils/getTimeUnits";
import { Button } from "@/components/ui/button";
import MyContainer from "../../shared/MyContainer/MyContainer";

// Props interface
interface CouponBannerCountdownProps {
  couponCode?: string;
  discount?: number;
  expiryDate: Date;
  onClaim?: () => void;
}

// Main Banner component
export default function CouponBannerCountdown({
  couponCode = "MEDI20",
  discount = 20,
  expiryDate,
  onClaim = () => alert("Coupon Claimed!"),
}: CouponBannerCountdownProps) {
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
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
    <MyContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // background: "linear-gradient(90deg, #4bdd81, #16a34a)",
          color: "white",
          padding: "16px 24px",
          borderRadius: 8,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          gap: 16,
          flexWrap: "wrap",
        }}
        className="bg-green-100"
      >
        {/* Left: Coupon info */}
        <div
          className="text-black"
          style={{ flex: "1 1 250px", fontSize: 20, fontWeight: "600" }}
        >
          🎉 Use Coupon <span style={{ fontWeight: "bold" }}>{couponCode}</span>{" "}
          and get <span style={{ fontWeight: "bold" }}>{discount}% OFF</span>!
        </div>

        {/* Middle: Countdown */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center",
            gap: 12,
            fontWeight: "600",
            fontSize: 18,
          }}
          aria-label="Coupon expiry countdown"
        >
          <div style={{ textAlign: "center" }}>
            <Counter value={days} />
            <div className="text-black" style={{ fontSize: 12, marginTop: 4 }}>
              Days
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Counter value={hours} />
            <div className="text-black" style={{ fontSize: 12, marginTop: 4 }}>
              Hours
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Counter value={minutes} />
            <div className="text-black" style={{ fontSize: 12, marginTop: 4 }}>
              Minutes
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Counter value={seconds} />
            <div className="text-black" style={{ fontSize: 12, marginTop: 4 }}>
              Seconds
            </div>
          </div>
        </div>

        {/* Right: Button */}
        <div style={{ flex: "0 0 auto" }}>
          <Button> Claim Now</Button>
        </div>
      </div>
    </MyContainer>
  );
}
