webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(97);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(96);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(98);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(99);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      name: "",
      listingsData: _listingsData2.default,
      city: "",
      state: "",
      homeType: "",
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
      filteredData: _listingsData2.default
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateData = _this.populateForms.bind(_this);

    return _this;
  }

  _createClass(App, [{
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
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = void 0;
      newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorspace >= _this3.state.min_floor_space && item.floorspace <= _this3.state.max_floor_space && item.rooms >= _this3.state.rooms && item.bath >= _this3.state.bath;
      });

      if (this.state.state != "Any") {
        newData = newData.filter(function (item) {
          return item.state == _this3.state.state;
        });
      }

      if (this.state.city != "Any") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      // if (this.state.homeType != "Any") {
      //   newData = newData.filter((item) => {
      //     return item.homeType == this.state.homeType
      //   })
      // }


      this.setState({
        filteredData: newData
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
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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
    return _this;
  }

  _createClass(Filter, [{
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
          _react2.default.createElement('label', { 'for': 'city' }),
          _react2.default.createElement(
            'span',
            { className: 'title city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Any', defaultValue: true },
              'Any City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Mobile' },
              'Mobile'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Birmingham' },
              'Birmingham'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Montgomery' },
              'Montgomery'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Huntsville' },
              'Huntsville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Anchorage' },
              'Anchorage'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Juneau' },
              'Juneau'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fairbanks' },
              'Fairbanks'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Sitka' },
              'Sitka'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Phoenix' },
              'Phoenix'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tucson' },
              'Tucson'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Scottsdale' },
              'Scottsdale'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Mesa' },
              'Mesa'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Little Rock' },
              'Little Rock'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fayetteville' },
              'Fayetteville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fort Smith' },
              'Fort Smith'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Hot Springs' },
              'Hot Springs'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Los Angeles' },
              'Los Angeles'
            ),
            _react2.default.createElement(
              'option',
              { value: 'San Francisco' },
              'San Francisco'
            ),
            _react2.default.createElement(
              'option',
              { value: 'San Diego' },
              'San Diego'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Sacramento' },
              'Sacramento'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Denver' },
              'Denver'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Colorado Springs' },
              'Colorado Springs'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Boulder' },
              'Boulder'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fort Collins' },
              'Fort Collins'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Hartford' },
              'Hartford'
            ),
            _react2.default.createElement(
              'option',
              { value: 'New Haven' },
              'New Haven'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Stamford' },
              'Stamford'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bridgeport' },
              'Bridgeport'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Wilmington' },
              'Wilmington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Newark' },
              'Newark'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Dover' },
              'Dover'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lewes' },
              'Lewes'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Miami' },
              'Miami'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Orlando' },
              'Orlando'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tampa' },
              'Tampa'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fort Lauderdale' },
              'Fort Lauderdale'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Atlanta' },
              'Atlanta'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Savannah' },
              'Savannah'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Marietta' },
              'Marietta'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Augusta' },
              'Augusta'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Honolulu' },
              'Honolulu'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kailua' },
              'Kailua'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kaneohe' },
              'Kaneohe'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kapolei' },
              'Kapolei'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Boise' },
              'Boise'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Coeur d\'Alene' },
              'Coeur d\'Alene'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Nampa' },
              'Nampa'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Meridian' },
              'Meridian'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Chicago' },
              'Chicago'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Naperville' },
              'Naperville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Peoria' },
              'Peoria'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Champaign' },
              'Champaign'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Carmel' },
              'Carmel'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fort Wayne' },
              'Fort Wayne'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bloomington' },
              'Bloomington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'South Bend' },
              'South Bend'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Des Moines' },
              'Des Moines'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Iowa City' },
              'Iowa City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cedar Rapids' },
              'Cedar Rapids'
            ),
            _react2.default.createElement(
              'option',
              { value: 'South Bend' },
              'South Bend'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Topeka' },
              'Topeka'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Overland Park' },
              'Overland Park'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lawrence' },
              'Lawrence'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ames' },
              'Ames'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Louisville' },
              'Louisville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lexington' },
              'Lexington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Frankfort' },
              'Frankfort'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kansas City' },
              'Kansas City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'New Orleans' },
              'New Orleans'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Baton Rouge' },
              'Baton Rouge'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lafayette' },
              'Lafayette'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bowling Green' },
              'Bowling Green'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Portland' },
              'Portland'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bangor' },
              'Bangor'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Augusta' },
              'Augusta'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Shreveport' },
              'Shreveport'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Baltimore' },
              'Baltimore'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Annapolis' },
              'Annapolis'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Rockville' },
              'Rockville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lewiston' },
              'Lewiston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Boston' },
              'Boston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cambridge' },
              'Cambridge'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Worcester' },
              'Worcester'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Silver Spring' },
              'Silver Spring'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Detroit' },
              'Detroit'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ann Arbor' },
              'Ann Arbor'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Grand Rapids' },
              'Grand Rapids'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Springfield' },
              'Springfield'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Minneapolis' },
              'Minneapolis'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Saint Paul' },
              'Saint Paul'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Duluth' },
              'Duluth'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kalamazoo' },
              'Kalamazoo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Jackson' },
              'Jackson'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Biloxi' },
              'Biloxi'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Hattiesburg' },
              'Hattiesburg'
            ),
            _react2.default.createElement(
              'option',
              { value: 'St. Cloud' },
              'St. Cloud'
            ),
            _react2.default.createElement(
              'option',
              { value: 'St. Louis' },
              'St. Louis'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kansas City' },
              'Kansas City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Springfield' },
              'Springfield'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Gulfport' },
              'Gulfport'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Missoula' },
              'Missoula'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Billings' },
              'Billings'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bozeman' },
              'Bozeman'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Jefferson City' },
              'Jefferson City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Omaha' },
              'Omaha'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lincoln' },
              'Lincoln'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Grand Island' },
              'Grand Island'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Helena' },
              'Helena'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Las Vegas' },
              'Las Vegas'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Reno' },
              'Reno'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Henderson' },
              'Henderson'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kearney' },
              'Kearney'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Manchester' },
              'Manchester'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Concord' },
              'Concord'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Nashua' },
              'Nashua'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Carson City' },
              'Carson City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Newark' },
              'Newark'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Trenton' },
              'Trenton'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Atlantic City' },
              'Atlantic City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Portsmouth' },
              'Portsmouth'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Albuquerque' },
              'Albuquerque'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Santa Fe' },
              'Santa Fe'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Las Cruces' },
              'Las Cruces'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Atlantic City' },
              'Atlantic City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Buffalo' },
              'Buffalo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Albany' },
              'Albany'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Syracuse' },
              'Syracuse'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Roswell' },
              'Roswell'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Raleigh' },
              'Raleigh'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fayetteville' },
              'Fayetteville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Charlotte' },
              'Charlotte'
            ),
            _react2.default.createElement(
              'option',
              { value: 'New York City' },
              'New York City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Fargo' },
              'Fargo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bismarck' },
              'Bismarck'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Minot' },
              'Minot'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Wilmington' },
              'Wilmington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cleveland' },
              'Cleveland'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cincinnati' },
              'Cincinnati'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Columbus' },
              'Columbus'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Grand Forks' },
              'Grand Forks'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Oklahoma City' },
              'Oklahoma City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tulsa' },
              'Tulsa'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Norman' },
              'Norman'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Dayton' },
              'Dayton'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Portland' },
              'Portland'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Eugene' },
              'Eugene'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Salem' },
              'Salem'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Edmond' },
              'Edmond'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Philadelphia' },
              'Philadelphia'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Pittsburgh' },
              'Pittsburgh'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Harrisburg' },
              'Harrisburg'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bend' },
              'Bend'
            ),
            _react2.default.createElement('option', { value: 'Providence' }),
            _react2.default.createElement(
              'option',
              { value: 'Newport' },
              'Newport'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Warwick' },
              'Warwick'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Lancaster' },
              'Lancaster'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Charleston' },
              'Charleston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Columbia' },
              'Columbia'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Myrtle Beach' },
              'Myrtle Beach'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cranston' },
              'Cranston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Sioux Falls' },
              'Sioux Falls'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Rapid City' },
              'Rapid City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Pierre' },
              'Pierre'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Greenville' },
              'Greenville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Nashville' },
              'Nashville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Memphis' },
              'Memphis'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Knoxville' },
              'Knoxville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Aberdeen' },
              'Aberdeen'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Houston' },
              'Houston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Dallas' },
              'Dallas'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Austin' },
              'Austin'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Chattanooga' },
              'Chattanooga'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Salt Lake City' },
              'Salt Lake City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Provo' },
              'Provo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ogden' },
              'Ogden'
            ),
            _react2.default.createElement(
              'option',
              { value: 'San Antonio' },
              'San Antonio'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Burlington' },
              'Burlington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Montpelier' },
              'Montpelier'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Rutland City' },
              'Rutland City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Park City' },
              'Park City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Charlottesville' },
              'Charlottesville'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Richmond' },
              'Richmond'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Virginia Beach' },
              'Virginia Beach'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Brattleboro' },
              'Bratteleboro'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Seattle' },
              'Seattle'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Spokane' },
              'Spokane'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Tacoma' },
              'Tacoma'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Norfolk' },
              'Norfolk'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Charleston' },
              'Charleston'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Morgantown' },
              'Morgantown'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Huntington' },
              'Huntington'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Bellevue' },
              'Bellevue'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Milwaukee' },
              'Milwaukee'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Madison' },
              'Madison'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Green Bay' },
              'Green Bay'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Wheeling' },
              'Wheeling'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Cheyenne' },
              'Cheyenne'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Jackson' },
              'Jackson'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Laramie' },
              'Laramie'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Wisconsin Dells' },
              'Wisconsin Dells'
            )
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
            _react2.default.createElement(
              'option',
              { value: 'AL' },
              'AL'
            ),
            _react2.default.createElement(
              'option',
              { value: 'AK' },
              'AK'
            ),
            _react2.default.createElement(
              'option',
              { value: 'AZ' },
              'AZ'
            ),
            _react2.default.createElement(
              'option',
              { value: 'AR' },
              'AR'
            ),
            _react2.default.createElement(
              'option',
              { value: 'CA' },
              'CA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'CO' },
              'CO'
            ),
            _react2.default.createElement(
              'option',
              { value: 'CT' },
              'CT'
            ),
            _react2.default.createElement(
              'option',
              { value: 'DE' },
              'DE'
            ),
            _react2.default.createElement(
              'option',
              { value: 'FL' },
              'FL'
            ),
            _react2.default.createElement(
              'option',
              { value: 'GA' },
              'GA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'HI' },
              'HI'
            ),
            _react2.default.createElement(
              'option',
              { value: 'ID' },
              'ID'
            ),
            _react2.default.createElement(
              'option',
              { value: 'IL' },
              'IL'
            ),
            _react2.default.createElement(
              'option',
              { value: 'IN' },
              'IN'
            ),
            _react2.default.createElement(
              'option',
              { value: 'IA' },
              'IA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'KS' },
              'KS'
            ),
            _react2.default.createElement(
              'option',
              { value: 'KY' },
              'KY'
            ),
            _react2.default.createElement(
              'option',
              { value: 'LA' },
              'LA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'ME' },
              'ME'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MD' },
              'MD'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MA' },
              'MA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MI' },
              'MI'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MN' },
              'MN'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MS' },
              'MS'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MO' },
              'MO'
            ),
            _react2.default.createElement(
              'option',
              { value: 'MT' },
              'MT'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NE' },
              'NE'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NV' },
              'NV'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NH' },
              'NH'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NJ' },
              'NJ'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NM' },
              'NM'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NY' },
              'NY'
            ),
            _react2.default.createElement(
              'option',
              { value: 'NC' },
              'NC'
            ),
            _react2.default.createElement(
              'option',
              { value: 'ND' },
              'ND'
            ),
            _react2.default.createElement(
              'option',
              { value: 'OH' },
              'OH'
            ),
            _react2.default.createElement(
              'option',
              { value: 'OK' },
              'OK'
            ),
            _react2.default.createElement(
              'option',
              { value: 'OR' },
              'OR'
            ),
            _react2.default.createElement(
              'option',
              { value: 'PA' },
              'PA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'RI' },
              'RI'
            ),
            _react2.default.createElement(
              'option',
              { value: 'SC' },
              'SC'
            ),
            _react2.default.createElement(
              'option',
              { value: 'SD' },
              'SD'
            ),
            _react2.default.createElement(
              'option',
              { value: 'TN' },
              'TN'
            ),
            _react2.default.createElement(
              'option',
              { value: 'TX' },
              'TX'
            ),
            _react2.default.createElement(
              'option',
              { value: 'UT' },
              'UT'
            ),
            _react2.default.createElement(
              'option',
              { value: 'VT' },
              'VT'
            ),
            _react2.default.createElement(
              'option',
              { value: 'VA' },
              'VA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'WA' },
              'WA'
            ),
            _react2.default.createElement(
              'option',
              { value: 'WV' },
              'WV'
            ),
            _react2.default.createElement(
              'option',
              { value: 'WI' },
              'WI'
            ),
            _react2.default.createElement(
              'option',
              { value: 'WY' },
              'WY'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'title type' },
            'Type'
          ),
          _react2.default.createElement('label', { 'for': 'city' }),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Any' },
              'Any Home'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              'Ranch'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              'Apartment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'House' },
              'House'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Condo' },
              'Condo'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'title beds' },
            'Bedrooms'
          ),
          _react2.default.createElement('label', { 'for': 'city' }),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              '5+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              '6+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '7' },
              '7+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '8' },
              '8+ BR'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'title baths' },
            'Bathrooms'
          ),
          _react2.default.createElement('label', { 'for': 'city' }),
          _react2.default.createElement(
            'select',
            { name: 'bath', className: 'filters bath', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              '5+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              '6+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '7' },
              '7+ BA'
            ),
            _react2.default.createElement(
              'option',
              { value: '8' },
              '8+ BA'
            )
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

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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
      name: 'Joe'
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
          'LOGO'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Ads'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Login'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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

    _this.state = {};
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: "loopListings",
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry, your filter did not match any listing";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          "div",
          { className: "col-md-3", key: index },
          _react2.default.createElement(
            "div",
            { className: "listing" },
            _react2.default.createElement(
              "div",
              { className: "listing-img", style: { background: "url(\"" + listing.image + "\")\n          no-repeat center center" } },
              _react2.default.createElement(
                "span",
                { className: "address" },
                listing.address
              ),
              _react2.default.createElement(
                "div",
                { className: "details" },
                _react2.default.createElement(
                  "div",
                  { className: "col-md-3" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-img" },
                    _react2.default.createElement("i", { className: "fa fa-user-o", "aria-hidden": "true",
                      style: { background: "no-repeat center center" } })
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-md-9" },
                  _react2.default.createElement(
                    "div",
                    { className: "user-details" },
                    _react2.default.createElement(
                      "span",
                      { className: "user-name" },
                      listing.seller
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "user-date" },
                      listing.date
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "listing-details" },
                    _react2.default.createElement(
                      "div",
                      { className: "floor-space" },
                      _react2.default.createElement("i", { className: "fa fa-check-square-o", "aria-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.floorspace
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "bedrooms" },
                      _react2.default.createElement("i", { className: "fa fa-bed", "aria-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.rooms
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "bath" },
                      _react2.default.createElement("i", { className: "fa fa-bath", "aria-hidden": "true" }),
                      _react2.default.createElement(
                        "span",
                        null,
                        listing.bath
                      )
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "view-btn" },
                      "View Listing"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "bottom-info" },
              _react2.default.createElement(
                "span",
                { className: "price" },
                "$",
                listing.price
              ),
              _react2.default.createElement(
                "span",
                { className: "location" },
                _react2.default.createElement("i", { className: "fa fa-map-marker", "aria-hidden": "true" }),
                listing.city,
                ", ",
                listing.state
              )
            )
          )
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "Listings" },
        _react2.default.createElement(
          "section",
          { className: "search-area" },
          _react2.default.createElement("input", { type: "text", name: "search", placeholder: "Search Here" })
        ),
        _react2.default.createElement(
          "section",
          { className: "sortby-area" },
          _react2.default.createElement(
            "div",
            { className: "results" },
            "390 results found"
          ),
          _react2.default.createElement(
            "div",
            { className: "sort-options" },
            _react2.default.createElement(
              "select",
              { name: "sortby", className: "sortby" },
              _react2.default.createElement(
                "option",
                { value: "price-asc" },
                "Highest Price"
              ),
              _react2.default.createElement(
                "option",
                { value: "price-dsc" },
                "Lowest Price"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "view" },
              _react2.default.createElement("i", { className: "fa fa-list-ul", "aria-hidden": "true" }),
              _react2.default.createElement("i", { className: "fa fa-th", "aria-hidden": "true" })
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { className: "listings-results" },
          this.loopListings()
        ),
        _react2.default.createElement(
          "section",
          { className: "pagination", id: "pagination" },
          _react2.default.createElement(
            "ul",
            { className: "pages" },
            _react2.default.createElement(
              "li",
              null,
              "Prev"
            ),
            _react2.default.createElement(
              "li",
              { className: "active" },
              "1"
            ),
            _react2.default.createElement(
              "li",
              null,
              "2"
            ),
            _react2.default.createElement(
              "li",
              null,
              "3"
            ),
            _react2.default.createElement(
              "li",
              null,
              "4"
            ),
            _react2.default.createElement(
              "li",
              null,
              "5"
            ),
            _react2.default.createElement(
              "li",
              null,
              "Next"
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

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var listingsData = [{
  image: "https://photos.zillowstatic.com/p_h/ISqtbui1bh6n1g1000000000.jpg",
  address: "282 Spring Lake Drive North",
  city: "Mobile",
  state: "AL",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 135000,
  floorspace: 1348,
  date: "12/11/2017",
  seller: "Wilson Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://photos.zillowstatic.com/p_h/ISes6ski99cww50000000000.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym"]
}, {
  image: "http://image2.apartmentfinder.com/i2/aRSuQQE_Ruc_5St-h68EyuaheHMOpS85ZIsAZgYBGxY/111/the-heights-montgomery-montgomery-al-building-photo.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym"]
}, {
  image: "https://ap.rdcpix.com/1676509438/351f5567f92a66b48c6eaf3578699546l-m0xd-w1020_h770_q80.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Gym"]
}, {
  image: "https://t.realgeeks.media/thumbnail/mKKSLqlH1s8JzfYraIMDNYbUJ48=/trim:top-left:15/fit-in/400x0/https://property-media.realgeeks.com/264/88127ea22860e6e631d426c896c4e14c.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://photos.zillowstatic.com/p_h/IS6anucsreemu91000000000.jpg",
  address: "9101 Wolfram Way",
  city: "Juneau",
  state: "AK",
  homeType: "Ranch",
  rooms: 3,
  bath: 2,
  price: 429900,
  floorspace: 1675,
  date: "1/23/2017",
  seller: "Ivan	Walters",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: []
}, {
  image: "https://images1.apartments.com/i2/l4mFLqMMWGfkYN-DTE3u3aaW7E3crTDvFawiHDobkig/117/weeks-field-estates-i-apartments-fairbanks-ak-primary-photo.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Swimming Pool", "Gym"]
}, {
  image: "https://photos.zillowstatic.com/p_h/ISy78vi81zdkxp0000000000.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: []
}, {
  image: "https://images-mls.static-ziprealty.com/images_mls/ARMLS/5/68/68/5686848_250.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Finished Basement", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsN7x84wYxK-nbmvw5DRfSSIPIgvhWoroASvG5PYYwsUhoUUGAbA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://1-aegir0-camdenliving-com45.s3.amazonaws.com/styles/_min-width__640px_/s3/community/camden-san-marcos/headers/camden-san-marcos-scottsdale-az-1771.jpg?itok=qLUVTjH5&timestamp=1481903478",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREu7Q_yg443NlmAMpOiOZYESuI-v0L-iD6jJv-56oBNUhr4M2S6A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISekk5ey76kcy01000000000.jpg",
  address: "15528 Hartford St",
  city: "Little Rock",
  state: "AR",
  homeType: "House",
  rooms: 4,
  bath: 2,
  price: 215000,
  floorspace: 2000,
  date: "5/1/2017",
  seller: "Randy	Wood",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "http://images.marketleader.com/HouseImages/ARKANSAS/520/1064520.jpg?434c840624",
  address: "374 Mimosa LN",
  city: "Fayetteville",
  state: "AR",
  homeType: "Ranch",
  rooms: 2,
  bath: 1,
  price: 120000,
  floorspace: 792,
  date: "5/3/2017",
  seller: "Amelia	Berry",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://images1.apartments.com/i2/kk-grHbYQgIoeZVyHHWOaKKW2Uz8l5rbERbar1BQETw/111/links-at-fort-smith-fort-smith-ar-primary-photo.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://photos.zillowstatic.com/p_h/IS2voahwb0ikii0000000000.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: []
}, {
  image: "https://images-mls.static-ziprealty.com/images_mls/CA_DAMLS/17/28/88/17288834_480.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/zillowstatic/ISyj51r0vbrulu1000000000.jpg",
  address: "173 Evelyn Way",
  city: "San Francisco",
  state: "CA",
  homeType: "Ranch",
  rooms: 3,
  bath: 1,
  price: 1099000,
  floorspace: 1025,
  date: "6/4/2017",
  seller: "Marshall	Patrick",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://thumbs.trulia-cdn.com/pictures/thumbs_3/ps.108/4/6/6/7/picture-uh=5d27828aa84a6fcafb61e338eeccb11-ps=4667dcdbfba63c3b35eae421ffa58d.jpg",
  address: "9515 Genesee Avenue",
  city: "San Diego",
  state: "CA",
  homeType: "Apartment",
  rooms: 2,
  bath: 1,
  price: 2200,
  floorspace: 600,
  date: "7/19/2017",
  seller: "Mattie	Simon",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-d7mvqbpL47Ly7bvJ_oJkvOlY4UEnZQWo6JthqezDVMlcPiTVA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoHOThCqVq_3ChO-z-KenJGH36GCb1KO0Nyxj5B5WjU6BDCHcJ",
  address: "5664 W County 150 Rd S",
  city: "Denver",
  state: "CO",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 347999,
  floorspace: 1800,
  date: "9/24/2017",
  seller: "Wilson	Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3e1u0igtfn1rPaQUcEZU-l4zhdX7vusdGBeVagYEPfDP74tgjdA",
  address: "196 N Wabash Ave",
  city: "Colorado Springs",
  state: "CO",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 290000,
  floorspace: 2300,
  date: "10/4/2017",
  seller: "Sherry	Tucker",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok3ItEgva9HVWKSsBcy0xOKBxijItiVU-IofVJdKN-_9eAXvT9A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn6x4Dz5m2EQKfGPQ6gmbRZTxcBF26q2Lz0mbJcxqCVVLOOUT7g",
  address: "1405 Truman Ave",
  city: "Fort Collins",
  state: "CO",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 150500,
  floorspace: 1800,
  date: "10/26/2017",
  seller: "Amelia	Berry",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCxPWEm459oCmZkBOYYZjiSEwK1ROnFvYDgxdmrrOyKC9PxQltA",
  address: "6425 Boston Cliff Rd",
  city: "Hartford",
  state: "CT",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 398000,
  floorspace: 2100,
  date: "10/31/2017",
  seller: "Austin	Alvarado",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7NZTLG0Dn5XeHKItgf_RYKF3QNKC9BPmQ9VzW_SUemrRL4ta",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXWVslTI9_umrDK40zFb1uMjYrozADZ5ebnvpYSF2qld1jHgXgw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIcZYQOM6AY_5nBMQ9j54zUCApoPde8iTUlleno3lnNG6EhVE",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDZ7h5l6proOdYz4wt-aIqjECfoQWEdpYmfPG3uwJC-1wsViakg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYCouS62poc7l1ps3_kXkeNIVH9m6B-KgMF2Xp4AbYhG0A5nk",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwSgHjA8uP00rlgOrnJ0JjYPR1MzOGHfE5ff2YRNEau0ojpE1Ag",
  address: "81 S. Fairground Lane",
  city: "Dover",
  state: "DE",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 1699,
  floorspace: 879,
  date: "1/23/2017",
  seller: "Wilson	Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "http://media.chicagomag.com//images/2010/0710/C201007-Condos-Aqua.jpg?ver=1279049725",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00_B-wPoKUQ1BqqEiOhscRu7vmhm4Ex0AUai_VKzl5PQIrFBgPQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlO91FfVzIkMePCL-oEhjEP6ivka8rEy3SulaORwr0K_8eLJx3",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVmTsIgxr_UczyO35aV8_XynWRCZQdpJhbN42lpVVllR3wxgS",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "http://i.yochicago.com/images/hpmain/530/161530.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFxjJWsfiL5Ls3xE34LNJ69DwM1BRUNwaItWR-m2NQQnkBZlY3g",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5VbqvWvb0iKcuipfS2VNcQ72C5lR3thTKVgdkWKKiDlFAJsF",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKHeEcv4J3ibAkkjodZt5JLjkUsKaLb28-JsION_0FDrHAQUlVw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://media-cdn.tripadvisor.com/media/photo-s/05/8f/9e/81/fairmont-chicago-millennium.jpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5oINiPOjyrtLhTKGJ2cInU-45eg4EfFy-o0l2WENKBU8zEQPbQ",
  address: "8302 Victoria Street",
  city: "Honolulu",
  state: "HI",
  homeType: "House",
  rooms: 5,
  bath: 5,
  price: 789999,
  floorspace: 3475,
  date: "5/22/2017",
  seller: "Wilson	Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIEJ7hmAIIdXnRO0a_e8TqdnTqDHmdq8akd95qrCeb-VksXPX",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaHUBysYeLOQSK4vahXdx6zJNh3hKswpLExY1mPk9pn12PUn6gQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://rdcnewscdn.realtor.com/wp-content/uploads/2013/12/jose-contreras-pitching-chicago-condo-5.jpg",
  address: "511 Kent Street",
  city: "Kapolei",
  state: "HI",
  homeType: "Condo",
  rooms: 3,
  bath: 3,
  price: 300000,
  floorspace: 1675,
  date: "7/19/2017",
  seller: "Amelia	Berry",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBC6O3Vc1rgpz9xyiHFccUq3eFdN5Qg6fCZnda3HQGZGlZ0DNdGg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqTMeOjVvGb9Vjnj42__BJiXW9igIa_Yt2vqerNJ0cADmGcmn4w",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9n0PVuX9QrDW_rImyJ2ixhuuhQarBgd3B0Ru3coHfKoXU5PE",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBojPV0uy63MNA7DJFVvdaxj6Ij9s0bVU2FkZqUBBqPs89pQXAuw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpPJ1ma8y0LCZRkKL-b2CUMmKap26aAtPQGj67PLQe1PH6aNk8Q",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBFQVSKZ_OCaUlUF5FaF-ctHdXqQsKY4bZMjKJJDIdxs3c45b",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ2x1Zj_7QoFm5uykoNlXHGULqWfY-SyJnxq5yoVmkipanaDK",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2d7m_cRkAH6SZBS4_gWfGNhi6_NjAH0BHyeRMSi_ZrmajUbPoA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB3KuvMA5bFKOaQ1yxCuMXHxmB0radiwggxqwwB75dqcdnYC7nDw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQE27NUwbCyctqzMfFszHe3598fc1KeaaHwnOM1YtCXSYHvHZJeg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwXtg8CaJhqaaPyho8WcEqE4Mfw4IK2zDNdKKVo4YWeNk2e7A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOR-oBZHcpPWRJa6p_SQp3MRz0BNMa2IpzjbbH6NerA53cD6tO",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX_YAcfdcnJyohXYkRgAfK900-2Aumtbuh6WrDucrPEtXkFzmAA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-tcCVJBRMT6-mnDz9hSF7IA1wYsLpU1iKeiStwedgHbUs8Xe",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5Xz1gh0tLMT7OZFgQ4Qyi9lrLYJgQ7vdaxHLynSVde6gHeLP",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNDLsGHnzCrph-M1tvx2qj82bW4DnbzAsp1M2jTmIodpSQmWd9A",
  address: "42 Grove Avenue",
  city: "South Bend",
  state: "IN",
  homeType: "House",
  rooms: 4,
  bath: 3,
  price: 585888,
  floorspace: 3000,
  date: "8/25/2017",
  seller: "Kate	Wagner",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXxQZs5lyF9rM3MBhDIO-NcWIBghUx3RapHSW_8yeLL8m-8SQr7g",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORUeE0Wl2M2X0RRytFD1xeu6CAj8a9ybJEdQIJIil6QKRFf_R",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70qSAI03vjHUd9R15WgLQZsIlPaW0WYXTW9mA8LsIghqAINhU",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLUIcHdEOXTkAubEMG5vUARv-zckOQKeRjgEUHEnYtpJcULqR",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5RX46gDcDdu4KVF3JJwkIQ13SdXYZLrdZTPTjkfA8knmgCqf",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GZWbCTsDI3sUghDVUC3qymhJAEFV-zQvIQtu0gqrGexTqpEf",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQhx7m5y7fIzLRH5452CB84Vc_2Z9-EWIc7bfpsQeZvB22yLBsA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkIjX7hxtmTEN6ddh8UnVZrmdjLvK4zL2pN7prBrIA3Ar_hPhggQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjwxl4iqJ6fRNbMrA3lSluUBzVEZGa6c8WoAAxtCDrv95gHGq",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBzqN9uhD5LKVHuGF2jp1bxdwHin8_vmhfpQJmNN8_QbA8WEi",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzvDF1zNT3xq_8rpZC04KkVzp0Kyc8qoOG7Q1SUqAbHfyEjeapYg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Gym"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugNNLoGeICQ_0yD0gWq7hy-5z29XyeFcTXibt2LOrCPF4W8Bhcg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvya41DEk4ckJseqc0UOZ7tO_ostGyhKO5ZMoEUhwAVyV2KkU",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtIAYvM1z4gD2ygLzVgTvOJyePoEbXwsmUcudziF-Ql-aDeuz5Q",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMOJyoV5lfRzdJPwYqo_7ykh3rX8mhyhpbgWKGgL_VVtLkJov",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQUGHQovRZfupyaKqgsuS09rvCcngzmDSUEnOyR0Y1iWrHat73w",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5C1a9yMTTsM2l_GGUg0QODBSlVuwMaleuX-tzT230bitTohuWgA",
  address: "48 Mulberry Court",
  city: "Baltimore",
  state: "MD",
  homeType: "Ranch",
  rooms: 4,
  bath: 5,
  price: 600000,
  floorspace: 3500,
  date: "1/10/2017",
  seller: "Ashley	Kennedy",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC71_6FCYForluXuDWf-UWTSBHdSGhQHnwtou_2ZMfTf6aDWxrA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfNxq58M7gi3Ir_Fl8J64Pk9Bs1ufmx9ot515-IWC5kL2L11gMUA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXET-2PTKJLvwY5AtuVJU0jVw1XP9WuHRWydnoZgZUVDBFia7",
  address: "380 Railroad Street",
  city: "Lewiston",
  state: "ME",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 199900,
  floorspace: 1750,
  date: "2/1/2017",
  seller: "Kate	Wagner",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMSwLuPShyqR3AKyFVqWEEntqZdU0FDRZXXSk3wPyvwoiY-Ix",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0OhytlKQRcqYqzjWurEMDaQOm_9GlUtKeC7edwD_z2AH45-u-A",
  address: "8 Grant Avenue",
  city: "Cambridge",
  state: "MA",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 999,
  floorspace: 875,
  date: "2/20/2017",
  seller: "Sherry	Tucker",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu43-T04TkgGRHTuldJ_1hYgb6cKqtpAkqKTvLqReyrnB5Tv7U",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3qhWXUsWcHsvqQNq7hn5IRkPQvtrbR5ouZUrshWbEqmHmjJ7CQ",
  address: "947 West Grandrose Avenue",
  city: "Silver Spring",
  state: "MD",
  homeType: "House",
  rooms: 3,
  bath: 4,
  price: 235750,
  floorspace: 1900,
  date: "3/6/2017",
  seller: "Amelia	Berry",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJh3VvVhRpAYAY_OoI-qZEYnBkOxo88A4-gv-zbBeCmEGPrGR9Q",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxlUlnTIoZkXz8syN6hP_GYyaZ4YnGvtYjSfy-H5bfaN3nVKKwA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVlQPXDKrLgdpaGPDHU8S8Yj9HIv9TcBOg2rK7npZWDmTuera",
  address: "863 Deerfield Avenue",
  city: "Grand Rapids",
  state: "MI",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 399000,
  floorspace: 1420,
  date: "5/9/2017",
  seller: "Ashley	Kennedy",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12cYzpSCVjd9jMQ3m9TMAh6xjykuFvwtxLJBwK9BYDJitF6cXEQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSEG5mr-a3-s0C-NsejR_JWlkQOjiFlFAy98dUCQPNpBxsWza7Ew",
  address: "8021 Oak Meadow Street",
  city: "Minneapolis",
  state: "MN",
  homeType: "Ranch",
  rooms: 3,
  bath: 3,
  price: 200999,
  floorspace: 2000,
  date: "6/2/2017",
  seller: "Mattie	Simon",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWquAslPzenEZ2wi5zr4NCx-QHlzfpREhcbws9AR39pkjdBH7Faw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVgqkyxjHxyPFtzFNu0I8qoVLORVDOFIRljyC_sTSorFYygixbJw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSIDHCyHydt1voyhiS4VgOoAIqPeirC3NLRhjC6ZYD1JFmgAA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYk1F6lDB_oD-KSU3pHyrihyCOHLE3R6kXV9hPSDTZ0oNyVNsX_g",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMC65UDFl-mQEKuO3gb4dZ_-YYoaEkr1UHbJq_fz0x7gxV9ulm",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQWEmzByu0cMvpnaiNqiSSaFc6WZVfDM6SzDtvx_ClCjcrAvmx",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiOVa83Quw_EUoJeQ7XEDg8-Bxlqa9XlbNPxWdgH8ApMAihe56ZQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EMt4MkEmbkO4dncG464hVqNM1aA-zkkBnAj4yu4qkLojIwQi",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYTLqdotPDIh76QVGLLc8Xkr9Nnr08IR_K59NZ-ggzbLxZZ42xg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ePVGdvoeZyWl2yIm68RUOEU4uwpwl3mERmgsFmkIS2ybje8Hqw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQslJy8iu-IVnfEjKKt8CqMpcK23oEDo7r39cTRYYO9aJNgYp1",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWXCIIhQZs05cLIgmZal3cBYlwaqZ7Vk0YB06XvoHe49nM1MH1w",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPKWoXaO9YpR5cdO9KoPG4IaMRBAruygv4txcZFLRJFTtkWBjfA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFdvuF6nRtDpV5ESGIPba9VzaQ33uHxYw0vRGOVg_tXCOYTKr",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReHjplGv2ikgq0Z4ZKRQNR6AhaxeNehpAHM0CyH_QFLzmr3JYT",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_yFZ9TRicP9oWOwhQ4xi3CCm9O-0rVR0qNP7GQty98q2z94RnA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkDpB_BMknDLzOOBg_AjPo0E1D26KqKCZBlim_bitXdwmvBG2",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBy8z3zrCNNRLbDRQDyDlrJG5mDa1R87VBGYDwcEexwfY_F9c",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZwV2TNFe4xFYREBtZMFr6XaBra-zqBkVJCnLisF3mU5TAjGFPg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUZCbxI1BIWjVp8XcLKm0C_KritFK-yKED_mDQFmDFFjsjPVA",
  address: "599 Lake View Avenue",
  city: "Las Vegas",
  state: "NV",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 342000,
  floorspace: 1788,
  date: "1/26/2017",
  seller: "Mattie	Simon",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_T7NoATOYZrdP2_kT-zJn3yesGMGM0ykv7FQcCDKi8VlMSl8",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFHTwYhNy2S0e68MtlTDPKB5lP1JuHeFV06wQZfTrHlN1ciDHpg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1VudkgGjh52fGxyTOf6EFMdEoRKZJADtw2OaGiWpTJjgZYSb",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZnj6NAX2oAST1pXWMQNyklejfFGvobNN6NZU1EDHvNzN986U4g",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABl7Rs0kfLMrGdynlOPZXQtH1lUvt1Hrd22Aq0U0cUt1WvsGM",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmppspjsprwfcj1HY7MQjPJ1pLxR59St-khKRPm-fwSDJLRn3",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiH6eWaLgcPiolGRmr2NFQaQqUXaYMhkh6qlqDDrjyPkKDUSEv3g",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9_b-UAOE5MRyCzcY5Iapt410LAC0SSAOvvmUKqUqZ1vwq8sPd",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHalJAXRfwDHjA7wUwed4spY_06bxKIFy1LDmBMPBYTE7-LwoZew",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_P4BiVqdUn7R2eVKEfP9Qa1gHk6lSrvpJX9NhB0riVOB_gfWlg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVbgtKsFed8lAU3y5ufyZoM3QbWRC7ibv-SyrAeLMT8mGQopY",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfPVihKrY87gkalP9jjmlHW8lZpVkASAtexI5lCFsJ7J3_VUxv",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQIRTgzzioWIwLh0QHkq62neLUOdy32bA8jMxs2VtWuyGEcET",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZH0ndbPwAdaJUkNQF2dZezbrBFmaKHz49wr4SzISelD82Bz3Y",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslDzZfX5GHSljJp4o8TAmHDbbid_bwZbdZ3Y0QM6sM77rJ26DFw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbkf9iItO_kkdTKxFXHJNOxdyCK9GyxTNUsqgl93hY9qjUY48",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaA3uowTl1OnmF_JUHbvFlUS3l7aKhkYlBwRyCziQJ-FNVrmp",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIc7F9R7ydrYIEVuaJrptsrLCu-WiLT-60gvrfhJ6SxEhjSyLtw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlutvmm9RndU1B98uq-4F-9NGPRnX8rGqQo1tN3oH-S1QXLOCpKA",
  address: "7669 Edgemont Drive",
  city: "Roswell",
  state: "NM",
  homeType: "House",
  rooms: 3,
  bath: 4,
  price: 189990,
  floorspace: 2450,
  date: "3/6/2017",
  seller: "Marshall	Patrick",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7epNiRqn22yhm5xvFq52KrhFO_N-oK1M5b7aU492tntGTOmU",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtw-aqh_L5i7utZBwIfwcfIQD3XLLlq708ULc-KMQ_zvFMEs-oA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8tXw4g5Pw_SRJJlyxn7HTmCXMPHeOt_CRobE4z_jfeqea7giqw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKKsgIyEFq1X4QSVRNepdk70jgW0iXN3P6OZ3OAJqoHwSUdid",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYItaz0_jwzMSvLlpcs1uC0IYbe7an0PSRkQV1wCd1dXCINUv",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK87BbZ6J2djlbrxhAWuwZrhaMn-3gQf05bFixOXvmd4009gRM8A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbFcKrXR0Q6-Zmb_Ts51JyGwl2utkWeWf3O5KrVFtGnMmCujK",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPCqpo7VPVUnL4SFKMl2XyFjPhlsjIFOoXjTAQi6yDtCo7fj3",
  address: "45 South King Street",
  city: "Wilmington",
  state: "NC",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 475750,
  floorspace: 3600,
  date: "1/9/2017",
  seller: "Ivan	Walters",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc2Z2-E-WEgn-q8cyAJGT16wOeoCA2z_A71C_dqRYsaYrn1b1QQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd23m4wZr97kuDoc9o3scEbB_e9WbL5wXKRy8gOjao1db7hLG2xQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvVO5VE468o5jSsjXuqEcFLk3UgUJG0J3fsFS_3r-U_TR88iRcQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iIEevmqTcbXeIm-uszHh8rRoB4J8SvVLrcsKq2BM9jFUDUwPUQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0HLVVPboelJHggx8U70W7XY6z9vmri5guQyq0CmEkxahaU8-",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRL1ati9AfbnZCjhI7X9uoicx3jaZazaAAVjnAeumE-sS84I7q",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5TNkOojlQh0yK70B0TufQhmDkpXJ7tlM1zRJlHgxyJBZp28iCg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRaA_MIYrqPA8Wpub-5523bh0gvR6coKNgbzL2ucrVsFYCNrxV0A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeYB_MUvTI1IcmunGwEek5JPtJXZOXrl3vwqXvZzx6vNDSMBZ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKA8EA6l4DoorL2qpb1aeqsG3NojSWmTu-2SX2FYW8HImypLd",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool"]
}, (_ref = {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFIvDyPfBwBmZG2bG_hUA4zFtzDlNsP8PlzQjXcLZQEYaXvHu8",
  address: "597 University Road",
  city: "Salem",
  state: "OR",
  homeType: "Condo",
  rooms: 1,
  bath: 1,
  price: 212900,
  floorspace: 985,
  date: "5/9/2017",
  seller: "Ashley	Kennedy", headshot: ""
}, _defineProperty(_ref, "headshot", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-"), _defineProperty(_ref, "extras", ["Elevator", "Gym", "Swimming Pool"]), _ref), {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxidMh1Tf1SU4llLAF2_1nGgEU2i_bHy_gsXPQIP2Is_63WeatCw",
  address: "9176 Durham Drive",
  city: "Edmond",
  state: "OK",
  homeType: "House",
  rooms: 3,
  bath: 3,
  price: 235600,
  floorspace: 2200,
  date: "5/22/2017",
  seller: "Marshall	Patrick",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCSSJXZbjqxXLLYkN98xvMDo8RIFRk8DBUrs5bYqp1HVWG84nSZQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNY6huuxaH_kU373DAAj7tfafjXNwIQUP7RPrOGQsHwcT4fDg5Zw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBDIA615npFx2wq5GpI56hcgQ2rOd_moGjtcFoLfTymtE6HKXgw",
  address: "927 Corona Street",
  city: "Harrisburg",
  state: "PA",
  homeType: "Condo",
  rooms: 2,
  bath: 2,
  price: 759500,
  floorspace: 2000,
  date: "7/19/2017",
  seller: "Wilson	Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpDB0x2VBPCZqw3nPrF0NXv0lOwkJ9zQ0rh-R-U9tUmMt_Ani",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2c8p9QhuqYu73l_4C57OBEqEhLd4okZ-D9wiQmId5NXFIQo60SQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGCAAtXT_1clPp9s5FLU05H5XC9rpQ4cAxidNSJ_HaaXuf72Diw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTYkiwMixiOcU17xW0uuaMQYYubgKrqauIxYLX7lunY2dH7erRw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLI8fVeeXbXQvXQ6CNj_KuH4NdDgYlaZfq5U4RM7NhJbsHkFNT",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv6a_SZRjBu0neUUtc4uYi9WQ58c_nWQTorBlKXE1D7vjhyOMc",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn5fq1Q0NRZ0DBppu_NM-A2NBeXa8FdUk4R4VABRx44ZcbM7LS",
  address: "71 State Street",
  city: "Columbia",
  state: "SC",
  homeType: "Apartment",
  rooms: 1,
  bath: 1,
  price: 799,
  floorspace: 675,
  date: "10/4/2017",
  seller: "Marshall	Patrick",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjNcsz4zjshByQ7pyR70I8hAjaaz954hdCAC8iIJIoVGShFlcaQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3plZGMTI4O0c5APbYfuJvjNvzrhOIfBflv3nMyDueZzodcqz",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7fG57Rnt5V0PkYWt6gQpFcCODWhM8ucRg2c6zLTPbLNh89kqs",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1rJ87xY1aMTlptJ23-u8W9PqOwdzZ5mROK8Q-X5SUdrhBofcB",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY5kO0IC1MsW_dSNEedIUUOzV8mg_KS3LiXeF20pg2R5ibvM0",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWB7XewZuhI2lLOeF6JumwhFKMonH0VrwFrAXz_509LsQsHdtM6A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTQIY0DM0GjEKx5NH3KCe5EtYXqfU1DTstFfYEhoMiRq3hg0fETg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaA3uowTl1OnmF_JUHbvFlUS3l7aKhkYlBwRyCziQJ-FNVrmp",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrBaRO8fKS5bOkd0P1j0-cluiBnBfLhteLODKqQi2E446Hhs",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjN9RsAmP4-rXrx5OU0im09OHb8mFfR7tBtXy-TnrOuuSgdgV8yQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgPpPJq2zoc3FMsfmK0IgHcGx8Riq0e-GcwuumA-F3m2MgPN-H",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6Yk7XZmPsAf5jWohA9ximeFLItU6qlw2nGUMZoILdaGKESQj",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzcK8hvtbi7tiMw6ZY0Pjqt3RPU1FpRN6__-emOdKaoTkwoNOeqA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL1tN_Q2Gqcq0uJFHt9i4OY9EAtsqhhUgkUzKParaxb777HOE",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5g_A9g4fwc273EasSoHgZfwWBK_mfwQmPK38JOJv8blKJIi9O",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXUIN9wf1Udnb0ZiqEQAB_u8I45ILmHDidCs-MgDRRB1FQHzQYQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPFFTWDBt9ErOwoRLaRj0OJK5hJ-PGRPqhsH5sEdnOvCnU8v7",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO028t4unVmFhP4td935lfbcZpgpwEJJiHWaE4YDgQd72kPSfK",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z61ZUgpxgvs69Y4IXVLMhSBq5yaK1VnGBTSrtEzEXgO-ro1BTw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF0DAKSE0DNOwHYByzlz-XMfprQg7Uj0fZR9dr7FvBehzBkJS30A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF9MXOszHdevHzfHVCmOsIlbuVSi5EjgAMgvfZJ79y_21JAfXBQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS281YMwWrng2Ff6tVncBCrRI-xr5XvX1NAGzfoWoHoVdY4Zmq1",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-U6JnDwHKyOARhagVBFPrp8AXDgSY2j6hmCZUHUAE-As0Llc0Ig",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtCNry98vt0QATn4UniJ1JaMVaYHuSpI2K8BfRPq7jCwl-g7CxMA",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZFnbdJ6P0Vdhj-FhEotDxcJeO21dF_aX3b67R59aCvLahFxjiQ",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: ["Elevator", "Gym"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3OYFArQ6pU_42LlobSe9vLW80qAx1wdMetrVQGaiBN1ONFchcw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZdO61LAq1WMRZCKEJd9f-HLpVDrt6cNrZ8L9SxEFG8egd7u-X",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Gym", "Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IkHhyw4Ug2SPXwl2xRqvBhxUpLtTi_vXjEbfz9Aiq7EYjwaz",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7-lEZdSbYRI_6mx2CPGqNHgM5zwWppten5mtvMAaipxTPdmxvg",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcxW97lTBIMKCX1fNLpgvKw0cDTiGZln_pTj7Um4mcidlxSm41Q",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkn938XYCWxkcSeWdAC_6pWzC7s3SdYbVl8US_975LEx4Ng4FKVw",
  address: "554 Hill Field Road",
  city: "Charleston",
  state: "WV",
  homeType: "Ranch",
  rooms: 4,
  bath: 3,
  price: 145000,
  floorspace: 2050,
  date: "6/4/2017",
  seller: "Marshall	Patrick",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0OhytlKQRcqYqzjWurEMDaQOm_9GlUtKeC7edwD_z2AH45-u-A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVmaHxY1MYTh4Rn-z7Ft8BRO-nbpqSHtmFPyhsc_bYqBtsvUo",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe21m4yrq9X5lUZAarvDuJT5B_E_Wz-YLi99_Vt-LjZDN_K2J3g",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76bW3W55cbo0pQjfin7g0Q3p2WEf9Wmlqv8QBcNKmrHs8ghb8qw",
  address: "39 Morris Street",
  city: "Bellevue",
  state: "WA",
  homeType: "House",
  rooms: 3,
  bath: 2,
  price: 399000,
  floorspace: 1970,
  date: "9/24/2017",
  seller: "Wilson	Foster",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zd4Ewb9akgNZ7fpblpqPXnMBseqQ4BlvdBFQGuMTIalVc_s7sA",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyE5GIObV5FDnCAn79Uv6Oc9GJz_J2OAe1Kc6HFXjJbFpuaTYr",
  address: "792 High Avenue",
  city: "Milwaukee",
  state: "WI",
  homeType: "Ranch",
  rooms: 4,
  bath: 4,
  price: 355000,
  floorspace: 2250,
  date: "10/4/2017",
  seller: "Sherry	Tucker",
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxG750fDVb16ku903OcSZmF2y5mybeSjKDnug8O2GOT--Vh0y2Q",
  extras: []
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWquAslPzenEZ2wi5zr4NCx-QHlzfpREhcbws9AR39pkjdBH7Faw",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcmmj-msbj9Jbl4nJW7ouyXl8R6cAZaJR5QIkYNsGA92RNesdwfg",
  extras: ["Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd0yMJjhdQiuceoONKaNKp0pEFXt9NOy4QTAAgWHlYymUIPWPt",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB81AyZ1MmfQx7g2W4JMb8EkQmre2KXYQAhos9Uc2hFrjHkFpKg",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysuFyWICxl1MlEfZwDLT2GXrB_cb1GnAc0oi8N9mgCVDwv84L",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHEU48gTAuFmgjTrEi6J4v_GHwUiB0szfMJjFSP6voVdjnEhPoA",
  extras: ["Swimming Pool", "Finished Basement"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LZ-FHokepg1euq8R-gykQL8nmrjHnyi8QgmuY_rBGjsbupop",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznoP3Yxhr1G60HGaczu77WMGQYJ2D0CQP8GITDldqe-pgsohH",
  extras: ["Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGS4MWfZzWi9GrtmaS5ODtTbeRxyNw2_Cg9ZUakUwi7UsIIo74A",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_Uae3WAkX00aN9fSaPSpVl9gbq99CXZlPD-sdQUIvQ9SsKP-",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII3ZW_IpGzpvcQEs82bL0aT4RAqCHfW2cPFUReJkmsGTBgDYK",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4scLAeiM59hb-v3gRJjSvRg57FLXYnTdxx2iHJ9hUh8eRCEe2",
  extras: ["Elevator", "Gym", "Swimming Pool"]
}, {
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBmDxE6ntOFQXmlIG__Kd0ZcPFQzoy0Wwu_0EDwJXVqPe2-O1",
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
  headshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0A12utCN8r_NKJBxXSHtIOz5Kz4IkZ3KMTm-UpZglGi6Oqv-oQ",
  extras: []
}];

exports.default = listingsData;

/***/ })

},[101]);