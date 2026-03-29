import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import Toppers from "./components/Toppers";
import SuccessJourney from "./components/SuccessJourney";
import FAQ from "./components/FAQ";
import Articles from "./components/Articles";
import CustomCursor from "./components/CustomCursor";
import TestSeries from "./components/TestSeries";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import CourseDetail from "./components/CourseDetail";
import TestSeriesDetail from "./components/TestSeriesDetail";
import StudyMaterial from "./components/StudyMaterial";
import CurrentAffairs from "./components/CurrentAffairs";
import FloatingButtons from "./components/FloatingButtons";

const MainPage = () => {
  return (
    <>
      <HomePage />
      <Courses />
      <TestSeries />
      <Toppers />
      <SuccessJourney />
      <Articles />
      <FAQ />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        <Route path="/test-series/:slug" element={<TestSeriesDetail />} />
        <Route path="/study-material" element={<StudyMaterial />} />
        <Route path="/current-affairs" element={<CurrentAffairs />} />
      </Routes>
      <FloatingButtons />
    </Router>
  );
};

export default App;
