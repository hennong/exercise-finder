import { Difficulty } from "../Exercise/Difficulty"
import { ExerciseType } from "../Exercise/ExerciseType"
import { Muscle } from "../Exercise/Muscle"

export interface ExerciseRequest {
  url: string
  method: string
  headers?: any
  data?: any
  params?: ExerciseParameters
}

export interface ExerciseParameters {
  name: string
  type?: ExerciseType | null
  muscle?: Muscle | null
  difficukty?: Difficulty | null
}
