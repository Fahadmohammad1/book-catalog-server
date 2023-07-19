import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Request, Response } from "express";
import { ReviewService } from "./review.service";

const postReview = catchAsync(async (req: Request, res: Response) => {
     const reviewData = req.body
      const result = await ReviewService.postReview(reviewData)
    
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review Added successfully!',
        data: result,
      })
    })
  
  const getReview = catchAsync(async (req: Request, res: Response) => {
      const bookId = req.params.id
     
      const result = await ReviewService.getReview(bookId)
    
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review retrieved successfully!',
        data: result,
      })
    })

export const ReviewController = {
    postReview,
    getReview
}