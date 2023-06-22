import { useEffect, useState } from 'react';

type useCountDownProps = {
  minutes?: number;
  seconds?: number;
  setTimeIsUp: () => void;
};

function CountDown({ minutes, seconds, setTimeIsUp }: useCountDownProps) {
  const [[mins, secs], setTime] = useState([
    minutes !== undefined ? minutes - 1 : 0,
    seconds !== undefined ? seconds : 59,
  ]);

  const tick = () => {
    if (mins === 0 && secs === 0) return setTimeIsUp(); //reset();
    else if (secs === 0) {
      setTime([mins - 1, 59]);
    } else {
      setTime([mins, secs - 1]);
    }
  };

  // const reset = () =>
  //   setTime([
  //     minutes !== undefined ? minutes - 1 : 0,
  //     seconds !== undefined ? seconds : 59,
  //   ]);

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <span>
      {`(${mins.toString().padStart(2, '0')}:${secs
        .toString()
        .padStart(2, '0')})`}
    </span>
  );
}

export default CountDown;
