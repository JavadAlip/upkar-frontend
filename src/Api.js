import axios from "axios";

const API_URL = "http://localhost:5000/api"; 

//  Get all banners
export const getBanners = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-banners`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

//  Create banner
export const createBanner = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-banner`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// Delete banner
export const deleteBanner = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-banner/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Edit/update banner
export const editBanner = async (id, formData, token) => {
  const res = await axios.put(`${API_URL}/homepage/edit-banner/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
