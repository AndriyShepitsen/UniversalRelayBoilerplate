// @flow

import Card, {CardContent, CardHeader} from 'material-ui/Card'
import {withStyles} from 'material-ui/styles'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import BigCalendar from 'react-big-calendar'
import {createFragmentContainer, graphql} from 'react-relay'

import ResponsiveContentArea from '../../urb-base-webapp/components/ResponsiveContentArea'

BigCalendar.momentLocalizer(moment)

const styles = {
  card: {
    minWidth: 275,
  },
}

class TranslaticiarumScreen extends React.Component<any,
  {
    calendarView: 'month' | 'week' | 'day' | 'agenda'
  }> {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor( props: Object, context: Object ) {
    super(props, context)

    this.state = {
      calendarView: 'week',
    }
  }

  _handle_onView = view => {
    this.setState({calendarView: view})
  }

  _handle_onSelectSlot = ( slotInfo: {
    start: Date,
    end: Date,
    slots: Array<Date>
  } ) => {
    console.log(slotInfo)
  }

  render() {
    const {classes, Viewer} = this.props

    const translaticiarumEdges = Viewer.Translaticiarums.edges

    const calendarEvents = translaticiarumEdges.map(translaticiarumEdge => {
      const translaticiarum = translaticiarumEdge.node

      return {
        title: translaticiarum.Translaticiarum_Description,
        start: moment(translaticiarum.Translaticiarum_Start).toDate(),
        end: moment(translaticiarum.Translaticiarum_Stop).toDate(),
      }
    })

    console.log(this.state.calendarView)
    console.log(calendarEvents)

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Translaticiarum"/>

          <CardContent>
            <BigCalendar
              events={calendarEvents}
              view={this.state.calendarView}
              onView={this._handle_onView}
              selectable={true}
              onSelectSlot={this._handle_onSelectSlot}
            />
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(TranslaticiarumScreen),
  graphql`
    fragment TranslaticiarumScreen_Viewer on Viewer {
      Translaticiarums(first: 2147483647)
      @connection(key: "TranslaticiarumScreen_Translaticiarums") {
        edges {
          node {
            id
            Translaticiarum_Description
            Translaticiarum_Start
            Translaticiarum_Stop
          }
        }
      }
    }
  `,
)
