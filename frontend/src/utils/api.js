import uuidv1 from 'uuid/v1'

const URL_API = 'http://localhost:3001'

// const token = 'whatever-you-want'

// Can't use localStorage with Jest Test
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8)
}

const headers = {
  Accept: 'application/json',
  Authorization: token,
  'Content-Type': 'application/json'
}

export const getAllPosts = () =>
  fetch(`${URL_API}/posts`, { headers }).then(res => res.json())

export const getPopularPosts = () =>
  fetch(`${URL_API}/posts`, { headers }).then(res => res.json())

export const getPostById = postId =>
  fetch(`${URL_API}/posts/${postId}`, { headers }).then(res => res.json())

export const getCommentsByPost = postId =>
  fetch(`${URL_API}/posts/${postId}/comments`, { headers }).then(res =>
    res.json()
  )

export const getPostsByCategory = category =>
  fetch(`${URL_API}/${category}/posts`, { headers }).then(res => res.json())

export const getAllCategories = () =>
  fetch(`${URL_API}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const addCommentPost = (body, author, parentId) => {
  const payload = {
    id: uuidv1(),
    timestamp: Date.now(),
    body,
    author,
    parentId
  }
  return fetch(`${URL_API}/comments`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const addPost = (title, body, author, category) => {
  const payload = {
    id: uuidv1(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }
  return fetch(`${URL_API}/posts`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const updatePost = (title, body, id) => {
  const payload = {
    title,
    body,
    excerpt: body.length > 100 ? body.substr(0 ,100).trim() : body
  }
  return fetch(`${URL_API}/posts/${id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const votePost = (vote, postId) => {
  const payload = {
    option: vote
  }
  return fetch(`${URL_API}/posts/${postId}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const deletePost = postId => {
  return fetch(`${URL_API}/posts/${postId}`, {
    headers,
    method: 'DELETE'
  }).then(res => res.json())
}

export const voteComment = (vote, id) => {
  const payload = {
    option: vote
  }
  return fetch(`${URL_API}/comments/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}

export const deleteComment = commentId => {
  return fetch(`${URL_API}/comments/${commentId}`, {
    headers,
    method: 'DELETE'
  }).then(res => res.json())
}

export const updateComment = (body, id) => {
  const payload = {
    timestamp: Date.now(),
    body
  }
  return fetch(`${URL_API}/comments/${id}`, {
    headers,
    method: 'PUT',
    body: JSON.stringify(payload)
  }).then(res => res.json())
}
