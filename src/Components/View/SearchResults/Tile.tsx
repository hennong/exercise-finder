import { getExerciseTypeName, getMuscleName } from "../../../Helper/NameHelper"
import "../../../Styles/View/SearchResults/Tile.scss"
import { Exercise } from "../../../Types/Exercise/Exercise"
export interface ITile {
  exercise: Exercise
}

export const Tile: React.FC<ITile> = (props) => {
  const exercise = props.exercise
  return (
    <div className="TileBackground">
      <div className="Title">
        <div className="Name">{exercise.name.toUpperCase()}</div>
        <div className="Info">
          {`${getMuscleName(exercise.muscle)} - 
          ${getExerciseTypeName(exercise.type)}`}
        </div>
      </div>
      <div className="Instructions">{exercise.instructions}</div>
    </div>
  )
}
