import React from 'react';
import styles from './Listing.css';
import MarginDiv from './modules/utilities/MarginDiv';
import Description from './modules/description/description';
import Rooms from './modules/RoomCarousel/Rooms';
import Amenities from './modules/amenities/amenities';

const Listing = () => (
  <div className={styles.listingDiv}>
    <div className={styles.listingWidthDiv}>
      <Description />
      <MarginDiv />
      <Amenities />
      <MarginDiv />
      <Rooms />
    </div>
  </div>
);

export default Listing;
