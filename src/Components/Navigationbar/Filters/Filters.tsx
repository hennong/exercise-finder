import { searchActions } from '../../../Store/State/SearchState'
import { useDispatch, useSelector } from '../../../Store/Store'
import { difficulties, Difficulty } from '../../../Types/Exercise/Difficulty'
import { ExerciseFilter } from '../../../Types/Exercise/Exercise'
import { ExerciseType, exerciseTypes } from '../../../Types/Exercise/ExerciseType'
import { Muscle, muscles } from '../../../Types/Exercise/Muscle'
import './Filters.scss'
import { FiltersButton } from './FiltersButton/FiltersButton'

export const Filters = () => {
  const { exerciseType, muscle, difficulty } = useSelector((state) => state.search?.parameter)

  const dispatch = useDispatch()

  const isFilterActive = (value: ExerciseFilter) => {
    if (exerciseTypes.includes(value as ExerciseType)) {
      return exerciseType === value
    }

    if (muscles.includes(value as Muscle)) {
      return muscle === value
    }

    if (difficulties.includes(value as Difficulty)) {
      return difficulty === value
    }

    return false
  }

  const setParameter = (filter: ExerciseFilter) => {
    const value = isFilterActive(filter) ? null : filter

    if (exerciseTypes.includes(filter as ExerciseType)) {
      dispatch(searchActions.setExerciseType(value as ExerciseType))
    }

    if (muscles.includes(filter as Muscle)) {
      dispatch(searchActions.setMuscle(value as Muscle))
    }

    if (difficulties.includes(filter as Difficulty)) {
      dispatch(searchActions.setDifficulty(value as Difficulty))
    }
  }

  return (
    <div className='FiltersBackground'>
      <div className='FiltersButtonRow'>
        {exerciseTypes.map((exerciseType) => {
          return (
            <div className='FiltersSingleButton' key={exerciseType}>
              <FiltersButton
                filter={exerciseType}
                isActive={isFilterActive(exerciseType)}
                setParameter={setParameter}
              />
            </div>
          )
        })}
      </div>
      <div className='FiltersButtonRow'>
        {muscles.map((muscle) => {
          return (
            <div className='FiltersSingleButton' key={muscle}>
              <FiltersButton filter={muscle} isActive={isFilterActive(muscle)} setParameter={setParameter} />
            </div>
          )
        })}
      </div>
      <div className='FiltersButtonRow'>
        {difficulties.map((difficulty) => {
          return (
            <div className='FiltersSingleButton' key={difficulty}>
              <FiltersButton filter={difficulty} isActive={isFilterActive(difficulty)} setParameter={setParameter} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
