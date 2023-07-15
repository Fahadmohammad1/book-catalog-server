import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import { IBook } from "./book.interface"
import { Book } from "./book.model"


const addNewBook = async (bookData: IBook) : Promise<IBook | null> => {
    
    const addedBook = await Book.create(bookData)

    if(!addedBook) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to add book')
    }
    
    return addedBook
  }

const getAllBooks = async () => {
    const books = await Book.find({})

    if(!books) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get books')
    }

    return books
}

export const BookService = {
    addNewBook,
    getAllBooks
}