import { createSlice } from '@reduxjs/toolkit'

export const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collection: [],
  },
  reducers: {
    setCollection:(state, action)=>{
        state.collection =action.payload;
    }
  },
})
export const {setCollection} = collectionSlice.actions
export default collectionSlice.reducer