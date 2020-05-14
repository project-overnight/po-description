/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './Description.css';
// import DescriptionClock from './DescriptionClock';
import useListing from '../utilities/useListing';

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


const Description = () => {
  const [isFull, setIsFull] = useState(false);
  const [lTextStyle, setLTextStyle] = useState(largeTextStyle);
  const [sTextStyle, setSTextStyle] = useState(smallTextStyle);
  const [lDivStyle, setLDivStyle] = useState(largeDivStyle);
  const [sDivStyle, setSDivStyle] = useState(smallDivStyle);
  const [sButtonStyle, setSButtonStyle] = useState();
  const [lButtonStyle, setLButtonStyle] = useState();
  const [date, setDate] = useState(new Date());
  // const [title, setTitle] = useState('');

  const {
    title, maxGuests, bedrooms, beds, baths,
    host, email, description, sizedDescription,
  } = useListing();


  const toggleFull = (e) => {
    e.preventDefault();
    setIsFull(!isFull);
  };

  // toggles with return
  function logKey(e) {
    if (e.keyCode === 13) {
      toggleFull(e);
    }
  }

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
      setTimeout(setLTextStyle({ opacity: '0.0', display: 'none' }), '150ms');

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
    </>
  );
};

export default Description;
