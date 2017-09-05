// @flow

import { connectionDefinitions } from 'graphql-relay'

import AgentType from './AgentType'

export default connectionDefinitions({
  name: 'Agents',
  nodeType: AgentType,
})
