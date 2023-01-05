import { useEffect, useState } from 'react'

import styles from './Landing.module.css'
import TodoList from '../../components/TodoList/TodoList'
import { getAll } from '../../services/todoService'
import AltTodoList from '../../components/AltTodoList/AltTodoList'


const Landing = ({ user }) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchAllTodos = async () => {
      const postData = await getAll()
      setTodos(postData)
    }
    fetchAllTodos()
    return () => {setTodos([])}
  }, [])


  return (
    <main className={styles.container}>
      {
        user ? 
      <TodoList todos={todos} user={user}/>
      :
      <AltTodoList />
    }
    </main>
  )
}

export default Landing
