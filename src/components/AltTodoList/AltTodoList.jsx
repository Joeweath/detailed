import { Link } from "react-router-dom"
import styles from './AltTodoList.module.css'



const AltTodoList = (user) => {

    console.log(user)
    return (
        <div className={styles.altcontent}>
            <div className={styles.h1div}>

                <h1 className={styles.h1header}>
                    Organize your life and work
                    <br />
                    with Detailed!
                </h1>
            </div>
            <div className={styles.buttonsdiv}>
                <div className={styles.leftbutton}>
                    <Link to='login' className={styles.login}>
                        <button type="button" class="btn btn-secondary btn-lg">Log In</button>
                    </Link>
                </div>
                <div className={styles.rightbutton}>
                    <Link to='signup' className={styles.signup}>
                        <button type="button" class="btn btn-secondary btn-lg">Sign Up</button>
                    </Link>
                </div>
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


        </div>
    )
}


export default AltTodoList