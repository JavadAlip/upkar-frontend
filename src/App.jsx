// import React, { useEffect, useState, useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './Components/Common/Footer';
// import { ChevronUp } from 'lucide-react';
// import Home from './Pages/Home';
// import AboutUs from './Pages/AboutUs';
// import CompletedPrjcts from './Pages/CompletedPrjcts';
// import UpcomingPrjcts from './Pages/UpcomingPrjcts';
// import OngoingPrjcts from './Pages/OngoingPrjcts';
// import Project from './Pages/Project';
// import Event from './Pages/Event';
// import Career from './Pages/Career';
// import Blogs from './Pages/Blogs';
// import AdminDashboard from './AdminDashboard/Pages/AdminDashboard';
// import AdminLogin from './AdminDashboard/Pages/AdminLogin';
// import ProtectedRoute from './AdminDashboard/Components/ProtectedRoute';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function App() {
//   const footerRef = useRef(null);
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!footerRef.current) return;

//       const footerTop = footerRef.current.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       setShowButton(footerTop <= windowHeight);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <Router>
//       <ToastContainer />

//       {/* Public */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/completed-projects" element={<CompletedPrjcts />} />
//         <Route path="/upcoming-projects" element={<UpcomingPrjcts />} />
//         <Route path="/ongoing-projects" element={<OngoingPrjcts />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/events" element={<Event />} />
//         <Route path="/careers" element={<Career />} />
//         <Route path="/blogs" element={<Blogs />} />

//         {/* Admin */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route
//           path="/admin-dashboard"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       <Footer ref={footerRef} />

//       {showButton && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
//         >
//           <ChevronUp className="w-6 h-6" />
//         </button>
//       )}
//     </Router>
//   );
// }

import React, { useEffect, useState, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Footer from './Components/Common/Footer';
import { ChevronUp } from 'lucide-react';
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

function AppWrapper() {
  const footerRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setShowButton(footerTop <= windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Hide Footer and scroll button on admin pages
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/completed-projects" element={<CompletedPrjcts />} />
        <Route path="/upcoming-projects" element={<UpcomingPrjcts />} />
        <Route path="/ongoing-projects" element={<OngoingPrjcts />} />
        <Route path="/project" element={<Project />} />
        <Route path="/events" element={<Event />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Render Footer only on public pages */}
      {!isAdminPage && <Footer ref={footerRef} />}

      {/* Scroll to top button only on public pages */}
      {!isAdminPage && showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <AppWrapper />
    </Router>
  );
}
