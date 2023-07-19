import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse"
import httpStatus from "http-status"
import { WishListService } from "./wishList.service"

const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await WishListService.addToWishlist(data)
   
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Review Added successfully!',
       data: result,
     })
   })
 
 const getWishlist = catchAsync(async (req: Request, res: Response) => {
     
   
     sendResponse(res, {
       statusCode: httpStatus.OK,
       success: true,
       message: 'Wishlist retrieved successfully!',
       data: '',
     })
   })

export const ReviewController = {
   addToWishlist,
   getWishlist
}