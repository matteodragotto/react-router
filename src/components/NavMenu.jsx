import { NavLink } from "react-router-dom"

const menuLinks = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/articoli', name: 'Articoli' },
  { id: 3, path: '/chi-siamo', name: 'Chi siamo' },
  { id: 4, path: '/contatti', name: 'Contatti' }
]

const NavMenu = () => {
  return (
    <nav className="container py-4">
      <ul className="nav">
        {menuLinks.map(link => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.path} className="nav-link">{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu