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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo } = mainSlice.actions

export default mainSlice.reducer