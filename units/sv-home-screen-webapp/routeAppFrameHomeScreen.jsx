// @flow

import Async from 'react-code-splitting'
import { graphql } from 'react-relay'
import React from 'react'
import Route from 'found/lib/Route'

const HomeScreen = props => (
  <Async load={import('./components/HomeScreen')} componentProps={props} />
)

export default (
  <Route key="Home" path="/">
    <Route
      path="/"
      Component={HomeScreen}
      query={graphql`
        query routeAppFrameHomeScreen_Query {
          Viewer {
            ...HomeScreen_Viewer
          }
        }
      `}
    />
  </Route>
)
