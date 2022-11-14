import { useNavigate } from 'react-router-dom'

function Blog() {
  let navigate = useNavigate();
  
  let postTop = {
    color: '#ccc',
    margin: '0',
    padding: '7px 0'
  }

  let postMiddle = {
    color: '#333',
    fontSize: '18px',
    fontWeight: '600',
  }
  return (
    <div className="App">
      <div className="container">
        <h4>From Our Blog</h4>
        <div className="row">
          <div className="col-lg-4" onClick={()=> {navigate('/blog_page')}}>
            <img src='img/post-1.jpg' alt='post' style={{ width: '100%' }} />
            <p style={postTop}>Now 22,2022, 0 Comments</p>
            <div style={postMiddle}>Sed adipiscing ornare.</div>
            <p className='continue'>Continue Reading</p>
          </div>
          <div className="col-lg-4" onClick={()=> {navigate('/blog_page')}}>
            <img src='img/post-2.jpg' alt='post' style={{ width: '100%' }} />
            <p style={postTop}>Dec 12,2022, 0 Comments</p>
            <div style={postMiddle}>Fusce lacinia arcuet nulla.</div>
            <p className='continue'>Continue Reading</p>
          </div>
          <div className="col-lg-4" onClick={()=> {navigate('/blog_page')}}>
            <img src='img/post-3.jpg' alt='post' style={{ width: '100%' }} />
            <p style={postTop}>Dec 19,2022, 0 Comments</p>
            <div style={postMiddle}>Quisque volutpat mattis eros.</div>
            <p className='continue'>Continue Reading</p>
          </div>
        </div>
        <button id='view-button'>View More Articles →</button>
      </div>
    </div>
  )
}

export default Blog;