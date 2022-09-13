import mongoose from 'mongoose'



export interface SazonalidadeDocument extends mongoose.Document {
  data: string;
  description: string;
  published: boolean;
  createAt: Date;
  updateAt: Date;
}

const sazonalidadeSchema = new mongoose.Schema({
  data: { type: String, required: true },
  description: { type: String, required: true },
  published:{type:Boolean,required:true}
}, {
  timestamps:true
})

const SazonalidadeModel = mongoose.model<SazonalidadeDocument>("Sazonalidade", sazonalidadeSchema)
export default SazonalidadeModel