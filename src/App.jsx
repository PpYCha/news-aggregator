import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

function App() {
  useEffect(() => {}, []);

  return (
    <div>
      <Nav />
      <div className="grid grid-cols-12 gap-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
