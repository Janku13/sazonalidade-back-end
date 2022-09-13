import express, { Request,Response} from 'express'

  const api = express.Router()
  api.get("/healthcheck", (req:Request,res:Response) => res.sendStatus(200))
  // app.post("/api/users", validate(createUserSchema), createUserHandler)

export default api