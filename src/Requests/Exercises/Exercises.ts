import axios from "axios"
import { Exercise } from "../../Types/Exercise/Exercise"
import {
  ExerciseParameters,
  ExerciseRequest
} from "../../Types/Requests/ExerciseRequest"

const baseOptions: ExerciseRequest = {
  method: "GET",
  url: "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises",
  headers: {
    "X-RapidAPI-Key": "811adbaccbmsh980272754b7ebc4p101b89jsn8f9929f029ad",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
  }
}

export const getExercisesFromAPI = (
  searchParameters: ExerciseParameters
): Exercise[] | null => {
  const options: ExerciseRequest = {
    ...baseOptions,
    params: searchParameters
  }

  axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {})

  return null
}
