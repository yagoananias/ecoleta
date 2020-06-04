import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('Listagem de usuários')

  response.send('text here')
})

app.listen(3333)
