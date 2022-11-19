import { Difficulty, ExerciseType, Muscle } from "../Exercise/Exercise"

export interface ExerciseRequest {
  url: string
  method: string
  headers?: any
  data?: any
  params?: ExerciseParameters
}

export interface ExerciseParameters {
  name: string
  type?: ExerciseType
  muscle?: Muscle
  difficukty?: Difficulty
}
