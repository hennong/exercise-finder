import { useSelector } from "../../../Store/Store"
import "../../../Styles/View/SearchResults/SearchResults.scss"
import { Tile } from "./Tile"

export const SearchResult = () => {
  const exercises = useSelector((state) => state.exercise.exercises)

  return (
    <div className="SearchResults">
      {exercises.map((exercise, index) => (
        <Tile key={`Tile${index}`} exercise={exercise} />
      ))}
    </div>
  )
}
