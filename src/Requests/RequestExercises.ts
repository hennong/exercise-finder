import axios from 'axios'
import { XRapidAPIKey } from '../Key'
import { Exercise } from '../Types/Exercise/Exercise'
import { ExerciseParameters, ExerciseRequest } from '../Types/Requests/ExerciseRequest'

const baseOptions: ExerciseRequest = {
  method: 'GET',
  url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
  headers: {
    'X-RapidAPI-Key': XRapidAPIKey,
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  }
}

export const getExercises = async (searchParameters: ExerciseParameters): Promise<Exercise[]> => {
  const options: ExerciseRequest = {
    ...baseOptions,
    params: searchParameters
  }

  const exercises = await axios
    .request(options)
    .then((response) => response.data)
    .catch(function (error) {
      return []
    })

  return exercises
}
