// cSpell: words todos
import { type TodoId, type ListOfTodos } from '../types'
import Todo from './Todo'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleTodo: ({ id }: TodoId) => void
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className='list-none w-80 sm:w-[550px] divide-y divide-[#e6e6e6] border-x border-[#e6e6e6]'>
      {todos.map(todo => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onRemoveTodo={() => {
              onRemoveTodo(todo)
            }}
            onToggleTodo={onToggleTodo}
          />
        </li>
      ))}
    </ul>
  )
}

export default Todos
