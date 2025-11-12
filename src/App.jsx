import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Common/Layout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CompletedPrjcts from "./Pages/CompletedPrjcts";
import Project from "./Pages/Project";
import Event from "./Pages/Event";
import Career from "./Pages/Career"
import AdminDashboard from "./AdminDashboard/Pages/AdminDashboard";

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
          <Route path="/admin-dashboard" element={< AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Components/Common/Layout";
// import Home from "./Pages/Home";
// import AboutUs from "./Pages/AboutUs";
// import CompletedPrjcts from "./Pages/CompletedPrjcts";
// import Project from "./Pages/Project";
// import Event from "./Pages/Event";
// import Career from "./Pages/Career";
// import AdminDashboard from "./AdminDashboard/Pages/AdminDashboard";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes wrapped in Layout */}
//         <Route element={<Layout />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/completed-projects" element={<CompletedPrjcts />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/events" element={<Event />} />
//           <Route path="/career" element={<Career />} />
//         </Route>

//         {/* Admin route without Layout */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       </Routes>
//     </Router>
//   );
// };
