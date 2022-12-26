import { Link } from 'react-router-dom'
import styles from './TodoList.module.css'
import TodoCard from './TodoCard/TodoCard'

const TodoList = props => {



  return (
  <div>
    <h1>To Do List</h1>
    <div className={styles.container}>
    {props.todos?.map((todo) => (
        <Link to='/todo'>
        <TodoCard 
        todo={todo}
        key={todo._id}
        />
        <p>{todo.title}</p> 
        <p>Due Date {todo.date}</p>
        </Link>
      ))}
      
    </div>
  
  </div>
  )
}


export default TodoList 