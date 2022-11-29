import { useCallback } from "react"
import { searchActions } from "../../Store/State/SearchState"
import { useDispatch, useSelector } from "../../Store/Store"
import { FilterButton } from "./Filters/FilterButton"
import { Filters } from "./Filters/Filters"
import { Icon } from "./Icon/Icon"
import "./NavigationBar.scss"
import { SearchBar } from "./SearchBar/Searchbar"

export const NavigationBar: React.FC = () => {
  const showFilters = useSelector((state) => state.search.showFilters)

  const dispatch = useDispatch()

  const handleBlur = useCallback((event: any) => {
    const currentTarget = event.currentTarget

    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        dispatch(searchActions.setShowFilters(false))
      }
    })
  }, [])

  return (
    <div className="NavbarBaselayer" onBlur={handleBlur}>
      <div className="Items">
        <Icon />
        <SearchBar />
        <FilterButton />
      </div>
      {showFilters ? <Filters /> : null}
    </div>
  )
}
