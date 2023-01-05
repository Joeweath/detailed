import { Link } from 'react-router-dom'
import styles from './TodoList.module.css'


const TodoList = (props, user) => {
  let userList = []
  
  userList = []
  !user  ? <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse fa-2xl"></i>
  : 
  props.todos?.map((todo) => (
    todo.owner === props.user.profile ? userList.push(todo) : <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>
    
    )) 
    



  
    

  return (
    <div>
    <h1>To Do List</h1>
    <div className={styles.container}>
      <div>
        
    {
      userList.length > 0  ?
    userList.map((todo) => (
        <Link to={todo._id} key={todo._id} >
        <p>{todo.title}</p> 
        <p>{Date(todo.date).slice(0, 15)}</p>
        </Link> 
 
      ))
      :
      <Link to='/addtodo'>
        <button>
        Add To-Do
        </button>
      </Link>
      }
      </div>
    </div>
    </div>
  )
}


export default TodoList 