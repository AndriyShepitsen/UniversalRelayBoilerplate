// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const HousesScreen = props => (
  <Async load={import('./components/HousesScreen')} componentProps={props} />
)

export default (
  <Route key="houses" path="houses">
    <Route
      path="/"
      Component={HousesScreen}
      query={graphql`
        query routeAppFrameHouses_HousesScreen_Query {
          Viewer {
            ...HousesScreen_Viewer
          }
        }
      `}
    />
  </Route>
)
