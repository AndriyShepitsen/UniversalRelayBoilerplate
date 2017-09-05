// @flow weak

import { GraphQLID, GraphQLInt } from 'graphql'
import {
  fromGlobalId,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay'

import AgentsConnection from './AgentsConnection'
import AgentType from './AgentType'

export default {
  Agents: {
    type: AgentsConnection.connectionType,

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
      const arr = await objectManager.getObjectList('Agent', {
        index: 'agents',
        type: 'agent',
        body: {
          query: {
            bool: {
              filter: {
                term: {
                  'UserId.keyword': '886100',
                },
              },
            },
          },
        },
      })

      return connectionFromArray(arr, args)
    },
  },

  Agent: {
    type: AgentType,

    args: { ...{ id: { type: GraphQLID } } },

    resolve: (parent, { id }, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('Agent', { id: fromGlobalId(id).id }),
  },
}
