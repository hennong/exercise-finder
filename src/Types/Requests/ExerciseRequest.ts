import { Type } from "typescript"
import { Difficulty, Muscle } from "../Exercise/Exercise"

export interface ExerciseRequest {
  url: string
  method: string
  headers?: any
  data?: any
  params?: ExerciseParameters
}

export interface ExerciseParameters {
  name: string
  type?: Type
  muscle?: Muscle
  difficukty?: Difficulty
}
