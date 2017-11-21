import { GET_ALL_POSTS, GET_POST, GET_POSTS_BY_CATEGORY, GET_POPULAR_POSTS } from '../actions/posts'

export const posts = (state = { items: [], item: '' }, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    case GET_POST:
      return Object.assign({}, state, {
        item: action.post
      })
    case GET_POSTS_BY_CATEGORY:
      return Object.assign({}, state, {
        items: action.posts
      })
    default:
      return state
  }
}

export const popularPosts = (state = { items: [] }, action) => {
  switch (action.type) {
    case GET_POPULAR_POSTS:
      return Object.assign({}, state, {
        items: action.posts
      })
    default:
      return state
  }
}
