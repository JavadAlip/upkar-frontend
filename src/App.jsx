import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CompletedPrjcts from "./Pages/CompletedPrjcts";
import Project from "./Pages/Project";
import Event from "./Pages/Event";
import Career from "./Pages/Career"

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/completed-projects" element={< CompletedPrjcts />} />
          <Route path="/project" element={< Project />} />
          <Route path="/events" element={< Event />} />
          <Route path="/career" element={< Career />} />
        </Routes>
      </Layout>
    </Router>
  );
};
