import axios from "axios";


// const API_URL = "https://upkar-backend.onrender.com/api";
const API_URL = import.meta.env.VITE_API_URL || "https://upkar-backend.onrender.com/api";

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



// Projects
export const getProjects = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-projects`, { headers: { Authorization: `Bearer ${token}` } });
  return res.data;
};

export const createProject = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-project`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const updateProject = async (id, formData, token) => {
  const res = await axios.put(`${API_URL}/homepage/update-project/${id}`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteProject = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-project/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};


//certification
export const getCertifications = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-certificates`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createCertification = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-certificate`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const deleteCertification = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-certificate/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

// Placeholder for future update API
export const updateCertification = async (id, formData, token) => {
  const res = await axios.put(`${API_URL}/homepage/update-certificate/${id}`, formData, {
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
  });
  return res.data;
};


// Q&A 
export const getQuestionsAPI = async (token) => {
  const res = await axios.get(`${API_URL}/homepage/get-all-qns`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createQuestionAPI = async (data, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-qn`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateQuestionAPI = async (id, data, token) => {
  const res = await axios.put(`${API_URL}/homepage/update-qn/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deleteQuestionAPI = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-qn/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};



// Awards
export const getAwardsAPI = async () => {
  const { data } = await axios.get(`${API_URL}/homepage/get-all`);
  return data;
};

export const createAwardAPI = async (formData, token) => {
  const { data } = await axios.post(`${API_URL}/homepage/create-award`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const updateAwardAPI = async (id, formData, token) => {
  const { data } = await axios.put(`${API_URL}/homepage/update/${id}`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const deleteAwardAPI = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/homepage/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};