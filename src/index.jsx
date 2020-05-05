import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';


function Description() {
  const [listing, setListing] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch('/api/description/1')
      .then((res) => res.json())
      .then((res) => {
        setListing(JSON.stringify(res));
      });
  }, [listing]);

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  });
  return (
    <>
      <h1>Hello, world!</h1>
      <h2>
        It is
        {date.toLocaleTimeString()}
        .
      </h2>
      <p>{listing}</p>
    </>
  );
}
// make get request on ComponentDidMOunt
// render to to page as play


ReactDOM.render(<Description />, document.getElementById('root'));

export default Description;
