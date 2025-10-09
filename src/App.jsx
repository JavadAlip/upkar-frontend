import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CompletedPrjcts from "./Pages/CompletedPrjcts";
import Project from "./Pages/Project";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={< AboutUs />} />
        <Route path="/completed-projects" element={< CompletedPrjcts />} />
        <Route path="/project" element={< Project />} />
      </Routes>
    </Router>
  );
}
