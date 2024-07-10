import React, { useState } from "react";
import "./index.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Functionality from "./components/Functionality";
import testData from "./../DATA/test2.json";

const App = () => {
  const [filteredData, setFilteredData] = useState(testData);

  const handleSearch = (searchTerm) => {
    const filtered = testData.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (sortOption) => {
    let sortedData = [...filteredData];
    switch (sortOption) {
      case "branch":
        sortedData.sort((a, b) => a.branch.localeCompare(b.branch));
        break;
      case "batch":
        sortedData.sort((a, b) => a.batch.localeCompare(b.batch));
        break;
      case "year":
        sortedData.sort((a, b) => a.year_rank - b.year_rank);
        break;
      case "cgpi":
        sortedData.sort((a, b) => b.cgpi - a.cgpi);
        break;
      default:
        sortedData = testData;
        break;
    }
    setFilteredData(sortedData);
  };

  return (
    <div className="bg-blue-400">
      <Header />
      <Functionality onSearch={handleSearch} onSort={handleSort} />
      <div className="mx-6 my-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

export default App;
