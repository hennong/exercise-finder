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

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      onSearch()
    }
  }

  const onDelete = () => {
    dispatch(searchActions.setQuery(""))
  }

  const onSearch = () => {
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
          onKeyDown={onKeyDown}
        />
        <IconButton
          type="button"
          aria-label="close"
          color="primary"
          onClick={onDelete}
        >
          <CloseIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          aria-label="search"
          color="primary"
          onClick={onSearch}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}
