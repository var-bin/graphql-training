import mongoose, { Schema } from 'mongoose';

const directorSchema: Schema = new Schema({
  name: String,
  age: Number,
});

export const Director = mongoose.model('Directors', directorSchema);
