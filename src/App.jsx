import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import PostsPage from "./pages/PostsPage"
import AboutPage from "./pages/AboutPage"
import ContactsPage from "./pages/ContactsPage"
import DefaultLayout from "./layouts/DefaultLayout"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/articoli" Component={PostsPage} />
          <Route path="/chi-siamo" Component={AboutPage} />
          <Route path="/contatti" Component={ContactsPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App