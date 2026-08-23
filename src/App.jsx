import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import AbstractSubmission from "./pages/AbstractSubmission";


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/abstract-submission"element={<AbstractSubmission />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;