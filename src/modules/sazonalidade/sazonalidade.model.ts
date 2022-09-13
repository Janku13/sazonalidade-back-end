import mongoose from 'mongoose'



export interface SazonalidadeDocument extends mongoose.Document {
  user: string;
  products: string[];
  name: string;
  description: string;
  dataInicio: string;
  dataFim: string;
  dataProx: string;
  status: string;
  dataDeCadastro: string;
  createAt: Date;
  updateAt: Date;
}

const sazonalidadeSchema = new mongoose.Schema({
  user: { type: String, required: true },
  products: { type: Array, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  dataInicio: { type: String, required: true },
  dataFim: { type: String, required: true },
  dataProx: { type: String, required: true },
  status: { type: String, required: true },
  dataDeCadastro: { type: String, required: true },
}, {
  timestamps:true
})

const SazonalidadeModel = mongoose.model<SazonalidadeDocument>("Sazonalidade", sazonalidadeSchema)

export default SazonalidadeModel