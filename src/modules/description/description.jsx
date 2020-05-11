/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './description.css';
import RoomCarousel from '../RoomCarousel/Rooms';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// eslint-disable-next-line prefer-const
const largeTextStyle = {
  zIndex: 'auto',
  opacity: '0.0',
};

// eslint-disable-next-line prefer-const
const smallTextStyle = {
  transition: 'opacity 150ms',
  zIndex: 2,
};

// eslint-disable-next-line prefer-const
const largeDivStyle = {
  transition: 'size 100ms',
  zIndex: 0,
};

// eslint-disable-next-line prefer-const
const smallDivStyle = {
  zIndex: 2,
};


function Description() {
  const [isFull, setIsFull] = useState(false);
  const [lTextStyle, setLTextStyle] = useState(largeTextStyle);
  const [sTextStyle, setSTextStyle] = useState(smallTextStyle);
  const [lDivStyle, setLDivStyle] = useState(largeDivStyle);
  const [sDivStyle, setSDivStyle] = useState(smallDivStyle);
  const [sButtonStyle, setSButtonStyle] = useState();
  const [lButtonStyle, setLButtonStyle] = useState();
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [maxGuests, setMaxGuests] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [host, setHost] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [sizedDescription, setSizedDesciption] = useState('');
  const [arrangements, setArrangements] = useState([]);
  const [amenitiesBasics, setAmenitiesBasics] = useState([]);
  const [amenitiesExtras, setAmenitiesExtras] = useState();

  // eslint-disable-next-line prefer-const
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

  const toggleFull = (e) => {
    e.preventDefault();
    setIsFull(!isFull);
  };
  // doesn't work.
  function logKey(e) {
    if (e.code === 'X') {
      toggleFull(e);
    }
    console.log(e);
  }

  useEffect(() => {
  // eslint-disable-next-line no-undef
    const descriptionArray = description.split(' ');
    let shortenDescription = '';
    for (let i = 0; i < 29; i += 1) {
      shortenDescription += `${descriptionArray[i]} `;
    }
    shortenDescription += `${descriptionArray[30]}...`;
    setSizedDesciption(shortenDescription);
  }, [description]);

  useEffect(() => {
    const tick = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(tick);
  }, [date]);


  useEffect(() => {
    // fetch('/api/description/1')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setListing(JSON.stringify(res));
    //   });
    fetchListing();
  }, []);


  useEffect(() => {
    const time = setInterval(() => setDate(new Date()), 1000);
    return clearInterval(time);
  });

  // eslint-disable-next-line prefer-const

  useEffect(() => {
    if (!isFull) {
      setLButtonStyle({ opacity: '0.0' });
      setSButtonStyle({ opacity: '1.0' });
      setSTextStyle({ ...sTextStyle, opacity: '1.0' });
      setLTextStyle({ ...lTextStyle, transform: 'translateY(2.0em)' });
      setTimeout(
        setSDivStyle({ ...sDivStyle, height: '100%' }),
        0,
      );
      setLTextStyle({
        ...lTextStyle,
        transition: 'opacity 350ms, transform 150ms',
      });
      setTimeout(setLTextStyle({ opacity: '0.0' }), '150ms');

      setTimeout(
        setLDivStyle({ ...lDivStyle, height: '0px' }),
        350,
      );
    }
    if (isFull) {
      setLButtonStyle({ opacity: '1.0' });
      setSButtonStyle({ opacity: '0.0' });
      setTimeout(
        setSTextStyle({ ...sTextStyle, opacity: '0.0' }),
        setSDivStyle({ ...sDivStyle, height: '0px' }),
        500,
      );

      setTimeout(
        setLTextStyle({
          ...lTextStyle,
          display: 'block',
          opacity: '1.0',
          transition: 'opacity 350ms, transform 150ms',
        }),
        500,
      );
      setTimeout(
        setLDivStyle({ ...lDivStyle, height: '100%' }),
        500,
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFull]);


  return (
    <>
      <div className={styles.descriptionDiv}>
        <h1 className={styles.title}>{title}</h1>
        <h2>
          {`It is ${date.toLocaleTimeString()}.`}
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
          <div style={sDivStyle}>
            <span
              style={sTextStyle}
              className={styles.descriptionTextSmall}
            >
              {sizedDescription}
            </span>
            <span
              style={sButtonStyle}
              className={styles.hideButton}
              role="button"
              tabIndex={0}
              onClick={(e) => toggleFull(e)}
              onKeyDown={(e) => logKey(e)}
            >
              Read more about this space ∨
            </span>
          </div>
          <div style={lDivStyle}>
            <span className={styles.descriptionTextLarge} style={lTextStyle}>
              {description}
            </span>
            <span
              style={lButtonStyle}
              className={styles.hideButton}
              role="button"
              tabIndex={0}
              onClick={(e) => toggleFull(e)}
              onKeyDown={(e) => logKey(e)}
            >
              Hide ^
            </span>
          </div>
        </div>
        <div>
          <span
            href={`mailto:${email}`}
            className={styles.contactHostEmail}
          >
            Contact Host
          </span>
        </div>
        <div className={styles.bottomMarginDiv}>
          <div className={styles.bottomMarginBorder} />
        </div>
        <RoomCarousel arrangements={arrangements} />
      </div>
    </>
  );
}
// make get request on ComponentDidMOunt
// render to to page as play

export default Description;
