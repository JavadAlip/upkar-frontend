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
      confirmButtonColor: '#d33',
      cancelButtonColor: '#28a745',
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
    <div className="w-full h-16 bg-white shadow flex items-center px-6">
      <h1 className="hidden sm:block text-2xl font-bold text-black">
        ADMIN DASHBOARD
      </h1>

      <div className="flex-1 flex justify-end">
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
