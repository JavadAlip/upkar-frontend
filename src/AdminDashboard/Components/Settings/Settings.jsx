import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { getAdminProfileApi, updateAdminProfileApi } from '../../../Api';
import { toast } from 'react-toastify';
import SettingsImg from '../../../assets/adminProfile.jpg';

const Settings = () => {
  const [admin, setAdmin] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState('');

  /* Fetch profile */
  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found');
      const res = await getAdminProfileApi(token);
      setAdmin(res);
      setName(res.name || '');
      setPhone(res.phone || '');
      setPreview(res.photo || '');
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to load profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  /* Image preview */
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  /* Update profile */
  const handleUpdate = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) throw new Error('Admin token not found');
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);
      if (photo) formData.append('photo', photo);

      const res = await updateAdminProfileApi(formData, token);
      setAdmin(res.admin);
      toast.success('Profile updated successfully');
      setEditMode(false);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };
  if (!admin) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-6xl mx-auto font-figtree">
      <h2 className="text-2xl font-semibold mb-6">Admin Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT IMAGE */}
        <div className="flex items-center justify-center">
          <img
            src={SettingsImg}
            alt="Settings"
            className="max-w-full rounded-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div>
          {/* Profile photo */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img
                src={preview || '/avatar.png'}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border"
              />
              {editMode && (
                <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer">
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handlePhotoChange}
                  />
                </label>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{admin.name}</h3>
              <p className="text-sm text-gray-500">{admin.email}</p>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              disabled={!editMode}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg disabled:bg-gray-100"
            />
          </div>

          {/* Email (fixed) */}
          <div className="mb-4">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={admin.email}
              disabled
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Phone */}
          {/* <div className="mb-6">
            <label className="text-sm font-medium">Phone</label>
            <input
              type="text"
              value={phone}
              disabled={!editMode}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg disabled:bg-gray-100"
            />
          </div> */}
          {/* Phone (fixed – not editable) */}
          <div className="mb-6">
            <label className="text-sm font-medium">Phone</label>
            <input
              type="text"
              value={phone}
              disabled
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Buttons */}
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="bg-[#2D5C3A] text-white px-6 py-2 rounded-lg"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={handleUpdate}
                disabled={loading}
                className="bg-[#2D5C3A] text-white px-6 py-2 rounded-lg"
              >
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
              <button
                onClick={() => {
                  setEditMode(false);
                  fetchProfile();
                }}
                className="border px-6 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
