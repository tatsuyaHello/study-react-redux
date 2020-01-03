import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>hogehoge</div>
      </ React.Fragment>
    )
  }
}

//NOTE Udemy通りの書き方だと、なぜかdispatchできなかったので、以下の書き方で対応した。
// const mapDispatchToProps = dispatch => ({
//   readEvents: () => dispatch(postEvents()),
// })

export default connect(null, null)(EventsNew)
