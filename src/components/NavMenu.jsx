import { NavLink } from "react-router-dom"

const menuLinks = [
  { id: 1, name: 'home' },
  { id: 2, name: 'articoli' },
  { id: 3, name: 'chi-siamo' },
  { id: 4, name: 'contatti' }
]

const NavMenu = () => {
  return (
    <nav className="container py-4">
      <ul className="nav">
        {menuLinks.map(link => (
          <li key={link.id} className="nav-item">
            <NavLink to={link.name} className="nav-link">{link.name.toUpperCase()}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu