import React from "react";
import "./SortToggle.css"

const SortToggle = ({ sortOrder, onSortChange }) => {
  return (
    <div className="sort-toggle">
      <label htmlFor="sort-order">Sort:</label>
      <select id="sort-order" value={sortOrder} onChange={onSortChange} className="drop-content">
        <option value="default">Default</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};

export default SortToggle;
