// cSpell: words todos consts
import { type TodoText } from '../types'
import CreateTodo from './CreateTodo'

interface Props {
  addTodo: ({ text }: TodoText) => void
}

const Header: React.FC<Props> = ({ addTodo }) => {
  return (
    <header>
      <h1 className='text-[#b83f45] text-center text-7xl my-5'>todos</h1>
      <CreateTodo addTodo={addTodo} />
    </header>
  )
}

export default Header
