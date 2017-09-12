// @flow

import List from 'material-ui/List'
import React from 'react'

import AppDrawerNavItem from '../../urb-appdrawer-webapp/components/AppDrawerNavItem'

export default class AppDrawernavItems extends React.Component<{}> {
  render() {
    return (
      <List>
        <AppDrawerNavItem
          key="/"
          openImmediately={true}
          title="Home Page"
          to="/"
        />
        <AppDrawerNavItem
          key="/houses"
          openImmediately={true}
          title="House"
          to="/houses"
        />
      </List>
    )
  }
}
