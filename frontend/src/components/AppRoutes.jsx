import { Route, Routes } from "react-router-dom"    
import PostsList from "./PostsList"
import PostDetail from "./PostDetail"

const AppRoutes = () => {
  return (
    <div>
      <Routes>        
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/new" element={<h1>new post</h1>} />
      </Routes>
    </div>
  )
}

export default AppRoutes
