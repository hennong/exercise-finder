import { getExerciseTypeName, getMuscleName } from '../../../Helper/NameHelper'
import { exerciseActions } from '../../../Store/State/ExerciseState'
import { useDispatch } from '../../../Store/Store'
import { Exercise } from '../../../Types/Exercise/Exercise'
import './Tile.scss'
export interface ITile {
  exercise: Exercise
}

export const Tile: React.FC<ITile> = (props) => {
  const exercise = props.exercise
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(exerciseActions.setExercise(exercise))
  }

  return (
    <div className='Tile' onClick={onClick}>
      <div className='Title'>
        <div className='Name'>{exercise.name.toUpperCase()}</div>
        <div className='Info'>
          {`${getMuscleName(exercise.muscle)} - 
          ${getExerciseTypeName(exercise.exerciseType)}`}
        </div>
      </div>
      <div className='Instructions'>{exercise.instructions}</div>
    </div>
  )
}
