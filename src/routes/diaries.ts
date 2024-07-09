import express from 'express'
import * as diaryService from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id))
  if (diary) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addDiaryEntry = diaryService.addEntry(newDiaryEntry)
    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
