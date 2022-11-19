import TuneIcon from "@mui/icons-material/Tune"
import Button from "@mui/material/Button"
import "../../Styles/NavigationBar/Filter.scss"

export const Filter = () => {
  return (
    <div className="Filter">
      <div className="Button">
        <Button color="primary">
          <TuneIcon />
        </Button>
      </div>
    </div>
  )
}
