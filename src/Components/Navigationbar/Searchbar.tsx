import SearchIcon from "@mui/icons-material/Search"
import { Divider, IconButton, InputBase } from "@mui/material"
import * as React from "react"
import { searchActions } from "../../Store/State/SearchState"
import { useDispatch } from "../../Store/Store"
import { getExercises } from "../../Store/Thunks/getExercises"
import "../../Styles/NavigationBar/SearchBar.scss"

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch()

  const onChange = (event: any) => {
    dispatch(searchActions.setQuery(event.target.value))
  }

  const onClick = () => {
    dispatch(getExercises())
  }

  return (
    <div className="SearchBarBackground">
      <div className="SearchBar">
        <InputBase
          className="InputBase"
          style={{ color: "white" }}
          onChange={onChange}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          type="button"
          aria-label="search"
          color="primary"
          onClick={onClick}
        >
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}
