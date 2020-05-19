/* eslint-disable react/prop-types */
import React from 'react';
import styles from './AmenitiesModal.css';

const CategoryRow = ({ children }) => (
  <div className={styles.categoryRow}>
    {children}
  </div>
);

const AmenityRow = ({ children, isNotIncluded }) => {
  const styledAmmenity = isNotIncluded
    ? (
      <span className={styles.amenitySpanStyle} style={{ textDecoration: 'line-through' }}>
        { children }
      </span>
    )
    : <span className={styles.amenitySpanStyle}>{ children }</span>;

  return (
    <div>
      <div>{styledAmmenity}</div>
      <div>{/* additional information hook */}</div>
    </div>
  );
};


export { CategoryRow, AmenityRow };
