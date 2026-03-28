import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import Toppers from "./components/Toppers";
import SuccessJourney from "./components/SuccessJourney";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <HomePage />
      <Courses />
      <Toppers />
      <SuccessJourney />
      <Articles />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
