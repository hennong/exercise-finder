import dumbbell from "../../Icons/dumbbell-96.png"
import "../../Styles/NavigationBar/Icon.scss"

export const Icon: React.FC = () => {
  return (
    <div className="Icon">
      <img className="Image" src={dumbbell} alt="fireSpot" />
    </div>
  )
}
