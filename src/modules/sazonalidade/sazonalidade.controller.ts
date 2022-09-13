import {Request,Response} from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreaSazonalidadeInput } from './sazonalidade.schema'
import { createSazonalidade } from './sazonalidade.service'

export async function registerSazonalidade(req: Request<{}, {}, CreaSazonalidadeInput['body']>, res: Response) {  
  const body = req.body
  console.log(body)
  const sazonalidade = await createSazonalidade(body)
  try {
    console.log(sazonalidade)
    return res.send(sazonalidade)
  } catch (e) {
    return res.sendStatus(400)
  }
  
}