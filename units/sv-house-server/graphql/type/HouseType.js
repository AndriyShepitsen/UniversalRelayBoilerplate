// @flow

import { globalIdField } from 'graphql-relay'
import { GraphQLString, GraphQLInt, GraphQLObjectType } from 'graphql'

import House from '../model/House'
import NodeInterface from '../../../../units/urb-base-server/graphql/NodeInterface'

export default new GraphQLObjectType({
  name: 'House',

  interfaces: [ NodeInterface ],

  isTypeOf: object => object instanceof House,

  fields: {
    id: globalIdField(obj => obj.Mls),
    Street: {
      type: GraphQLString,
      resolve: obj => {
        return obj.Street
      },
    },
    Mls: { type: GraphQLString, resolve: obj => obj.Mls },
    Price: { type: GraphQLInt, resolve: obj => obj.Price },
    OfficeId: { type: GraphQLString, resolve: obj => obj.OfficeId },
  },
})
