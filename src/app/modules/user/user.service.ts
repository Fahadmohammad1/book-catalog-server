import ApiError from "../../../errors/ApiError"
import { IUser } from "./user.interface"
import { User } from "./user.model"
import httpStatus from 'http-status'

const signUpUser = async (userData : IUser) => {
    const createdUser = await User.create(userData)

    if(!createdUser) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Sign Up')
    }

    return createdUser
}

export const UserService = {
    signUpUser
}