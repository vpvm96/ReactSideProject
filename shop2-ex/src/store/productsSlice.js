import { createSlice } from "@reduxjs/toolkit"

let products = createSlice({
    name : 'products',
    initialState : [
        {id : 0, name : 'White and Black', count : 0},
        {id : 1, name : 'Grey Yordan', count : 0},
    ],
    reducers : {
        upCount(state, action) {
            let productsId = state.findIndex((item) => item.id === action.payload)
            state[productsId].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})

export let { upCount, addItem } = products.actions

export default products