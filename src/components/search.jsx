import React, { Component } from 'react'

class Search extends Component {

  clearInputValue(event){
    //console.log('clearInputValue event.target.value: ', event.target.value)
    event.target.value = ''
  }

  render(){
    return(
      <div className="search">
        <div className="">
          <input
            id="searchInput"
            className="prompt"
            type="text"
            placeholder="Search..."
            onChange={this.props.handleSearchChange}
            onBlur={this.clearInputValue}
          />
            <i className="search-icon">&#9906;</i>
        </div>

      </div>
    )
  }

}

export default Search
