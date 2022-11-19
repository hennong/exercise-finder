import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Exercise } from "../../Types/Exercise/Exercise"

interface ExerciseState {
  exercises: Exercise[]
}

const initialState: ExerciseState = {
  exercises: []
}

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: initialState,
  reducers: {
    setExercises: (
      state: ExerciseState,
      action: PayloadAction<Exercise[]>
    ): void => {
      state.exercises = action.payload
    }
  }
})

export const exerciseActions = exerciseSlice.actions
export const exerciseReducer = exerciseSlice.reducer
