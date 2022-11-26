import { useSelector } from "../../Store/Store"
import "../../Styles/View/View.scss"
import { ExerciseView } from "./Exercise/Exercise"
import { SearchResult } from "./SearchResults/SearchResults"

export const View = () => {
  const exercise = useSelector((state) => state.exercise.exercise)

  return (
    <div className="View">
      {exercise ? <ExerciseView exercise={exercise} /> : <SearchResult />}
    </div>
  )
}
