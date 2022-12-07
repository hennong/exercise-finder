import { Difficulty } from '../Types/Exercise/Difficulty'
import { ExerciseFilter } from '../Types/Exercise/Exercise'
import { ExerciseType } from '../Types/Exercise/ExerciseType'
import { Muscle } from '../Types/Exercise/Muscle'

export const getExerciseTypeName = (name: ExerciseType) => {
  switch (name) {
    case ExerciseType.Cardio:
      return 'Cardio'
    case ExerciseType.OlympicWeightlifting:
      return 'Olympic Weightlifting'
    case ExerciseType.Plyometrics:
      return 'Plyometrics'
    case ExerciseType.Powerlifting:
      return 'Powerlifting'
    case ExerciseType.Strength:
      return 'Strength'
    case ExerciseType.Stretching:
      return 'Stretching'
    case ExerciseType.Strongman:
      return 'Strongman'
    default:
      return 'no specific type'
  }
}

export const getMuscleName = (name: Muscle) => {
  switch (name) {
    case Muscle.Abdominals:
      return 'Abdominals'
    case Muscle.Abductors:
      return 'Abductors'
    case Muscle.Adductors:
      return 'Adductors'
    case Muscle.Biceps:
      return 'Biceps'
    case Muscle.Calves:
      return 'Calves'
    case Muscle.Chest:
      return 'Chest'
    case Muscle.Forearms:
      return 'Forearms'
    case Muscle.Glutes:
      return 'Glutes'
    case Muscle.Hamstrings:
      return 'Hamstrings'
    case Muscle.Lats:
      return 'Lats'
    case Muscle.LowerBack:
      return 'Lower Back'
    case Muscle.MiddleBack:
      return 'Middle Back'
    case Muscle.Neck:
      return 'Neck'
    case Muscle.Quadriceps:
      return 'Quadriceps'
    case Muscle.Traps:
      return 'Traps'
    case Muscle.Triceps:
      return 'Triceps'
    default:
      return 'no specific muscle'
  }
}

export const getDifficultyName = (name: Difficulty) => {
  switch (name) {
    case Difficulty.Beginner:
      return 'Beginner'
    case Difficulty.Intermediate:
      return 'Intermediate'
    case Difficulty.Expert:
      return 'Expert'
    default:
      return 'not rated difficulty'
  }
}

export const getTypeName = (filter: ExerciseFilter) => {
  if (filter in ExerciseType) {
    return getExerciseTypeName(filter as ExerciseType)
  }

  if (filter in Muscle) {
    return getMuscleName(filter as Muscle)
  }

  if (filter in Muscle) {
    return getDifficultyName(filter as Difficulty)
  }

  return filter
}
