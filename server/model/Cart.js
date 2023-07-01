import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    title: {
        type: String,
        required: false,
      },
      content: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      sousCategorie: {
        type: String,
        required: false,
      },
      onSale: {
        type: String,
        required: false,
      },
      values: {
        type: String,
        required: true,
      },
      quantity:{
        type:Number,
        required:true
      },
      creator:{
        type:Schema.Types.ObjectId,
        required:true
      }
    },{timestamps:true })

export default mongoose.model('Cart', CartSchema);