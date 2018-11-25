import React from 'react'

const url = 'https://www.reddit.com/r/dogs.json'

const getData = () => fetch(url)
  .then(res => res.json())
  .then(data => Promise.resolve(data))
  .catch(err => Promise.reject(err))

const TestPage = () => (<h2>Test page</h2>)

getData().then(data => {
  console.log('data:',data)
}, err => { throw new Error(err) })

export default TestPage