// cSpell: words todos consts
import Todos from './components/Todos'
import Footer from './components/common/Footer'
import Header from './components/Header'
import { useTodos } from './hooks/useTodo'

const App = (): JSX.Element => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleEditTodo,
    handleRemoveTodo,
    handleToggleTodo,
    handleFilterChange,
    handleClearCompleted,
    handleAddTodo,
    todos: filteredTodos
  } = useTodos()

  return (
    <div className='flex flex-col justify-start items-center'>
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onEditTodo={handleEditTodo}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
      />
      {completedCount + activeCount > 0 && (
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onFilterChange={handleFilterChange}
          onClearCompleted={handleClearCompleted}
        />
      )}
    </div>
  )
}

export default App
