
import { IGenericErrorResponse } from "../interfaces/common"
import { IGenericErrorMessage } from "../interfaces/error"

type DuplicateKeyError = {
    code: number;
    keyValue: Record<string, unknown>;
    keyPattern: Record<string, number>;
  } & Error


const handleDuplicateError = (
    error : DuplicateKeyError
  ): IGenericErrorResponse => {
    const errors: IGenericErrorMessage[] = [
        {
            path : "",
            message : error.message
        }
    ]
    const statusCode = 400
    return {
      statusCode,
      message: 'Email is already in use',
      errorMessages: errors,
    }
  }
  
  export default handleDuplicateError