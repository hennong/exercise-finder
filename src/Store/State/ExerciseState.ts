import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Exercise } from '../../Types/Exercise/Exercise'

interface ExerciseState {
  exercises: Exercise[]
  exercise: Exercise | null
}

const initialState: ExerciseState = {
  exercises: [],
  exercise: null
}

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState: initialState,
  reducers: {
    setExercises: (state: ExerciseState, action: PayloadAction<Exercise[]>): void => {
      state.exercises = action.payload
    },
    setExercise: (state: ExerciseState, action: PayloadAction<Exercise | null>): void => {
      state.exercise = action.payload
    }
  }
})

export const exerciseActions = exerciseSlice.actions
export const exerciseReducer = exerciseSlice.reducer
