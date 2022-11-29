import { getExercises as getExercisesFromAPI } from "../../Requests/RequestExercises"
import { Exercise } from "../../Types/Exercise/Exercise"
import { ExerciseParameters } from "../../Types/Requests/ExerciseRequest"
import { exerciseActions } from "../State/ExerciseState"
import { StoreThunk } from "../Store"

export const getExercises = (): StoreThunk<Promise<void>> => {
  return async (dispatch, getState): Promise<void> => {
    try {
      const query = getState().search.query
      const parameters = getState().search.parameter

      const exerciseParameters: ExerciseParameters = {
        name: query,
        ...parameters
      }
      const exercises: Exercise[] =
        (await getExercisesFromAPI(exerciseParameters)) ?? []

      dispatch(exerciseActions.setExercises(exercises))

      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  }
}
