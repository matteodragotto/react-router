import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center">I miei articoli</h1>
        <div className="card">
          <div className="card-body">
            <ul className="list-group my-5">
              {posts.map(post => (
                <li key={post.id} className="list-group-item d-flex justify-content-between">
                  <span className="fs-5">{post.title}</span>
                  <Link className="btn btn-primary" to={`/post-dettagliato/${post.id}`}>Vai all'articolo</Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>




    </>
  )
}

export default PostsPage