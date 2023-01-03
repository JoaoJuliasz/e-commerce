import { Request, Response } from 'express'

export type Params = { req: Request, res: Response }

export type QueryError = { error: string, message: string }