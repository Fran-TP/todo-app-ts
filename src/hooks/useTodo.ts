// cSpell: words Todos consts
import { useState } from 'react'
import {
  type TodoText,
  type FilterValue,
  type ListOfTodos,
  type TodoId,
  type Todo as TodoType,
  type TodoCompleted
} from '../types'
import { TODO_FILTERS } from '../consts'
import { mockTodos } from '../mocks/mocksTodo'

export const useTodos = (): {
  activeCount: number
  completedCount: number
  isAllCompleted: boolean
  todos: ListOfTodos
  filterSelected: FilterValue
  handleEditTodo: ({ id, text }: Omit<TodoType, 'completed'>) => void
  handleRemoveTodo: ({ id }: TodoId) => void
  handleToggleTodo: ({ id }: TodoId) => void
  handleFilterChange: (args: FilterValue) => void
  handleClearCompleted: () => void
  handleAddTodo: ({ text }: TodoText) => void
  handleToggleAll: ({ completed }: TodoCompleted) => void
} => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const handleEditTodo = ({ id, text }: Omit<TodoType, 'completed'>): void => {
    const newTodos = todos.map(todo => {
      return todo.id === id ? { ...todo, text } : todo
    })

    setTodos(newTodos)
  }

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

    setTodos([...todos, newTodo])
  }

  const handleToggleAll = (): void => {
    const areAllCompleted = todos.every(todo => todo.completed)

    const newTodos = todos.map(todo => {
      return { ...todo, completed: !areAllCompleted }
    })

    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const allCompleted = todos.every(todo => todo.completed)

  return {
    activeCount,
    completedCount,
    isAllCompleted: allCompleted,
    filterSelected,
    handleEditTodo,
    handleRemoveTodo,
    handleToggleTodo,
    handleFilterChange,
    handleClearCompleted,
    handleAddTodo,
    handleToggleAll,
    todos: filteredTodos
  }
}
