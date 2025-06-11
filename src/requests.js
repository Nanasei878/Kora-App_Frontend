import axios from 'axios';

const baseUrl = 'http://localhost:3001';

// Function to fetch a profile
export const getProfile = () =>
  axios.get(`${baseUrl}/profiles`).then((res) => res.data);

// Function to create a new profile
export const createProfile = (newProfile) =>
  axios.post(`${baseUrl}/profiles`, newProfile).then((res) => res.data);

// Function to update an existing profile
export const updateProfile = (updatedProfile) =>
  axios.put(`${baseUrl}/profiles/${updatedProfile.username}`, updatedProfile)
    .then((res) => res.data);

export const getProfilEntreprise = () =>
  axios.get(`${baseUrl}/profilEntreprise`).then((res) => res.data);

// Function to create a new profile
export const createProfilEntreprise = (newProfile) =>
  axios.post(`${baseUrl}/profilEntreprise`, newProfile).then((res) => res.data);

// Function to update an existing profile
export const updateProfilEntreprise = (updatedProfile) =>
  axios.put(`${baseUrl}/profilEntreprise/${updatedProfile.username}`, updatedProfile)
    .then((res) => res.data);

export const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export const register = async credentials => {
const response = await axios.post(baseUrl, credentials)
return response.data
}

export const forgotPassword = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export const resetPassword = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}
 

