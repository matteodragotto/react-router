import axios from "axios"
import { useState, useEffect } from "react"

const PostsPage = () => {
  const postApiUrl = 'http://localhost:3001'


  const [posts, setPosts] = useState([])


  const fetchPosts = () => {

    axios.get(`${postApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento dei post:', error)
      })

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


    </>
  )
}

export default PostsPage