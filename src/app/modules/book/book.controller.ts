import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { BookService } from "./book.service"
import httpStatus from "http-status"
import { bookFilterableFields } from "./book.constant"
import pick from "../../../shared/pick"
import ApiError from "../../../errors/ApiError"
import { JwtPayload } from "jsonwebtoken"
import { Book } from "./book.model"

const addNewBook = catchAsync(async (req: Request, res: Response) => {
    const {...bookData} = req.body
  
    const result = await BookService.addNewBook(bookData)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book added successfully!',
      data: result,
    })
  })

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
    const result = await BookService.getAllBooks(filters)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books retrieved successfully!',
      data: result,
    })
  })

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const result = await BookService.getSingleBook(id)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book retrieved successfully!',
      data: result,
    })
  })

const updateBook = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const {userEmail} = req.user as JwtPayload
    const {...bookData} = req.body

    const availableBook = await Book.findOne({_id : id})

    if(availableBook && userEmail !== availableBook?.addedBy) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden Access')
    }

    const result = await BookService.updateBook(id, bookData)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book updated successfully!',
      data: result,
    })
  })

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params
    const {userEmail} = req.user as JwtPayload

    const availableBook = await Book.findOne({_id : id})

    if(availableBook && userEmail !== availableBook?.addedBy) {
      throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden Access')
    }

    const result = await BookService.deleteBook(id)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book deleted successfully!',
      data: result,
    })
  })

export const BookController = {
    addNewBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook
}