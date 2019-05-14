webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/controller.scroll.js":
/*!*****************************************!*\
  !*** ./components/controller.scroll.js ***!
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
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_device__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers_root__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/root */ "./reducers/root.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_12__);







 // import ReactDOM from 'react-dom'
// import fetch from 'isomorphic-fetch' //




 // import {throttle, debounce}  from 'utils/throttle'



var Scroller =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Scroller, _PureComponent);

  function Scroller(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Scroller);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Scroller).call(this, props));
    /*throttle 支持过程中间切换更快,但safari 造成重新布局卡顿*/
    // this.lazySetOnUp = debounce(this.isScrollUp,100,{leading:false});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "isScrollUp", function () {
      // debugger
      _this._scrollY = _this.props.BarOnId ? _this.$win.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (_this._scrollY === _this._prevScrollY) return;

      if (_this._scrollY - _this._prevScrollY <= 0) {
        // is up ?
        console.log('↑');

        _this.props.setScroll(true);
      } else {
        console.log('↓');

        _this.props.setScroll(false);
      } // 刷新当前scroll所在位置


      _this._prevScrollY = _this._scrollY;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "updateY", function () {
      var y = _this.props.BarOnId ? _this.$win.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      _this._scrollY = y; // this.props.setScrollOffsetY(y);
      // debounce(this.props.setScrollOffsetY, 100);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScroll", function (event) {
      event.preventDefault(); // 阻止事件继续传播

      event.stopPropagation(); // 取消事件的默认行为
      // this.lazyY()

      _this.lazySetOnUp();
    });

    _this.lazySetOnUp = lodash_throttle__WEBPACK_IMPORTED_MODULE_12___default()(_this.isScrollUp, 500); // this.lazyY = debounce(this.updateY,200)

    _this._prevScrollY = 0;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Scroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 根据是否设置了滚动区域 ,决定 Listener 安装的元素
      this.$win = this.props.BarOnId ? document.getElementById(this.props.BarOnId) : window; // 根据是否设置了滚动区域 ,决定从哪个元素获取 scroltop 的参数

      this._prevScrollY = this.props.BarOnId ? this.$win.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.$win.addEventListener('scroll', this.handleScroll, false); // debugger
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (typeof this.$win == 'undefined') return;
      this.$win.removeEventListener('scroll', this.handleScroll, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this.$win == 'undefined') return; //首次访问会出现无法识别windows

      this.$win.removeEventListener('scroll', this.handleScroll, false);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Scroller;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]); // const mapStateToProps = (state) => ({
//     view_size:state.Root.view_size,
// });


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // root
    setScroll: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_reducers_root__WEBPACK_IMPORTED_MODULE_11__["setScroll"], dispatch),
    setScrollOffsetY: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_reducers_root__WEBPACK_IMPORTED_MODULE_11__["setScrollOffsetY"], dispatch) // setBrowser: bindActionCreators(setBrowser, dispatch),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(Scroller));

/***/ })

})
//# sourceMappingURL=artisti.js.66bd20fdb7c512c8d81a.hot-update.js.map