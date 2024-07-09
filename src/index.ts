import express from 'express'
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // transforma el body request en json

app.get('/api/v1', (_, res) => {
  res.send('Hi there! This is the API v1.0.0')
})

app.use('/api/v1/diaries', diaryRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
