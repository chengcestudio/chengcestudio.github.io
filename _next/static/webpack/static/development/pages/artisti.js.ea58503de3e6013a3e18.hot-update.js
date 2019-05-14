webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.biography.js":
/*!*********************************************!*\
  !*** ./components/artisti.tab.biography.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./artisti.tab.Wrapper */ "./components/artisti.tab.Wrapper.js");

















var Button =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Button, _PureComponent);

  function Button(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Button).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Button, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
        marginRight: this.props.landscape ? '3rem' : 0,
        cursor: 'pointer',
        // width:'3rem',/*居中*/
        color: this.props.on ? _utils_ui__WEBPACK_IMPORTED_MODULE_12__["ui"].color.b_o1 : _utils_ui__WEBPACK_IMPORTED_MODULE_12__["ui"].color.b_o2,
        fontWeight: this.props.on ? 900 : 100,
        userSelect: 'none'
      }), {
        onClick: this.props.onClick
      }), this.props.name);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

var Biography =
/*#__PURE__*/
function (_PureComponent2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Biography, _PureComponent2);

  function Biography(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Biography);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Biography).call(this, props));
    _this.state = {
      on: 'ALL'
    };
    _this.handleClick = _this.onClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.exhibitionButtons = {
      en: ['ALL EXHIBITIONS', 'SOLO EXHIBITIONS', 'GROUP EXHIBITIONS'],
      it: ['TUTTE LE MOSTRE', 'MOSTRE PERSONALI', 'MOSTRE COLLETTIVE'],
      zh: ['所有展览', '个展', '群展']
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Biography, [{
    key: "onClick",
    value: function onClick(name) {
      this.setState({
        on: name
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // debugger
      var EXHIBITIONS = this.props.contents.exhibitions;
      var BIOGRAPHY = this.props.contents.biography;
      var exhibitions = {};

      if (this.state.on === 'Solo') {
        exhibitions = EXHIBITIONS[this.props.language][0];
      } else if (this.state.on === 'Group') {
        exhibitions = EXHIBITIONS[this.props.language][1];
      } else if (this.state.on === 'ALL') {
        // 遗憾 array 的数据没有合并在一起
        // 1.

        /*let obj = Object.assign({},{...this.props.exhibitions[this.props.language][0]},{...this.props.exhibitions[this.props.language][1]})*/
        var solo = EXHIBITIONS[this.props.language][0];
        var group = EXHIBITIONS[this.props.language][1];

        var all = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, solo));

        for (var key in all) {
          if (group[key]) {
            all[key] = all[key].concat(group[key]);
          }
        }

        exhibitions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, group), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, all));
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
        position: 'relative',
        width: "".concat(this.props.width),
        margin: 'auto',
        //居中
        minHeight: '60vh',
        //为了footer
        userSelect: 'none'
      }), {
        className: this.props.tabName
      }), BIOGRAPHY[this.props.language].split('\n').map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          key: "".concat(_this2.props.tabName, "_").concat(key, "_").concat(_this2.props.language)
        }, item, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null));
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: this.props.landscape ? 'flex-start' : 'center',

        /*如果是手机居中*/
        // marginLeft:'auto',
        // marginRight:'auto',
        // alignItems: 'center',
        marginTop: '2rem',
        marginBottom: '3rem'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Button, {
        name: this.exhibitionButtons[this.props.language][0],
        landscape: this.props.landscape,
        width: this.props.width,
        onClick: function onClick() {
          _this2.handleClick('ALL');
        },
        on: this.state.on === 'ALL'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Button, {
        name: this.exhibitionButtons[this.props.language][1],
        landscape: this.props.landscape,
        width: this.props.width,
        onClick: function onClick() {
          _this2.handleClick('Solo');
        },
        on: this.state.on === 'Solo'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Button, {
        name: this.exhibitionButtons[this.props.language][2],
        landscape: this.props.landscape,
        width: this.props.width,
        onClick: function onClick() {
          _this2.handleClick('Group');
        },
        on: this.state.on === 'Group'
      })), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(exhibitions).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
          justifyContent: 'flex-start',
          display: 'flex',
          flexDirection: 'row'
        }), {
          key: "".concat(_this2.props.tabName, "_exhibitions_").concat(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item), "_").concat(_this2.props.language, "_").concat(index)
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
          color: _utils_ui__WEBPACK_IMPORTED_MODULE_12__["ui"].color.b_o2,
          fontWeight: 900
        }), item), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
          justifyContent: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: _this2.props.landscape ? '2rem' : '0.8em',
          marginBottom: '1rem'
        }), exhibitions[item].map(function (s, i) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_11__["css"])({
            marginTop: '0.3em',
            marginBottom: '0.3em',
            userSelect: 'none'
          }), {
            key: "".concat(_this2.props.tabName, "_exhibitions_").concat(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(item), "_").concat(index, "_").concat(i)
          }), "".concat(s));
        })));
      }));
      /*return*/
    }
    /*render*/

  }]);

  return Biography;
}(react__WEBPACK_IMPORTED_MODULE_10__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    // vw:state.Root.view_size.vw,
    // landscape:state.Root.view_size.is_landscape,
    language: state.Root.language,
    landscape: state.Root.view_size.is_landscape // on:state.Tab.on,

  };
};

var Comp = Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, null)(Biography);
/* harmony default export */ __webpack_exports__["default"] = (Object(_artisti_tab_Wrapper__WEBPACK_IMPORTED_MODULE_14__["default"])()(Comp));

/***/ })

})
//# sourceMappingURL=artisti.js.ea58503de3e6013a3e18.hot-update.js.map