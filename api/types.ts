import { Request } from 'express'

export interface RequestWithProps extends Request {
  user: string
}
