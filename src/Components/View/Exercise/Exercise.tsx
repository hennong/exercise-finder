import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { IconButton } from "@mui/material"
import { useDispatch } from "react-redux"
import { exerciseActions } from "../../../Store/State/ExerciseState"
import "../../../Styles/View/Exercise/Exercise.scss"
import { Exercise } from "../../../Types/Exercise/Exercise"

export interface IExerciseView {
  exercise: Exercise
}

export const ExerciseView: React.FC<IExerciseView> = (props) => {
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(exerciseActions.setExercise(null))
  }

  const { exercise } = props
  return (
    <div className="ExerciseBackground">
      <div className="ExerciseTopBar">
        <div className="ExitButton">
          <IconButton onClick={onClick}>
            <ArrowBackIosNewIcon color="secondary" />
          </IconButton>
        </div>
        <div className="ExerciseTitle">{exercise.name}</div>
      </div>
      <div className="ExerciseInfo">
        <div className="ExerciseDetails">Exercise Type: {exercise.type}</div>
        <div className="ExerciseDetails">Muscle: {exercise.muscle}</div>
        <div className="ExerciseDetails">Equipment: {exercise.equipment}</div>
        <div className="ExerciseDetails">Difficulty: {exercise.difficulty}</div>
      </div>
      <div className="ExerciseInstructions">{exercise.instructions}</div>
    </div>
  )
}
