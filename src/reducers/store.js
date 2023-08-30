import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import rajaongkirReducer from './rajaongkir'

export default configureStore({
    reducer: {
        auth: authReducer,
        rajaongkir: rajaongkirReducer
    }
})