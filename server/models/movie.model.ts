import mongoose, { Schema } from 'mongoose';

const movieSchema: Schema = new Schema({
  name: String,
  age: Number,
  directorId: String,
});

export const Movie = mongoose.model('Movies', movieSchema);
