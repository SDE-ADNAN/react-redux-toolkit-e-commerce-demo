import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            // Redux
            // here we are not mutating the original state array
            // return [...state,action.payload]

            //but here we are directly mutating the state array which is allowed in redux toolkit..

            state.push(action.payload);
        },
        remove(state,action){
            state = state.filter((item)=>item.id !== action.payload)
        }
    }
})


export const {add ,remove}=createSlice.actions;
export default cartSlice.reducers;
