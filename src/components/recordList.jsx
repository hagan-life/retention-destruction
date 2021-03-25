import React, { Component } from 'react'
import Record from './record'

class RecordList extends Component {
  render() {
    const records = this.props.records.map((record) => (
        <Record
          key={record.id}
          id={record.id}
          scheduleNumber={record.scheduleNumber}
          itemNumber={record.itemNumber}
          title={record.title}
          onRowClick={this.props.onRowClick}
        />
    ))
    return (
      <tbody>
        {records}
      </tbody>
    )
  }
}

export default RecordList
