import React from "react";
import { Route, Routes } from "react-router-dom";
import Studentcard from "./components/Studentcard";
import SemesterCard from "./components/SemesterCard";
import StudentDetail from "./components/StudentDetail";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Studentcard />} />
        <Route path="/s/:id" element={<StudentDetail />} />
      </Routes>
    </div>
  );
};

export default App;
