import './TextView.scss'

export const NoSearchResult: React.FC = () => {
  return (
    <div className='TextViewBackground'>
      <div className='TextViewMessage'>Found No Results</div>
    </div>
  )
}
