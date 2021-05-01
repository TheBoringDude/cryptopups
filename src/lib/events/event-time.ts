export const CalculateEventTime = (date: string) => {
  const d = new Date(new Date(date).getTime() + 8 * 60 * 60 * 1000); // GMT+8

  const diff = +d - +new Date();
  if (diff > 0) {
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  }

  return null;
};
