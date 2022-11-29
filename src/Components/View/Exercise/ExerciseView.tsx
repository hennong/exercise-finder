import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import {
  getDifficultyName,
  getExerciseTypeName,
  getMuscleName
} from "../../../Helper/NameHelper"
import { exerciseActions } from "../../../Store/State/ExerciseState"
import { Exercise } from "../../../Types/Exercise/Exercise"
import "./ExerciseView.scss"

export interface IExerciseView {
  exercise: Exercise
}

export const ExerciseView: React.FC<IExerciseView> = (props) => {
  const { exercise } = props
  const { name, exerciseType, muscle, equipment, difficulty, instructions } =
    exercise

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(exerciseActions.setExercise(null))
  }

  return (
    <div className="ExerciseBackground">
      <div className="ExerciseTopBar">
        <div className="ExitButton">
          <IconButton onClick={onClick}>
            <ArrowBackIosNewIcon color="secondary" />
          </IconButton>
        </div>
        <div className="ExerciseTitle">{name.toUpperCase()}</div>
      </div>
      <div className="ExerciseInfo">
        <div className="ExerciseDetails">
          Exercise Type: {getExerciseTypeName(exerciseType)}
        </div>
        <div className="ExerciseDetails">Muscle: {getMuscleName(muscle)}</div>
        <div className="ExerciseDetails">Equipment: {equipment}</div>
        <div className="ExerciseDetails">
          Difficulty: {getDifficultyName(difficulty)}
        </div>
      </div>
      <div className="ExerciseInstructions">{instructions}</div>
    </div>
  )
}
