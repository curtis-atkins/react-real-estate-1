import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
    this.cities = this.cities.bind(this)
    this.states = this.states.bind(this)
    this.homeType = this.homeType.bind(this)
    this.rooms = this.rooms.bind(this)
    this.bath = this.bath.bind(this)
  }

  componentWillMount(){
    this.props.populateAction()
  }

cities() {
  if (this.props.globalState.populateFormsData.cities != undefined){
    let {cities} =  this.props.globalState.populateFormsData
    return cities.map((item) => {
      return(
        <option key={item} value={item}> {item}</option>
      )
    })

  }
}

states() {
  if (this.props.globalState.populateFormsData.states != undefined){
    let {states} =  this.props.globalState.populateFormsData
    return states.map((item) => {
      return(
        <option key={item} value={item}> {item}</option>
      )
    })

  }
}

 homeType() {
  if (this.props.globalState.populateFormsData.homeType != undefined){
    let {homeType} =  this.props.globalState.populateFormsData
    return homeType.map((item) => {
      return(
        <option key={item} value={item}> {item}</option>
      )
    })

  }
 }

 rooms() {
  if (this.props.globalState.populateFormsData.rooms != undefined){
  let {rooms} =  this.props.globalState.populateFormsData
  return rooms.map((item) => {
    return(
      <option key={item} value={item}> {item}+ BR</option>
    )
  })

}
 }

 bath() {
  if (this.props.globalState.populateFormsData.bath != undefined){
    let {bath} =  this.props.globalState.populateFormsData
    return bath.map((item) => {
      return(
        <option key={item} value={item}> {item}+ BA</option>
      )
    })
  }
 }



  render () {
    return (
      <div className="inside">
        <section id="filter">
          <h4>Filter</h4>
          <label htmlFor="city"></label>
          <span className="title city">City</span>
          <select name="city" className="filters city"
            onChange={this.props.change}>
            <option value="Any" defaultValue>Any City</option>
            {this.cities()}

          </select>

          <span className="title state">State</span>
          <select name="state" className="filters state" onChange={this.props.change}>
            <option value="Any" defaultValue>Any State</option>
              {this.states()}
          </select>

          <span className="title homeType">Home Type</span>
          <label htmlFor="homeType"></label>
          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option value="Any">Any Home</option>
          {this.homeType()}
          </select>

          <span className="title beds">Bedrooms</span>
          <label htmlFor="rooms"></label>
          <select name="rooms" className="filters rooms" onChange={this.props.change}>
            <option value="0">0+ BR</option>
            {this.rooms()}
          </select>

          <span className="title baths">Bathrooms</span>
          <label htmlFor="bath"></label>
          <select name="bath" className="filters bath"  onChange={this.props.change}>
              <option value="0">0+ BA</option>
              {this.bath()}
          </select>

          <div className="filters price">
            <span className="title price">Price</span>
            <input type="number" name="min_price" className="min_price"  onChange={this.props.change}
              value ={this.props.globalState.min_price}/>
            <input type="number" name="max_price" className="max_price"  onChange={this.props.change}
              value ={this.props.globalState.max_price}/>
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="number" name="min_floor_space" className="min_floor_space"  onChange={this.props.change}
              value ={this.props.globalState.min_floor_space}/>
            <input type="number" name="max_floor_space" className="max_floor_space"  onChange={this.props.change}
              value ={this.props.globalState.max_floor_space}/>
          </div>


         <div className="filters extras">
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" value="elevator" name="elevator"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" value="swimming_pool" name="swimming_pool"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input type="checkbox" value="finished_basement" name="finished_basement"
                onChange={this.props.change}/>
            </label>

            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" value="gym" name="gym"
                onChange={this.props.change}/>
            </label>
          </div>

        </section>
      </div>
      )
  }
};
