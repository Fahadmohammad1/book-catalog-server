import express from 'express'
import { ReadingListController } from './readingList.controller'

const router = express.Router()

router.get('/:email', ReadingListController.getReadingList)

router.patch('/:email', ReadingListController.updateReadinglist)

router.post('/add', ReadingListController.addToReadingList)

export const ReadingListRoutes = router