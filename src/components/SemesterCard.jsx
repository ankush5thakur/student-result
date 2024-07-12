import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const SemesterCard = ({ semester }) => {
  return (
    <div className="flex flex-col w-full h-auto bg-slate-500 mx-auto mt-4  items-center rounded-lg shadow-lg">
      <div className="relative w-full h-16 flex justify-center items-center text-3xl text-white">
        <span className="bg-red-600 text-white text-sm absolute top-1 left-1 px-2 py-1 rounded">
          Cgpi {semester.cgpi}
        </span>
        SEMESTER {semester.semester_number}
        <span className="bg-red-600 text-white text-sm absolute top-1 right-1 px-2 py-1 rounded">
          Sgpi {semester.sgpi}
        </span>
      </div>

      <div className="bg-slate-300 h-full w-full p-4 flex flex-col rounded-b-lg">
        {semester.subject_results.map((subject, index) => (
          <div
            key={index}
            className="flex items-center border-b flex-1 border-gray-400 py-2 last:border-b-0"
          >
            <div className="text-center w-1/6">{subject.subject_code}</div>
            <div className="w-3/6 px-2">{subject.subject_name}</div>
            <div className="text-center w-1/6">{subject.sub_point}</div>
            <div className="text-center w-1/6">{subject.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SemesterCard;
