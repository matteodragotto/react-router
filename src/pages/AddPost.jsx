import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddPost = () => {
  const postApiUrl = 'http://localhost:3001'

  const basicPostForm = {
    title: '',
    content: '',
    image: '',
    tags: ''
  }

  const navigate = useNavigate()
  const [formData, setFormData] = useState(basicPostForm)

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
    console.log(formData);
  }

  const addPostHandler = (e) => {
    e.preventDefault();

    const newPostTags = formData.tags.split(',')

    const newPost = { ...formData, tags: newPostTags }

    axios.post(`${postApiUrl}/posts`, newPost)
      .then(res => {
        setFormData(basicPostForm)
        navigate('/articoli')
      })
      .catch(error => {
        console.error('Non è stato possibile aggiungere il post:', error)
      })

  }

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h3 className="card-text">Inserisci un nuovo post</h3>
          <form action="#">
            <div className="mb-2">
              <label htmlFor="name">Titolo del post</label>
              <input
                id='name'
                type="text"
                name='title'
                className='form-control'
                placeholder='Inserisci qui il titolo'
                value={formData.title}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="content">Commento del post</label>
              <input
                id='content'
                type="text"
                name='content'
                className='form-control'
                placeholder='Inserisci qui il commento'
                value={formData.content}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="image">Immagine</label>
              <input
                id='image'
                type="url"
                name='image'
                className='form-control'
                placeholder='Inserisci qui la url della tua immagine'
                value={formData.image}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="tags">Tags</label>
              <input
                id='tags'
                type="text"
                name='tags'
                className='form-control'
                placeholder='Inserisci qui dei tag per il tuo post'
                value={formData.tags}
                onChange={changeHandler}
              />
            </div>

            <button type="submit" className="btn btn-primary" onClick={addPostHandler}>Carica nuovo post</button>

          </form>
        </div>
      </div>


    </div >
  )
}

export default AddPost