import React, { useState, useEffect } from 'react';

const DescriptionClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(tick);
  }, [date]);


  return (
    <h2>
      {`It is ${date.toLocaleTimeString()}.`}
    </h2>
  );
};

export default DescriptionClock;
