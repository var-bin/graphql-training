import { Movie } from '../models';

export const resolvers = {
  Query: {
    async getMovies() {
      try {
        const allMovies = await Movie.find(); // Mongoose Model with find method

        return allMovies;
      } catch (error) {
        throw new Error('Method: `getMovies`\n' + error);
      }
    }
  },
};
