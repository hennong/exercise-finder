import { Difficulty } from "./Difficulty"
import { ExerciseType } from "./ExerciseType"
import { Muscle } from "./Muscle"

export interface Exercise {
  name: string
  exerciseType: ExerciseType
  muscle: Muscle
  equipment: string
  difficulty: Difficulty
  instructions: string
}

export interface ExerciseOptions {
  exerciseType?: ExerciseType | null
  muscle?: Muscle | null
  difficulty?: Difficulty | null
}

export type ExerciseFilter = ExerciseType | Muscle | Difficulty
