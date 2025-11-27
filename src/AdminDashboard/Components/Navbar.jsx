import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of the admin dashboard!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
        toast.success('Logged out successfully!');
      }
    });
  };

  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <div>
        <button
          onClick={handleLogout}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
