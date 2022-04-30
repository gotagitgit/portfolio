import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav id="nav">
      <ul>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
      </ul>
    </nav>
  )
}
