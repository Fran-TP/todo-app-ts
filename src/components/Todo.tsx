import { type TodoId, type Todo as TodoTypes } from '../types'

interface Props extends TodoTypes {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleTodo: ({ id }: TodoId) => void
}

const Todo: React.FC<Props> = ({
  id,
  text,
  completed,
  onRemoveTodo,
  onToggleTodo
}) => {
  const handleChangeCheckbox = (_event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggleTodo({ id })
  }

  const handleClickRemove = (): void => {
    onRemoveTodo({ id })
  }

  return (
    <div
      className='flex items-center gap-2 h-[60px] px-2 group'
      data-todo-id={id}
    >
      <input
        name='completed'
        type='checkbox'
        aria-label='completed'
        checked={completed}
        onChange={handleChangeCheckbox}
        className='peer h-8 w-8 cursor-pointer border-gray-400 focus:ring-transparent rounded-full border checked:text-transparent checked:border-green-600 checked:hover:border-green-600 checked:hover:bg-transparent checked:focus:border-green-600 checked:focus:bg-transparent'
      />
      <label
        htmlFor='completed'
        className='peer-checked:line-through peer-checked:text-gray-500 transition-colors duration-300 ease-in-out'
      >
        {text}
      </label>
      <button
        className='ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out'
        onClick={handleClickRemove}
      >
        <span role='img' aria-label='delete'>
          ❌
        </span>
      </button>
    </div>
  )
}

export default Todo
