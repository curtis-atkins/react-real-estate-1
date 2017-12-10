import React, { Component} from 'react';

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {}
  this.loopListings =  this.loopListings.bind(this);
  }

  loopListings(){
    const {listingsData} = this.props;

    if(listingsData == undefined || listingsData.length == 0){
      return "Sorry, your filter did not match any listing"
    }

    return listingsData.map((listing, index)=>{
      if(this.props.globalState.view == "box"){
        // THIS IS THE BOX VIEW
        return(<div className="col-md-3" key={index}>
            <div className="listing">
            <div className="listing-img" style={{background:
                `url("${listing.image}")
            no-repeat center center`}}>

              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img">
                    <i className="fa fa-user-o" aria-hidden="true"
                      style={{background:`no-repeat center center`}}>
                    </i>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">{listing.seller}</span>
                    <span className="user-date">{listing.date}</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>{listing.floorspace} Sq Ft</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bed</span>
                    </div>
                    <div className="bath">
                      <i className="fa fa-bath" aria-hidden="true"></i>
                      <span>{listing.bath} bath</span>
                    </div>
                    <div className="view-btn">
                      View Listing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                 {listing.city}, {listing.state}
              </span>
            </div>
          </div>
          </div>)
      }
      else{
          // THIS IS THE LONG VIEW
        return(<div className="col-md-12 col-lg-6" key={index}>
            <div className="listing">
            <div className="listing-img" style={{background:
                `url("${listing.image}")
            no-repeat center center`}}>

              <span className="address">{listing.address}</span>
              <div className="details">
                <div className="col-md-3">
                  <div className="user-img">
                    <i className="fa fa-user-o" aria-hidden="true"
                      style={{background:`no-repeat center center`}}>
                    </i>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="user-details">
                    <span className="user-name">{listing.seller}</span>
                    <span className="user-date">{listing.date}</span>
                  </div>
                  <div className="listing-details">
                    <div className="floor-space">
                      <i className="fa fa-check-square-o" aria-hidden="true"></i>
                      <span>{listing.floorspace} Sq Ft</span>
                    </div>
                    <div className="bedrooms">
                      <i className="fa fa-bed" aria-hidden="true"></i>
                      <span>{listing.rooms} bed</span>
                    </div>
                    <div className="bath">
                      <i className="fa fa-bath" aria-hidden="true"></i>
                      <span>{listing.bath} bath</span>
                    </div>
                    <div className="view-btn">
                      View Listing
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span className="price">${listing.price}</span>
              <span className="location">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                 {listing.city}, {listing.state}
              </span>
            </div>
          </div>
          </div>)
      }
    })
  }

  render () {
    return (
        <section id="Listings">
          <section className="search-area">
            <input type="text" name="search" placeholder="Search City Here" onChange={this.props.change}/>
          </section>

          <section className="sortby-area">
            <div className="results">{this.props.globalState.filteredData.length} result(s) found</div>
            <div className="sort-options">
              <select name="sortby" className="sortby"
                onChange={this.props.change}>
                <option value="price-asc">Lowest Price</option>
                <option value="price-dsc">Highest Price</option>
              </select>
              <div className="view">
                <i className="fa fa-list-ul" aria-hidden="true" onClick={this.props.changeView.bind(null, "long")}></i>
                <i className="fa fa-th" aria-hidden="true" onClick={this.props.changeView.bind(null, "box")}></i>
              </div>
            </div>
          </section>

          <section className="listings-results">
            <div className="row">
              {this.loopListings()}
            </div>
          </section>

          <section className="pagination" id="pagination">
            <div className="row">
              <ul className="pages">
                <li>Prev</li>
                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>Next</li>
              </ul>
            </div>
          </section>
        </section>
    )
  }
}
