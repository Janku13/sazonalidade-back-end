import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import SazonalidadeModel, { SazonalidadeDocument } from "./sazonalidade.model"
import { CreaSazonalidadeInput } from "./sazonalidade.schema";

export async function createSazonalidade(input :CreaSazonalidadeInput['body']) {   
   return await SazonalidadeModel.create(input)
}
export async function finalAllSazonalidade() {
   return SazonalidadeModel.find().lean()
}
export async function findSazonalidade(query:FilterQuery<SazonalidadeDocument>,option:QueryOptions = {lean:true}) {
  return SazonalidadeModel.findOne(query, {}, option)
  //segundo arg para rejections
}