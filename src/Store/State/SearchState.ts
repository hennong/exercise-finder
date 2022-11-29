import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Difficulty } from "../../Types/Exercise/Difficulty"
import { ExerciseOptions } from "../../Types/Exercise/Exercise"
import { ExerciseType } from "../../Types/Exercise/ExerciseType"
import { Muscle } from "../../Types/Exercise/Muscle"

interface SearchState {
  query: string
  parameter: ExerciseOptions
  showFilters: boolean
}

const initialState: SearchState = {
  query: "",
  parameter: {
    exerciseType: null,
    muscle: null,
    difficulty: null
  },
  showFilters: false
}

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setQuery: (state: SearchState, action: PayloadAction<string>): void => {
      state.query = action.payload
    },
    setExerciseType: (
      state: SearchState,
      action: PayloadAction<ExerciseType>
    ): void => {
      state.parameter = { ...state.parameter, exerciseType: action.payload }
    },
    setMuscle: (state: SearchState, action: PayloadAction<Muscle>): void => {
      state.parameter = { ...state.parameter, muscle: action.payload }
    },
    setDifficulty: (
      state: SearchState,
      action: PayloadAction<Difficulty>
    ): void => {
      state.parameter = { ...state.parameter, difficulty: action.payload }
    },
    setShowFilters: (
      state: SearchState,
      action: PayloadAction<boolean>
    ): void => {
      state.showFilters = action.payload
    }
  }
})

export const searchActions = searchSlice.actions
export const searchReducer = searchSlice.reducer
