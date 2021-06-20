import { CalculateEventTime } from '../event-time';
import { useHasMounted } from '@lib/useHasMounted';
import { useEffect, useState } from 'react';

type EventTimerProps = {
  className: string;
  date: string;
};

const EventTimer = ({ className, date }: EventTimerProps) => {
  const mounted = useHasMounted();
  const [timeLeft, setTimeLeft] = useState(CalculateEventTime(date));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalculateEventTime(date));
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!mounted) return <></>;

  return (
    <p className={`${className} font-alt`}>
      {timeLeft
        ? Object.keys(timeLeft).map(
            (val, index) =>
              `${('0' + timeLeft[val]).slice(-2)}${
                index < Object.keys(timeLeft).length - 1 ? ' : ' : ''
              }`
          )
        : null}
    </p>
  );
};

export default EventTimer;
