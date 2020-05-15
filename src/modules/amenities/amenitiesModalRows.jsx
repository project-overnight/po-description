/* eslint-disable react/prop-types */
import React from 'react';

const CategoryRow = ({ children }) => (
  <tr>
    <th colSpan="2">
      {children}
    </th>
  </tr>
);

const AmenityRow = ({ children, isIncluded }) => {
  const styledAmmenity = isIncluded
    ? (
      <span style={{ textDecoration: 'line-through' }}>
        { children }
      </span>
    )
    : <span>{ children }</span>;

  return (
    <tr>
      <td>{styledAmmenity}</td>
      <td>{/* additional information hook */}</td>
    </tr>
  );
};


export { CategoryRow, AmenityRow };
