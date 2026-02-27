// import React, { useEffect, useState, useRef } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from 'react-router-dom';
// import Footer from './Components/Common/Footer';
// import { ChevronUp } from 'lucide-react';
// import Home from './Pages/Home';
// import AboutUs from './Pages/AboutUs';
// import CompletedPrjcts from './Pages/CompletedPrjcts';
// import UpcomingPrjcts from './Pages/UpcomingPrjcts';
// import OngoingPrjcts from './Pages/OngoingPrjcts';
// import ProjectDetail from './Pages/ProjectDetail';
// import Event from './Pages/Event';
// import Career from './Pages/Career';
// import Blogs from './Pages/Blogs';
// import Contact from './Pages/Contact';
// import AdminDashboard from './AdminDashboard/Pages/AdminDashboard';
// import AdminLogin from './AdminDashboard/Pages/AdminLogin';
// import ProtectedRoute from './AdminDashboard/Components/ProtectedRoute';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import FloatingContact from './Components/Common/FloatingContact';

// function AppWrapper() {
//   const footerRef = useRef(null);
//   const [showButton, setShowButton] = useState(false);
//   const location = useLocation();

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

//   const isAdminPage = location.pathname.startsWith('/admin');

//   return (
//     <>
//       <Routes>
//         {/* Public */}
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/completed-projects" element={<CompletedPrjcts />} />
//         <Route path="/upcoming-projects" element={<UpcomingPrjcts />} />
//         <Route path="/ongoing-projects" element={<OngoingPrjcts />} />
//         <Route path="/project/:projectId" element={<ProjectDetail />} />{' '}
//         <Route path="/events" element={<Event />} />
//         <Route path="/careers" element={<Career />} />
//         <Route path="/blogs" element={<Blogs />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* Admin */}
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route
//           path="/admin/*"
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>

//       {!isAdminPage && <Footer ref={footerRef} />}
//       {!isAdminPage && <FloatingContact />}
//       {!isAdminPage && showButton && (
//         // <button
//         //   onClick={scrollToTop}
//         //   className="fixed bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-50"
//         // >
//         //   <ChevronUp className="w-6 h-6" />
//         // </button>
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 w-12 h-12 rounded-full  bg-white/30 backdrop-blur-md  border border-white/40  shadow-lg flex items-center justify-center  z-50 hover:bg-white/40 transition"
//         >
//           <ChevronUp className="w-6 h-6 text-white" />
//         </button>
//       )}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <ToastContainer />
//       <AppWrapper />
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
import ProjectDetail from './Pages/ProjectDetail';
import Event from './Pages/Event';
import Career from './Pages/Career';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import AdminDashboard from './AdminDashboard/Pages/AdminDashboard';
import AdminLogin from './AdminDashboard/Pages/AdminLogin';
import ProtectedRoute from './AdminDashboard/Components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FloatingContact from './Components/Common/FloatingContact';
import logo from './assets/logo.png';
import ScrollToTop from './Components/Common/ScrollToTop';

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

  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/completed-projects" element={<CompletedPrjcts />} />
        <Route path="/upcoming-projects" element={<UpcomingPrjcts />} />
        <Route path="/ongoing-projects" element={<OngoingPrjcts />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/events" element={<Event />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Routes */}
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

      {!isAdminPage && <Footer ref={footerRef} />}
      {!isAdminPage && <FloatingContact />}

      {!isAdminPage && showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center z-50 hover:bg-white/40 transition"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //  Splash Screen
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <img
          src={logo}
          alt="Upkar Logo"
          className="w-40 sm:w-52 md:w-64 object-contain animate-pulse"
        />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <AppWrapper />
    </Router>
  );
}
