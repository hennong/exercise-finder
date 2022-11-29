import { Button } from "@mui/material"
import { getTypeName } from "../../../../Helper/NameHelper"
import { ExerciseFilter } from "../../../../Types/Exercise/Exercise"

export interface IFiltersButton {
  filter: ExerciseFilter
  isActive: boolean
  setParameter: (value: ExerciseFilter) => void
}

export const FiltersButton: React.FC<IFiltersButton> = (props) => {
  const { filter, isActive, setParameter } = props
  const variant = isActive ? "contained" : "outlined"

  const filterName = getTypeName(filter)

  const onClick = () => {
    setParameter(filter)
  }

  return (
    <Button variant={variant} onClick={onClick}>
      {filterName}
    </Button>
  )
}
