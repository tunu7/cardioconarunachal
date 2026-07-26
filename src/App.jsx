import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Programme from "./pages/Programme";
import Speakers from "./pages/Speakers";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;