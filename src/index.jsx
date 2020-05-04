import React from 'react';
import ReactDOM from 'react-dom';


function tick() {
  const element = (
    <>
      <h1>Hello, world!</h1>
      <h2>
        {new Date().toLocaleTimeString()}
      </h2>
    </>
  );
  ReactDOM.render(element, document.getElementById('root'));
}


setInterval(tick, 1000);
