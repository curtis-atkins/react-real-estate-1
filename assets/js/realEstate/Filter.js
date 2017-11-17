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
          <span className="title city">City</span>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>

          </select>

          <span className="title state">State</span>
          <select name="state" className="filters state" onChange={this.props.change}>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>

          <span className="title type">Type</span>
          <select name="housetype" className="filters housetype"  onChange={this.props.change}>
            <option value="Ranch">Ranch</option>
              <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                  <option value="Condo">Condo</option>
          </select>
          <span className="title beds">Bedrooms</span>
          <select name="bedrooms" className="filters bedrooms"  onChange={this.props.change}>
              <option>1 BR</option>
              <option>2 BR</option>
              <option>3 BR</option>
              <option>4 BR</option>
              <option>5 BR</option>
              <option>6 BR</option>
              <option>7 BR</option>
              <option>8 BR</option>
          </select>

          <span className="title baths">Bathrooms</span>
          <select name="bath" className="filters bath"  onChange={this.props.change}>
              <option>1 BA</option>
              <option>2 BA</option>
              <option>3 BA</option>
              <option>4 BA</option>
              <option>5 BA</option>
              <option>6 BA</option>
              <option>7 BA</option>
              <option>8 BA</option>
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
