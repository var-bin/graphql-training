import { model, Schema } from 'mongoose';

const directorSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = model('Directors', directorSchema);
