webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _svg_icons_logo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/icons_logo */ "./components/svg/icons_logo.js");
/* harmony import */ var _aboutBackGround__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aboutBackGround */ "./components/aboutBackGround.js");














 //class=aboutBG

var Logo2About =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Logo2About, _PureComponent);

  function Logo2About(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Logo2About);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Logo2About).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "LogoClick", function () {
      _this.setState({
        showAbout: !_this.state.showAbout
      });
    });

    _this.state = {
      showAbout: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Logo2About, [{
    key: "render",
    value: function render() {
      var language = this.props.language || 'zh';
      var landscape = this.props.landscape || false;
      var vw = this.props.vw || 0;
      var vh = this.props.vh || 0;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        /*居中*/
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        height: "fit-content",
        width: landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_11__["GR"].vw(3), "vw") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_11__["GR"].vw(1), "vw"),
        // display: 'block',
        marginLeft: landscape ? 'auto' : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_11__["GR"].vw(6), "vw"),
        marginTop: landscape ? 'auto' : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_11__["GR"].vw(6), "vw"),
        marginRight: 'auto',
        marginBottom: 'auto',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor: 'pointer'
      }), {
        className: 'index_LOGO',
        onClick: this.LogoClick
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_logo__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_aboutBackGround__WEBPACK_IMPORTED_MODULE_13__["default"], {
        showAbout: this.state.showAbout
      }));
    }
  }]);

  return Logo2About;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vw: state.Root.view_size.vw,
    vh: state.Root.view_size.vh,
    landscape: state.Root.view_size.is_landscape,
    language: state.Root.language,
    worksFocusOn: state.Tab.worksFocusOn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, null)(Logo2About));

/***/ })

})
//# sourceMappingURL=index.js.54832300c69139e41f41.hot-update.js.map