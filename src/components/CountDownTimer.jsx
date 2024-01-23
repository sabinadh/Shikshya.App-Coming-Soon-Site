import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetEndDate }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetEndDate - currentTime;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

      // Update state variables
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      console.log(
        `Remaining Time: ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`
      );
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [targetEndDate]);

  return (
    <div>
      <p>{`${days} Days, ${hours} Hrs, ${minutes} Min, ${seconds} Sec`}</p>
    </div>
  );
};

export default CountdownTimer;
