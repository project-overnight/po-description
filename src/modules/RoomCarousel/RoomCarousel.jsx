/* eslint-disable react/prop-types */
import React from 'react';
import styles from './RoomCarousel.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

/*
[
  {
    "furniture":[{"_id":"5eaf5223fb909c51d771a321","type":"couch","count":1}]
    "_id":"5eaf5223fb909c51d771a320","room":"Common Spaces"
  },
  {
    "furniture":[{"_id":"5eaf5223fb909c51d771a323","type":"King Bed","count":1}],
    "_id":"5eaf5223fb909c51d771a322","room":"bedroom1"
  },
  {
    "furniture":[{"_id":"5eaf5223fb909c51d771a325","type":"Queen bed","count":1}],
    "_id":"5eaf5223fb909c51d771a324","room":"bedroom2"
  },
  {
    "furniture":[{"_id":"5eaf5223fb909c51d771a327","type":"Double bed","count":2}],
    "_id":"5eaf5223fb909c51d771a326","room":"bedroom3"
  }
]
*/


// eslint-disable-next-line react/prop-types
const RoomCarousel = ({ arrangements }) => (
  <>
    <span className={styles.sleepingArrangementsTitle}>Sleeping arrangements</span>
    <div className={styles.roomCarousel}>
      {arrangements.map(({ room, furniture }) => (
        <div className={styles.roomCard} key={room}>
          {room}
          {furniture.map(({ count, type }) => (
            <div key={type}>
              <span className={styles.furnitureName}>{ count }</span>
              <span className={styles.furnitureCount}>{ type }</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </>

);

export default RoomCarousel;
// eslint-disable-next-line no-lone-blocks
{ /* arrangements.map(({ room }) => (
  <div className={styles.roomCard} value={room.room} key={room.room}>
    {room.room}
    {room.furniture.map(({ type, count }) => (
      <>
        {type}</span>
        {count}</span>
      </>
    ))}
  </div>
    )) */ }
