import { Request, Response, NextFunction, RequestHandler } from "express"
import { validationResult, query } from "express-validator"

export const validateProductSearchQuery = () => {
    const validators: any[] = []
    validators.push(
      query("search")
        .optional()
        .not()
        .isEmpty()
        .withMessage('Must not be empty')
    )
    validators.push(applyValidationMiddleware())
    return validators
  }
  
export function applyValidationMiddleware(): RequestHandler {
    return (req: Request, _res: Response, next: NextFunction) => {
      const errors = validationResult(req)
      if (errors.isEmpty()) {
        return next()
      } else {
        const error = errors.array().map(error => {
            return {
              param: error.param,
              issue: error.msg,
              location: error.location,
            }
          })
        return next(Error(JSON.stringify(error)))
      }
    }
  }