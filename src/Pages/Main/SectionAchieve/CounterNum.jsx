import React, { useEffect, useState } from 'react'

const DURATION = 3500;

const CounterNum = ({ type, max }) => {
  const [countValue, setCountValue] = useState(0);
  const [delay, setDelay] = useState(1);

  useEffect(() => {
    const stepTime = Math.floor(DURATION / max * delay);
    setDelay(Math.pow((0.1 + countValue/max ), 30));

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

export default React.memo(CounterNum);
