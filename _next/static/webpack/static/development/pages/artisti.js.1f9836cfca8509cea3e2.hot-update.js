webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.works.js":
/*!*****************************************!*\
  !*** ./components/artisti.tab.works.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./artisti.tab.Wrapper */ "./components/artisti.tab.Wrapper.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img */ "./components/img.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/artisti.tabs */ "./reducers/artisti.tabs.js");
/* harmony import */ var _reducers_nav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/nav */ "./reducers/nav.js");
















/*Button_IMG */
// class Button_IMG extends PureComponent {
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div
//              {...css({
//                 marginRight:'3rem',
//                 cursor:'pointer',
//                 opacity:this.props.on?1:0,
//                 fontWeight:this.props.on?900:100,
//              })}
//             >{this.props.name}</div>
//         )
//     }
// }

var Works =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Works, _PureComponent);

  function Works(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Works);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Works).call(this, props));
    _this.state = {
      ctxLength: 9
    };
    _this.ctxMax = 0;
    _this.handleClick = _this.callFullWork.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleClickMore = _this.reqMoreWork.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Works, [{
    key: "callFullWork",
    value: function callFullWork(index) {
      console.log(index);
      this.props.setFocusOn(index);
      this.props.setPanelOn('close');
    }
  }, {
    key: "reqMoreWork",
    value: function reqMoreWork() {
      this.setState({
        ctxLength: this.state.ctxLength + 9
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.setFocusOn(-1);
    }
  }, {
    key: "componentshouldupdate",
    value: function componentshouldupdate(nextProps) {
      if (this.props.vw !== nextProps.vw || this.props.landscape !== nextProps.landscape) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var vw = this.props.vw;
      var width = this.props.landscape ? width : vw;
      var size = this.props.width / 3.1;
      var shouldFetch = vw === undefined ? false : true;
      var contents = this.props.contents.filter(function (item, index) {
        return index < _this2.state.ctxLength;
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: "".concat(this.props.width),
        margin: 'auto' //居中

      }), contents.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
          justifyContent: 'flex-start',
          margin: "1px",
          cursor: 'pointer'
        }), {
          key: "working_".concat(index),
          onClick: function onClick() {
            _this2.handleClick(index);
          }
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_img__WEBPACK_IMPORTED_MODULE_10__["IMG_WithLoader"], {
          src: item.img,
          height: size,
          width: size,
          fullWidth: true,
          fetch: shouldFetch
        }));
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: '20vh',
        fontSize: '1.5rem'
      }), {
        onClick: this.handleClickMore
      }), 'more'));
      /*return*/
    }
    /*render*/

  }]);

  return Works;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vw: state.Root.view_size.vw,
    landscape: state.Root.view_size.is_landscape // on:state.Tab.on,

  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFocusOn: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_13__["setFocusOn"], dispatch),
    //nav
    setPanelOn: Object(redux__WEBPACK_IMPORTED_MODULE_12__["bindActionCreators"])(_reducers_nav__WEBPACK_IMPORTED_MODULE_14__["setPanelOn"], dispatch)
  };
};

var Comp = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Works);
/* harmony default export */ __webpack_exports__["default"] = (Object(_artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_9__["default"])()(Comp));

/***/ })

})
//# sourceMappingURL=artisti.js.1f9836cfca8509cea3e2.hot-update.js.map