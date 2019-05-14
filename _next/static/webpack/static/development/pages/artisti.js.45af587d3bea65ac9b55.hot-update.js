webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/artisti.tab.Wrapper.js":
/*!*******************************************!*\
  !*** ./components/artisti.tab.Wrapper.js ***!
  \*******************************************/
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _copyright__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./copyright */ "./components/copyright.js");












/*
 Wrapper Function(VERSION redux )
 Usage: import 该 Wrapper ,
 例如嵌套组件 'Biography' , 组件为 TAB()(Biography)

 Usage:
 export default   connect(mapStateToProps,null)(TAB()(Biography ,'BIOGRAPHY'))

 @this.props.tabName ----'BIOGRAPHY'(从page artisti 调入)
 @this.props.on ----true/false (从 redux 映射 )
 */

var TAB = function TAB() {
  return function (Comp) {
    var Tab =
    /*#__PURE__*/
    function (_PureComponent) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Tab, _PureComponent);

      function Tab(props) {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tab);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Tab).call(this, props));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Tab, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          // 点击了该Tab , 当 nexprops  = 'BIOGRAPHY'
          if (nextProps.onTab === this.props.tabName) {
            gsap__WEBPACK_IMPORTED_MODULE_8__["TweenMax"].fromTo(".WRAPPER_".concat(this.props.tabName), 0.5, {
              y: 150,
              autoAlpha: 0,
              display: 'none'
            }, {
              y: 0,
              autoAlpha: 1,
              //opacity:1,visibility:'visible'
              display: 'flex',
              ease: Power4.easeOut
            }, 0.2);
            /*TweenMax*/
          } // 从这个Tab退出 , 激活其他Tabs 时


          if (this.props.onTab === this.props.tabName) {
            gsap__WEBPACK_IMPORTED_MODULE_8__["TweenMax"].to(".WRAPPER_".concat(this.props.tabName), 0.5, {
              y: 150,
              autoAlpha: 0,
              display: 'none',
              ease: Power4.easeOut
            }, 0.2);
            /*TweenMax*/
          }
        } // 过滤与这个Tab 无关的更新, 避免on 一更改就渲染一次
        // // 实测不需要

      }, {
        key: "componentshouldupdate",
        value: function componentshouldupdate(nextProps) {
          if (this.props.onTab !== this.props.tabName && nextProps.onTab !== this.props.tabName) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "render",
        value: function render() {
          var show = this.props.tabName === this.props.onTab;

          var _ref = this.props || {
            language: 'zh'
          },
              language = _ref.language;

          var copyRight;

          if (language === 'zh') {
            copyRight = 'Copyright © 2017 中艺国际有限公司.All rights reserved';
          } else if (language === 'it') {
            copyRight = 'Copyright © 2017 ZHONG ART INTERNATIONAL SRL.All rights reserved';
          } else {
            copyRight = 'Copyright © 2017 ZHONG ART INTERNATIONAL LTD.All rights reserved';
          }

          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
            position: 'absolute',

            /*居中*/
            display: show ? 'flex' : 'none',
            width: '100vw',
            flexDirection: 'column',
            // justifyContent:'center',

            /*居中*/
            visibility: show ? 'visible' : 'hidden',
            paddingTop: "".concat(this.props.landscape ? '0rem' : '3rem'),
            //手机需要和上面tab 按钮 有一定空隙
            paddingBottom: '7rem' // for CopuRight

          }), {
            className: "WRAPPER_".concat(this.props.tabName),
            key: "TAB_".concat(this.props.tabName, "_").concat(language)
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Comp, {
            tabName: this.props.tabName,
            contents: this.props.contents,
            width: this.props.width
          }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_copyright__WEBPACK_IMPORTED_MODULE_10__["default"], null));
        }
      }]);

      return Tab;
    }(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

    var mapStateToProps = function mapStateToProps(state) {
      return {
        onTab: state.Tab.on,
        vw: state.Root.view_size.vw,
        landscape: state.Root.view_size.is_landscape,
        language: state.Root.language
      };
    };

    return Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, null)(Tab);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (TAB); // export default connect(mapStateToProps,null)(TAB)

/***/ })

})
//# sourceMappingURL=artisti.js.45af587d3bea65ac9b55.hot-update.js.map