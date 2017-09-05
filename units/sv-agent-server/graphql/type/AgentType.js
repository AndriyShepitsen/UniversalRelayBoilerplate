// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLString, GraphQLObjectType } from 'graphql'

import Agent from '../model/Agent'
import NodeInterface from '../../../../units/urb-base-server/graphql/NodeInterface'

export default new GraphQLObjectType({
  name: 'Agent',

  interfaces: [ NodeInterface ],

  isTypeOf: object => object instanceof Agent,

  fields: {
    id: globalIdField(obj => obj.UserId),
    FirstName: {
      type: GraphQLString,
      resolve: obj => {
        return obj.FirstName
      },
    },
    LastName: { type: GraphQLString, resolve: obj => obj.LastName },
    UserId: { type: GraphQLString, resolve: obj => obj.UserId },
  },
})
