import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        <Link to='/events/new'>New event</Link>
      </ React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
//NOTE Udemy通りの書き方だと、なぜかdispatchできなかったので、以下の書き方で対応した。
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)