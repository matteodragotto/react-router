import { Outlet } from "react-router-dom"
import NavMenu from "../components/NavMenu"
const DefaultLayout = () => {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default DefaultLayout