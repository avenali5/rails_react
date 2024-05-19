import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Posts</Link>
      {" | "}
      <Link to="/new">New post</Link>
    </nav>
  )
}

export default NavBar
