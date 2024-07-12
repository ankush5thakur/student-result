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
    <div className="relative max-w-sm mx-auto my-5 bg-slate-300 shadow-lg rounded-lg">
      <span className="absolute -top-3 -right-2 text-center rounded bg-red-700 w-8 h-9 flex items-center justify-center text-white text-sm sm:text-base lg:text-lg">
        {serialNumber}
      </span>
      <div className="px-4 py-3 sm:px-6 sm:py-4">
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold mb-2">
          {name}
        </h2>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            Branch: {branch}
          </p>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            Batch: {batch}
          </p>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            Roll Number: {rollNumber}
          </p>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
            CGPA: {cgpa}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 sm:gap-4 px-4 sm:px-6 py-1">
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {yrank}
          </span>
          <span className="bg-amber-300 my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Year Rank
          </span>
        </div>
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {brank}
          </span>
          <span className="bg-rose-500 my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Branch Rank
          </span>
        </div>
        <div className="w-1/3 py-2 text-black flex flex-col justify-center items-center">
          <span className="px-2 py-1 rounded font-bold text-sm sm:text-base lg:text-lg">
            {crank}
          </span>
          <span className="bg-green-400 my-1 px-2 py-1 text-xs sm:text-sm lg:text-base rounded text-nowrap">
            Class Rank
          </span>
        </div>
      </div>
      <Link to={"/s/" + rollNumber}>
        <div className="bg-blue-400 rounded my-2 mx-3 py-2 text-center cursor-pointer text-sm sm:text-base lg:text-lg">
          More Details
        </div>
      </Link>
    </div>
  );
};

export default Card;
