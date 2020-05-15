import React from 'react';
import { CategoryRow, AmenityRow } from './AmenitiesModalRows';
import useListing from '../utilities/useListing';
import MarginDiv from '../utilities/MarginDiv';

const SortedAmenitiesList = () => {
  const { amenitiesExtras } = useListing();
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
          <MarginDiv />
          {sortedObject[CategoryName].map((amenity) => (
            <>
              <AmenityRow key={amenity}>{amenity}</AmenityRow>
              <MarginDiv />
            </>
          ))}
        </>
      );
    }
  };

  return (
    <>
      {{}.hasOwnProperty.call(sortedObject, 'Basics') && (
      <>
        <CategoryRow>Basic</CategoryRow>
        <MarginDiv />
        {sortedObject.Basics.map((basicAmenity) => (
          <>
            <AmenityRow key={basicAmenity}>{basicAmenity}</AmenityRow>
            <MarginDiv />
          </>
        ))}
      </>
      )}
      {addCategoryAndAmenities('Facilities')}
      {addCategoryAndAmenities('Dining')}
      {addCategoryAndAmenities('Guest access')}
      {addCategoryAndAmenities('Logistics')}
      {addCategoryAndAmenities('Bed and bath')}
    </>
  );
};

export default SortedAmenitiesList;
