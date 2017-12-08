import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/listingsData.js';



class App extends Component {
  constructor () {
    super()
    this.state = {
      name: "",
      listingsData,
      city:"Any",
      state:"Any",
      homeType:"Any",
      rooms: 0,
      bath: 0,
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 20000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      filteredData: listingsData,
      populateFormsData:""
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)

  }


change(event){
  const name = event.target.name
  const value = (event.target.type === "checkbox") ? event.target.checked : event.target.value

  this.setState({
    [name]: value
  }, () => {
    console.log(this.state)
    this.filteredData()
  })
}

filteredData(){
  let newData;
   newData = this.state.listingsData.filter((item) => {
    return item.price >= this.state.min_price
    && item.price <= this.state.max_price
    && item.floorspace >= this.state.min_floor_space
    && item.floorspace <= this.state.max_floor_space
    && item.rooms >= this.state.rooms
    && item.bath >= this.state.bath
  })

  if (this.state.city != "Any") {
  newData = newData.filter((item) => {
    return item.city == this.state.city
  })
}

  if (this.state.state != "Any") {
     newData = newData.filter((item) => {
       return item.state == this.state.state
     })
   }

   if (this.state.homeType != "Any") {
     newData = newData.filter((item) => {
       return item.homeType == this.state.homeType
     })
   }


this.setState({
  filteredData: newData
})
}

populateForms() {
//City
let cities = this.state.listingsData.map((item)=> {
  return item.city
})
cities = new Set(cities)
cities = [...cities]

//State
let states = this.state.listingsData.map((item)=> {
  return item.state
})
states = new Set(states)
states = [...states]

//homeType
let homeType = this.state.listingsData.map((item)=> {
  return item.homeType
})
homeType = new Set(homeType)
homeType = [...homeType]

//rooms
let rooms = this.state.listingsData.map((item)=> {
  return item.rooms
})
rooms = new Set(rooms)
rooms = [...rooms]

this.setState({
  populateForms: {
    cities,
    states,
    homeType,
    rooms
  }
}, () => {
  console.log(this.state)
})
}


  render () {
    return (<div>
        <Header />
        <section id="content-area">
          <Filter  change={this.change} globalState = {this.state}
            populateAction={this.populateForms}/>

          <Listings listingsData={this.state.filteredData}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
