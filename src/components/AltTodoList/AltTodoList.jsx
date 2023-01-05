import { Link } from "react-router-dom"



const AltTodoList = ( user ) => {

    console.log(user)
    return (
        <div>

            <h1>
                Organize your life and work
                <br />
                with TO-DO
            </h1>
            <Link to='login'>
                <button>Log In</button>
            </Link>
            <Link to='signup'>
                <button>Sign Up</button>
            </Link>

        </div>
    )
}


export default AltTodoList