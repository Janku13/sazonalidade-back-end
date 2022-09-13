import SazonalidadeModel from "./sazonalidade.model"
import { CreaSazonalidadeInput } from "./sazonalidade.schema";

export async function createSazonalidade(input :CreaSazonalidadeInput['body']) {   console.log(input)
   return await SazonalidadeModel.create(input)
}