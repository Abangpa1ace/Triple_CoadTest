import React, { useEffect, useState } from 'react'
import { ICounterProps } from '../../Main.types';

const DURATION = 2000;
const SQUARE = 40;

const CounterNum: React.FC<ICounterProps> = ({ type, max }) => {
  const [countValue, setCountValue] = useState(0);
  const [delay, setDelay] = useState(1);

  useEffect(() => {
    const stepTime = Math.floor(DURATION / max * delay);
    setDelay(Math.pow((0.1 + countValue/max ), SQUARE));

    const intertvalCount = setInterval(() => {
      if (countValue < max) {
        setCountValue(countValue + 1);
      }
    }, stepTime);
    return () => clearInterval(intertvalCount);
  }, [countValue])


  return (
    <strong>
      {countValue}만 {type === "person" ? "명" : "개"}
    </strong>
  )
};

export default CounterNum;
