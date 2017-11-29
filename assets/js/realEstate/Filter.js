import React, { Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }
  render () {
    return (
      <div className="inside">
        <section id="filter">
          <h4>Filter</h4>
          <label for="city"></label>
          <span className="title city">City</span>
          <select name="city" className="filters city" onChange={this.props.change}>
            <option value="Any" defaultValue>Any City</option>
            <option value="Mobile">Mobile</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Montgomery">Montgomery</option>
            <option value="Huntsville">Huntsville</option>
            <option value="Anchorage">Anchorage</option>
            <option value="Juneau">Juneau</option>
            <option value="Fairbanks">Fairbanks</option>
            <option value="Sitka">Sitka</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Tucson">Tucson</option>
            <option value="Scottsdale">Scottsdale</option>
            <option value="Mesa">Mesa</option>
            <option value="Little Rock">Little Rock</option>
            <option value="Fayetteville">Fayetteville</option>
            <option value="Fort Smith">Fort Smith</option>
            <option value="Hot Springs">Hot Springs</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="San Francisco">San Francisco</option>
            <option value="San Diego">San Diego</option>
            <option value="Sacramento">Sacramento</option>
            <option value="Denver">Denver</option>
            <option value="Colorado Springs">Colorado Springs</option>
            <option value="Boulder">Boulder</option>
            <option value="Fort Collins">Fort Collins</option>
            <option value="Hartford">Hartford</option>
            <option value="New Haven">New Haven</option>
            <option value="Stamford">Stamford</option>
            <option value="Bridgeport">Bridgeport</option>
            <option value="Wilmington">Wilmington</option>
            <option value="Newark">Newark</option>
            <option value="Dover">Dover</option>
            <option value="Lewes">Lewes</option>
            <option value="Miami">Miami</option>
            <option value="Orlando">Orlando</option>
            <option value="Tampa">Tampa</option>
            <option value="Fort Lauderdale">Fort Lauderdale</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Savannah">Savannah</option>
            <option value="Marietta">Marietta</option>
            <option value="Augusta">Augusta</option>
            <option value="Honolulu">Honolulu</option>
            <option value="Kailua">Kailua</option>
            <option value="Kaneohe">Kaneohe</option>
            <option value="Kapolei">Kapolei</option>
            <option value="Boise">Boise</option>
            <option value="Coeur d'Alene">Coeur d'Alene</option>
            <option value="Nampa">Nampa</option>
            <option value="Meridian">Meridian</option>
            <option value="Chicago">Chicago</option>
            <option value="Naperville">Naperville</option>
            <option value="Peoria">Peoria</option>
            <option value="Champaign">Champaign</option>
            <option value="Carmel">Carmel</option>
            <option value="Fort Wayne">Fort Wayne</option>
            <option value="Bloomington">Bloomington</option>
            <option value="South Bend">South Bend</option>
            <option value="Des Moines">Des Moines</option>
            <option value="Iowa City">Iowa City</option>
            <option value="Cedar Rapids">Cedar Rapids</option>
            <option value="South Bend">South Bend</option>
            <option value="Topeka">Topeka</option>
            <option value="Overland Park">Overland Park</option>
            <option value="Lawrence">Lawrence</option>
            <option value="Ames">Ames</option>
            <option value="Louisville">Louisville</option>
            <option value="Lexington">Lexington</option>
            <option value="Frankfort">Frankfort</option>
            <option value="Kansas City">Kansas City</option>
            <option value="New Orleans">New Orleans</option>
            <option value="Baton Rouge">Baton Rouge</option>
            <option value="Lafayette">Lafayette</option>
            <option value="Bowling Green">Bowling Green</option>
            <option value="Portland">Portland</option>
            <option value="Bangor">Bangor</option>
            <option value="Augusta">Augusta</option>
            <option value="Shreveport">Shreveport</option>
            <option value="Baltimore">Baltimore</option>
            <option value="Annapolis">Annapolis</option>
            <option value="Rockville">Rockville</option>
            <option value="Lewiston">Lewiston</option>
            <option value="Boston">Boston</option>
            <option value="Cambridge">Cambridge</option>
            <option value="Worcester">Worcester</option>
            <option value="Silver Spring">Silver Spring</option>
            <option value="Detroit">Detroit</option>
            <option value="Ann Arbor">Ann Arbor</option>
            <option value="Grand Rapids">Grand Rapids</option>
            <option value="Springfield">Springfield</option>
            <option value="Minneapolis">Minneapolis</option>
            <option value="Saint Paul">Saint Paul</option>
            <option value="Duluth">Duluth</option>
            <option value="Kalamazoo">Kalamazoo</option>
            <option value="Jackson">Jackson</option>
            <option value="Biloxi">Biloxi</option>
            <option value="Hattiesburg">Hattiesburg</option>
            <option value="St. Cloud">St. Cloud</option>
            <option value="St. Louis">St. Louis</option>
            <option value="Kansas City">Kansas City</option>
            <option value="Springfield">Springfield</option>
            <option value="Gulfport">Gulfport</option>
            <option value="Missoula">Missoula</option>
            <option value="Billings">Billings</option>
            <option value="Bozeman">Bozeman</option>
            <option value="Jefferson City">Jefferson City</option>
            <option value="Omaha">Omaha</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Grand Island">Grand Island</option>
            <option value="Helena">Helena</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="Reno">Reno</option>
            <option value="Henderson">Henderson</option>
            <option value="Kearney">Kearney</option>
            <option value="Manchester">Manchester</option>
            <option value="Concord">Concord</option>
            <option value="Nashua">Nashua</option>
            <option value="Carson City">Carson City</option>
            <option value="Newark">Newark</option>
            <option value="Trenton">Trenton</option>
            <option value="Atlantic City">Atlantic City</option>
            <option value="Portsmouth">Portsmouth</option>
            <option value="Albuquerque">Albuquerque</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Las Cruces">Las Cruces</option>
            <option value="Atlantic City">Atlantic City</option>
            <option value="Buffalo">Buffalo</option>
            <option value="Albany">Albany</option>
            <option value="Syracuse">Syracuse</option>
            <option value="Roswell">Roswell</option>
            <option value="Raleigh">Raleigh</option>
            <option value="Fayetteville">Fayetteville</option>
            <option value="Charlotte">Charlotte</option>
            <option value="New York City">New York City</option>
            <option value="Fargo">Fargo</option>
            <option value="Bismarck">Bismarck</option>
            <option value="Minot">Minot</option>
            <option value="Wilmington">Wilmington</option>
            <option value="Cleveland">Cleveland</option>
            <option value="Cincinnati">Cincinnati</option>
            <option value="Columbus">Columbus</option>
            <option value="Grand Forks">Grand Forks</option>
            <option value="Oklahoma City">Oklahoma City</option>
            <option value="Tulsa">Tulsa</option>
            <option value="Norman">Norman</option>
            <option value="Dayton">Dayton</option>
            <option value="Portland">Portland</option>
            <option value="Eugene">Eugene</option>
            <option value="Salem">Salem</option>
            <option value="Edmond">Edmond</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="Pittsburgh">Pittsburgh</option>
            <option value="Harrisburg">Harrisburg</option>
            <option value="Bend">Bend</option>
            <option value="Providence"></option>
            <option value="Newport">Newport</option>
            <option value="Warwick">Warwick</option>
            <option value="Lancaster">Lancaster</option>
            <option value="Charleston">Charleston</option>
            <option value="Columbia">Columbia</option>
            <option value="Myrtle Beach">Myrtle Beach</option>
            <option value="Cranston">Cranston</option>
            <option value="Sioux Falls">Sioux Falls</option>
            <option value="Rapid City">Rapid City</option>
            <option value="Pierre">Pierre</option>
            <option value="Greenville">Greenville</option>
            <option value="Nashville">Nashville</option>
            <option value="Memphis">Memphis</option>
            <option value="Knoxville">Knoxville</option>
            <option value="Aberdeen">Aberdeen</option>
            <option value="Houston">Houston</option>
            <option value="Dallas">Dallas</option>
            <option value="Austin">Austin</option>
            <option value="Chattanooga">Chattanooga</option>
            <option value="Salt Lake City">Salt Lake City</option>
            <option value="Provo">Provo</option>
            <option value="Ogden">Ogden</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Burlington">Burlington</option>
            <option value="Montpelier">Montpelier</option>
            <option value="Rutland City">Rutland City</option>
            <option value="Park City">Park City</option>
            <option value="Charlottesville">Charlottesville</option>
            <option value="Richmond">Richmond</option>
            <option value="Virginia Beach">Virginia Beach</option>
            <option value="Brattleboro">Bratteleboro</option>
            <option value="Seattle">Seattle</option>
            <option value="Spokane">Spokane</option>
            <option value="Tacoma">Tacoma</option>
            <option value="Norfolk">Norfolk</option>
            <option value="Charleston">Charleston</option>
            <option value="Morgantown">Morgantown</option>
            <option value="Huntington">Huntington</option>
            <option value="Bellevue">Bellevue</option>
            <option value="Milwaukee">Milwaukee</option>
            <option value="Madison">Madison</option>
            <option value="Green Bay">Green Bay</option>
            <option value="Wheeling">Wheeling</option>
            <option value="Cheyenne">Cheyenne</option>
            <option value="Jackson">Jackson</option>
            <option value="Laramie">Laramie</option>
            <option value="Wisconsin Dells">Wisconsin Dells</option>
          </select>

          <span className="title state">State</span>
          <select name="state" className="filters state" onChange={this.props.change}>
            <option value="Any" defaultValue>Any State</option>
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
          <label for="city"></label>
          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option value="Any">Any Home</option>
            <option value="Ranch">Ranch</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
          <span className="title beds">Bedrooms</span>
          <label for="city"></label>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="0">0+ BR</option>
            <option value="1">1+ BR</option>
            <option value="2">2+ BR</option>
            <option value="3">3+ BR</option>
            <option value="4">4+ BR</option>
            <option value="5">5+ BR</option>
            <option value="6">6+ BR</option>
            <option value="7">7+ BR</option>
            <option value="8">8+ BR</option>
          </select>

          <span className="title baths">Bathrooms</span>
          <label for="city"></label>
          <select name="bath" className="filters bath"  onChange={this.props.change}>
              <option value="0">0+ BA</option>
              <option value="1">1+ BA</option>
              <option value="2">2+ BA</option>
              <option value="3">3+ BA</option>
              <option value="4">4+ BA</option>
              <option value="5">5+ BA</option>
              <option value="6">6+ BA</option>
              <option value="7">7+ BA</option>
              <option value="8">8+ BA</option>
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
