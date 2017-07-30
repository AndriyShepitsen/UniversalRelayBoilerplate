// @flow

import process from 'process'

import schema from '../units/urb-base-server/graphql/schema' // Schema for GraphQL server
import ObjectManager from '../units/urb-base-server/graphql/ObjectManager'

// Guarantee that all object registrations and schema definitions are executed
import _schemas_system from '../units/urb-base-server/graphql/model/_schemas'
import _schemas from '../configuration/urb-base-server/graphql/_schemas'

ObjectManager.initializePersisters(true, () => {
  process.exit()
})
