import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Packages from "./components/Packages";
import Details from "./components/Details";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
    <div className=" w-full overflow-hidden">

      <Navbar />
      <About />
      <Packages />
      <Details/>
      <Testimonials/>
    </div>
    </>
  );
}

export default App;
