// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('adminToken');
//     if (token) {
//       navigate('/admin', { replace: true });
//     }
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const res = await axios.post(
//         'https://upkar-backend.onrender.com/api/admin/login',
//         { username, password }
//       );

//       localStorage.setItem('adminToken', res.data.token);
//       navigate('/admin', { replace: true });
//     } catch (err) {
//       setError(
//         err.response?.data?.message || 'Login failed. Please try again.'
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
//           Admin Login
//         </h2>

//         {error && (
//           <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Username
//             </label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { adminLoginApi } from '../../Api';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) navigate('/admin');
  }, [navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await adminLoginApi({ email, password });
      localStorage.setItem('adminToken', res.token);

      toast.success('Successfully logged in!'); // ✅ toast success

      setTimeout(() => {
        navigate('/admin'); // navigate after toast
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      toast.error(err.response?.data?.message || 'Login failed'); // optional toast for error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-figtree p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl grid md:grid-cols-2">
        {/* Left */}
        <div className="bg-[#2D5C3A] flex items-center justify-center text-white p-8">
          <div className="text-center">
            <User className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">Upkar Admin</h2>
            <p className="opacity-90 mt-2">Secure Admin Access</p>
          </div>
        </div>

        {/* Right */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={submitHandler}>
            {/* Email */}
            <div className="mb-4">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 py-3 border rounded-lg"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-3 border rounded-lg"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D5C3A] text-white py-3 rounded-lg font-semibold"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p
            onClick={() => navigate('/admin-forgot-password')}
            className="text-sm text-[#2D5C3A] mt-4 text-right cursor-pointer"
          >
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
