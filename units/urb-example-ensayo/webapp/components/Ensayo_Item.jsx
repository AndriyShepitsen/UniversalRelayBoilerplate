// @flow

import React from 'react'
import Relay from 'react-relay'

import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import { ListItem } from 'material-ui/List'
import MenuItem from 'material-ui/MenuItem'
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

import EnsayoDeleteMutation from '../../relay/EnsayoDeleteMutation'
import EnsayoUpdateMutation from '../../relay/EnsayoUpdateMutation'

import Ensayo_Properties from './Ensayo_Properties'

class Ensayo_Item extends React.Component {
  static contextTypes = {
    relay: Relay.PropTypes.Environment,
  }

  _handle_updateHandler_Ensayo = Ensayo_properties => {
    this.context.relay.commitUpdate(
      new EnsayoUpdateMutation({ Ensayo: this.props.Ensayo, ...Ensayo_properties }),
    )
  }

  _EnsayoDelete() {
    this.context.relay.commitUpdate(
      new EnsayoDeleteMutation({ Ensayo: this.props.Ensayo, Viewer: this.props.Viewer }),
    )
  }

  _handle_onItemTouchTap = (e, item) => {
    switch (item.ref) {
      case 'edit':
        this.refs.Ensayo_Properties._handle_Open()
        break
      case 'delete':
        this._EnsayoDelete()
        break
      default:
        break
    }
  }

  render() {
    const rightIconMenu = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <NavigationMoreVert />
          </IconButton>
        }
        onItemTouchTap={this._handle_onItemTouchTap}
      >
        <MenuItem ref="edit" value={0}>
          Edit
        </MenuItem>
        <MenuItem ref="delete" value={1}>
          Delete
        </MenuItem>
      </IconMenu>
    )

    return (
      <div>
        <ListItem primaryText={this.props.Ensayo.Ensayo_Title} rightIconButton={rightIconMenu} />
        <Ensayo_Properties
          ref="Ensayo_Properties"
          Ensayo_Content={this.props.Ensayo.Ensayo_Content}
          Ensayo_Title={this.props.Ensayo.Ensayo_Title}
          Ensayo_Description={this.props.Ensayo.Ensayo_Description}
          updateHandler={this._handle_updateHandler_Ensayo}
        />
      </div>
    )
  }
}

export default Relay.createContainer(Ensayo_Item, {
  fragments: {
    Ensayo: () => Relay.QL`
      fragment on Ensayo {
        id,
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content,
        ${EnsayoDeleteMutation.getFragment('Ensayo')},
        ${EnsayoUpdateMutation.getFragment('Ensayo')},
      }
    `,
    Viewer: () => Relay.QL`
      fragment on Viewer {
        ${EnsayoDeleteMutation.getFragment('Viewer')},
      }
    `,
  },
})
