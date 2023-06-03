import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = evt => {
    evt.preventDefault()
    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => setIsPending(false))

    navigate('/')
  }

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={evt => setBody(evt.target.value)}></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={evt => setAuthor(evt.target.value)}>
          <option value='Mario'>Mario</option>
          <option value='Luigi'>Luigi</option>
          <option value='Bowser'>Bowser</option>
          <option value='Yoshi'>Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create
