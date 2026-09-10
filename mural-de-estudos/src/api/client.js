const api = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
  const response = await fetch(`${api}/posts`)
  return response.json()
}