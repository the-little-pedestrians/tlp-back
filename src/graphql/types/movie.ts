import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql'

import { getAll, getById, getInit } from '../resolvers/movie.resolver'

export const movieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'Movie type',
  fields: () => ({
    _id: {
      type: GraphQLString,
      description: 'The mongo id'
    },
    homepage: {
      type: GraphQLString,
      description: 'The homepage url'
    },
    original_title: {
      type: GraphQLString,
      description: 'Movie\'s original title'
    },
    title: {
      type: GraphQLString,
      description: 'Movie\'s title'
    },
    poster_path: {
      type: GraphQLString,
      description: 'Movie\'s posterpath'
    },
    genres: {
      type: GraphQLString,
      description: 'Movie\'s genres'
    },
    overview: {
      type: GraphQLString,
      description: 'Movie\'s overview'
    },
    production_companies: {
      type: GraphQLString,
      description: 'Movie\'s overview'
    },
    release_date: {
      type: GraphQLString,
      description: 'Movie\'s overview'
    },
    runtime: {
      type: GraphQLString,
      description: 'Movie\'s duration'
    },
    tagline: {
      type: GraphQLString,
      description: 'Movie\'s punchline'
    },
    vote_average: {
      type: GraphQLFloat,
      description: 'Movie\'s punchline'
    }
  })
})

const query = {
  movies: {
    type: new GraphQLList(movieType),
    args: {
      limit: {
        description: 'limit items in the results',
        type: GraphQLInt
      }
    },
    resolve: (root, { limit }) => getAll(limit)
  },
  movieById: {
    type: movieType,
    args: {
      id: {
        description: 'find by id',
        type: GraphQLString
      }
    },
    resolve: (root, { id }) => getById(id)
  },
  getInitMovies: {
    type: new GraphQLList(movieType),
    args: {
      limit: {
        description: 'limit items in the result',
        type: GraphQLInt
      }
    },
    resolve: (root, { limit }) => getInit(limit)
  }
}
const mutation = {}

const subscription = {}

export const MovieSchema = {
  query,
  mutation,
  subscription,
  types: [movieType]
}
