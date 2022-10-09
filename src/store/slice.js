/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const URL = 'https://dummyjson.com/products'

const initState = {
  status: '',
  data: [],
  loading: false,
  error: null
}

export const fetchData = createAsyncThunk('/', async () => {
  try {
    const response = await axios.get(URL)
    console.log(response, "dara APIII")
    return response.data
  } catch (err) {
    return err.message
  }
})

const slice = createSlice({
  name: 'phones',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'loading'
        state.loading = true
      })
      .addCase(fetchData.fulfilled, (state,action)=> {
        console.log(action)
        state.status = 'success'
        state.data = action.payload
        state.loading= false
      })
      .addCase(fetchData.rejected, (state,action)=> {
        state.status = 'failed'
        state.error = action.payload
        state.loading= false
      })
  }
})

export const selectData = (state) => state.phones.data;
export const getDataStatus = (state) => state.phones.status;
export const getDataError = (state) => state.phones.error;

export default slice.reducer