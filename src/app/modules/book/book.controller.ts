import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import { BookService } from "./book.service"
import httpStatus from "http-status"

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
  
    const result = await BookService.getAllBooks()
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Books retrieved successfully!',
      data: result,
    })
  })

export const BookController = {
    addNewBook,
    getAllBooks
}