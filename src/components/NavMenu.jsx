import { NavLink } from "react-router-dom"

const NavMenu = () => {
  return (
    <nav className="container my-4">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/articoli" className="nav-link">ARTICOLI</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chi-siamo" className="nav-link">CHI SIAMO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contatti" className="nav-link">CONTATTI</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu