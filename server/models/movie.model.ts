import { model, Schema } from 'mongoose';

const movieSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  genre: String,
  directorId: String,
});

/**
 * Need to define the 3d parameter because
 * Mongoose always returning an empty array
 * Solution: https://stackoverflow.com/questions/14183611/mongoose-always-returning-an-empty-array-nodejs
 */

export const Movie = model('Movies', movieSchema, 'Movies');
