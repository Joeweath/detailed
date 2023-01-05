import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div>
          <NavLink className={styles.home} to="/"><i class="fa-solid fa-house"></i></NavLink>
          <br />
          <NavLink className={styles.addtodo} to="/addtodo">Add To-Do</NavLink>
          <br />
          <NavLink className={styles.logout} to="" onClick={handleLogout}>Logout</NavLink>
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
