import React, { useState } from "react";
import { AlignJustify } from "lucide-react";

const Functionality = ({ onSearch, onFilterBranch, onFilterBatch, onSort }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSearchChange = (e) => {
    const uppercasedValue = e.target.value.toUpperCase();
    onSearch(uppercasedValue);
  };

  return (
    <div className="w-full md:pt-4 md:max-w-6xl md:mx-auto flex flex-col md:flex-row md:py-2 md:items-center justify-center items-center  py-3 px-1 gap-1 md:gap-2">
      <div className="w-full flex flex-row gap-2 justify-center items-center search-input rounded px-3  md:w-2/6">
        <input
          type="text"
          placeholder="Search by name or roll number"
          onChange={handleSearchChange}
          className="w-5/6 md:w-3/4 md:h-8 md:py-2 py-2 rounded text-center"
        />
        <AlignJustify
          className="w-1/6 aspect-square h-8 rounded cursor-pointer md:hidden"
          onClick={handleToggleFilters}
        />
      </div>

      <div
        className={`flex flex-col w-full px-3 justify-center items-center gap-2 mt-1 md:mt-0 rounded ${
          showFilters ? "block" : "hidden"
        } md:flex md:flex-row md:w-4/6 md:gap-2`}
      >
        <select
          onChange={(e) => onFilterBranch(e.target.value)}
          className="w-full md:w-full text-center text-nowrap rounded px-3 py-1 branch-select"
        >
          <option>All Branches</option>
          <option>Computer Science</option>
          <option>Electronics</option>
          <option>Electrical</option>
          <option>Mechanical</option>
          <option>Chemical</option>
          <option>Civil</option>
          <option>Material</option>
          <option>Engineering Physics</option>
          <option>Architecture</option>
          <option>Computer Science Dual</option>
          <option>Electronics Dual</option>
        </select>
        <select
          onChange={(e) => onFilterBatch(e.target.value)}
          className="w-full md:w-full text-center text-nowrap rounded px-3 py-1 batch-select"
        >
          <option value="">All Batches</option>
          <option value="2027">2027</option>
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add more batches as needed */}
        </select>
        <select
          onChange={(e) => onSort(e.target.value)}
          className="w-full md:w-full text-center text-nowrap rounded px-3 py-1 sort-select"
        >
          <option value="cgpi-asc">Sort by CGPI (Low to High)</option>
          <option value="cgpi-desc">Sort by CGPI (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default Functionality;
