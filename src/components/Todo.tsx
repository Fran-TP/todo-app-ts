import { useEffect, useRef, useState } from 'react'
import { type TodoId, type Todo as TodoTypes } from '../types'

interface Props extends TodoTypes {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleTodo: ({ id }: TodoId) => void
  onEditTodo: ({ id, text }: Omit<TodoTypes, 'completed'>) => void
}

const Todo: React.FC<Props> = ({
  id,
  text,
  completed,
  onEditTodo,
  onRemoveTodo,
  onToggleTodo
}) => {
  const [editing, setEditing] = useState(false)
  const [editedText, setEditedText] = useState(text)

  const inputEditRef = useRef<HTMLInputElement>(null)

  const handleChangeCheckbox = (): void => {
    onToggleTodo({ id })
  }

  const handleClickRemove = (): void => {
    onRemoveTodo({ id })
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditedText(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setEditedText(editedText.trim())

      if (editedText.trim() === '') {
        onRemoveTodo({ id })
        return
      }

      if (editedText.trim() !== text) {
        onEditTodo({ id, text: editedText.trim() })
        setEditing(false)
        return
      }
    }

    if (e.key === 'Escape') {
      setEditing(false)
    }
  }

  const handleDoubleClick = (): void => {
    setEditing(true)
  }

  const handleBlur = (): void => {
    setEditedText(text)
    setEditing(false)
  }

  useEffect(() => {
    inputEditRef.current?.focus()
  }, [editing])

  return (
    <>
      {!editing && (
        <div
          className='flex items-center gap-2 h-[60px] px-2 group'
          data-todo-id={id}
          onDoubleClick={handleDoubleClick}
        >
          <input
            id={id}
            name='completed'
            type='checkbox'
            aria-label='completed'
            checked={completed}
            onChange={handleChangeCheckbox}
            className='peer h-8 w-8 cursor-pointer border-gray-400 focus:ring-transparent rounded-full border checked:text-transparent checked:border-green-600 checked:hover:border-green-600 checked:hover:bg-transparent checked:focus:border-green-600 checked:focus:bg-transparent'
          />
          <label
            htmlFor={id}
            className='peer-checked:line-through peer-checked:text-gray-500 transition-colors duration-300 ease-in-out'
          >
            {text}
          </label>
          <button
            className='ml-auto md:opacity-0 md:group-hover:opacity-100  transition-opacity duration-150 ease-in-out'
            onClick={handleClickRemove}
          >
            <span role='img' aria-label='delete'>
              ❌
            </span>
          </button>
        </div>
      )}

      {editing && (
        <input
          className='w-full h-[60px] px-2 py-1 border-gray-400 focus:border-[#b83f45] border-2 focus:ring-0 opacity-0 transition-all duration-300 ease-linear focus:opacity-100'
          name='text'
          type='text'
          value={editedText}
          onChange={handleChangeText}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoComplete='off'
          ref={inputEditRef}
        />
      )}
    </>
  )
}

export default Todo
