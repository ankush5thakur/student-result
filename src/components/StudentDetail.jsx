import React, { useEffect, useState } from "react";
import SemesterCard from "./SemesterCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import SemHeader from "./SemHeader";
import Loader from "./../components/Loader";
import Error from "./../components/Error";

const StudentDetail = () => {
  const [semester, setSemester] = useState([]);
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [cgpi, setCgpi] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://result-backenddata.onrender.com/user",
          {
            headers: { Roll_Number: id },
          }
        );

        if (res.data) {
          setName(res.data.name);
          setRollNumber(res.data.roll_number);
          setCgpi(res.data.cgpi);
          setBatch(res.data.batch);
          setBranch(res.data.branch);
          setSemester(res.data.semester_results || []);
        }
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div className="p-4">
      <div className="mb-8">
        <SemHeader
          name={name}
          rollNumber={rollNumber}
          cgpi={cgpi}
          batch={batch}
          branch={branch}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {semester.map((sem, index) => (
            <SemesterCard key={index} semester={sem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
