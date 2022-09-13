import SazonalidadeModel from "./sazonalidade.model"
import { CreaSazonalidadeInput } from "./sazonalidade.schema";

export async function createSazonalidade(input :CreaSazonalidadeInput['body']) {   
   return await SazonalidadeModel.create(input)
}
export async function finalAllSazonalidade() {
   return SazonalidadeModel.find().lean()
}