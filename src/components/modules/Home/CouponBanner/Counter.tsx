import { CSSProperties } from "react";
import { Digit } from "./Digit";

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  places?: number[];
  digitStyle?: CSSProperties;
}

export function Counter({
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
            backgroundColor: "#16a34a",
            boxShadow: "0 0 6px rgba(0,0,0,0.3)",
            ...digitStyle,
          }}
        />
      ))}
    </div>
  );
}
