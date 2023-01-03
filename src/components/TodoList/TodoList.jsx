import { Link } from 'react-router-dom'
import styles from './TodoList.module.css'


const TodoList = props => {
  console.log(props)
  let userList = []

  userList = []
  props.todos?.map((todo) => (
    todo.owner === props.user.profile && userList.push(todo)
  ))

  console.log(userList)


  
    

  return (
  <div>
    <h1>To Do List</h1>
    <div className={styles.container}>
      <div>
        
    {
      userList ?
    userList.map((todo) => (
        <Link to={todo._id} key={todo._id} >
        <p>{todo.title}</p> 
        <p>Due Date {todo.date}</p>
        </Link> 
        
      ))
      :
      <Link to='addtodo'>
        Add To-Do
      </Link>
      }
      </div>
    </div>
  
  </div>
  )
}


export default TodoList 