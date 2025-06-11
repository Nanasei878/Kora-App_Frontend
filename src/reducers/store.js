
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import profileEnterpriseReducer from './profilEnterpriseSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    profilEnterprise: profileEnterpriseReducer
  },
});

export default store;
