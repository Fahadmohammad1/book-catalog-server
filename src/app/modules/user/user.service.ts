import ApiError from "../../../errors/ApiError"
import { IUser } from "./user.interface"
import { User } from "./user.model"
import httpStatus from 'http-status'

const signUpUser = async (userData : IUser) => {
    const createdUser = await User.create(userData)

    const isUserExist = await User.findOne({email : userData.email})
    if(isUserExist){
        throw new ApiError(httpStatus.CONFLICT, 'User already exist, Please Login')
    }

    if(!createdUser) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Sign Up')
    }

    return createdUser
}

export const UserService = {
    signUpUser
}