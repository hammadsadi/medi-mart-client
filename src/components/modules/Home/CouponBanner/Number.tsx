import { motion, useTransform, MotionValue } from "framer-motion";

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

export function Number({ mv, number, height }: NumberProps) {
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
