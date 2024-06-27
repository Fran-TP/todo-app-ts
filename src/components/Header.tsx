// cSpell: words todos consts
import { type TodoText } from '../types'
import CreateTodo from './CreateTodo'

interface Props {
  addTodo: ({ text }: TodoText) => void
}

const Header: React.FC<Props> = ({ addTodo }) => {
  return (
    <header>
      <h1 className='text-[#b83f45] text-center text-7xl my-5'>
        todos
        <img
          aria-label='typescript logo'
          className='w-12 h-12 inline-block ml-2 mb-2'
          src='https://svgl.app/library/typescript.svg'
        />
      </h1>
      <CreateTodo addTodo={addTodo} />
    </header>
  )
}

export default Header
