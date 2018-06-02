import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { UserSchema } from './types/user'
import { MovieSchema } from './types/movie'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UserSchema.query,
      ...MovieSchema.query,
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UserSchema.mutation,
      ...MovieSchema.mutation,
    })
  }),
  types: [
    ...UserSchema.types,
    ...MovieSchema.types
  ]
})
