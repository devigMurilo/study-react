import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

export function PostsTotal() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <Container className="my-4">
      <p>Quantidade de posts: {posts.length}</p>
    </Container>
  )
}