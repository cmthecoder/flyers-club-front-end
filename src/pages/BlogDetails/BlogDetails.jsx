import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './BlogDetails.module.css'

import * as blogService from '../../services/blogService'

import Loading from '../Loading/Loading'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const BlogDetails = (props) => {

  const { id } = useParams()
  const [blog, setBlogs] = useState(null)

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await blogService.show(id)
      setBlogs(data)
    }
    fetchBlog()
  }, [id])

    if (!blog) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{blog.category.toUpperCase()}</h3>
          <h1>{blog.title}</h1>
          <span>
            <AuthorInfo content={blog} />
          </span>
        </header>
        <p>{blog.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default BlogDetails