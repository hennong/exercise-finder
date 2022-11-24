export interface Exercise {
  name: string
  type: ExerciseType
  muscle: Muscle
  equipment: string
  difficulty: Difficulty
  instructions: string
}

export interface ExerciseOptions {
  type?: ExerciseType
  muscle?: Muscle
  difficulty?: Difficulty
}

export enum ExerciseType {
  Cardio = "cardio",
  OlympicWeightlifting = "olympic_weightlifting",
  Plyometrics = "plyometrics",
  Powerlifting = "powerlifting",
  Strength = "strength",
  Stretching = "stretching",
  Strongman = "strongman"
}

export enum Muscle {
  Abdominals = "abdominals",
  Abductors = "abductors",
  Adductors = "adductors",
  Biceps = "biceps",
  Calves = "calves",
  Chest = "chest",
  Forearms = "forearms",
  Glutes = "glutes",
  Hamstrings = "hamstrings",
  Lats = "lats",
  LowerBack = "lower_back",
  MiddleBack = "middle_back",
  Neck = "neck",
  Quadriceps = "quadriceps",
  Traps = "traps",
  Triceps = "triceps"
}

export enum Difficulty {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Expert = "expert"
}
