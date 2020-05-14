/* eslint-disable react/prop-types */
import React from 'react';

const CategoryRow = ({ category }) => (
  <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
);

const AmenityRow = ({ amenity, isIncluded }) => {
  const styledAmmenity = isIncluded || undefined
    ? amenity
    : (
      <span style={{ textDecoration: 'line-through' }}>
        {amenity}
      </span>
    );

  return (
    <tr>
      <td>{styledAmmenity}</td>
      <td>{/* additional information hook */}</td>
    </tr>
  );
};


export default { CategoryRow, AmenityRow };
