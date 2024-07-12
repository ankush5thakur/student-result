import React, { useState } from "react";
import "../index.css";
import Card from "./Card";
import Header from "./Header";
import Functionality from "./Functionality";
import testData from "./../../DATA/test2.json";

const Studentcard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [batchFilter, setBatchFilter] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilterBranch = (branch) => setBranchFilter(branch);
  const handleFilterBatch = (batch) => setBatchFilter(batch);
  const handleSort = (sort) => setSortOption(sort);

  const filteredData = testData
    .filter(
      (student) =>
        (student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.roll_number.includes(searchTerm)) &&
        (branchFilter ? student.branch === branchFilter : true) &&
        (batchFilter ? student.batch === batchFilter : true)
    )
    .sort((a, b) => {
      if (sortOption === "cgpi-asc") return a.cgpi - b.cgpi;
      if (sortOption === "cgpi-desc") return b.cgpi - a.cgpi;
      return 0;
    });

  return (
    <div className="bg-black">
      <Functionality
        onSearch={handleSearch}
        onFilterBranch={handleFilterBranch}
        onFilterBatch={handleFilterBatch}
        onSort={handleSort}
      />
      <div className="mx-6 my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredData.map((student, index) => (
          <Card
            key={index}
            serialNumber={index + 1}
            name={student.name}
            branch={student.branch}
            batch={student.batch}
            rollNumber={student.roll_number}
            cgpa={student.cgpi}
            yrank={student.year_rank}
            brank={student.branch_rank}
            crank={student.class_rank}
          />
        ))}
      </div>
    </div>
  );
};

export default Studentcard;
