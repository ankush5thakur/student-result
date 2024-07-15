import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  serialNumber,
  name,
  branch,
  batch,
  rollNumber,
  cgpa,
  yrank,
  brank,
  crank,
}) => {
  return (
    <div className="relative max-w-sm mx-auto my-5 outline outline-1 outline-neutral-500 shadow-lg rounded-lg hover:shadow-xl hover:bg-slate-50 transition-all">
      <span className="absolute -top-3 -right-2 text-center rounded outline outline-[1.25px] outline-red-400 w-8 h-9 flex items-center justify-center text-sm sm:text-base lg:text-lg shadow-md shadow-red-200 text-red-500 hover:bg-red-50 hover:text-red-700 bg-white transition-colors cursor-pointer">
        {serialNumber}
      </span>
      <div className="px-4 py-3 sm:px-6 sm:py-4">
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          {name}
        </h2>
        <div className="grid grid-cols-2 gap-y-2">
          <Key label="Branch" />
          <Value value={branch} />
          <Key label="Batch" />
          <Value value={batch} />
          <Key label="Roll Number" />
          <Value value={rollNumber} />
          <Key label="CGPA" />
          <Value value={cgpa} />
        </div>
      </div>
      <div className="flex flex-row gap-2 sm:gap-4 px-4 sm:px-6 py-1">
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {yrank}
          </span>
          <span className="outline outline-1 outline-lime-500 bg-lime-50 hover:bg-lime-100 transition-colors cursor-pointer my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Year Rank
          </span>
        </div>
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {brank}
          </span>
          <span className="outline outline-1 outline-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors cursor-pointer my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Branch Rank
          </span>
        </div>
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {crank}
          </span>
          <span className="outline outline-1 outline-red-500 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Class Rank
          </span>
        </div>
      </div>
      <Link to={"/s/" + rollNumber}>
        <div className="bg-blue-400 text-white rounded my-2 mx-3 py-2 text-center cursor-pointer text-sm sm:text-base lg:text-lg hover:bg-blue-500 transition-colors">
          More Details
        </div>
      </Link>
    </div>
  );
};

function Value({ value }) {
  return (
    <p className="text-gray-700 text-sm sm:text-base lg:text-lg text-end font-medium">
      {value}
    </p>
  );
}
function Key({ label }) {
  return (
    <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium ">
      {label}:
    </p>
  );
}

export default Card;
