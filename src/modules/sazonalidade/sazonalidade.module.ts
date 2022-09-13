import mongoose from 'mongoose'


export interface SazonalidadeDocument extends mongoose.Document {
  title: String;
  description: string;
  price: number;
  image: string;
  createAt: Date;
  updateAt: Date;
}

const sazonalidadeSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password:{type:String,required:true}
}, {
  timestamps:true
})

const SazonalidadeModel = mongoose.model<SazonalidadeDocument>("Sazonalidade", sazonalidadeSchema)
export default SazonalidadeModel