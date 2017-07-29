// @flow

import Relay from 'react-relay'

export default class ToDoUpdateRenameMutation extends Relay.Mutation {
  static fragments = {
    ToDo: () => Relay.QL`
      fragment on ToDo {
        id,
      }
    `,
  }
  getMutation() {
    return Relay.QL`mutation{ToDoUpdateRename}`
  }
  getFatQuery() {
    return Relay.QL`
      fragment on ToDoUpdateRenamePayload {
        ToDo {
          ToDo_Text,
        }
      }
    `
  }
  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          ToDo: this.props.ToDo.id,
        },
      },
    ]
  }
  getVariables() {
    return {
      id: this.props.ToDo.id,
      ToDo_Text: this.props.ToDo_Text,
    }
  }
  getOptimisticResponse() {
    return {
      ToDo: {
        id: this.props.ToDo.id,
        ToDo_Text: this.props.ToDo_Text,
      },
    }
  }
}