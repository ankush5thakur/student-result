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
  const [page, setpage] = useState({
    limit: 10,
    page: 1,
  });
  const skip = (page.page - 1) * page.limit;

  const handleSearch = (term) => setSearchTerm(term);
  const handleFilterBranch = (branch) => setBranchFilter(branch);
  const handleFilterBatch = (batch) => setBatchFilter(batch);
  const handleSort = (sort) => setSortOption(sort);

  let filteredData = testData
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
  if (!page.limit) setpage({ ...page, limit: -1 });
  filteredData = filteredData.slice(skip, skip + page.limit);

  return (
    <div className="flex flex-col items-center">
      <Functionality
        onSearch={handleSearch}
        onFilterBranch={handleFilterBranch}
        onFilterBatch={handleFilterBatch}
        onSort={handleSort}
      />
      <div className="mx-6 my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 self-stretch">
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
      <div className="flex flex-col space-x-2 mb-8 gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setpage({ ...page, page: page.page - 1 })}
            disabled={page.page === 1}
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            Previous
          </button>
          <span>
            Page {page.page} of {Math.ceil(testData.length / page.limit)}
          </span>
          <button
            onClick={() => setpage({ ...page, page: page.page + 1 })}
            disabled={page.page * page.limit >= testData.length}
            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span>Page:</span>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-1"
            value={page.page}
            onChange={(e) => setpage({ ...page, page: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>Limit:</span>
          <input
            type="number"
            className="border border-gray-300 rounded-lg px-2 py-1"
            value={page.limit}
            onChange={(e) => setpage({ ...page, limit: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default Studentcard;
