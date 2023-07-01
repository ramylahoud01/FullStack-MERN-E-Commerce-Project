import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
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
    type: [String],
    required: false,
  },
  creator: {
    type: Schema.Types.ObjectId,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);
