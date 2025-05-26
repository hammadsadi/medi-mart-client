type TimeUnits = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getTimeUnits(secondsLeft: number): TimeUnits {
  const days = Math.floor(secondsLeft / (24 * 3600));
  const hours = Math.floor((secondsLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = Math.floor(secondsLeft % 60);
  return { days, hours, minutes, seconds };
}
