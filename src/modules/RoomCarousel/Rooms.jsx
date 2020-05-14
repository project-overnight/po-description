/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import React from 'react';
import useRoomCarousel from './useRoomCarousel';
import MarginDiv from '../utilities/MarginDiv';
import useListing from '../utilities/useListing';
import styles from './RoomCarousel.css';


const Rooms = () => {
  const { arrangements } = useListing();
  const { length } = arrangements;
  const [active, setActive, reactStyle] = useRoomCarousel(length);
  return (
    <div className={styles.arrangementsModule}>
      <div className={styles.arrangementsModuleDiv}>
        <div className={styles.arrangementsTitle}>
          Sleeping arrangements
        </div>
        <div className={styles.carouselDeck}>
          <button
            type="button"
            onClick={() => setActive('prev')}
            className={(active === 0 ? styles.hideButton : styles.buttonPrev)}
          >
            ⇦
          </button>
          <div className={styles.carouselMaskDivStyle}>
            <div className={styles.roomCarousel} style={reactStyle}>
              {arrangements.map(({ room, furniture }) => (
                <div className={styles.roomCard} key={room}>
                  <p className={styles.iconStyle}>bed</p>
                  <span className={styles.roomName}>{room}</span>
                  {furniture.map(({ count, type }) => (
                    <div key={type}>
                      <span className={styles.furnitureName}>{`${count} ${type}`}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setActive('next')}
            className={(active + 3 === length ? styles.hideButton : styles.buttonNext)}
          >
            ⇨
          </button>
        </div>
      </div>
      <MarginDiv />
    </div>
  );
};
export default Rooms;
