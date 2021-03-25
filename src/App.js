import React, { Component } from 'react'
import RecordList from './components/recordList'
import ShowRecord from './components/showRecord'
import Search from './components/search'


class App extends Component {

  state = {
    query: '',
    allRecords: [],
    filteredRecords: [],
    displayedRecord: [{
      title: "MAIL: UNDELIVERABLE/RETURNED",
      scheduleNumber: "GS1",
      itemNumber: 1,
      scheduleItem: "GS1 191",
      recordCopyAuthorizedToDestroyNote: "Retain until obsolete, superseded, or administrative value is lost.",
      recordCopyLifeSpan: null,
      description: "This record series consists of outgoing agency mail returned by the post office for any reason, including insufficient postage, incorrect address, forwarding order expired, etc., or abandoned at a mail/document pickup station by a defunct addressee. It does NOT include returned registered or certified mailings. NOTE: In instances when there is a legal need to demonstrate that a mailing was sent to a particular address, agencies are responsible for ensuring that internal management policies are in place for retaining undeliverable/returned mail for as long as legally necessary. See also “MAIL: REGISTERED AND CERTIFIED,” “MAILING/CONTACT LISTS,” and “POSTAGE/SHIPPING RECORDS.”"
    }]
  }



  componentDidMount() {
    // records.json must be in public folder
    fetch('records.json')
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
      /*.then(jsonResponse => console.log('Success:', jsonResponse))*/
      .then(jsonResponse => this.setState({ allRecords: jsonResponse}))
      .then( () => this.setState({ filteredRecords: this.state.allRecords }))
  }

  handleSearchChange = (event) => {
    this.setState({ query: event.target.value.substr(0,10) }, () => {
      //this.getResults()
      const lowerCaseQuery = this.state.query.toLowerCase()
      const titleList = this.state.allRecords
        .filter(filteredList => {
          return filteredList.title.toLowerCase().indexOf(lowerCaseQuery) >= 0 ||
            filteredList.description.toLowerCase().indexOf(lowerCaseQuery) >= 0 ||
            filteredList.scheduleItem.toLowerCase().indexOf(lowerCaseQuery) >=0 
      })

      this.setState({filteredRecords: titleList})
    })
  }


  handleRowClick = (recordId) => {
    /* update state */
    //console.log('handleClick: ', recordId)
    const record = this.state.filteredRecords.filter(r => r.id === recordId)
    //console.log('record ', record)
    this.setState({ displayedRecord: record, query: '', filteredRecords: this.state.allRecords   })
    //clear search field
  }


  render() {
    return (
      <div className="app-intro">

        <Search handleSearchChange={this.handleSearchChange} />

        <div className="cards">
          <div className="card">
            <table className="schedule">
              <thead>
                <tr>
                  <th>Schedule</th>
                  <th>Item</th>
                  <th>Title</th>
                </tr>
              </thead>
              <RecordList
                records={this.state.filteredRecords}
                onRowClick={this.handleRowClick}
              />
              <tfoot></tfoot>
            </table>
          </div>

          <ShowRecord
            data={this.state.displayedRecord}
          />

        </div>
        <footer></footer>
      </div>
    );
  }
}


export default App;