import React from 'react';
import { CategoryRow, AmenityRow } from './AmenitiesModalRows';
import useListing from '../utilities/useListing';
import useNotIncluded from '../utilities/useNotIncluded';
import MarginDiv from '../utilities/MarginDiv';
import styles from './AmenitiesModal.css';

const SortedAmenitiesList = () => {
  const { amenitiesExtras } = useListing();
  const { notIncluded } = useNotIncluded();
  const amenitiesExtrasArray = Object.values(amenitiesExtras);
  const sortedObject = {};
  amenitiesExtrasArray.forEach((extra) => {
    if (extra === null) return;
    if (!{}.hasOwnProperty.call(sortedObject, extra.Category)) {
      sortedObject[extra.Category] = [];
    }
    sortedObject[extra.Category].push(extra.Amenity);
    console.log(extra);
  });

  // eslint-disable-next-line consistent-return
  const addCategoryAndAmenities = (CategoryName) => {
    if ({}.hasOwnProperty.call(sortedObject, CategoryName)) {
      return (
        <>
          <CategoryRow>{CategoryName}</CategoryRow>
          <div className={styles.amenitiesRowDiv}>
            {sortedObject[CategoryName].map((amenity, i) => (
              <>
                <AmenityRow key={amenity}>{amenity}</AmenityRow>
                { i < sortedObject[CategoryName].length - 1 && <MarginDiv /> }
              </>
            ))}
          </div>
        </>
      );
    }
  };
  const addNotIncludedAmenities = () => {
    if (notIncluded.length > 0) {
      return (
        <>
          <CategoryRow>Not included</CategoryRow>
          <div className={styles.amenitiesRowDiv}>
            {notIncluded.map((amenity, i) => (
              <>
                <AmenityRow
                  key={amenity}
                  isNotIncluded
                >
                  {amenity}
                </AmenityRow>
                { i < notIncluded.length - 1 && <MarginDiv /> }
              </>
            ))}
          </div>
        </>
      );
    } return <></>;
  };

  return (
    <>
      {addCategoryAndAmenities('Basics')}
      {addCategoryAndAmenities('Family features')}
      {addCategoryAndAmenities('Facilities')}
      {addCategoryAndAmenities('Dining')}
      {addCategoryAndAmenities('Guest access')}
      {addCategoryAndAmenities('Logistics')}
      {addCategoryAndAmenities('Bed and Bath')}
      {addCategoryAndAmenities('Safety Features')}
      {addNotIncludedAmenities()}
    </>
  );
};

export default SortedAmenitiesList;
