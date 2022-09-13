import express, { Response, Request } from 'express'
import validate from '../../middleware/validateRequest'

import { registerSazonalidade } from './sazonalidade.controller'
import { createSazonalidadeSchema } from './sazonalidade.schema'


const sazonalidadeRouter = express.Router()

sazonalidadeRouter.post("/", validate(createSazonalidadeSchema),registerSazonalidade)


export default sazonalidadeRouter