import { useEffect, useState } from "react";

export default function Timer() {
  // const [time, setTime] = useState(60)
  // useEffect(() => {
  //   const decrementTime = () => setTime(prevTime => prevTime - 1)
  //   setInterval(decrementTime, 1000)
  //   return () => {
  //     clearInterval(decrementTime)
  //   }
  // }, [])

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const sufix = hours > 12 ? "PM" : "AM";
    return `${hours}:${minutes}:${seconds} ${sufix}`;
  };

  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    console.log("use effect");
    const setNewTime = () => setTime(formatTime(new Date()));
    setInterval(setNewTime, 1000);
    return () => {
      clearInterval(setNewTime);
    };
  }, []);

  return (
    <div>
      <h1>Time Remaining</h1>
      <h2>{time}</h2>
    </div>
  );
}
