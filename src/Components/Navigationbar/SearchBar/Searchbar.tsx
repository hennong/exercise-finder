import CloseIcon from "@mui/icons-material/Close"
import SearchIcon from "@mui/icons-material/Search"
import { Divider, IconButton, InputBase } from "@mui/material"
import * as React from "react"
import { exerciseActions } from "../../../Store/State/ExerciseState"
import { searchActions } from "../../../Store/State/SearchState"
import { useDispatch, useSelector } from "../../../Store/Store"
import { getExercises } from "../../../Store/Thunks/getExercises"
import "./SearchBar.scss"

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch()
  const value = useSelector((state) => state.search.query)

  const onChange = (event: any) => {
    dispatch(searchActions.setQuery(event.target.value))
  }

  const onKeyUp = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      onClickSearch()
    }
  }

  const onClickDelete = () => {
    dispatch(searchActions.setQuery(""))
  }

  const onClickSearch = () => {
    dispatch(getExercises())
    dispatch(exerciseActions.setExercise(null))
  }

  return (
    <div className="SearchBarBackground">
      <div className="SearchBar">
        <InputBase
          className="InputBase"
          style={{ color: "white" }}
          onChange={onChange}
          value={value}
          onKeyUp={onKeyUp}
        />
        <IconButton
          type="button"
          aria-label="close"
          color="primary"
          onClick={onClickDelete}
        >
          <CloseIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          aria-label="search"
          color="primary"
          onClick={onClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}
