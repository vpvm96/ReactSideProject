import { configureStore } from '@reduxjs/toolkit'
import products from './store/productsSlice'

export default configureStore({
    reducer: {
        products : products.reducer,
    }
})