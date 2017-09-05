// @flow

import Card, { CardContent, CardHeader } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

const styles = {
  card: {
    minWidth: 275,
    minHeight: 400,
  },
}

class HomeScreen extends React.Component<
  { classes: Object, Viewer: Object },
  Object
> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      center: {
        lat: 34.0522,
        lng: -118.243,
      },
    }
  }

  render() {
    const { classes } = this.props

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Home" />
          <CardContent>
            <div>Life is Beautiful!</div>
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(HomeScreen),
  graphql`
    fragment HomeScreen_Viewer on Viewer {
      Agents(first: 100) {
        edges {
          node {
            id
            FirstName
          }
        }
      }
    }
  `
)
