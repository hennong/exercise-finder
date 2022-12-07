import TuneIcon from '@mui/icons-material/Tune'
import Button from '@mui/material/Button'
import { searchActions } from '../../../Store/State/SearchState'
import { useDispatch, useSelector } from '../../../Store/Store'
import './FilterButton.scss'

export const FilterButton = () => {
  const dispatch = useDispatch()
  const showFilters = useSelector((state) => state.search.showFilters)
  const onClick = () => {
    showFilters ? dispatch(searchActions.setShowFilters(false)) : dispatch(searchActions.setShowFilters(true))
  }

  return (
    <div className='FilterButtonBackground'>
      <div className='FilterButton'>
        <Button color='primary' sx={{ borderRadius: 20 }} onClick={onClick}>
          <TuneIcon />
        </Button>
      </div>
    </div>
  )
}
