// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'
import PersisterElasticSearch from '../../../urb-persister-elasticsearch/graphql/PersisterElasticSearch'

// Class used by GraphQL Server
export default class Agent {
  id: string
  FirstName: string
  LastName: string
  UserId: string

  constructor(fields: {
    id: string,
    FirstName: string,
    LastName: string,
    UserId: string
  }) {
    this.id = fields.id
    this.FirstName = fields.FirstName
    this.LastName = fields.LastName
    this.UserId = fields.UserId
  }
}

ObjectManager.registerEntity('Agent', Agent, new PersisterElasticSearch())
