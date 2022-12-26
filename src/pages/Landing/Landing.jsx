import { useEffect, useState } from 'react'

import styles from './Landing.module.css'
import TodoList from '../../components/TodoList/TodoList'
import { getAll } from '../../services/todoService'


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
      <TodoList todos={todos}/>
    </main>
  )
}

export default Landing
