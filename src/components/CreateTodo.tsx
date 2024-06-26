import { useState } from 'react'
import { type TodoText } from '../types'

interface Props {
  addTodo: ({ text }: TodoText) => void
}

const CreateTodo: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if (inputValue.trim().length > 0) {
      addTodo({ text: inputValue })
      setInputValue('')
    }
  }

  const handleChangeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='w-80 sm:w-[550px] px-10 py-3 text-2xl border-2 focus:ring-0 focus:border-2 focus:border-[#cf7d7d] border-[#e6e6e6]'
        type='text'
        placeholder='What needs to be done?'
        value={inputValue}
        onChange={handleChangeInputValue}
        autoFocus
        autoComplete='off'
      />
    </form>
  )
}

export default CreateTodo
