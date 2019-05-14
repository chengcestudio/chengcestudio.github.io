webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.works.FULL_IMG.js":
/*!**************************************************!*\
  !*** ./components/artisti.tab.works.FULL_IMG.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _img_work__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img.work */ "./components/img.work.js");
/* harmony import */ var _reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/artisti.tabs */ "./reducers/artisti.tabs.js");
/* harmony import */ var _svg_icons_chevron_left__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/icons_chevron-left */ "./components/svg/icons_chevron-left.js");
/* harmony import */ var _svg_icons_chevron_right__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/icons_chevron-right */ "./components/svg/icons_chevron-right.js");


















var Triangle =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Triangle, _PureComponent);

  function Triangle(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Triangle);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Triangle).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Triangle, [{
    key: "render",
    value: function render() {
      var size = this.props.size;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        width: size,
        position: 'absolute'
      }), {
        viewBox: "0 0 1 1"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("polygon", {
        fill: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2,
        stroke: "none",
        points: "0,0 " + //left_top
        "1,0 " + //right_top
        "0,1 " //right_bottom

      }));
    }
  }]);

  return Triangle;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var FullWork =
/*#__PURE__*/
function (_PureComponent2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FullWork, _PureComponent2);

  function FullWork(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, FullWork);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(FullWork).call(this, props));
    _this.handleClickClose = _this.closeOnClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    _this.state = {
      showArrows: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(FullWork, [{
    key: "closeOnClick",
    value: function closeOnClick() {
      this.props.setFocusOn(-1);
    }
  }, {
    key: "nextOnClick",
    value: function nextOnClick(index) {
      // debugger
      if (index + 1 === this.props.contents.length) {
        index = -1;
      }

      this.props.setFocusOn(index + 1);
    }
  }, {
    key: "prevOnClick",
    value: function prevOnClick(index) {
      // if(index===this.props.contents.length) {index=-1;debugger}
      this.props.setFocusOn(index - 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.worksFocusOn === undefined || this.props.worksFocusOn === -1) return null;
      var index = this.props.worksFocusOn;
      /*跳转前一张或者后一张*/

      var landscape = this.props.landscape; // debugger

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        left: 0,
        top: 0,
        right: 0,
        zIndex: 9,
        // backgroundColor:'rgba(240,240,240,.95)',
        background: 'rgba(240,240,240,.99)',
        transition: 'background 1s cubic-bezier(0, 0.6, 0, 1)',
        willChange: 'background',
        pointerEvents: 'none'
      }), {
        className: "FullWork"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        /*居中*/
        position: 'fixed',
        display: 'flex',
        justifyContent: 'space-between',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'auto',
        zIndex: 11,
        opacity: 0,
        // height: `fit-content`,
        // width: landscape?`${GR.vw(8)}vw`:`${GR.vw(5)}vw`,
        cursor: 'pointer',
        ':hover': {
          opacity: 1,
          transition: 'opacity 1s'
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        /*居中*/
        // position: 'fixed',
        // left:0,
        // top:0,
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: landscape ? 'center' : 'flex-start',
        margin: landscape ? '0' : '.6em',
        height: '100vh',
        width: '33vw',
        pointerEvents: 'all',
        cursor: 'pointer'
      }), {
        onClick: function onClick() {
          _this2.prevOnClick(_this2.props.worksFocusOn);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_icons_chevron_left__WEBPACK_IMPORTED_MODULE_14__["default"], {
        size: 30,
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2,
        strokeWidth: 0.75
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        /*居中*/
        // position: 'fixed',
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        width: '33vw',
        pointerEvents: 'all',
        cursor: 'pointer'
      }), {
        onClick: this.handleClickClose
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        /*居中*/
        // position: 'fixed',
        // left:0,
        // top:0,
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: landscape ? 'center' : 'flex-end',
        margin: landscape ? '0' : '.6em',
        height: '100vh',
        width: '33vw',
        pointerEvents: 'all',
        cursor: 'pointer'
      }), {
        onClick: function onClick() {
          _this2.nextOnClick(_this2.props.worksFocusOn);
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_svg_icons_chevron_right__WEBPACK_IMPORTED_MODULE_15__["default"], {
        size: 30,
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2,
        strokeWidth: 0.75
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'auto',
        alignItems: landscape ? 'flex-end' : 'flex-start',
        // width:this.props.vw,
        zIndex: 10,
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw'
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor:ui.color.b_o2,
        // flexDirection:landscape?'row':'column',
        width: this.props.vw
      }), landscape ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        width: landscape ? '2rem' : '1rem',
        height: landscape ? '2rem' : '1rem',
        paddingBottom: '2rem',
        paddingTop: '2rem' // paddingLeft:'2rem',

      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Triangle, {
        size: landscape ? '2rem' : '1rem'
      })) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o3,
        fontWeight: 1000,
        fontSize: landscape ? '1.5rem' : '1rem',
        paddingBottom: '2rem',
        paddingTop: '2rem',
        paddingLeft: '0.8rem'
      }), this.props.contents[this.props.worksFocusOn].time), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o1,
        paddingBottom: '2rem',
        paddingTop: '2rem',
        paddingLeft: landscape ? '1rem' : '.5rem',
        width: landscape ? 'auto' : '13em'
      }), this.props.contents[this.props.worksFocusOn].title[this.props.language]), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2,
        fontSize: landscape ? '0.8rem' : '0.4rem',
        paddingBottom: '2rem',
        paddingTop: '2rem',
        paddingLeft: '0.8rem'
      }), this.props.contents[this.props.worksFocusOn].dim))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_img_work__WEBPACK_IMPORTED_MODULE_12__["IMG_WithLoader"], {
        src: this.props.contents[this.props.worksFocusOn].img,
        height: this.props.vh * 0.8,
        width: this.props.vw * 0.8,
        fullWidth: true,
        fetch: true,
        key: this.props.contents[this.props.worksFocusOn].img
      }));
    }
  }]);

  return FullWork;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    vw: state.Root.view_size.vw,
    vh: state.Root.view_size.vh,
    landscape: state.Root.view_size.is_landscape,
    language: state.Root.language,
    worksFocusOn: state.Tab.worksFocusOn
  };
};
/*关闭的时候,切换的时候使用*/


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setFocusOn: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_13__["setFocusOn"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(FullWork));

/***/ })

})
//# sourceMappingURL=artisti.js.57530bd3e0766fce5ba8.hot-update.js.map