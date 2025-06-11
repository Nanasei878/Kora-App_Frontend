import { createSlice } from '@reduxjs/toolkit';
import { getProfile, createProfile, updateProfile as apiUpdateProfile } from '../requests'; // axios functions



const initialState = {
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
      certifications: []
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
      whatsapp: ''
    },
    portfolio: {
      linkedin: '',
      github: '',
      facebook: '',
      youtube: '',
      huggingface: ''
    },
    socialPresence: {
      followers: 0,
      following: 0
    }
  }
  

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile(state, action) {
      return {
        ...state,
        ...action.payload, // Set the profile when it's fetched or updated
      };
    },
    resetProfile(state) {
      return initialState; // Reset profile to initial state
    },
  },
});

export const { setProfile, resetProfile } = profileSlice.actions;

// Thunk to fetch profile data
/*export const fetchProfileAsync = () => {
  return async (dispatch) => {
    try {
      const profile = await getProfile();
      console.log('Fetched Profile:', profile);
      dispatch(setProfile(profile)); // Dispatch setProfile action to set the state
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };
};*/


// Thunk to fetch profile data
// Thunk to fetch profile data
export const fetchProfileAsync = () => {
  return async (dispatch) => {
    try {
      const profileArray = await getProfile();
      
      if (Array.isArray(profileArray) && profileArray.length > 0) {
        // Assuming there's only one profile, take the first element
        const profile = profileArray[0];
        dispatch(setProfile(profile)); // Dispatch setProfile action to set the state
      }
    } catch (error) {
      console.error('Failed to fetch profile', error);
    }
  };
};


// Thunk to create a new profile
export const createProfileAsync = (newProfile) => {
  return async (dispatch) => {
    try {
      const createdProfile = await createProfile(newProfile);
      dispatch(setProfile(createdProfile)); // Update the state with the created profile
    } catch (error) {
      console.error('Failed to create profile', error);
    }
  };
};

// Thunk to update an existing profile
export const updateProfileAsync = (updatedProfile) => {
  return async (dispatch) => {
    try {
      const profile = await apiUpdateProfile(updatedProfile);
      dispatch(setProfile(profile)); // Update the state with the updated profile
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };
};

export default profileSlice.reducer;
