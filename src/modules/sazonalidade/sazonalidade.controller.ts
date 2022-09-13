import {Request,Response} from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreaSazonalidadeInput } from './sazonalidade.schema'
import { createSazonalidade, finalAllSazonalidade } from './sazonalidade.service'

export async function registerSazonalidade(req: Request<{}, {}, CreaSazonalidadeInput['body']>, res: Response) {  
  const body = req.body
  const sazonalidade = await createSazonalidade(body)
  try {
   return res.status(StatusCodes.CREATED).send(sazonalidade)
  } catch (e:any) {
     if (e.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("User already exists")
    }
    return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("e.message")
  }
}
export async function  fetchSazonalidades(_:Request, res:Response) {
  try {
    const sazonalidades = await finalAllSazonalidade();
    return res.status(StatusCodes.OK).send(sazonalidades)
  } catch (e) {
    return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("e.message")   
  }

}