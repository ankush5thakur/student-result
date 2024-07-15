const SemesterCard = ({ semester }) => {
  return (
    <figure className="group flex flex-col w-full h-auto mx-auto mt-4 outline outline-1 outline-slate-500 items-center rounded-lg shadow-lg overflow-hidden shdaow-sm hover:shadow-md hover:shadow-blue-400 cursor-default">
      <div className="relative w-full h-16 flex justify-around items-center text-3xl text-white py-8 mx-4 bg-slate-100 group-hover:bg-blue-200 rounded-t-lg transition-all">
        <span className="bg-red-600 text-white text-sm px-2 py-1 rounded">
          CGPI {semester.cgpi}
        </span>
        <span className="text-gray-700 font-medium text-2xl">
          SEMESTER {semester.semester_number}
        </span>
        <span className="bg-red-600 text-white text-sm px-2 py-1 rounded">
          SGPI {semester.sgpi}
        </span>
      </div>

      <div className=" h-full w-full p-4 flex flex-col rounded-b-lg group-hover:bg-blue-50 transition-all">
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
    </figure>
  );
};

export default SemesterCard;
