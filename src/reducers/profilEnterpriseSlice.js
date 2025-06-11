import { createSlice } from '@reduxjs/toolkit';
import {
  getProfilEntreprise,
  createProfilEntreprise,
  updateProfilEntreprise as apiUpdateProfilEntreprise,
} from '../requests';

const defaultProfile = {
  firstName: '',
  middleName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  role: '',
  aboutMe: '',
  avatar: '',
  profile: {
    experiences: [],
    skills: [],
    certifications: [],
  },
  availability: '',
  address: {
    country: '',
    city: '',
    postalCode: '',
    address: '',
  },
  contact: {
    phoneNumber: '',
    whatsapp: '',
  },
  portfolio: {
    linkedin: '',
    github: '',
    facebook: '',
    youtube: '',
    huggingface: '',
  },
  socialPresence: {
    followers: 0,
    following: 0,
  },
};

const initialState = {
  data: defaultProfile,
  loading: false,
  error: null,
};

const profileEnterpriseSlice = createSlice({
  name: 'profilEnterprise',
  initialState,
  reducers: {
    setEnterpriseProfile(state, action) {
      state.data = { ...state.data, ...action.payload };
      state.loading = false;
      state.error = null;
    },
    resetEnterpriseProfile() {
      return {
        ...initialState,
        data: defaultProfile,
      };
    },
    setEnterpriseProfileLoading(state, action) {
      state.loading = action.payload;
    },
    setEnterpriseProfileError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setEnterpriseProfile,
  resetEnterpriseProfile,
  setEnterpriseProfileLoading,
  setEnterpriseProfileError,
} = profileEnterpriseSlice.actions;

// Fetch profile
export const fetchEnterpriseProfileAsync = () => async (dispatch) => {
  dispatch(setEnterpriseProfileLoading(true));
  try {
    const profileArray = await getProfilEntreprise();
    const profile = Array.isArray(profileArray) ? profileArray[0] : profileArray;
    if (profile) {
      dispatch(setEnterpriseProfile(profile));
    }
  } catch (error) {
    dispatch(setEnterpriseProfileError('Failed to fetch profile'));
    console.error('Fetch error:', error);
  }
};

// Create profile
export const createEnterpriseProfileAsync = (newProfile) => async (dispatch) => {
  dispatch(setEnterpriseProfileLoading(true));
  try {
    const createdProfile = await createProfilEntreprise(newProfile);
    dispatch(setEnterpriseProfile(createdProfile));
  } catch (error) {
    dispatch(setEnterpriseProfileError('Failed to create profile'));
    console.error('Create error:', error);
  }
};

// Update profile
export const updateEnterpriseProfileAsync = (updatedProfile) => async (dispatch) => {
  dispatch(setEnterpriseProfileLoading(true));
  try {
    const updated = await apiUpdateProfilEntreprise(updatedProfile);
    dispatch(setEnterpriseProfile(updated));
  } catch (error) {
    dispatch(setEnterpriseProfileError('Failed to update profile'));
    console.error('Update error:', error);
  }
};

export default profileEnterpriseSlice.reducer;
