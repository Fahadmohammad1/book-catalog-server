import express from 'express'
import { BookController } from './book.controller'
import auth from '../../middleware/auth'

const router = express.Router()

router.get('/:id', BookController.getSingleBook)


router.post('/add-book', BookController.addNewBook)

router.get('/', BookController.getAllBooks)


router.patch('/:id',auth(), BookController.updateBook)


router.delete('/:id',auth(), BookController.deleteBook)

export const BookRoutes = router