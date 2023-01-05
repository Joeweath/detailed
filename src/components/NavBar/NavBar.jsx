import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import {FaHouse} from 'react-icons/fa'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <div>
          <NavLink className={styles.home} to="/"><FontAwesomeIcon icon="fa-solid fa-house" /></NavLink>
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
