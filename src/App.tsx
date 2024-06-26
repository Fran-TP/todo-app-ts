// cSpell: words todos consts
import { useState } from 'react'
import { type TodoText, type FilterValue, type TodoId } from './types'
import Todos from './components/Todos'
import Footer from './components/common/Footer'
import Header from './components/Header'
import { TODO_FILTERS } from './consts'

const mockTodos = [
  { id: '1', text: 'Learn React', completed: true },
  { id: '2', text: 'Learn TypeScript', completed: true },
  { id: '3', text: 'Learn Tailwind CSS', completed: false },
  { id: '4', text: 'Learn GraphQL', completed: false }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)

    setTodos(newTodos)
  }

  const handleToggleTodo = ({ id }: TodoId): void => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filterSelected: FilterValue): void => {
    setFilterSelected(filterSelected)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)

    setTodos(newTodos)
  }

  const handleAddTodo = ({ text }: TodoText): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

  return (
    <div className='flex flex-col justify-start items-center'>
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
      />
      {todos.length > 0 && (<Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        onClearCompleted={handleClearCompleted}
      />)}
    </div>
  )
}

export default App
