import { useSelector } from '../../Store/Store'
import { ExerciseView } from './Exercise/ExerciseView'
import { SearchResult } from './SearchResults/SearchResults'
import { NoSearchResult } from './TextView/NoSearchResults'
import { StartView } from './TextView/StartView'
import './View.scss'

export const View = () => {
  const exercise = useSelector((state) => state.exercise.exercise)
  const exercises = useSelector((state) => state.exercise.exercises)
  const isSearchActive = useSelector((state) => state.search.isSearchActive)

  const isExerciseChosen = !!exercise
  const foundExercises = !!exercises.length

  return (
    <div className='ViewBackground'>
      <div className='ViewElements'>
        {isSearchActive ? ( //
          foundExercises ? (
            isExerciseChosen ? (
              <ExerciseView exercise={exercise} />
            ) : (
              <SearchResult />
            )
          ) : (
            <NoSearchResult />
          )
        ) : (
          <StartView />
        )}
      </div>
    </div>
  )
}
