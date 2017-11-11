import React, { Component} from 'react';

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  render () {
    return (
        <section id="Listings">
          <section className="search-area">
            <input type="text" name="search" placeholder="Search Here"/>
          </section>

          <section className="sortby-area">
            <div className="results">390 results found</div>
            <div className="sort-options">
              <select name="sortby" className="sortby">
                <option value="price-asc">Highest Price</option>
                <option value="price-dsc">Lowest Price</option>
              </select>
              <div className="view">
                <i className="fa fa-list-ul" aria-hidden="true"></i>
                <i className="fa fa-th" aria-hidden="true"></i>
              </div>
            </div>
          </section>

          <section className="listings-results">
            <div className="col-md-3">
              <div className="listing">
              <div className="listing-img">

                <span className="address">803 Schley Drive</span>
                <div className="details">
                  <div className="col-md-3">
                  <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="user-date">05/08/2017</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>3 bedrooms</span>
                      </div>
                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">$1000/month</span>
                <span className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Ridgewood, NY
                </span>
              </div>
            </div>
            </div>

            <div className="col-md-3">
              <div className="listing">
              <div className="listing-img">

                <span className="address">803 Schley Drive</span>
                <div className="details">
                  <div className="col-md-3">
                  <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="user-date">05/08/2017</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>3 bedrooms</span>
                      </div>
                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">$1000/month</span>
                <span className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Ridgewood, NY
                </span>
              </div>
            </div>
            </div>



            <div className="col-md-3">
              <div className="listing">
              <div className="listing-img">

                <span className="address">803 Schley Drive</span>
                <div className="details">
                  <div className="col-md-3">
                  <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="user-date">05/08/2017</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>3 bedrooms</span>
                      </div>
                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">$1000/month</span>
                <span className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Ridgewood, NY
                </span>
              </div>
            </div>
            </div>


            <div className="col-md-3">
              <div className="listing">
              <div className="listing-img">

                <span className="address">803 Schley Drive</span>
                <div className="details">
                  <div className="col-md-3">
                  <div className="user-img"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="user-details">
                      <span className="user-name">Nina Smith</span>
                      <span className="user-date">05/08/2017</span>
                    </div>
                    <div className="listing-details">
                      <div className="floor-space">
                        <i className="fa fa-check-square-o" aria-hidden="true"></i>
                        <span>1000 ft&sup2;</span>
                      </div>
                      <div className="bedrooms">
                        <i className="fa fa-bed" aria-hidden="true"></i>
                        <span>3 bedrooms</span>
                      </div>
                      <div className="view-btn">
                        View Listing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="price">$1000/month</span>
                <span className="location">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  Ridgewood, NY
                </span>
              </div>
            </div>
            </div>
          </section>

          <section className="pagination" id="pagination">
            <ul className="pages">
              <li>Prev</li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>Next</li>
            </ul>
          </section>
        </section>
    )
  }
}
