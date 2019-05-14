webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.selectText.js":
/*!**********************************************!*\
  !*** ./components/artisti.tab.selectText.js ***!
  \**********************************************/
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
/* harmony import */ var _artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./artisti.tab.Wrapper */ "./components/artisti.tab.Wrapper.js");













/*根据title 显示selectText*/

var TitleButton =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TitleButton, _PureComponent);

  function TitleButton(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, TitleButton);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(TitleButton).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(TitleButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        // marginRight:'3rem',
        cursor: 'pointer',
        // width:'3rem',/*居中*/
        color: this.props.activated ? _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o1 : _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2,
        fontWeight: this.props.activated ? 900 : 100
      }), {
        className: 'TITLEBUTTON' // key = {this.props.key}
        ,
        onClick: this.props.onClick
      }), this.props.name);
    }
  }]);

  return TitleButton;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var SelectText =
/*#__PURE__*/
function (_PureComponent2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SelectText, _PureComponent2);

  function SelectText(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SelectText);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SelectText).call(this, props));
    _this.state = {
      on: 0
    };
    _this.handleClick = _this.onClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SelectText, [{
    key: "onClick",
    value: function onClick(index) {
      this.setState({
        on: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var language = this.props.language;
      var CONTENTS = this.props.contents;
      var content = this.props.contents[this.state.on]['content'][language] || this.props.contents[this.state.on]['content']['en'] || this.props.contents[this.state.on]['content']['it'] || this.props.contents[this.state.on]['content']['zh'];
      var title = this.props.contents[this.state.on]['title'][language] || this.props.contents[this.state.on]['title']['en'] || this.props.contents[this.state.on]['title']['it'] || this.props.contents[this.state.on]['title']['zh'];
      var author = this.props.contents[this.state.on]['author'][language] || this.props.contents[this.state.on]['author']['en'] || this.props.contents[this.state.on]['author']['it'] || this.props.contents[this.state.on]['author']['zh']; // debugger

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'relative',
        width: "".concat(this.props.width),
        margin: 'auto',
        //居中
        minHeight: '60vh',
        //为了footer
        userSelect: 'none'
      }), {
        className: this.props.tabName
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: this.props.landscape ? 'flex-start' : 'center',

        /*如果是手机居中*/
        // marginLeft:'auto',
        // marginRight:'auto',
        marginTop: '2rem',
        marginBottom: '3rem'
      }), this.props.contents.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TitleButton, {
          name: item['title'][language],
          onClick: function onClick() {
            _this2.handleClick(index);
          },
          activated: _this2.state.on === index,
          key: 'TITLEBUTTON' + language + index
        });
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        /*如果是手机居中*/
        alignItems: 'center',
        userSelect: 'none',
        // marginLeft:'auto',
        // marginRight:'auto',
        marginTop: '2rem',
        marginBottom: '3rem'
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "\u300A".concat(title, "\u300B")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o2
      }), author)), content.split('\n').map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
          textIndent: '2em'
        }), {
          key: "".concat(title, "_").concat(index, "_").concat(language)
        }), item, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null));
      }));
      /*return*/
    }
    /*render*/

  }]);

  return SelectText;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // vw:state.Root.view_size.vw,
    // landscape:state.Root.view_size.is_landscape,
    language: state.Root.language,
    landscape: state.Root.view_size.is_landscape // on:state.Tab.on,

  };
};

var Comp = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null)(SelectText);
/* harmony default export */ __webpack_exports__["default"] = (Object(_artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])()(Comp));

/***/ })

})
//# sourceMappingURL=artisti.js.3638f322a1a78ab41998.hot-update.js.map