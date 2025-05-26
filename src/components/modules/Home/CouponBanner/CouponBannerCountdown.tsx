"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

import "./Counter.css";

interface NumberProps {
  mv: ReturnType<typeof useSpring>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span
      className="counter-number"
      style={{ y, display: "block", height }}
      aria-hidden="true"
    >
      {number}
    </motion.span>
  );
}

interface DigitProps {
  place: number;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);
  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);
  return (
    <div className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  digitStyle?: React.CSSProperties;
}

function Counter({
  value,
  fontSize = 48,
  padding = 2,
  places = [10, 1],
  digitStyle,
}: CounterProps) {
  const height = fontSize + padding * 2;
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff",
        ...digitStyle,
      }}
      aria-label={`Countdown digit ${value}`}
    >
      {places.map((place) => (
        <Digit
          key={place}
          place={place}
          value={value}
          height={height}
          digitStyle={{
            width: fontSize * 0.6,
            textAlign: "center",
            lineHeight: `${height}px`,
            borderRadius: 4,
            backgroundColor: "rgba(255,255,255,0.1)",
            boxShadow: "0 0 6px rgba(0,0,0,0.3)",
            ...digitStyle,
          }}
        />
      ))}
    </div>
  );
}

function getTimeUnits(secondsLeft: number) {
  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = Math.floor(secondsLeft % 60);
  return { days, hours, minutes, seconds };
}

interface CouponBannerCountdownProps {
  couponCode?: string;
  discount?: number;
  expiryDate?: Date;
  onClaim?: () => void;
}

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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "linear-gradient(90deg, #0066ff, #0044cc)",
        color: "white",
        padding: "16px 24px",
        borderRadius: 8,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      {/* Left: Coupon info */}
      <div style={{ flex: "1 1 250px", fontSize: 20, fontWeight: "600" }}>
        🎉 Use Coupon{" "}
        <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
          {couponCode}
        </span>{" "}
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
          <div style={{ fontSize: 12, marginTop: 4 }}>Days</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Counter value={hours} />
          <div style={{ fontSize: 12, marginTop: 4 }}>Hours</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Counter value={minutes} />
          <div style={{ fontSize: 12, marginTop: 4 }}>Minutes</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Counter value={seconds} />
          <div style={{ fontSize: 12, marginTop: 4 }}>Seconds</div>
        </div>
      </div>

      {/* Right: Button */}
      <div style={{ flex: "0 0 auto" }}>
        <button
          onClick={onClaim}
          style={{
            backgroundColor: "#ff6600",
            border: "none",
            borderRadius: 6,
            padding: "12px 24px",
            fontWeight: "700",
            fontSize: 18,
            cursor: "pointer",
            color: "white",
            boxShadow: "0 4px 10px rgba(255, 102, 0, 0.5)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e65500")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#ff6600")
          }
          aria-label="Claim coupon now"
        >
          Claim Now
        </button>
      </div>
    </div>
  );
}
