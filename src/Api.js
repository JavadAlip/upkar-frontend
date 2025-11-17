import axios from "axios";

// const API_URL = "https://upkar-backend.onrender.com/api";
const API_URL =
  import.meta.env.VITE_API_URL || "https://upkar-backend.onrender.com/api";

//banners
export const getBanners = async () => {
  const res = await axios.get(`${API_URL}/homepage/get-all-banners`);
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
  const res = await axios.put(
    `${API_URL}/homepage/edit-banner/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

//VisionMission
export const getVisionMission = async () => {
  const res = await axios.get(`${API_URL}/homepage/get-all-visions`);
  return res.data;
};

export const createOrUpdateVisionMission = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-vision`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
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
export const getProjects = async () => {
  const res = await axios.get(`${API_URL}/homepage/get-all-projects`);
  return res.data;
};

export const createProject = async (formData, token) => {
  const res = await axios.post(`${API_URL}/homepage/create-project`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const updateProject = async (id, formData, token) => {
  const res = await axios.put(
    `${API_URL}/homepage/update-project/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const deleteProject = async (id, token) => {
  const res = await axios.delete(`${API_URL}/homepage/delete-project/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

//certification
export const getCertifications = async () => {
  const res = await axios.get(`${API_URL}/homepage/get-all-certificates`);
  return res.data;
};

export const createCertification = async (formData, token) => {
  const res = await axios.post(
    `${API_URL}/homepage/create-certificate`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const deleteCertification = async (id, token) => {
  const res = await axios.delete(
    `${API_URL}/homepage/delete-certificate/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

export const updateCertification = async (id, formData, token) => {
  const res = await axios.put(
    `${API_URL}/homepage/update-certificate/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

// Q&A
export const getQuestionsAPI = async () => {
  const res = await axios.get(`${API_URL}/homepage/get-all-qns`);
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
  const { data } = await axios.post(
    `${API_URL}/homepage/create-award`,
    formData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const updateAwardAPI = async (id, formData, token) => {
  const { data } = await axios.put(
    `${API_URL}/homepage/update/${id}`,
    formData,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const deleteAwardAPI = async (id, token) => {
  const { data } = await axios.delete(`${API_URL}/homepage/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

//project main
export const getAllProjectMain = async () => {
  const { data } = await axios.get(
    `${API_URL}/projectpage/get-all-projectmain`
  );
  return data;
};

export const createProjectMain = async (formData, token) => {
  const { data } = await axios.post(
    `${API_URL}/projectpage/create-projectmain`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const updateProjectMain = async (id, formData, token) => {
  const { data } = await axios.put(
    `${API_URL}/projectpage/edit-projectmain/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const deleteProjectMain = async (id, token) => {
  const { data } = await axios.delete(
    `${API_URL}/projectpage/delete-projectmain/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

//Features
export const createFeature = async (formData, token) => {
  const { data } = await axios.post(
    `${API_URL}/projectpage/create-feature`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const getAllFeatures = async () => {
  const { data } = await axios.get(`${API_URL}/projectpage/get-all-features`);
  return data;
};

export const updateFeature = async (id, formData, token) => {
  const { data } = await axios.put(
    `${API_URL}/projectpage/edit-feature/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const deleteFeature = async (id, token) => {
  const { data } = await axios.delete(
    `${API_URL}/projectpage/delete-feature/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};


//plot layout
export const createPlotLayout = async (formData, token) => {
  try {
    const res = await axios.post(`${API_URL}/projectpage/create-plot-layout`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "Error creating plot layout:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const updatePlotLayout = async (id, formData, token) => {
  try {
    const res = await axios.put(`${API_URL}/projectpage/update-plot-layout/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "Error updating plot layout:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const getPlotLayout = async () => {
  try {
    const res = await axios.get(`${API_URL}/projectpage/get-plot-layout`);
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching plot layout:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const deletePlotLayout = async (id, token) => {
  try {
    const res = await axios.delete(`${API_URL}/projectpage/delete-plot-layout/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error(
      "Error deleting plot layout:",
      error.response?.data || error.message
    );
    throw error;
  }
};


// Amenities
export const getAmenitiesAPI = async () => {
  const { data } = await axios.get(`${API_URL}/projectpage/get-amenity`);
  return data;
};

export const createAmenityAPI = async (formData, token) => {
  const { data } = await axios.post(
    `${API_URL}/projectpage/create-amenity`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const updateAmenityAPI = async (id, formData, token) => {
  const { data } = await axios.put(
    `${API_URL}/projectpage/update-amenity/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return data;
};

export const deleteAmenityAPI = async (id, token) => {
  const { data } = await axios.delete(
    `${API_URL}/projectpage/delete-amenity/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

// about project
export const getAboutProjectsAPI = async () => {
  const { data } = await axios.get(`${API_URL}/projectpage/get-about-project`);
  return data;
};

export const createAboutProjectAPI = async (data, token) => {
  try {
    const res = await axios.post(
      `${API_URL}/projectpage/create-about-project`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateAboutProjectAPI = async (id, data, token) => {
  const res = await axios.put(
    `${API_URL}/projectpage/update-about-project/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export const deleteAboutProjectAPI = async (id, token) => {
  const { data } = await axios.delete(
    `${API_URL}/projectpage/delete-about-project/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

//project images
export const getProjectImagesAPI = async () => {
  const res = await axios.get(`${API_URL}/projectpage/get-all-project-images`);
  return res.data;
};

export const createProjectImagesAPI = async (formData, token) => {
  const res = await axios.post(
    `${API_URL}/projectpage/create-project-images`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const updateProjectImagesAPI = async (id, formData, token) => {
  const res = await axios.put(
    `${API_URL}/projectpage/edit-project-images/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const deleteProjectImagesAPI = async (id, token) => {
  const res = await axios.delete(
    `${API_URL}/projectpage/delete-project-images/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

// AboutMain
export const createAboutMain = async (formData, token) => {
  const res = await axios.post(
    `${API_URL}/aboutuspage/create-aboutmain`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const getAllAboutMain = async () => {
  const res = await axios.get(`${API_URL}/aboutuspage/get-all-aboutmain`);
  return res.data;
};

export const updateAboutMain = async (id, formData, token) => {
  const res = await axios.put(
    `${API_URL}/aboutuspage/update-aboutmain/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return res.data;
};

export const deleteAboutMain = async (id, token) => {
  const res = await axios.delete(
    `${API_URL}/aboutuspage/delete-aboutmain/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

//Quotes
export const getAllQuotes = async () => {
  const res = await axios.get(`${API_URL}/aboutuspage/get-all-quotes`);
  return res.data;
};

export const createQuote = async (data, token) => {
  if (!token) throw new Error("No token provided");
  const res = await axios.post(`${API_URL}/aboutuspage/create-quote`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateQuote = async (id, data, token) => {
  const res = await axios.put(
    `${API_URL}/aboutuspage/update-quote/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return res.data;
};

export const deleteQuote = async (id, token) => {
  const res = await axios.delete(`${API_URL}/aboutuspage/delete-quote/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

//our team

export const createTeamMember = async (formData, token) => {
  const res = await axios.post(`${API_URL}/aboutuspage/create-team`, formData, {
    headers: {
      Authorization: `Bearer ${token}`, 
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAllTeamMembers = async () => {
  const res = await axios.get(`${API_URL}/aboutuspage/get-all-team`);
  return res.data;
};

export const updateTeamMember = async (id, formData, token) => {
  const res = await axios.put(
    `${API_URL}/aboutuspage/update-team/${id}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

export const deleteTeamMember = async (id, token) => {
  const res = await axios.delete(`${API_URL}/aboutuspage/delete-team/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
