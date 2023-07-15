import ApiError from "../../../errors/ApiError"
import { IUser, IUserLogin } from "./user.interface"
import { User } from "./user.model"
import httpStatus from 'http-status'
import bcrypt from 'bcrypt'

const signUpUser = async (userData : IUser) => {
    const createdUser = await User.create(userData)

    if(!createdUser) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Failed To Sign Up')
    }

    return createdUser
}

const loginUser = async (userData : IUserLogin) => {
    const {email , password} = userData
    const isUserExist = await User.findOne({email : email })

    if(!isUserExist) {
        throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist')
    }

    const isPasswordMatched = await bcrypt.compare(password, isUserExist.password)

    if(isUserExist.password && !isPasswordMatched) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect')
    }


}

export const UserService = {
    signUpUser,
    loginUser
}