import httpStatus from "http-status"
import ApiError from "../../../errors/ApiError"
import { IReadingList, ReadingList } from "./readingList.model"
import { IWishList } from "../wishList/wishList.model"


const addToReadingList = async (data : IReadingList) => {
    const isExist = await ReadingList.findOne({email : data.email, book : data.book})

    if(isExist){
      throw new ApiError(httpStatus.BAD_REQUEST, 'Book Already Added')
    }

    const result = await ReadingList.create(data)
    
    if(!result){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Add to ReadingList failed')
    }

    return result
  }
  
const getReadinglist = async (userEmail : string) => {
    const list = await ReadingList.find({email : userEmail}).populate('book')

    if(!list) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'WishList is empty')
    }
    return list
  }

const updateReadinglist = async (data : IWishList) => {
    const {email , book, ...update} = data 
    const updatedBook = await ReadingList.findOneAndUpdate({email : email, book : book}, update)

   if(!updatedBook) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed update book')
   }

   return updatedBook
  }

export const ReadingListService = {
    addToReadingList,
    getReadinglist,
    updateReadinglist
}