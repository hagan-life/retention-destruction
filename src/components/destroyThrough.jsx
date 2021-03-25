import React, { Component } from 'react'


class DestroyThrough extends Component {


  render() {
    // if integer calculate destruction date
    // lifeSpan ( years ) minus June currentYear
    if (Number.isInteger(this.props.lifeSpan)){
      // production
      const today = new Date()

      // testing = Fri Jun 01 2018 12:33:30 GMT-0500 (Central Daylight Time)
      //const today = new Date(2018, 5, 1, 12, 33, 30, 0)
      //console.log('today: ' + today )
      //console.log('lifespan: ' + this.props.lifeSpan)

      let destructionDate = today.getFullYear() - this.props.lifeSpan
      // wait to change year after fiscal date or 1 June ( june = 5 )
      if(today.getMonth() < 6 ) {
        destructionDate--
      }
      // add June back to the front
      destructionDate = 'June ' + destructionDate

      if(this.props.note) {
        destructionDate += ' — '
      }

      // conditional rendering
      return (<div className="label">{destructionDate}</div>)

    } else {
      return (<span></span>)
    }

  }

}

export default DestroyThrough
