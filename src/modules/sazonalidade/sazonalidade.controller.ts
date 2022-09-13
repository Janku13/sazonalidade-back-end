import {Request,Response} from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreaSazonalidadeInput } from './sazonalidade.schema'

export async function registerSazonalidade(req: Request<{}, {}, CreaSazonalidadeInput['body']>, res: Response) {
  
  const { data, description, published } = req.body

}