import React from 'react'
import { Link } from 'react-router-dom'

const AddPostButton = () => (
  <div className="container">
    <Link to='/posts' className="addPost">
      <b>Add a Post</b>
    </Link>
  </div>
)

export default AddPostButton