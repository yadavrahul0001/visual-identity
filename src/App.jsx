import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Navbar from "./components/Navbar";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";

import Page6 from "./components/Page6";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      {/* <Page1 /> */}
      <Page2 />
      <Page3 />
      <Page4 />
      <Page6 />
      
      <Footer />
    </>
  );
};

export default App;
