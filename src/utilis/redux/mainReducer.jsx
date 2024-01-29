import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    user: {},
    category: '',
    dataList: []
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload
    },
    setDataList: (state, action) => {
      state.dataList = action.payload
    },
    addDataToList: (state, action) => {
      state.dataList.push(action.payload)
    },
    setCategory: (state, action) => {
      state.category = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, setDataList, addDataToList, setCategory } = mainSlice.actions

export default mainSlice.reducer