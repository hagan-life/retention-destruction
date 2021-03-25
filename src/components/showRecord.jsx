import React, { Component } from 'react'
import DestroyThrough from './destroyThrough'

class ShowRecord extends Component {

  render() {
    //console.log('props ', this.props)
    const record = this.props.data[0]
    //console.log('record', record)

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{record.title}</div>
          <div className="meta">
            <span>{record.scheduleNumber}</span><span>{record.itemNumber}</span>
          </div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Record Copy Authorized to Destroy Through
            <DestroyThrough
              lifeSpan={record.recordCopyLifeSpan}
            />
          </h4>
          <p>{record.recordCopyAuthorizedToDestroyNote}</p>
        </div>
        <div className="content description">
          <h4 className="ui sub header">Description</h4>
            <p>{record.description}</p>
        </div>
        <div className="extra content">
          <h4 className="ui sub header">Duplicate Copy Authorized to Destroy Through</h4>
          <p>Retain Until Obsolete, superseded, or administrative value is lost.</p>
        </div>
      </div>
    )
  }
}

export default ShowRecord
