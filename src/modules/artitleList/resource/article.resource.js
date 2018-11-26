export const GET = (id, cb) => {
  fetch(`http://localhost:8000/article/${id ? id : ''}`, {method: 'GET'})
    .then(r => r.json())
    .then(data => cb(data))
}