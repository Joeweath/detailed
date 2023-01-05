import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div className={styles.navlinks}>

          <span className={styles.lefticons}>
            <NavLink className={styles.logo} to="/"><i class="fa-solid fa-list-check fa-1xl"></i>  Detailed</NavLink>
          </span>
          <span className={styles.righticons}>   
            <NavLink className={styles.home} to="/">Todo List</NavLink>
            <NavLink className={styles.addtodo} to="/addtodo">Create Todo</NavLink>
            <p>{user.name}</p>
            <NavLink className={styles.logout} to="" onClick={handleLogout}>Logout</NavLink>
          </span>
        </div>

        :
        <div>

          <NavLink className={styles.login} to="/login"></NavLink>
          <NavLink className={styles.signup} to="/signup"></NavLink>
          
        </div>

      }
    </nav>
  )
}

export default NavBar
