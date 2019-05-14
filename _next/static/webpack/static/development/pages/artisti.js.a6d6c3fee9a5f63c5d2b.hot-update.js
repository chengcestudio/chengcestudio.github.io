webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.button.js":
/*!******************************************!*\
  !*** ./components/artisti.tab.button.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/artisti.tabs */ "./reducers/artisti.tabs.js");
/* harmony import */ var _utils_mouse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/mouse */ "./utils/mouse.js");













/**
 * 位于Avatar 右侧 的tab 导航栏
 * *** Component
 * COMP-1.TABS.BUTTONS 按钮
 * COMP-2.TBS.LINE 灰色斜线
 * *** 初始化工作
 * - 根据每个 ARTISTI 存在的Key生成 TAB.BUTTONS 按钮
 * - 储存每个TAB.BUTTONS 按钮位置 , 作为灰线移动依据
 * - 默认停留在第一个KEY - biography 上
 * *** Touch 选定交互
 * - 某个KEY (高亮) ,
 * - 灰色斜线(fixed) 移动至选定 Tab/Button 上
 * - reducer 发射通知 Artisti.Tab.section 组件 ,显示对相应KEY 的 value
 *
 */

/* COMP-1.TABS.BUTTONS 按钮 */

var TABS =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TABS, _PureComponent);

  function TABS(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TABS);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TABS).call(this, props));
    _this.handleClick = _this._onClickTab;
    _this.tabs = ['BIOGRAPHY', 'WORKS', 'SELECTTEXTS', 'NEWS', 'EXHIBITIONS'];
    _this.tabsName = {
      it: ['BIOGRAFIA', 'OPERE', 'SELECTTEXTS', 'NOTIZIE', 'MOSTRE'],
      zh: ['简  历', '作  品', '摘  文', '新  闻', '展  览'],
      en: ['BIOGRAPHY', 'WORKS', 'SELECTTEXTS', 'NEWS', 'EXHIBITIONS']
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TABS, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var obj = {};
      this.tabs.map(function (tab) {
        return obj[tab] = Object(_utils_mouse__WEBPACK_IMPORTED_MODULE_11__["findPos"])(_this2["$".concat(tab)]);
      });
      this.props.initTabs(obj);
      /*用于网页刷新/跳转时初始化 各个Tabs 的状态*/
      // 默认选择第一个Tab

      var firstTab = this.tabs[0];
      this.props.touchOnTab(firstTab);
    }
  }, {
    key: "_onClickTab",
    value: function _onClickTab(index) {
      // debugger
      var tabName = this.tabs[index];
      this.props.touchOnTab(tabName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return [react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'relative',
        top: 0,
        right: 0,
        width: this.props.width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        //space-around均匀分布
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden'
      }), {
        key: "TABS",
        className: 'Buttons'
      }), this.tabsName[this.props.language].map(function (tab, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
          // button
          transformStyle: 'preserve-3d',
          //@parallax
          cursor: 'pointer',
          marginTop: '1.5em',
          // marginBottom:'.5em',
          textAlign: 'right'
        }), {
          ref: function ref(c) {
            return _this3["$".concat(_this3.tabs[index])] = c;
          },
          key: "tabs_".concat(index),
          id: _this3.tabs[index],
          className: 'tabsButtons',
          onClick: _this3._onClickTab.bind(_this3, index) //传入tabName

        }), tab);
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'absolute'
      }), {
        key: 'tabs_line'
      }))]; //return
    }
  }]);

  return TABS;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    language: state.Root.language
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initTabs: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_10__["initTabs"], dispatch),
    touchOnTab: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_reducers_artisti_tabs__WEBPACK_IMPORTED_MODULE_10__["touchOnTab"], dispatch)
  };
}; // export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(TABS)); // Post2Tabs = () => {
//     this.tab_names = [
//   ];,

/***/ })

})
//# sourceMappingURL=artisti.js.a6d6c3fee9a5f63c5d2b.hot-update.js.map