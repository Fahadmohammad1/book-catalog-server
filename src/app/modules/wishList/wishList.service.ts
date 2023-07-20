import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import { IWishList, WishList } from "./wishList.model"


const addToWishlist = async (data : IWishList) => {
    const isExist = await WishList.findOne({email : data.email, book : data.book})

    if(isExist){
      throw new ApiError(httpStatus.BAD_REQUEST, 'Book Already Added')
    }

    const result = await WishList.create(data)
    
    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Add to wishlist failed')
    }

    return result
  }
  
const getWishlist = async (userEmail : string) => {
    const list = await WishList.find({email : userEmail}).populate('book')

    if(!list) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'WishList is empty')
    }
    return list
  }

export const WishListService = {
    addToWishlist,
    getWishlist
}