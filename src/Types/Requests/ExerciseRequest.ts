import { ExerciseOptions } from "../Exercise/Exercise"

export interface ExerciseRequest {
  url: string
  method: string
  headers?: any
  data?: any
  params?: ExerciseParameters
}

export interface ExerciseParameters extends ExerciseOptions {
  name: string
}
