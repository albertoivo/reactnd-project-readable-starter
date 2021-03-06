import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

const PopularPosts = React.memo(function PopularPosts({ popPosts }) {
  return <div className="card margin">
    <div className="container padding">
      <h4>
        <FaHeart/> Popular Posts
      </h4>
    </div>
    <ul className="ul hoverable white">
      {popPosts.map(post => (
        <li key={post.id} className="padding-16">
          <Link to={`/${post.category}/${post.id}`}>
            <span className="large">{post.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
})

const mapStateToProps = state => ({
  popPosts: state.popularPosts.items || []
})

export default connect(mapStateToProps)(PopularPosts)
