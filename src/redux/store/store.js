
import {configureStore} from '@reduxjs/toolkit';
import apiStateReducer from '../features/apiCall'
export const store=configureStore({
    reducer:{
      api:apiStateReducer,
    }
})