// @flow weak

import { GraphQLID, GraphQLInt } from 'graphql'
import {
  fromGlobalId,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import HousesConnection from './HousesConnection'
import HouseType from './HouseType'

export default {
  Houses: {
    type: HousesConnection.connectionType,

    args: {
      OfficeId: { type: GraphQLInt },
      ...connectionArgs,
    },

    resolve: async(
      obj,
      { ...args },
      context,
      { rootValue: objectManager }
    ) => {
      const arr = await objectManager.getObjectList('House', {
        index: 'sale',
        type: 'house',
        body: {
          query: {
            bool: {
              filter: {
                term: {
                  'OfficeId.keyword': '3913',
                },
              },
            },
          },
        },
      })

      return connectionFromArray(arr, args)
    },
  },

  House: {
    type: HouseType,

    args: { ...{ id: { type: GraphQLID } } },

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('House', { id: fromGlobalId(id).id }),
  },
}
