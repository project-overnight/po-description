<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import styles from './description.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';


function Description() {
  const [sizedDescription, setSizedDesciption] = useState();
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [title, setTitle] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [host, setHost] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [arrangements, setArrangements] = useState([]);
  const [amenitiesBasics, setAmenitiesBasics] = useState([]);
  const [amenitiesExtras, setAmenitiesExtras] = useState();


  const fetchListing = async () => {
    let response = await fetch('/api/description/1');
    response = await response.json();
    setTitle(response.title);
    setMaxGuests(response.maxGuests);
    setBedrooms(response.bedrooms);
    setBeds(response.beds);
    setBaths(response.baths);
    setHost(response.host);
    setEmail(response.email);
    setDescription(response.description);
    setArrangements(response.arrangements);
    setAmenitiesBasics(response.amenities.basics);
    setAmenitiesExtras(response.amenities.extras);
  };

  useEffect(() => {
    fetchListing();
  }, []);

  useEffect(() => {
    const descriptionArray = description.split(' ');
    let shortenDescription = '';
    for (let i = 0; i < 29; i += 1) {
      shortenDescription += `${descriptionArray[i]} `;
    }
    shortenDescription += `${descriptionArray[30]}...`;
    setSizedDesciption(shortenDescription);
  }, [description]);

  useEffect(() => {
    const tick = setInterval(() => setDate(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(tick);
  }, [date]);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <h2>
        {`It is ${date}.`}
      </h2>
      <div className={styles.titleCardComponent}>
        <div className={styles.titleCallout}>
          {`Entire ${title} hosted by ${host}.`}
        </div>
        <div className={styles.titleBullets}>
          {`${maxGuests} guests · ${bedrooms} bedrooms · ${beds} beds  · ${baths} baths`}
        </div>
      </div>
      <div className={styles.descriptionText}>
        {sizedDescription}
        <button type="button"> more </button>
      </div>
    </>
  );
}
=======
import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import Description from './modules/description.jsx';
>>>>>>> have a test passing, in the process of writing more.

ReactDOM.render(<Description />, document.getElementById('root'));
