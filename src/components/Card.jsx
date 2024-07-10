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
    <div className=" relative max-w-sm mx-auto my-5 bg-slate-300 shadow-lg rounded-lg ">
      <span className="absolute -top-3 -right-2 text-center rounded bg-red-700 w-8 h-9 flex items-center justify-center text-white">
        {serialNumber}
      </span>
      <div className="px-6 py-4">
        <h2 className=" text-center text-xl font-bold mb-2">{name}</h2>
        <div className="space-y-2">
          <p className="text-gray-700 text-base">Branch: {branch}</p>
          <p className="text-gray-700 text-base">Batch: {batch}</p>
          <p className="text-gray-700 text-base">Roll Number: {rollNumber}</p>
          <p className="text-gray-700 text-base">CGPA: {cgpa}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 px-6 py-0.5">
        <div className=" w-1/3 h-142 py-2 text-black flex flex-col justify-center items-center">
          <span className=" px-2 py-1 rounded font-bold">{yrank}</span>
          <span className="bg-amber-300 my-1 px-2 py-1 text-nowrap rounded">
            Year Rank
          </span>
        </div>
        <div className=" w-1/3 h-142 py-2 text-black flex flex-col justify-center items-center">
          <span className=" px-2 py-1 rounded font-bold">{brank}</span>
          <span className="bg-rose-500 my-1 px-2 py-1 text-nowrap rounded">
            Branch Rank
          </span>
        </div>
        <div className=" w-1/3 h-142 py-2 text-black flex flex-col justify-center items-center">
          <span className=" px-2 py-1 rounded font-bold">{crank}</span>
          <span className="bg-green-400 my-1 px-2 py-1 text-nowrap rounded">
            Class Rank
          </span>
        </div>
      </div>

      <div className="bg-blue-300 my-2 mx-3 py-2 text-center cursor-pointer " onClick={}>
        More Details
      </div>
    </div>
  );
};
export default Card;
