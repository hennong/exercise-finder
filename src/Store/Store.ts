import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction
} from "@reduxjs/toolkit"
import {
  TypedUseSelectorHook,
  useDispatch as reduxUseDispatch,
  useSelector as reduxUseSelector
} from "react-redux"
import { exerciseReducer } from "./State/ExerciseState"
import { searchReducer } from "./State/SearchState"

export const store = configureStore({
  reducer: combineReducers({
    exercise: exerciseReducer,
    search: searchReducer
  })
})

export type State = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<State> = reduxUseSelector
export const useDispatch = reduxUseDispatch
export type StoreThunk<T> = ThunkAction<T, State, null, Action>
