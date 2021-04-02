import React, { useState, useEffect, useCallback } from 'react'

const DURATION = 7000;

const CounterNum = ({ count, max }) => {
  // const [countValue, setCountValue] = useState(0);

  // const raiseTripCount = useCallback(
  //   (max) => {
  //     const stepTime = DURATION / max;
  //     const intervalCount = setInterval(() => {
  //       // if (countValue < max) {
  //         setCountValue(countValue + 1);
  //       // }
  //     }, stepTime)
  //     // return () => clearInterval(intervalCount);
  //   }, []
  // )

  // useEffect(() => {
  //   raiseTripCount(max);
  // }, [countValue, raiseTripCount, max])

  return (
    <strong>
      {count}만 명
    </strong>
  )
};

export default React.memo(CounterNum);
