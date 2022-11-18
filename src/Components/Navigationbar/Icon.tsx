import dumbbell from "../../Icons/icons8-dumbbell-windows-10-96.png"
import "../../Styles/NavigationBar/Icon.scss"

export const Icon: React.FC = () => {
  return (
    <div className="Icon">
      <img className="Image" src={dumbbell} alt="fireSpot" />
    </div>
  )
}
