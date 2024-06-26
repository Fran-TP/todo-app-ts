// cSpell: words todos consts
import { FOOTER_FILTERS_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filterSelected: FilterValue) => void
}

const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className='flex gap-2'>
      {Object.entries(FOOTER_FILTERS_BUTTONS).map(
        ([key, { href, literal }]) => {
          const isSelected = key === filterSelected

          return (
            <li key={key}>
              <a
                href={href}
                className={`text-sm text-gray-500 py-1 px-2 border rounded-sm hover:border-red-500 ${isSelected ? 'border-red-500' : 'border-transparent'}`}
                onClick={event => {
                  event.preventDefault()

                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        }
      )}
    </ul>
  )
}

export default Filter
