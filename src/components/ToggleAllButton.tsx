// cSpell: words todos
interface Props {
  isAllCompleted: boolean
  onToggleAll: () => void
}

const ToggleAllButton: React.FC<Props> = ({ isAllCompleted, onToggleAll }) => {
  const handleToggleAllTodoItems = (): void => {
    onToggleAll()
  }

  return (
    <div className='absolute top-[-45px] left-2'>
      <label htmlFor='toggleAllButton'>
        <input
          id='toggleAllButton'
          className='w-8 h-8 focus:ring-transparent rounded-full text-transparent border-gray-400 checked:focus:border-green-600 checked:border-green-600 checked:hover:border-green-600'
          type='checkbox'
          checked={isAllCompleted}
          onChange={handleToggleAllTodoItems}
        />
      </label>
    </div>
  )
}

export default ToggleAllButton
