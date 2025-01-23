import axios from "axios"
import { useState, useEffect } from "react"

const PostsPage = () => {
  const postApiUrl = 'http://localhost:3001'

  const basicPostForm = {
    title: '',
    content: '',
    image: '',
    tags: ''
  }

  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(basicPostForm)

  const fetchPosts = () => {

    axios.get(`${postApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento dei post:', error)
      })

  }

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
    console.log(formData);
  }

  const deletePostHandler = (id) => {
    axios.delete(`${postApiUrl}/posts/${id}`)
      .then(res => {
        fetchPosts()
      })
      .catch(error => {
        console.error('Non è stato possibile cancellare il post:', error)
      })

  }

  const addPostHandler = (e) => {
    e.preventDefault();

    const newPostTags = formData.tags.split(',')

    const newPost = { ...formData, tags: newPostTags }

    axios.post(`${postApiUrl}/posts`, newPost)
      .then(res => {
        setPosts(res.data)
        setFormData(basicPostForm)
        console.log(res.data)
      })
      .catch(error => {
        console.error('Non è stato possibile aggiungere il post:', error)
      })

  }


  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">Il mio blog</h1>
        <div className="row">
          {posts.map(post => (
            <div className="col-12 col-md-4" key={post.id}>
              <div className="card h my-2">
                <img src={post.image} alt={post.title} />
                <div className="card-body text-overflow">
                  <h5 className="card-text">
                    {post.title}
                  </h5>
                  <p className="card-text">
                    {post.content}
                  </p>
                  <h6>Tag:</h6>
                  <p className="card-text">{post.tags.join(', ')}</p>
                  <div className="btn btn-danger" onClick={() => deletePostHandler(post.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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


      </div>
    </>
  )
}

export default PostsPage