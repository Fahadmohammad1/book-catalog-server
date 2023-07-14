import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const signUpUser = catchAsync(async (req: Request, res: Response) => {
  const userData = req.body

  const result = await UserService.signUpUser(userData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sign Up Successfull!',
    data: result,
  })
})

export const UserController = {
  signUpUser,
}
