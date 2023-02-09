import { useState } from "react"
import styles from './NewBlog.module.css'

const NewBlog = (props) => {

  const [form, setForm] = useState({
    title: '',
    text: '',
    category: 'Adventure'
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name] : target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBlog(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
				<textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={form.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="FAA">FAA</option>
          <option value="Event">Event</option>
          <option value="Advice">Advice</option>
          <option value="Milestone">Milestone</option>
          <option value="Adventure">Adventure</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBlog