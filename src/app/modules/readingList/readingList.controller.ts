import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import httpStatus from "http-status"
import { ReadingListService } from "./readingList.service"


const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await ReadingListService.addToReadingList(data)
   
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Successfully added to reading list',
       data: result,
     })
   })
 
 const getWishlist = catchAsync(async (req: Request, res: Response) => {
    const {email} = req.params
  const result = await ReadingListService.getReadinglist(email)
   
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Reading list retrieved successfully!',
       data: result,
     })
   })

 const updateWishlist = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
  const result = await ReadingListService.updateReadinglist(data)
   
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Book updated successfully!',
       data: result,
     })
   })

export const WishListController = {
   addToWishlist,
   getWishlist,
   updateWishlist
}