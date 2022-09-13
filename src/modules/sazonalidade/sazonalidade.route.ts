import express from 'express'
import validate from '../../middleware/validateRequest'

import { registerSazonalidade,fetchSazonalidades,getSazonalidade } from './sazonalidade.controller'
import { createSazonalidadeSchema, updateSazonalidadeParams } from './sazonalidade.schema'


const sazonalidadeRouter = express.Router()

sazonalidadeRouter.post("/", validate(createSazonalidadeSchema),registerSazonalidade)
sazonalidadeRouter.get("/fetch-all-sazonalidades",fetchSazonalidades)
sazonalidadeRouter.get("/get-sazonalidade/:sazonalidadeId", validate(updateSazonalidadeParams), getSazonalidade)



export default sazonalidadeRouter