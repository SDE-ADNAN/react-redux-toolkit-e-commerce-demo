const { createSlice } = require('@reduxjs/toolkit');

const STATUSES = Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[],
        status:STATUSES.IDLE,
    },
    reducers: {
        setProducts(state,action){
            //do not do this NEVER
            //const res = await fetch("https://fakestoreapi.com/products");
            state.data = action.payload
        },
        setStatus(state,action){
            //do not do this NEVER
            //const res = await fetch("https://fakestoreapi.com/products");
            state.status = action.payload
        }
        
    },
});

//  actions and reducer are the properties provided by the createSlice function..
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;





/// THUNKS (they return a function and they theselves also are functions <--------speciality of thunks)
// inner function of a thunk must be an asynchronous function.....

export function fetchProducts(){
 return async function fetchProductThunk(dispatch,getState){
     dispatch(setStatus(STATUSES.LOADING))
    try{
        const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      dispatch(setProducts(data))
      dispatch(setStatus(STATUSES.IDLE))

    }catch(err){
            console.log(err)
            dispatch(setStatus(STATUSES.ERROR))
    }
 }
}