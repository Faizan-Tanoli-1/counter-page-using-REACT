import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterApp/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})