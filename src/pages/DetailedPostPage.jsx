import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const DetailedPostPage = () => {

  const { id } = useParams()
  const postApiUrl = 'http://localhost:3001'
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [showButton, setShowButton] = useState(true)

  const fetchPost = () => {
    axios.get(`${postApiUrl}/posts/${id}`)
      .then(res => {
        setPost(res.data)
      })
      .catch(error => {
        console.error('Errore durante il caricamento dei post:', error)
      })

  }


  const deletePostHandler = () => {
    axios.delete(`${postApiUrl}/posts/${id}`)
      .then(res => {
        fetchPost()
        navigate('/articoli')
      })
      .catch(error => {
        console.error('Non è stato possibile cancellare il post:', error)
      })

  }

  const goNext = () => {
    navigate(`/post-dettagliato/${post?.id + 1}`)
  }

  const goPrev = () => {
    navigate(`/post-dettagliato/${post?.id - 1}`)
  }


  useEffect(() => {
    fetchPost()
  }, [id])

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12" key={post?.id}>
          <div className="card d-flex flex-row my-2">
            <img className="img-fluid" src={post?.image} alt={post?.title} />
            <div className="card-body w-70 text-overflow">
              <h5 className="card-text">
                {post?.title}
              </h5>
              <p className="card-text">
                {post?.content}
              </p>
              <h6>Tag:</h6>
              <p className="card-text">{post?.tags.join(', ')}</p>
              <div className="container d-flex justify-content-between">
                <div className="container">
                  <button type="button" className="btn btn-primary m-1" onClick={goPrev}>Vai all'articolo precedente</button>
                  <button type="button" className="btn btn-primary m-1" onClick={goNext}> Vai all'articolo successivo</button>
                </div>
                <div className="btn btn-danger" onClick={deletePostHandler}>
                  <i className="fa-solid fa-trash-can"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DetailedPostPage