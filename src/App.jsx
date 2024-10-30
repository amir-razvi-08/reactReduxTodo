
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
    <div className='bhg-[#151515]'>
      <div className='text-white pt-8 ml-[40%] text-4xl'>Make your todo list</div>
      <AddTodo />
      <Todos />
    </div>
    </>
  )
}

export default App
