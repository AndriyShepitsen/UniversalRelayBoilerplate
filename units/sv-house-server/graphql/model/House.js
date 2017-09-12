// @flow

import ObjectManager from '../../../../units/urb-base-server/graphql/ObjectManager'
import PersisterElasticSearch from '../../../urb-persister-elasticsearch/graphql/PersisterElasticSearch'

// Class used by GraphQL Server
export default class House {
  id: string
  Mls: string
  Price: number
  Street: string
  OfficeId: string

  constructor(fields: {
    id: string,
    Street: string,
    Mls: string,
    Price: number,
    OfficeId: string
  }) {
    this.id = fields.id
    this.Street = fields.Street
    this.Mls = fields.Mls
    this.Price = fields.Price
    this.OfficeId = fields.OfficeId
  }
}

ObjectManager.registerEntity('House', House, new PersisterElasticSearch())
