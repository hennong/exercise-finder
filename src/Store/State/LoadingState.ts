import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface LoadingState {
  loadingView: boolean
  loadingSearch: boolean
}

const initialState: LoadingState = {
  loadingView: false,
  loadingSearch: false
}

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    setLoadingView: (
      state: LoadingState,
      action: PayloadAction<boolean>
    ): void => {
      state.loadingView = action.payload
    },
    setLoadingSearch: (
      state: LoadingState,
      action: PayloadAction<boolean>
    ): void => {
      state.loadingSearch = action.payload
    }
  }
})

export const loadingActions = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer
