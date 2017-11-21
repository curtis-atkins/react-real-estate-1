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
      city:"City",
      state:"STATE",
      homeType:"Home Type",
      rooms:"1BR",
      bath:"1BA",
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 20000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      filteredData: listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)

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
  const newData = this.state.listingsData.filter((item) => {
    return (item.price >= this.state.min_price
    && item.price <= this.state.max_price)
    && (item.floorspace >= this.state.min_floor_space
    && item.floorspace <= this.state.max_floor_space)

  })


this.setState({
  filteredData: newData
})
}
  render () {
    return (<div>
        <Header />
        <section id="content-area">
          <Filter  change={this.change} globalState = {this.state}/>
          <Listings listingsData={this.state.filteredData}/>
        </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
