import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-600 text-white p-4  text-center flex items-center justify-center">
      <img src="./../logo512.png" alt="Logo" className="h-10 w-10 mr-2" />
      <h1 className="text-3xl font-bold">NITH Result</h1>
    </header>
  );
};

export default Header;
