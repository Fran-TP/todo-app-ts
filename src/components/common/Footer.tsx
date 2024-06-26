import { type FilterValue } from '../../types'
import Filter from '../Filter'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  onClearCompleted: () => void
  onFilterChange: (filterSelected: FilterValue) => void
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onFilterChange,
  onClearCompleted
}) => {
  return (
    <footer className='w-80 sm:w-[550px] border-x border-b border-x-[#e6e6e6] border-b-[#e6e6e6] flex justify-between py-[10px] px-[15px] shadow-todo'>
      <span className='hidden sm:block'>
        <strong>{activeCount}</strong> items left
      </span>
      <Filter filterSelected={filterSelected} onFilterChange={onFilterChange} />
      {completedCount > 0 && (
        <button
          className='hover:underline text-xs sm:text-base'
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )}
    </footer>
  )
}

export default Footer
