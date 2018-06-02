import { GraphQLSchema, GraphQLObjectType } from 'graphql'

import { UserSchema } from './types/user'

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...UserSchema.query,
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...UserSchema.mutation,
    })
  }),
  types: [
    ...UserSchema.types,
  ]
})
