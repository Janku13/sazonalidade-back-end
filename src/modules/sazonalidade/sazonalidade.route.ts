import express from 'express'
import validate from '../../middleware/validateRequest'

import { registerSazonalidade,fetchSazonalidades } from './sazonalidade.controller'
import { createSazonalidadeSchema } from './sazonalidade.schema'


const sazonalidadeRouter = express.Router()

sazonalidadeRouter.post("/", validate(createSazonalidadeSchema),registerSazonalidade)
sazonalidadeRouter.get("/",fetchSazonalidades)


export default sazonalidadeRouter