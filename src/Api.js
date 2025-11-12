import axios from "axios";

const API_URL = "http://localhost:5000/api";

//banners
export const getBanners = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-banners`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createBanner = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-banner`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const deleteBanner = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-banner/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const editBanner = async (id, formData, token) => {
  const res = await axios.put(`${API_URL}/homepage/edit-banner/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};


//VisionMission
export const getVisionMission = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-visions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createOrUpdateVisionMission = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-vision`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteVisionMission = async (token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-vision`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
