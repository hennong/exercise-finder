import { Filter } from "./Filter/Filter"
import { Icon } from "./Icon/Icon"
import "./NavigationBar.scss"
import { SearchBar } from "./SearchBar/Searchbar"

export const NavigationBar: React.FC = () => {
  return (
    <div className="NavbarBaselayer">
      <div className="Items">
        <Icon />
        <SearchBar />
        <Filter />
      </div>
    </div>
  )
}
