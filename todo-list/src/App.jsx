import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import TodoList from './pages/TodoList'
import AddTask from './pages/AddTask'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='/todo/add' element={<AddTask />} />
    </Routes>
  )
}

export default App
