import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Common/Layout';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import CompletedPrjcts from './Pages/CompletedPrjcts';
import UpcomingPrjcts from './Pages/UpcomingPrjcts';
import OngoingPrjcts from './Pages/OngoingPrjcts';
import Project from './Pages/Project';
import Event from './Pages/Event';
import Career from './Pages/Career';
import Blogs from './Pages/Blogs';
import AdminDashboard from './AdminDashboard/Pages/AdminDashboard';
import AdminLogin from './AdminDashboard/Pages/AdminLogin';
import ProtectedRoute from './AdminDashboard/Components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route
          path="/*"
          element={
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/completed-projects" element={<CompletedPrjcts />} />
              <Route path="/upcoming-projects" element={<UpcomingPrjcts />} />
              <Route path="/ongoing-projects" element={<OngoingPrjcts />} />
              <Route path="/project" element={<Project />} />
              <Route path="/events" element={<Event />} />
              <Route path="/careers" element={<Career />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
