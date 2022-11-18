import "../../Styles/NavigationBar/NavigationBar.scss"
import { Icon } from "./Icon"
import { SearchBar } from "./Searchbar"

export const NavigationBar: React.FC = () => {
  return (
    <div className="NavbarBaselayer">
      <div className="Items">
        <Icon />
        <SearchBar />
      </div>
    </div>
  )
}
