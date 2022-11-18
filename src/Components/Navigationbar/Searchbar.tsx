import SearchIcon from "@mui/icons-material/Search"
import { Divider, IconButton, InputBase } from "@mui/material"
import * as React from "react"
import "../../Styles/NavigationBar/SearchBar.scss"

export const SearchBar: React.FC = () => {
  return (
    <div className="SearchBarBackground">
      <div className="SearchBar">
        <InputBase className="InputBase" style={{ color: "white" }} />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  )
}
