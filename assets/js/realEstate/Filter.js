import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
      <div className="inside">
        <section id="filter">
          <h4>Filter</h4>
          <select name="neighborhood" className="filters neighborhood">
            <option>Ridgewood</option>
          </select>
          <select name="housetype" className="filters housetype">
            <option>Ranch</option>
          </select>
          <select name="bedrooms" className="filters bedrooms">
            <option>2 BR</option>
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price"/>
            <input type="text" name="max-price" className="max-price"/>
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space"/>
            <input type="text" name="max-floor-space" className="max-floor-space"/>
          </div>
          <div className="filters extras">
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" name="extras"/>
            </label>

            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" value="swimming-pool" name="extras"/>
            </label>

            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input type="checkbox" value="finished-basement" name="extras"/>
            </label>

            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" value="gym" name="extras"/>
            </label>
          </div>
        </section>
      </div>
      )
  }
};