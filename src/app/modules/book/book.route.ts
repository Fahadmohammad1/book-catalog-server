import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()

router.post('/add-book', BookController.addNewBook)

export const BookRoutes = router