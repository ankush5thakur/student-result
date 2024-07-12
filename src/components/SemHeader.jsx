import React from "react";

const SemHeader = ({ name, rollNumber, cgpi, batch, branch }) => {
  console.log("Received data: ", { name, rollNumber, cgpi, batch, branch });

  return (
    <div className="flex flex-col py-5 justify-center items-center gap-3 bg-slate-700 text-white p-4 rounded-t-lg w-full">
      <div className="w-full">
        <h2 className="text-2xl text-center">{name}</h2>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-around w-full gap-2">
        <p className="sm:w-full md:w-auto lg:w-auto">Roll No: {rollNumber}</p>
        <p className="sm:w-full md:w-auto lg:w-auto">Branch: {branch}</p>
        <p className="sm:w-full md:w-auto lg:w-auto">Batch: {batch}</p>
        <p className="sm:w-full md:w-auto lg:w-auto">CGPI: {cgpi}</p>
      </div>
    </div>
  );
};

export default SemHeader;
