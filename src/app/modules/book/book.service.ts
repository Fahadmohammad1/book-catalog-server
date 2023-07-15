import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IBook, IBookFilters } from './book.interface'
import { Book } from './book.model'
import { bookSearchableFields } from './book.constant'

const addNewBook = async (bookData: IBook): Promise<IBook | null> => {
  const addedBook = await Book.create(bookData)

  if (!addedBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to add book')
  }

  return addedBook
}

const getAllBooks = async (filters: IBookFilters) => {
  const { searchTerm, ...filtersData } = filters

  const conditions = []
  if (searchTerm) {
    conditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    conditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const books = await Book.find({$and : conditions})

  if (!books) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get books')
  }

  return books
}

export const BookService = {
  addNewBook,
  getAllBooks,
}
