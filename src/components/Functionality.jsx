import React, { useState } from "react";

const Functionality = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name"
        className="mr-4 p-2 border border-gray-300"
      />
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="p-2 border border-gray-300"
      >
        <option value="">Sort By</option>
        <option value="branch">Branch</option>
        <option value="batch">Batch</option>
        <option value="year">Year</option>
        <option value="cgpi">CGPI</option>
      </select>
    </div>
  );
};

export default Functionality;
