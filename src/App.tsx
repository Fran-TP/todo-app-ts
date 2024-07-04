// cSpell: words todos consts
import Todos from './components/Todos'
import Footer from './components/common/Footer'
import Header from './components/Header'
import { useTodos } from './hooks/useTodo'

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    isAllCompleted,
    filterSelected,
    handleEditTodo,
    handleRemoveTodo,
    handleToggleTodo,
    handleFilterChange,
    handleClearCompleted,
    handleAddTodo,
    handleToggleAll,
    todos
  } = useTodos()

  return (
    <div className='flex flex-col justify-start items-center'>
      <Header addTodo={handleAddTodo} />
      <Todos
        todos={todos}
        isAllCompleted={isAllCompleted}
        onEditTodo={handleEditTodo}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
        onToggleAll={handleToggleAll}
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
