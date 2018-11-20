webpackJsonp([0],{

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'React Real Estate'
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: ''
    };
    _this.cities = _this.cities.bind(_this);
    _this.states = _this.states.bind(_this);
    _this.homeType = _this.homeType.bind(_this);
    _this.rooms = _this.rooms.bind(_this);
    _this.bath = _this.bath.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            ' ',
            item
          );
        });
      }
    }
  }, {
    key: 'states',
    value: function states() {
      if (this.props.globalState.populateFormsData.states != undefined) {
        var states = this.props.globalState.populateFormsData.states;

        return states.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            ' ',
            item
          );
        });
      }
    }
  }, {
    key: 'homeType',
    value: function homeType() {
      if (this.props.globalState.populateFormsData.homeType != undefined) {
        var homeType = this.props.globalState.populateFormsData.homeType;

        return homeType.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            ' ',
            item
          );
        });
      }
    }
  }, {
    key: 'rooms',
    value: function rooms() {
      if (this.props.globalState.populateFormsData.rooms != undefined) {
        var rooms = this.props.globalState.populateFormsData.rooms;

        return rooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            ' ',
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'bath',
    value: function bath() {
      if (this.props.globalState.populateFormsData.bath != undefined) {
        var bath = this.props.globalState.populateFormsData.bath;

        return bath.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            ' ',
            item,
            '+ BA'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'inside' },
        _react2.default.createElement(
          'section',
          { id: 'filter' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement('label', { htmlFor: 'city' }),
          _react2.default.createElement(
            'span',
            { className: 'title city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city',
              onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Any', defaultValue: true },
              'Any City'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'span',
            { className: 'title state' },
            'State'
          ),
          _react2.default.createElement(
            'select',
            { name: 'state', className: 'filters state', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Any', defaultValue: true },
              'Any State'
            ),
            this.states()
          ),
          _react2.default.createElement(
            'span',
            { className: 'title homeType' },
            'Home Type'
          ),
          _react2.default.createElement('label', { htmlFor: 'homeType' }),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Any' },
              'Any Home'
            ),
            this.homeType()
          ),
          _react2.default.createElement(
            'span',
            { className: 'title beds' },
            'Bedrooms'
          ),
          _react2.default.createElement('label', { htmlFor: 'rooms' }),
          _react2.default.createElement(
            'select',
            { name: 'rooms', className: 'filters rooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ BR'
            ),
            this.rooms()
          ),
          _react2.default.createElement(
            'span',
            { className: 'title baths' },
            'Bathrooms'
          ),
          _react2.default.createElement('label', { htmlFor: 'bath' }),
          _react2.default.createElement(
            'select',
            { name: 'bath', className: 'filters bath', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ BA'
            ),
            this.bath()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title price' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'number', name: 'min_price', className: 'min_price', onChange: this.props.change,
              value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'number', name: 'max_price', className: 'max_price', onChange: this.props.change,
              value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'number', name: 'min_floor_space', className: 'min_floor_space', onChange: this.props.change,
              value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'number', name: 'max_floor_space', className: 'max_floor_space', onChange: this.props.change,
              value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'elevator', name: 'elevator',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'swimming_pool', name: 'swimming_pool',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'finished_basement', name: 'finished_basement',
                onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { type: 'checkbox', value: 'gym', name: 'gym',
                onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;
;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: ''
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry, your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == "box") {
          // THIS IS THE BOX VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url(' + listing.image + ') no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement('div', { className: 'user-img', style: { background: 'url(' + listing.headshot + ') no-repeat center' } }),
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.seller
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'user-date' },
                        listing.date
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorspace,
                          ' Sq Ft'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bed'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bath' },
                        _react2.default.createElement('i', { className: 'fa fa-bath', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bath,
                          ' bath'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else {
          // THIS IS THE LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")\n            no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-12' },
                    _react2.default.createElement('div', { className: 'user-img', style: { background: 'url(' + listing.headshot + ') no-repeat center' } }),
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        listing.seller
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'user-date' },
                        listing.date
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-check-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorspace,
                          ' Sq Ft'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bed'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bath' },
                        _react2.default.createElement('i', { className: 'fa fa-bath', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.bath,
                          ' bath'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'Listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'Search City Here', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' result(s) found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby',
                onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-list-ul', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'pagination', id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  image: "../img/homes/al-mobile.jpg",
  address: "4149 Spring Lake Drive North",
  city: "Mobile",
  state: "AL",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 135000,
  floorspace: 1348,
  date: "12/11/2017",
  seller: "Wilson Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/al-birmingham.jpg",
  address: "1805 Castleberry Way",
  city: "Birmingham",
  state: "AL",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 64900,
  floorspace: 1064,
  date: "12/1/2017",
  seller: "Sherry Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym"]
}, {
  image: "../img/homes/al-montgomery.jpg",
  address: "605 Maxwell Boulevard",
  city: "Montgomery",
  state: "AL",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1199,
  floorspace: 970,
  date: "1/9/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym"]
}, {
  image: "../img/homes/al-hunstville.jpg",
  address: "1020 Cresent Falls",
  city: "Huntsville",
  state: "AL",
  homeType: "Condo",
  rooms: 3,
  bath: 2,
  price: 229900,
  floorspace: 1883,
  date: "1/10/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Gym"]
}, {
  image: "../img/homes/ak-anchorage.jpg",
  address: "19665 Villages Scenic Parkway",
  city: "Anchorage",
  state: "AK",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 1875000,
  floorspace: 4361,
  date: "11/20/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ak-juneau.jpg",
  address: "1023 Wolfram Way",
  city: "Juneau",
  state: "AK",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 429900,
  floorspace: 1675,
  date: "1/23/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: []
}, {
  image: "../img/homes/ak-fairbanks.jpg",
  address: "1301 Kellum Street",
  city: "Fairbanks",
  state: "AK",
  homeType: "Apartment",
  rooms: 2,
  bath: 1,
  price: 1069,
  floorspace: 830,
  date: "1/26/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Swimming Pool", "Gym"]
}, {
  image: "../img/homes/ak-sitka.jpg",
  address: "L6 Middle Is",
  city: "Sitka",
  state: "AK",
  homeType: "Condo",
  rooms: 3,
  bath: 1,
  price: 179000,
  floorspace: 864,
  date: "2/1/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: []
}, {
  image: "../img/homes/az-phoenix.jpg",
  address: "2047 E Cielo Grande Avenue",
  city: "Phoenix",
  state: "AZ",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 371964,
  floorspace: 2676,
  date: "2/16/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Finished Basement", "Swimming Pool"]
}, {
  image: "../img/homes/az-tucson.jpg",
  address: "6799 N Rattlesnake Canyon Rd",
  city: "Tucson",
  state: "AZ",
  homeType: "Ranch",
  rooms: 5,
  bath: 8,
  price: 9900000,
  floorspace: 12946,
  date: "2/20/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/az-scottsdale.jpg",
  address: "9595 E Thunderbird Road",
  city: "Scottsdale",
  state: "AZ",
  homeType: "Apartment",
  rooms: 3,
  bath: 2,
  price: 1429,
  floorspace: 1371,
  date: "2/28/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/az-mesa.jpg",
  address: "1508 N Alta Mesa Dr 114",
  city: "Mesa",
  state: "AZ",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 655000,
  floorspace: 2575,
  date: "3/6/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "../img/homes/ar-little_rock.jpg",
  address: "923 Hartford St",
  city: "Little Rock",
  state: "AR",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 215000,
  floorspace: 2000,
  date: "5/1/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/ar-fayetteville.jpg",
  address: "374 Mimosa Lane",
  city: "Fayetteville",
  state: "AR",
  homeType: "Ranch",
  rooms: 2,
  bath: 1,
  price: 120000,
  floorspace: 792,
  date: "5/3/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/ar-fort_smith.jpg",
  address: "5100 Zero St",
  city: "Fort Smith",
  state: "AR",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 480,
  floorspace: 551,
  date: "5/9/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ar-hot_springs.jpg",
  address: "5000 Central Ave APT 33",
  city: "Hot Springs",
  state: "AR",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 399000,
  floorspace: 1600,
  date: "5/22/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: []
}, {
  image: "../img/homes/ca-los_angeles.jpg",
  address: "2393 Castilian Drive",
  city: "Los Angeles",
  state: "CA",
  homeType: "House",
  rooms: 4,
  bath: 5,
  price: 3250760,
  floorspace: 3620,
  date: "6/2/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ca-san_francisco.jpg",
  address: "6705 Evelyn Way",
  city: "San Francisco",
  state: "CA",
  homeType: "Ranch",
  rooms: 3,
  bath: 1,
  price: 1099000,
  floorspace: 1025,
  date: "6/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ca-san_diego.jpg",
  address: "11727 Genesee Avenue",
  city: "San Diego",
  state: "CA",
  homeType: "Apartment",
  rooms: 2,
  bath: 1,
  price: 2200,
  floorspace: 600,
  date: "7/19/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ca-sacramento.jpg",
  address: "4077 Libby Street",
  city: "Sacramento",
  state: "CA",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 1088000,
  floorspace: 1000,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/co-denver.jpg",
  address: "5188 W County 150 Rd S",
  city: "Denver",
  state: "CO",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 347999,
  floorspace: 1800,
  date: "9/24/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/co-colorado_springs.jpg",
  address: "8418 N Wabash Ave",
  city: "Colorado Springs",
  state: "CO",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 290000,
  floorspace: 2300,
  date: "10/4/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: []
}, {
  image: "../img/homes/co-boulder.jpg",
  address: "3381 New London Rd",
  city: "Boulder",
  state: "CO",
  homeType: "Apartment",
  rooms: 4,
  bath: 4,
  price: 2500,
  floorspace: 1800,
  date: "10/14/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/co-fort_collins.jpg",
  address: "2727 Iowa Dr",
  city: "Fort Collins",
  state: "CO",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 150500,
  floorspace: 1800,
  date: "10/26/2017",
  seller: "Amelia Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/ct-hartford.jpg",
  address: "30 Boston Cliff Rd",
  city: "Hartford",
  state: "CT",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 398000,
  floorspace: 2100,
  date: "10/31/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "../img/homes/ct-new_haven.jpg",
  address: "15729 Parkwood Dr S",
  city: "New Haven",
  state: "CT",
  homeType: "Ranch",
  rooms: 2,
  bath: 3,
  price: 140500,
  floorspace: 1750,
  date: "11/20/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: []
}, {
  image: "../img/homes/ct-stamford.jpg",
  address: "2404 Edmonton Rd",
  city: "Stamford",
  state: "CT",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1375,
  floorspace: 1975,
  date: "12/1/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ct-bridgeport.jpg",
  address: "220 Meadow Ln",
  city: "Bridgeport",
  state: "CT",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 267500,
  floorspace: 1900,
  date: "12/11/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/de-wilmington.jpg",
  address: "738 Kentucky Ave",
  city: "Wilmington",
  state: "DE",
  homeType: "House",
  rooms: 8,
  bath: 6,
  price: 12900000,
  floorspace: 9000,
  date: "1/9/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/de-newark.jpg",
  address: "4201 Townsend Ave",
  city: "Newark",
  state: "DE",
  homeType: "Ranch",
  rooms: 3,
  bath: 4,
  price: 180850,
  floorspace: 2375,
  date: "1/10/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/de-dover.jpg",
  address: "81 S. Fairground Lane",
  city: "Dover",
  state: "DE",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1699,
  floorspace: 879,
  date: "1/23/2017",
  seller: "Wilson Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/de-lewes.jpg",
  address: "403 Glen Creek Lane",
  city: "Lewes",
  state: "DE",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 190000,
  floorspace: 1750,
  date: "1/26/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/fl-miami.jpg",
  address: "7 Maple Street",
  city: "Miami",
  state: "FL",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 315759,
  floorspace: 2900,
  date: "2/1/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/fl-orlando.jpg",
  address: "384 South Drive",
  city: "Orlando",
  state: "FL",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 315000,
  floorspace: 2500,
  date: "2/16/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/fl-tampa.jpg",
  address: "195 West Lane",
  city: "Tampa",
  state: "FL",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 2450,
  floorspace: 1400,
  date: "2/20/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/fl-fort_lauderdale.jpg",
  address: "8157 Railroad Lane",
  city: "Fort Lauderdale",
  state: "FL",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 379000,
  floorspace: 1980,
  date: "2/28/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ga-atlanta.jpg",
  address: "6 Grant Street",
  city: "Atlanta",
  state: "GA",
  homeType: "House",
  rooms: 3,
  bath: 4,
  price: 235000,
  floorspace: 2459,
  date: "3/6/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: []
}, {
  image: "../img/homes/ga-savannah.jpg",
  address: "78 Fifth Lane",
  city: "Savannah",
  state: "GA",
  homeType: "Ranch",
  rooms: 5,
  bath: 6,
  price: 345500,
  floorspace: 2600,
  date: "5/1/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ga-marietta.jpg",
  address: "677 Richardson Drive",
  city: "Marietta",
  state: "GA",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 2200,
  floorspace: 1400,
  date: "5/3/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ga-augusta.jpg",
  address: "81 Miles Road",
  city: "Augusta",
  state: "GA",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 450500,
  floorspace: 1750,
  date: "5/9/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/hi-honolulu.jpg",
  address: "4747 Victoria Street",
  city: "Honolulu",
  state: "HI",
  homeType: "House",
  rooms: 5,
  bath: 5,
  price: 789999,
  floorspace: 3475,
  date: "5/22/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/hi-kailua.jpg",
  address: "9085 Orchard Street",
  city: "Kailua",
  state: "HI",
  homeType: "Ranch",
  rooms: 4,
  bath: 2,
  price: 385000,
  floorspace: 2450,
  date: "6/2/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/hi-kaneohe.jpg",
  address: "7973 Bedford Drive",
  city: "Kaneohe",
  state: "HI",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 2400,
  floorspace: 1399,
  date: "6/4/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/hi-kapolei.jpg",
  address: "525 Manawai Street",
  city: "Kapolei",
  state: "HI",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 300000,
  floorspace: 1675,
  date: "7/19/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/id-boise.jpg",
  address: "822 Green Lake Lane",
  city: "Boise",
  state: "ID",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 266899,
  floorspace: 2175,
  date: "8/25/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: []
}, {
  image: "../img/homes/id-coeur_d_alene.jpg",
  address: "59 Argyle Drive",
  city: "Coeur d'Alene",
  state: "ID",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 270000,
  floorspace: 2345,
  date: "9/24/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/id-nampa.jpg",
  address: "9025 Clay Street",
  city: "Nampa",
  state: "ID",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1899,
  floorspace: 1350,
  date: "10/4/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/id-meridian.jpg",
  address: "7792 Annadale Drive",
  city: "Meridian",
  state: "ID",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 230000,
  floorspace: 1400,
  date: "10/14/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/il-chicago.jpg",
  address: "8371 Augusta Street",
  city: "Chicago",
  state: "IL",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 375888,
  floorspace: 2925,
  date: "10/26/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "../img/homes/il-naperville.jpg",
  address: "202 S. Jones Street",
  city: "Naperville",
  state: "IL",
  homeType: "Ranch",
  rooms: 3,
  bath: 4,
  price: 325500,
  floorspace: 2460,
  date: "10/31/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/il-peoria.jpg",
  address: "7669 Edgemont Drive",
  city: "Peoria",
  state: "IL",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 2500,
  floorspace: 1365,
  date: "11/20/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/il-champaign.jpg",
  address: "8 Summit Court",
  city: "Champaign",
  state: "IL",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 520000,
  floorspace: 1340,
  date: "12/1/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/in-carmel.jpg",
  address: "172 South Blackburn Avenue",
  city: "Carmel",
  state: "IN",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 199799,
  floorspace: 1875,
  date: "12/11/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/in-fort_wayne.jpg",
  address: "114 Virginia Road",
  city: "Fort Wayne",
  state: "IN",
  homeType: "Ranch",
  rooms: 5,
  bath: 4,
  price: 456700,
  floorspace: 2555,
  date: "1/9/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/in-bloomington.jpg",
  address: "9619 Longfellow Street",
  city: "Bloomington",
  state: "IN",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1475,
  floorspace: 1255,
  date: "10/31/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/in-south_bed.jpg",
  address: "672 Rock Maple Lane",
  city: "South Bend",
  state: "IN",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 353265,
  floorspace: 1850,
  date: "10/26/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ia-des_moines.jpg",
  address: "295 Jockey Hollow Lane",
  city: "Des Moines",
  state: "IA",
  homeType: "Ranch",
  rooms: 4,
  bath: 3,
  price: 222000,
  floorspace: 2150,
  date: "10/14/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: []
}, {
  image: "../img/homes/ia-iowa_city.jpg",
  address: "3 St Paul Avenue",
  city: "Iowa City",
  state: "IA",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1799,
  floorspace: 1480,
  date: "10/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ia-cedar_rapids.jpg",
  address: "8166 Myrtle Street",
  city: "Cedar Rapids",
  state: "IA",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 230000,
  floorspace: 1899,
  date: "9/24/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/in-gary.jpg",
  address: "42 Grove Avenue",
  city: "Gary",
  state: "IN",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 585888,
  floorspace: 3000,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/ks-topeka.jpg",
  address: "43 Glen Eagles Road",
  city: "Topeka",
  state: "KS",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 240000,
  floorspace: 2145,
  date: "7/19/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/ks-overland_park.jpg",
  address: "714 Augusta Street",
  city: "Overland Park",
  state: "KS",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1766,
  floorspace: 1425,
  date: "6/4/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ks-lawrence.jpg",
  address: "7 New Saddle Avenue",
  city: "Lawrence",
  state: "KS",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 200000,
  floorspace: 2000,
  date: "6/2/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ia-ames.jpg",
  address: "992 Valley Court",
  city: "Ames",
  state: "IA",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 275999,
  floorspace: 2200,
  date: "5/22/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/ky-louisville.jpg",
  address: "7840 Walnut Street",
  city: "Louisville",
  state: "KY",
  homeType: "Ranch",
  rooms: 4,
  bath: 5,
  price: 470500,
  floorspace: 2500,
  date: "5/9/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ky-lexington.jpg",
  address: "85 W. State Avenue",
  city: "Lexington",
  state: "KY",
  homeType: "Apartment",
  rooms: 4,
  bath: 4,
  price: 1900,
  floorspace: 1800,
  date: "5/3/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ky-frankfort.jpg",
  address: "96 Cottage Street",
  city: "Frankfort",
  state: "KY",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 500000,
  floorspace: 1550,
  date: "5/1/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ks-kansas_city.jpg",
  address: "99 Sunnyslope Lane",
  city: "Kansas City",
  state: "KS",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 220500,
  floorspace: 2160,
  date: "3/6/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/la-new_orleans.jpg",
  address: "472 Glenlake Street",
  city: "New Orleans",
  state: "LA",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 465000,
  floorspace: 2800,
  date: "2/28/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/la-baton_rouge.jpg",
  address: "930 Tarkiln Hill Drive",
  city: "Baton Rouge",
  state: "LA",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 999,
  floorspace: 850,
  date: "2/20/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/la-lafayette.jpg",
  address: "9718 South Fremont Avenue",
  city: "Lafayette",
  state: "LA",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 200000,
  floorspace: 1100,
  date: "2/16/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Gym"]
}, {
  image: "../img/homes/ky-bowling_green.jpg",
  address: "194 Thompson Road",
  city: "Bowling Green",
  state: "KY",
  homeType: "House",
  rooms: 6,
  bath: 5,
  price: 555555,
  floorspace: 3425,
  date: "2/1/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/me-portland.jpg",
  address: "20 Armstrong Street",
  city: "Portland",
  state: "ME",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 199000,
  floorspace: 1850,
  date: "1/26/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/me-bangor.jpg",
  address: "48 Mulberry Court",
  city: "Bangor",
  state: "ME",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1320,
  floorspace: 1099,
  date: "1/23/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/me-augusta.jpg",
  address: "469 Victoria Avenue",
  city: "Augusta",
  state: "ME",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 255500,
  floorspace: 1800,
  date: "1/10/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/la-shreveport.jpg",
  address: "194 Thompson Road",
  city: "Shreveport",
  state: "LA",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 195999,
  floorspace: 1800,
  date: "1/9/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/md-baltimore.jpg",
  address: "21606 Mulberry Court",
  city: "Baltimore",
  state: "MD",
  homeType: "Ranch",
  rooms: 4,
  bath: 5,
  price: 600000,
  floorspace: 3500,
  date: "1/10/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/md-annapolis.jpg",
  address: "815 Belmont Avenue",
  city: "Annapolis",
  state: "MD",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1599,
  floorspace: 1200,
  date: "1/23/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/md-rockville.jpg",
  address: "462 Brown Drive",
  city: "Rockville",
  state: "MD",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 269800,
  floorspace: 2200,
  date: "1/26/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/me-lewiston.jpg",
  address: "36 Railroad Street",
  city: "Lewiston",
  state: "ME",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 199900,
  floorspace: 1750,
  date: "2/1/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: []
}, {
  image: "../img/homes/ma-boston.jpg",
  address: "34 South Galvin Street",
  city: "Boston",
  state: "MA",
  homeType: "Ranch",
  rooms: 4,
  bath: 5,
  price: 425600,
  floorspace: 3400,
  date: "2/16/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/ma-cambridge.jpg",
  address: "8 6th St",
  city: "Cambridge",
  state: "MA",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 999,
  floorspace: 875,
  date: "2/20/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ma-worcester.jpg",
  address: "307 Sherwood Road",
  city: "Worcester",
  state: "MA",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 1500000,
  floorspace: 1100,
  date: "2/28/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/md-silver_spring.jpg",
  address: "1510 West Grandrose Avenue",
  city: "Silver Spring",
  state: "MD",
  homeType: "House",
  rooms: 3,
  bath: 4,
  price: 235750,
  floorspace: 1900,
  date: "3/6/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/mi-detroit.jpg",
  address: "658 E. Sierra Court",
  city: "Detroit",
  state: "MI",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 355899,
  floorspace: 2200,
  date: "5/1/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/mi-ann_arbor.jpg",
  address: "8 Windsor Avenue",
  city: "Ann Arbor",
  state: "MI",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 888,
  floorspace: 1100,
  date: "5/3/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mi-grand_rapids.jpg",
  address: "234 Deerfield Avenue",
  city: "Grand Rapids",
  state: "MI",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 399000,
  floorspace: 1420,
  date: "5/9/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ma-springfield.jpg",
  address: "402 Rosewood Street",
  city: "Springfield",
  state: "MA",
  homeType: "House",
  rooms: 4,
  bath: 4,
  price: 300000,
  floorspace: 2600,
  date: "5/22/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: []
}, {
  image: "../img/homes/mn-minneapolis.jpg",
  address: "7927 Oak Meadow Street",
  city: "Minneapolis",
  state: "MN",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 200999,
  floorspace: 2000,
  date: "6/2/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/mn-saint_paul.jpg",
  address: "97 Lafayette Road",
  city: "Saint Paul",
  state: "MN",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 2640,
  floorspace: 1355,
  date: "5/22/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mn-duluth.jpg",
  address: "8138 Peachtree Avenue",
  city: "Duluth",
  state: "MN",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 549500,
  floorspace: 1525,
  date: "10/31/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mi-kalamazoo.jpg",
  address: "7956 Lincoln Court",
  city: "Kalamazoo",
  state: "MI",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 299000,
  floorspace: 2555,
  date: "10/26/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/ms-jackson.jpg",
  address: "43 Fieldstone Street",
  city: "Jackson",
  state: "MS",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 285999,
  floorspace: 2185,
  date: "10/14/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/ms-biloxi.jpg",
  address: "392 Winchester Court",
  city: "Biloxi",
  state: "MS",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 600,
  floorspace: 700,
  date: "10/4/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/ms-hattiesburg.jpg",
  address: "895 Carriage Street",
  city: "Hattiesburg",
  state: "MS",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 758200,
  floorspace: 1500,
  date: "9/24/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mn-st_cloud.jpg",
  address: "8965 Goldfield Street",
  city: "St. Cloud",
  state: "MN",
  homeType: "House",
  rooms: 6,
  bath: 6,
  price: 775750,
  floorspace: 3750,
  date: "8/25/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/md-st_louis.jpg",
  address: "17 Valley Avenue",
  city: "St. Louis",
  state: "MO",
  homeType: "Ranch",
  rooms: 5,
  bath: 5,
  price: 465999,
  floorspace: 3450,
  date: "7/19/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "../img/homes/mo-kansas_city.jpg",
  address: "7874 Arcadia Street",
  city: "Kansas City",
  state: "MO",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 965,
  floorspace: 1422,
  date: "6/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mo-springfield.jpg",
  address: "9981 Wentworth Drive",
  city: "Springfield",
  state: "MO",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 1089900,
  floorspace: 1525,
  date: "6/2/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ms-gulfport.jpg",
  address: "92 Overlook Street",
  city: "Gulfport",
  state: "MS",
  homeType: "House",
  rooms: 6,
  bath: 4,
  price: 500999,
  floorspace: 2975,
  date: "5/22/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/mt-missoula.jpg",
  address: "808 4th Drive",
  city: "Missoula",
  state: "MT",
  homeType: "Ranch",
  rooms: 3,
  bath: 4,
  price: 535500,
  floorspace: 4350,
  date: "5/9/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/mt-billings.jpg",
  address: "9595 Division Street",
  city: "Billings",
  state: "MT",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1799,
  floorspace: 1855,
  date: "5/3/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: []
}, {
  image: "../img/homes/mt-bozeman.jpg",
  address: "833 Cambridge Street",
  city: "Bozeman",
  state: "MT",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 460055,
  floorspace: 1650,
  date: "5/1/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/mo-jefferson_city.jpg",
  address: "34 Wagon Street",
  city: "Jefferson City",
  state: "MO",
  homeType: "House",
  rooms: 5,
  bath: 4,
  price: 325500,
  floorspace: 2200,
  date: "3/6/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/ne-omaha.jpg",
  address: "798 Squaw Creek Drive",
  city: "Omaha",
  state: "NE",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 380000,
  floorspace: 2345,
  date: "2/28/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ne-lincoln.jpg",
  address: "8180 Cambridge Drive",
  city: "Lincoln",
  state: "NE",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1050,
  floorspace: 699,
  date: "2/20/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: []
}, {
  image: "../img/homes/ne-grand_island.jpg",
  address: "8257 W. Goldfield Street",
  city: "Grand Island",
  state: "NE",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 299900,
  floorspace: 1700,
  date: "2/16/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: []
}, {
  image: "../img/homes/mt-helena.jpg",
  address: "192 Sierra Avenue",
  city: "Helena",
  state: "MT",
  homeType: "House",
  rooms: 4,
  bath: 4,
  price: 360600,
  floorspace: 2750,
  date: "2/1/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/nv-las_vegas.jpg",
  address: "6429 Lake View Avenue",
  city: "Las Vegas",
  state: "NV",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 342000,
  floorspace: 1788,
  date: "1/26/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: []
}, {
  image: "../img/homes/nv-reno.jpg",
  address: "56 NW. Circle Avenue",
  city: "Reno",
  state: "NV",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1500,
  floorspace: 999,
  date: "1/23/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nv-henderson.jpg",
  address: "20 Birch Hill Court",
  city: "Henderson",
  state: "NV",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 503800,
  floorspace: 2199,
  date: "1/10/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ne-kearney.jpg",
  address: "844 Courtland Street",
  city: "Kearney",
  state: "NE",
  homeType: "House",
  rooms: 4,
  bath: 4,
  price: 245500,
  floorspace: 1785,
  date: "1/9/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/nh-manchester.jpg",
  address: "8035 Iroquois Court",
  city: "Manchester",
  state: "NH",
  homeType: "Ranch",
  rooms: 5,
  bath: 2,
  price: 300000,
  floorspace: 2450,
  date: "12/11/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/nh-concord.jpg",
  address: "394 Canterbury Street",
  city: "Concord",
  state: "NH",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 3250,
  floorspace: 1850,
  date: "12/1/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nh-nashua.jpg",
  address: "218 Beech Street",
  city: "Nashua",
  state: "NH",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 397800,
  floorspace: 1450,
  date: "11/20/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/nv-carson_city.jpg",
  address: "800 Fawn Street",
  city: "Carson City",
  state: "NV",
  homeType: "House",
  rooms: 6,
  bath: 3,
  price: 425000,
  floorspace: 3000,
  date: "10/31/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "../img/homes/nj-newark.jpg",
  address: "5 Lexington Street",
  city: "Newark",
  state: "NJ",
  homeType: "Ranch",
  rooms: 3,
  bath: 5,
  price: 659500,
  floorspace: 3455,
  date: "10/26/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/nj-trenton.jpg",
  address: "39 Taylor Road",
  city: "Trenton",
  state: "NJ",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 785,
  floorspace: 800,
  date: "10/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nj-atlantic_city.jpg",
  address: "670 Shirley Street",
  city: "Atlantic City",
  state: "NJ",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 469999,
  floorspace: 1645,
  date: "9/24/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nh-portsmouth.jpg",
  address: "477 Columbia Avenue",
  city: "Portsmouth",
  state: "NH",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 275500,
  floorspace: 2150,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: []
}, {
  image: "../img/homes/nm-albuquerque.jpg",
  address: "99 Oak Meadow Street",
  city: "Albuquerque",
  state: "NM",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 1550000,
  floorspace: 5400,
  date: "7/19/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/nm-santa_fe.jpg",
  address: "7877 Edgewood Avenue",
  city: "Santa Fe",
  state: "NM",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1300,
  floorspace: 1100,
  date: "6/4/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nm-las_cruces.jpg",
  address: "28 Trusel Lane",
  city: "Las Cruces",
  state: "NM",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 659000,
  floorspace: 1640,
  date: "6/2/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/",
  address: "583 Hall Drive",
  city: "Atlantic City",
  state: "NJ",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 210000,
  floorspace: 2600,
  date: "5/22/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/ny-buffalo.jpg",
  address: "786 Primrose Drive",
  city: "Buffalo",
  state: "NY",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 345999,
  floorspace: 2200,
  date: "5/9/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ny-albany.jpg",
  address: "42 North Argyle Street",
  city: "Albany",
  state: "NY",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 4600,
  floorspace: 1500,
  date: "5/3/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ny-syracuse.jpg",
  address: "8423 Bellevue Drive",
  city: "Syracuse",
  state: "NY",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 9870000,
  floorspace: 2000,
  date: "5/1/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nm-roswell.jpg",
  address: "1510 Edgemont Drive",
  city: "Roswell",
  state: "NM",
  homeType: "House",
  rooms: 3,
  bath: 4,
  price: 189990,
  floorspace: 2450,
  date: "3/6/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: []
}, {
  image: "../img/homes/nc-raleigh.jpg",
  address: "97 Lafayette Avenue",
  city: "Raleigh",
  state: "NC",
  homeType: "Ranch",
  rooms: 5,
  bath: 3,
  price: 185999,
  floorspace: 2500,
  date: "2/28/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: []
}, {
  image: "../img/homes/nc-fayetteville.jpg",
  address: "712 Sunset Drive",
  city: "Fayetteville",
  state: "NC",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1145,
  floorspace: 900,
  date: "2/20/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nc-charlotte.jpg",
  address: "37 Delaware Street",
  city: "Charlotte",
  state: "NC",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 275599,
  floorspace: 1099,
  date: "2/16/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ny-nyc.jpg",
  address: "429 Church Street",
  city: "New York City",
  state: "NY",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 205500,
  floorspace: 1950,
  date: "2/1/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: []
}, {
  image: "../img/homes/nd-fargo.jpg",
  address: "30 Ohio Street",
  city: "Fargo",
  state: "ND",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 1300,
  floorspace: 1300,
  date: "1/26/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/nd-bismarck.jpg",
  address: "670 Jockey Hollow Drive",
  city: "Bismarck",
  state: "ND",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 2699,
  floorspace: 1300,
  date: "1/23/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nd-minot.jpg",
  address: "778 Prairie Drive",
  city: "Minot",
  state: "ND",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 454500,
  floorspace: 1499,
  date: "1/10/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/nc-wilmington.jpg",
  address: "1213 South King Street",
  city: "Wilmington",
  state: "NC",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 475750,
  floorspace: 3600,
  date: "1/9/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/oh-cleveland.jpg",
  address: "64 Riverside Avenue",
  city: "Cleveland",
  state: "OH",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 875999,
  floorspace: 4400,
  date: "1/10/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/oh-cincinnati.jpg",
  address: "43 Aspen Avenue",
  city: "Cincinnati",
  state: "OH",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 3555,
  floorspace: 1755,
  date: "1/23/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/oh-columbus.jpg",
  address: "7 Beaver Ridge Street",
  city: "Columbus",
  state: "OH",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 400321,
  floorspace: 1999,
  date: "1/26/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/nd-grand_forks.jpg",
  address: "29 Greenrose Street",
  city: "Grand Forks",
  state: "ND",
  homeType: "House",
  rooms: 5,
  bath: 4,
  price: 450550,
  floorspace: 8000,
  date: "2/1/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ok-oklahoma_city.jpg",
  address: "32 Homestead Road",
  city: "Oklahoma City",
  state: "OK",
  homeType: "Ranch",
  rooms: 5,
  bath: 4,
  price: 333999,
  floorspace: 2000,
  date: "2/16/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/ok-tulsa.jpg",
  address: "757 Mayfair Drive",
  city: "Tulsa",
  state: "OK",
  homeType: "Apartment",
  rooms: 4,
  bath: 4,
  price: 3650,
  floorspace: 1700,
  date: "2/20/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ok-norman.jpg",
  address: "1 High Ridge Court",
  city: "Norman",
  state: "OK",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 355350,
  floorspace: 1650,
  date: "2/28/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/oh-dayton.jpg",
  address: "7031 Maiden Street",
  city: "Dayton",
  state: "OH",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 285000,
  floorspace: 2500,
  date: "3/6/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/or-portland.jpg",
  address: "7070 St Margarets Drive",
  city: "Portland",
  state: "OR",
  homeType: "Ranch",
  rooms: 3,
  bath: 4,
  price: 298000,
  floorspace: 2300,
  date: "5/1/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/or-eugene.jpg",
  address: "9968 Bayport Avenue",
  city: "Eugene",
  state: "OR",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 998,
  floorspace: 899,
  date: "5/3/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/or-salem.jpg",
  address: "597 University Road",
  city: "Salem",
  state: "OR",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 212900,
  floorspace: 985,
  date: "5/9/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ok-edmond.jpg",
  address: "4900 Durham Drive",
  city: "Edmond",
  state: "OK",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 235600,
  floorspace: 2200,
  date: "5/22/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: []
}, {
  image: "../img/homes/pa-philadelphia.jpg",
  address: "8135 Cactus Lane",
  city: "Philadelphia",
  state: "PA",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 342500,
  floorspace: 2600,
  date: "6/2/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: []
}, {
  image: "../img/homes/pa-pittsburgh.jpg",
  address: "607 South Union Avenue",
  city: "Pittsburgh",
  state: "PA",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 2359,
  floorspace: 1555,
  date: "6/4/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/pa-harrisburg.jpg",
  address: "1500 Corona Street",
  city: "Harrisburg",
  state: "PA",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 759500,
  floorspace: 2000,
  date: "7/19/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/or-bend.jpg",
  address: "678 School Avenue",
  city: "Bend",
  state: "OR",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 265999,
  floorspace: 2850,
  date: "8/25/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/ri-providence.jpg",
  address: "535 Bay Street",
  city: "Providence",
  state: "RI",
  homeType: "Ranch",
  rooms: 5,
  bath: 4,
  price: 320990,
  floorspace: 2250,
  date: "9/24/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/ri-newport.jpg",
  address: "9659 Newport Street",
  city: "Newport",
  state: "RI",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 3499,
  floorspace: 1645,
  date: "10/4/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ri-warwick.jpg",
  address: "7683 Pilgrim Lane",
  city: "Warwick",
  state: "RI",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 769350,
  floorspace: 1750,
  date: "10/14/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/pa-lancaster.jpg",
  address: "56 N. Sunbeam Street",
  city: "Lancaster",
  state: "PA",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 288600,
  floorspace: 1950,
  date: "10/26/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: []
}, {
  image: "../img/homes/sc-charleston.jpg",
  address: "2 Rockledge Avenue",
  city: "Charleston",
  state: "SC",
  homeType: "Ranch",
  rooms: 5,
  bath: 4,
  price: 760465,
  floorspace: 3560,
  date: "10/14/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/sc-columbia.jpg",
  address: "1000 State Street",
  city: "Columbia",
  state: "SC",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 799,
  floorspace: 675,
  date: "10/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/sc-myrtle_beach.jpg",
  address: "789 Anderson Street",
  city: "Myrtle Beach",
  state: "SC",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 599900,
  floorspace: 2100,
  date: "9/24/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ri-cranston.jpg",
  address: "50 S. Rock Maple Street",
  city: "Cranston",
  state: "RI",
  homeType: "House",
  rooms: 5,
  bath: 3,
  price: 475000,
  floorspace: 3800,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/sd-sioux_falls.jpg",
  address: "204 Gainsway Street",
  city: "Sioux Falls",
  state: "SD",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 139575,
  floorspace: 2255,
  date: "7/19/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/sd-rapid_city.jpg",
  address: "226 Old Beach Street",
  city: "Rapid City",
  state: "SD",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 1699,
  floorspace: 1485,
  date: "6/4/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/sd-pierre.jpg",
  address: "9878 Columbia Avenue",
  city: "Pierre",
  state: "SD",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 313299,
  floorspace: 1250,
  date: "6/2/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/sc-greenville.jpg",
  address: "8016 Addison Avenue",
  city: "Greenville",
  state: "SC",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 215999,
  floorspace: 2375,
  date: "5/22/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: []
}, {
  image: "../img/homes/tn-nashville.jpg",
  address: "7701 North Heather Drive",
  city: "Nashville",
  state: "TN",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 2450,
  floorspace: 2755,
  date: "5/9/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/tn-memphis.jpg",
  address: "216 W. Brewery Drive",
  city: "Memphis",
  state: "TN",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1675,
  floorspace: 1445,
  date: "5/3/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/tn-knoxville.jpg",
  address: "75 Del Monte Lane",
  city: "Knoxville",
  state: "TN",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 867000,
  floorspace: 1955,
  date: "5/1/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/sd-aberdeen.jpg",
  address: "7160 Wilson Street",
  city: "Aberdeen",
  state: "SD",
  homeType: "House",
  rooms: 4,
  bath: 4,
  price: 310675,
  floorspace: 2350,
  date: "3/6/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/tx-houston.jpg",
  address: "7016 Baker Lane",
  city: "Houston",
  state: "TX",
  homeType: "Ranch",
  rooms: 3,
  bath: 4,
  price: 400500,
  floorspace: 3545,
  date: "2/28/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/tx-dallas.jpg",
  address: "6 Morris Street",
  city: "Dallas",
  state: "TX",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 8599,
  floorspace: 2150,
  date: "2/20/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/tx-austin.jpg",
  address: "824 Bohemia Road",
  city: "Austin",
  state: "TX",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 649250,
  floorspace: 1765,
  date: "2/16/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/tn-chattanooga.jpg",
  address: "902 Parker Street",
  city: "Chattanooga",
  state: "TN",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 175000,
  floorspace: 1950,
  date: "2/1/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/ut-salt_lake_city.jpg",
  address: "9690 Essex Drive",
  city: "Salt Lake City",
  state: "UT",
  homeType: "Ranch",
  rooms: 5,
  bath: 4,
  price: 445000,
  floorspace: 2655,
  date: "1/26/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/ut-provo.jpg",
  address: "19 Nut Swamp Drive",
  city: "Provo",
  state: "UT",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 9000,
  floorspace: 2000,
  date: "1/23/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ut-ogden.jpg",
  address: "59 Oak Drive",
  city: "Ogden",
  state: "UT",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 562765,
  floorspace: 1500,
  date: "1/10/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Swimming Pool"]
}, {
  image: "../img/homes/tx-san_antonio.jpg",
  address: "331 East Edgemont Street",
  city: "San Antonio",
  state: "TX",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 220000,
  floorspace: 2350,
  date: "1/9/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/vt-burlington.jpg",
  address: "8888 Thatcher Road",
  city: "Burlington",
  state: "VT",
  homeType: "Ranch",
  rooms: 5,
  bath: 5,
  price: 300999,
  floorspace: 2430,
  date: "1/10/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/vt-montpelier.jpg",
  address: "490 Union Street",
  city: "Montpelier",
  state: "VT",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1959,
  floorspace: 1600,
  date: "1/23/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/vt-rutland_city.jpg",
  address: "3 Fifth Street",
  city: "Rutland City",
  state: "VT",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 388000,
  floorspace: 1445,
  date: "1/26/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/ut-park_city.jpg",
  address: "565 Smoky Hollow Drive",
  city: "Park City",
  state: "UT",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 345700,
  floorspace: 3200,
  date: "2/1/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Finished Basement"]
}, {
  image: "../img/homes/va-charlottesville.jpg",
  address: "97 Pennsylvania Avenue",
  city: "Charlottesville",
  state: "VA",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 198000,
  floorspace: 2000,
  date: "2/16/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: []
}, {
  image: "../img/homes/va-richmond.jpg",
  address: "7569 Pennington Street",
  city: "Richmond",
  state: "VA",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 3500,
  floorspace: 900,
  date: "2/20/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/va-virginia_beach.jpg",
  address: "977 Kent Street",
  city: "Virginia Beach",
  state: "VA",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 521000,
  floorspace: 1299,
  date: "2/28/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: ["Elevator", "Gym"]
}, {
  image: "../img/homes/vt-brattleboro.jpg",
  address: "7998 North Rock Maple Street",
  city: "Brattleboro",
  state: "VT",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 169500,
  floorspace: 2000,
  date: "3/6/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: []
}, {
  image: "../img/homes/wa-seattle.jpg",
  address: "8260 Edgefield Street",
  city: "Seattle",
  state: "WA",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 7520,
  floorspace: 1450,
  date: "5/1/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/wa-spokane.jpg",
  address: "8721 Thompson Road",
  city: "Spokane",
  state: "WA",
  homeType: "Apartment",
  rooms: 2,
  bath: 2,
  price: 2400,
  floorspace: 1500,
  date: "5/3/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wa-tacoma.jpg",
  address: "8122 N.E. Canal Street",
  city: "Tacoma",
  state: "WA",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 769955,
  floorspace: 1800,
  date: "5/9/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/va-norfolk.jpg",
  address: "747B Cherry Hill Road",
  city: "Norfolk",
  state: "VA",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 345500,
  floorspace: 2200,
  date: "6/2/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wv-charleston.jpg",
  address: "117 Hill Field Road",
  city: "Charleston",
  state: "WV",
  homeType: "Ranch",
  rooms: 4,
  bath: 3,
  price: 145000,
  floorspace: 2050,
  date: "6/4/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: []
}, {
  image: "../img/homes/wv-morgantown.jpg",
  address: "10 Gartner Road",
  city: "Morgantown",
  state: "WV",
  homeType: "Apartment",
  rooms: 3,
  bath: 3,
  price: 1150,
  floorspace: 1350,
  date: "7/19/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wv-huntington.jpg",
  address: "8052 Heather Street",
  city: "Huntington",
  state: "WV",
  homeType: "Condo",
  rooms: 4,
  bath: 4,
  price: 645500,
  floorspace: 1888,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "../img/agents/kate-wagner.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wa-bellevue.jpg",
  address: "2718 Morris Street",
  city: "Bellevue",
  state: "WA",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 399000,
  floorspace: 1970,
  date: "9/24/2017",
  seller: "Wilson	Foster",
  headshot: "../img/agents/wilson-foster.jpg",
  extras: []
}, {
  image: "../img/homes/wi-milwaukee.jpg",
  address: "6014 High Avenue",
  city: "Milwaukee",
  state: "WI",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 355000,
  floorspace: 2250,
  date: "10/4/2017",
  seller: "Sherry	Tucker",
  headshot: "../img/agents/sherry-tucker.jpg",
  extras: []
}, {
  image: "../img/homes/wi-madison.jpg",
  address: "555 Illinois Avenue",
  city: "Madison",
  state: "WI",
  homeType: "Apartment",
  rooms: 4,
  bath: 4,
  price: 2850,
  floorspace: 2000,
  date: "10/14/2017",
  seller: "Randy	Wood",
  headshot: "../img/agents/randy-wood.jpg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wi-green_bay.jpg",
  address: "47 Hillside Street",
  city: "Green Bay",
  state: "WI",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 430450,
  floorspace: 1675,
  date: "10/26/2017",
  seller: "Amelia	Berry",
  headshot: "../img/agents/amelia-berry.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wv-wheeling.jpg",
  address: "55 Rockaway Drive",
  city: "Wheeling",
  state: "WV",
  homeType: "House",
  rooms: 6,
  bath: 4,
  price: 500999,
  floorspace: 3450,
  date: "10/31/2017",
  seller: "Austin	Alvarado",
  headshot: "../img/agents/austin-alvarado.jpg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "../img/homes/wy-cheyenne.jpg",
  address: "41 Kent Street",
  city: "Cheyenne",
  state: "WY",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 265755,
  floorspace: 2540,
  date: "11/20/2017",
  seller: "Ivan	Walters",
  headshot: "../img/agents/ivan-walters.jpg",
  extras: ["Swimming Pool"]
}, {
  image: "../img/homes/wy-jackson.jpg",
  address: "9832 Oak Valley Avenue",
  city: "Jackson",
  state: "WY",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 900,
  floorspace: 850,
  date: "12/1/2017",
  seller: "Ashley	Kennedy",
  headshot: "../img/agents/ashley-kennedy.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wy-laramie.jpg",
  address: "80 Mammoth Avenue",
  city: "Laramie",
  state: "WY",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 379950,
  floorspace: 1345,
  date: "12/11/2017",
  seller: "Marshall	Patrick",
  headshot: "../img/agents/marshall-patrick.jpg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "../img/homes/wi-wisconsin_dells.jpg",
  address: "399 Discovery Way",
  city: "Wisconsin Dells",
  state: "WI",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 360000,
  floorspace: 3500,
  date: "6/2/2017",
  seller: "Mattie	Simon",
  headshot: "../img/agents/mattie-simon.jpg",
  extras: []
}];

exports.default = listingsData;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(60);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(197);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(198);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(199);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(200);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: '',
      listingsData: _listingsData2.default,
      city: "Any",
      state: "Any",
      homeType: "Any",
      rooms: 0,
      bath: 0,
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 20000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: _listingsData2.default,
      populateFormsData: "",
      sortby: "price-asc",
      view: "box",
      search: ""
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = void 0;
      newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorspace >= _this3.state.min_floor_space && item.floorspace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms && item.bath >= _this3.state.bath;
      });

      if (this.state.city != "Any") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.state != "Any") {
        newData = newData.filter(function (item) {
          return item.state == _this3.state.state;
        });
      }

      if (this.state.homeType != "Any") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.elevator != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes("elevator") == true;
          console.log();
        });
      }

      if (this.state.sortby == "price-dsc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.search != "") {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //City
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
        console.log(city);
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      //State
      var states = this.state.listingsData.map(function (item) {
        return item.state;
      });
      states = new Set(states);
      states = [].concat(_toConsumableArray(states));

      states = states.sort();

      //homeType
      var homeType = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeType = new Set(homeType);
      homeType = [].concat(_toConsumableArray(homeType));

      homeType = homeType.sort();

      //rooms
      var rooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      rooms = new Set(rooms);
      rooms = [].concat(_toConsumableArray(rooms));

      rooms = rooms.sort();

      //Bathrooms
      var bath = this.state.listingsData.map(function (item) {
        return item.bath;
        conosole.log("bath");
      });
      bath = new Set(bath);
      bath = [].concat(_toConsumableArray(bath));

      bath = bath.sort();

      this.setState({
        populateFormsData: {
          cities: cities,
          states: states,
          homeType: homeType,
          rooms: rooms,
          bath: bath
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state,
            populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData,
            change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[97]);