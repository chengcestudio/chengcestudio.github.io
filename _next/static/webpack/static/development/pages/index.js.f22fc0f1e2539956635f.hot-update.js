webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/controller.resize.js":
/*!*****************************************!*\
  !*** ./components/controller.resize.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/root */ "./reducers/root.js");
/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/throttle */ "./utils/throttle.js");
/* harmony import */ var _utils_throttle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_throttle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_device__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_13__);







 // import fetch from 'isomorphic-fetch' //








var Resizer =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Resizer, _PureComponent);

  function Resizer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resizer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Resizer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setViewSize", function () {
      console.info('Resize - setViewSize on redux');

      _this.props.setViewSize({
        vh: window.innerHeight,
        //window.innerHeight,//document.documentElement.clientHeight,
        vw: window.innerWidth,
        //window.innerWidth,//document.documentElement.clientWidth,
        is_landscape: Object(_utils_device__WEBPACK_IMPORTED_MODULE_12__["isLandscape"])()
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleReSize", function () {
      console.log('resize');

      _this.setViewSize();
    });

    _this.lazyResize = Object(_utils_throttle__WEBPACK_IMPORTED_MODULE_11__["debounce"])(_this.handleReSize, 400);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // LISTENERS
      window.addEventListener('resize', this.lazyResize); // 如果是直接访问,root 没有viewSize 信息

      if (this.props.view_size.vh === 0) {
        this.setViewSize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.lazyResize);
    }
  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      if (typeof window == 'undefined') return; //首次访问会出现无法识别windows

      window.removeEventListener('resize', this.lazyResize);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Resizer;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    view_size: state.Root.view_size
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // root
    setViewSize: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_reducers_root__WEBPACK_IMPORTED_MODULE_10__["setViewSize"], dispatch) // setBrowser: bindActionCreators(setBrowser, dispatch),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Resizer));

/***/ })

})
//# sourceMappingURL=index.js.f22fc0f1e2539956635f.hot-update.js.map