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
      city: "City",
      state: "STATE",
      homeType: "Home Type",
      rooms: "1BR",
      bath: "1BA",
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

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorspace >= _this3.state.min_floor_space && item.floorspace <= _this3.state.max_floor_space;
      });

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
      name: 'Joe'
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
          _react2.default.createElement(
            'select',
            { name: 'housetype', className: 'filters housetype', onChange: this.props.change },
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
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              null,
              '1 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '2 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '3 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '4 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '5 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '6 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '7 BR'
            ),
            _react2.default.createElement(
              'option',
              null,
              '8 BR'
            )
          ),
          _react2.default.createElement(
            'span',
            { className: 'title baths' },
            'Bathrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bath', className: 'filters bath', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              null,
              '1 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '2 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '3 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '4 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '5 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '6 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '7 BA'
            ),
            _react2.default.createElement(
              'option',
              null,
              '8 BA'
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
                  _react2.default.createElement("div", { className: "user-img" })
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
                      "Nina Smith"
                    ),
                    _react2.default.createElement(
                      "span",
                      { className: "user-date" },
                      "05/08/2017"
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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/catki/Desktop/Phase/react-real-estate-1/assets/js/realEstate/data/listingsData.js: Unexpected token (155:9)\n\n\u001b[0m \u001b[90m 153 | \u001b[39m    price\u001b[33m:\u001b[39m \u001b[32m\"1429/mo\"\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 154 | \u001b[39m    floorspace\u001b[33m:\u001b[39m \u001b[35m1371\u001b[39m\u001b[33m,\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 155 | \u001b[39m    date\u001b[33m:\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m     | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 156 | \u001b[39m    seller\u001b[33m:\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 157 | \u001b[39m    extras\u001b[33m:\u001b[39m [\n \u001b[90m 158 | \u001b[39m      \u001b[32m\"Elevator\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ })

},[101]);