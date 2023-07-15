import express from 'express'
import { BookController } from './book.controller'

const router = express.Router()

router.get('/:id', BookController.getSingleBook)


router.post('/add-book', BookController.addNewBook)

router.get('/', BookController.getAllBooks)

export const BookRoutes = router