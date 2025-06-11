import { createSlice } from '@reduxjs/toolkit'

import { UPDATE_PROFILE } from '../actions/actionTypes';

const initialState = {
    name: '',
    email: '',
    bio: '',
  };

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return state.concat(action.payload)
    case UPDATE_PROFILE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};