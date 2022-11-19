import "../../Styles/NavigationBar/NavigationBar.scss"
import { Filter } from "./Filter"
import { Icon } from "./Icon"
import { SearchBar } from "./Searchbar"

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
