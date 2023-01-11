import { Link } from 'react-router-dom'
import styles from './TodoList.module.css'


const TodoList = (props, user) => {
  let userList = []

  userList = []
  !user ? console.log("log in")
    :
    props.todos?.map((todo) => (
      todo.owner === props.user.profile ? userList.push(todo) : console.log("not a match")

    ))





console.log(userList.length)

  return (

    <div className={userList.length  > 0 ? styles.listcontainer : styles.emptylist}>

      {
        userList.length > 0 ?
          userList.map((todo) => (
            <div className={styles.todocard}>
            <Link to={todo._id} key={todo._id} >
              <p className={styles.title}>{todo.title}</p>
              <p className={styles.content}>{todo.content.slice(0, 40)}</p>
              <p className={styles.date} >{Date(todo.date).slice(0, 15)}</p>
            </Link>
            </div>

          ))
          :
          <>
            <div className={styles.h1div}>
            <h1 className={styles.h1header}>
              Organize your life and work
              <br />
              with Detailed!
            </h1>
            </div>
            <div className={styles.buttonsdiv}>
            <Link to='addtodo' className={styles.createtodo}>
              <button type="button" class="btn btn-secondary btn-lg">Create Todo</button>
            </Link> 
            </div>
            <div className={styles.bottomdiv}>
              <div className={styles.imgdiv}>
            <img
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200"
              alt="To-Do-List"
              className={styles.todopic}
            />
              </div>
              <div className={styles.quotediv}>
            <p className={styles.quote}>“People often say that motivation doesn't last. Well, neither does bathing, that's why we recommend it daily.” Zig Ziglar</p>
              </div>

            </div>

          </>

      }
    </div>
  )
}


export default TodoList 