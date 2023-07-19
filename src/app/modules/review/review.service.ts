import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import { IReview } from "./review.interface"
import { Review } from "./review.model"


const postReview = async (review : IReview) => {
    
    const result = await Review.create(review)
    
    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to add review')
    }

    return result
  }
  
const getReview = async (bookId : string) => {
    const review = await Review.find({bookId : bookId})

    if(!review) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Review not found')
    }
    return review
  }

export const ReviewService = {
    postReview,
    getReview
}