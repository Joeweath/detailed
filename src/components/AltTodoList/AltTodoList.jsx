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
            <Link to='login'>
                <button className={styles.login}>Log In</button>
            </Link>
            <Link to='signup'>
                <button>Sign Up</button>
            </Link>

        </div>
    )
}


export default AltTodoList