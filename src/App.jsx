// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate} from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddTodo from './pages/AddTodo/AddTodo'
import EditTodo from './pages/EditTodo/EditTodo'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import TodoCard from './components/TodoCard/TodoCard'

// services
import * as authService from './services/authService'
import * as todoService from './services/todoService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddTodo = async newTodoData => {
    const newTodo = await todoService.create(newTodoData)
    setTodos([...todos, newTodo])
    navigate('/')
  }

  useEffect(() => {
    const fetchAllTodos = async () => {
      const todoData = await todoService.getAll()
      setTodos(todoData)
    }
    fetchAllTodos()
  }, [])

  const handleUpdateTodo = updatedTodoData => {
    todoService.todoUpdate(updatedTodoData)
    .then(upatedTodo => {
      const newTodosArray = todos.map(todo => 
        todo._id === upatedTodo._id ? upatedTodo : todo
        )
        setTodos(newTodosArray)
        navigate('/')
    })
  }

  
  const handleDelete = async (todoId) => {
    try {
      await todoService.deleteTodo(todoId)
      setTodos(todos.filter((todo) => todo._id !== todoId))
      navigate('/')
    } catch (error) {
      throw error
    } 
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route path="/:id" element={<TodoCard handleDelete={handleDelete}/>} />
        <Route path='/addtodo' element={<AddTodo handleAddTodo={handleAddTodo}/>} />
        <Route path='/edit' element={<EditTodo handleUpdateTodo={handleUpdateTodo}/>} />


      </Routes>
    </>
  )
}

export default App
