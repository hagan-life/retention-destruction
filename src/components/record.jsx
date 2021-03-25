import React, { Component } from 'react'

class Record extends Component {

  render() {
    return (
      <tr onClick={() => this.props.onRowClick(this.props.id)}>
        <td>{this.props.scheduleNumber}</td>
        <td>{this.props.itemNumber}</td>
        <td>{this.props.title}</td>
      </tr>
    )
  }
}

export default Record
