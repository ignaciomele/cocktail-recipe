import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/auth/userSlice'
import cocktailReducer from '../features/cocktails/cocktailSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        cocktails: cocktailReducer
    }
})