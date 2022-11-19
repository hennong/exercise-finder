import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  Difficulty,
  ExerciseOptions,
  ExerciseType,
  Muscle
} from "../../Types/Exercise/Exercise"

interface SearchState {
  query: string
  parameter?: ExerciseOptions
}

const initialState: SearchState = {
  query: "",
  parameter: {
    type: undefined,
    muscle: undefined,
    difficulty: undefined
  }
}

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setQuery: (state: SearchState, action: PayloadAction<string>): void => {
      state.query = action.payload
    },
    setType: (
      state: SearchState,
      action: PayloadAction<ExerciseType>
    ): void => {
      state.parameter = { ...state.parameter, type: action.payload }
    },
    setMuscle: (state: SearchState, action: PayloadAction<Muscle>): void => {
      state.parameter = { ...state.parameter, muscle: action.payload }
    },
    setDifficulty: (
      state: SearchState,
      action: PayloadAction<Difficulty>
    ): void => {
      state.parameter = { ...state.parameter, difficulty: action.payload }
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
