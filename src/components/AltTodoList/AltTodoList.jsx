import { Link } from "react-router-dom"
import styles from './AltTodoList.module.css'



const AltTodoList = ( user ) => {

    console.log(user)
    return (
        <div className={styles.altcontent}>

            <h1 className={styles.h1header}>
                Organize your life and work
                <br />
                with Detailed!
            </h1>
            <h2 className={styles.logo}><i class="fa-solid fa-list-check fa-1xl">Detailed</i>  </h2>
            <Link to='login' className={styles.login}>
                <button type="button" class="btn btn-secondary btn-lg">Log In</button>
            </Link>
            <Link to='signup' className={styles.signup}>
                <button type="button" class="btn btn-secondary btn-lg">Sign Up</button>
            </Link>
            <img
              src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200"
              alt="To-Do-List"
              className={styles.todopic}
            />
            <p className={styles.quote}>“People often say that motivation doesn't last. Well, neither does bathing, that's why we recommend it daily.” Zig Ziglar</p>


        </div>
    )
}


export default AltTodoList