import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.png'

const NavBar = ({ user, handleLogout }) => {
  
  const publicLinks = (
    <ul>
      <li><NavLink to='/login'>LOG IN</NavLink></li>
      <li ><NavLink to='/signup'>SIGN UP</NavLink></li>
    </ul>
  )

  const protectLinks = (
    <ul>
      <li><NavLink to='/blogs'>BLOGS</NavLink></li>
      <li><NavLink to='/logout' onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )


  return (
    <nav className={styles.container}>
      <NavLink to={'/'}><img src={Logo}  alt='A plane over the ocean' /></NavLink>
      {user ? protectLinks : publicLinks}
    </nav>
  )
}

export default NavBar
