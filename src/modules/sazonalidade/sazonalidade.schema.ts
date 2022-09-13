import { object, string, TypeOf ,boolean} from "zod"


export const createSazonalidadeSchema = object({
  body: object({
    data: string({
      required_error:"data is required"
    }),
    description: string(),
    published: boolean(),
  }),
})

export type CreaSazonalidadeInput = TypeOf<typeof createSazonalidadeSchema>


