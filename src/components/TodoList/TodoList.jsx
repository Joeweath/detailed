import { Link } from 'react-router-dom'
import AltTodoList from '../AltTodoList/AltTodoList'
import styles from './TodoList.module.css'


const TodoList = (props, user) => {
  let userList = []
  
  console.log(props, user)
  
  userList = []
  user !== null ? console.log("log in")
  : 
  props.todos?.map((todo) => (
    todo.owner === props.user.profile && userList.push(todo)
  )) 
  



  
    

  return (
  <div>
    {user  === null ? 
    <div>
    <h1>To Do List</h1>
    <div className={styles.container}>
      <div>
        
    {
      userList ?
    userList.map((todo) => (
        <Link to={todo._id} key={todo._id} >
        <p>{todo.title}</p> 
        <p>{Date(todo.date).slice(0, 15)}</p>
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
    :
    <AltTodoList />
   }
  </div>
  )
}


export default TodoList 