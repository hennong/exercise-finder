import { useSelector } from "../../Store/Store"
import { ExerciseView } from "./Exercise/ExerciseView"
import { SearchResult } from "./SearchResults/SearchResults"
import "./View.scss"

export const View = () => {
  const exercise = useSelector((state) => state.exercise.exercise)

  return (
    <div className="View">
      {exercise ? <ExerciseView exercise={exercise} /> : <SearchResult />}
    </div>
  )
}
