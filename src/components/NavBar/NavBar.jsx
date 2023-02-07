import { NavLink } from 'react-router-dom'
import Logo from '../../assets/branding/logo.png'

const NavBar = ({ user, handleLogout }) => {
  
  const publicLinks = (
    <ul className='m-0 w-full flex list-none font-bold items-center justify-end pl-0'>
      <li className='ml-8 sm:text-base'><NavLink to='/login'>LOG IN</NavLink></li>
      <li className='ml-8 sm:text-base'><NavLink to='/signup'>SIGN UP</NavLink></li>
    </ul>
  )

  const protectLinks = (
    <ul className='m-0 w-full flex list-none font-bold items-center justify-end pl-0'>
      <li className='ml-8 sm:text-base'><NavLink to='/logout' onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )


  return (
    <nav className='top-0 z-0 w-full h-20 flex fixed py-3.5 px-6 items-center bg-white border-b border-[rgb(200,200,200)]'>
      <NavLink className='w-16' to={'/'}><img src={Logo}  alt='A plane over the ocean' /></NavLink>
      {user ? protectLinks : publicLinks}
    </nav>
  )
}

export default NavBar
