// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BlogList from './pages/BlogList/BlogList'
import BlogDetails from './pages/BlogDetails/BlogDetails'
import NewBlog from './pages/NewBlog/NewBlog'
import EditBlog from './pages/EditBlog/EditBlog'
import EditComment from './pages/EditComment/EditComment'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as blogService from './services/blogService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddBlog = async (blogData) => {
    const newBlog = await blogService.create(blogData)
    setBlogs([newBlog, ...blogs])
    navigate('/blogs')
  }

  const handleUpdateBlog = async (blogData) => {
    const updatedBlog = await blogService.update(blogData)
    setBlogs(blogs.map((b) => blogData._id === b._id ? updatedBlog : b))
    navigate('/blogs')
  }

  const handleDeleteBlog = async (id) => {
    const deleteBlog = await blogService.deleteBlog(id)
    setBlogs(blogs.filter(b => b._id !== deleteBlog._id))
  }

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const data = await blogService.index()
      setBlogs(data)
    }
    if (user) fetchAllBlogs()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs'
          element={
            <ProtectedRoute user={user}>
              <BlogList blogs={blogs} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/:id'
          element={
            <ProtectedRoute user={user}>
              <BlogDetails user={user} handleDeleteBlog={handleDeleteBlog} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/new'
          element={
            <ProtectedRoute user={user}>
              <NewBlog handleAddBlog={handleAddBlog} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/:id/edit'
          element={
            <ProtectedRoute user={user}>
              <EditBlog handleUpdateBlog={handleUpdateBlog} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/:blogId/comments/:commentId'
          element={
            <ProtectedRoute user={user}>
              <EditComment />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
