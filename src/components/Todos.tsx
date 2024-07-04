// cSpell: words todos formkit
import {
  type TodoId,
  type ListOfTodos,
  type Todo as TodoType
} from '../types'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Todo from './Todo'
import ToggleAllTodos from './ToggleAllButton'

interface Props {
  isAllCompleted: boolean
  todos: ListOfTodos
  onEditTodo: ({ id, text }: Omit<TodoType, 'completed'>) => void
  onRemoveTodo: ({ id }: TodoId) => void
  onToggleTodo: ({ id }: TodoId) => void
  onToggleAll: () => void
}

const Todos: React.FC<Props> = ({
  isAllCompleted,
  todos,
  onEditTodo,
  onRemoveTodo,
  onToggleTodo,
  onToggleAll
}) => {
  const [parent] = useAutoAnimate()

  return (
    <main className='relative'>
      {todos.length > 0 && (
        <ToggleAllTodos
          isAllCompleted={isAllCompleted}
          onToggleAll={onToggleAll}
        />
      )}
      <ul
        ref={parent}
        className='list-none w-80 sm:w-[550px] divide-y divide-[#e6e6e6] border-x border-[#e6e6e6]'
      >
        {todos.map(todo => (
          <li key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onEditTodo={onEditTodo}
              onRemoveTodo={onRemoveTodo}
              onToggleTodo={onToggleTodo}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Todos
