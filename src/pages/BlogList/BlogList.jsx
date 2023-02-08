import styles from './BlogList.module.css'

const BlogList = (props) => {
  console.log('BLOGLIST props', props)
  return (
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <p key={blog._id}>
          {blog.title}
        </p>
      ))}
    </main>
  )
}

export default BlogList