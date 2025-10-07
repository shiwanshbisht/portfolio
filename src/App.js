import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Contactform from "./components/Contactform";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Projectcontent from "./components/Projectcontent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/project" element={<Projectcontent />} />
          <Route path="/contact" element={<Contactform />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
