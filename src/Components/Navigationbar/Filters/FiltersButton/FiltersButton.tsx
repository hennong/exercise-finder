import { Button } from "@mui/material"
import { getTypeName } from "../../../../Helper/NameHelper"
import { Difficulty } from "../../../../Types/Exercise/Difficulty"
import { ExerciseType } from "../../../../Types/Exercise/ExerciseType"
import { Muscle } from "../../../../Types/Exercise/Muscle"

export interface IFiltersButton {
  filter: ExerciseType | Muscle | Difficulty
  isActive: boolean
  setParameter: (value: ExerciseType | Muscle | Difficulty) => void
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
