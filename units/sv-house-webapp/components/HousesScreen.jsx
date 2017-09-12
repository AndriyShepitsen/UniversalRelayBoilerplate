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

class HousesScreen extends React.Component<
  { classes: Object, Viewer: Object },
  Object
> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  render() {
    const { classes, Viewer } = this.props

    let Houses = Viewer.Houses.edges.map(({ node }) => {
      return node
    })

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Houses" />
          <h3>Office Houses</h3>
          <ol>
            {Houses.map((house, key) => {
              return (
                <li key={key}>
                  <span> {house.Mls} </span>
                  <span> {house.Street}</span>
                  <span> {house.Price}</span>
                  <span> {house.OfficeId}</span>
                </li>
              )
            })}
          </ol>

          <CardContent />
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(HousesScreen),
  graphql`
    fragment HousesScreen_Viewer on Viewer {
      Houses(first: 5) @connection(key: "HousesScreen_Houses") {
        edges {
          node {
            id
            Mls
            OfficeId
            Street
            Price
          }
        }
      }
    }
  `
)
