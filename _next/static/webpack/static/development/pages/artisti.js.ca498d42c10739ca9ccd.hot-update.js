webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/avatar.js":
/*!******************************!*\
  !*** ./components/avatar.js ***!
  \******************************/
/*! exports provided: AVATAR, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVATAR", function() { return AVATAR; });
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
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img */ "./components/img.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







 // import glamorous,{withTheme} from 'glamorous'




 // const Triangle = (props)=>

var Triangle =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Triangle, _PureComponent);

  function Triangle(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Triangle);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Triangle).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Triangle, [{
    key: "render",
    value: function render() {
      var size = this.props.size;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        width: size,
        position: 'absolute'
      }), {
        viewBox: "0 0 1 1"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        fill: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.b_o2,
        stroke: "none",
        points: "0,0 " + //left_top
        "1,0 " + //right_top
        "0,1 " //right_bottom

      }));
    }
  }]);

  return Triangle;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]); // const Img = glamorous.div({
// },(props)=>{
//   width:   props.width,
//   height:  props.height,
//   //在这里找渐变模板 https: //webgradients.com/
//   // backgroundColor:  props.src?`url(${props.src})`:'white',
//   backgroundImage:  props.src?`url(${props.src})`:'white',
// })
//
// IMG_WithLoader


var AVATAR =
/*#__PURE__*/
function (_PureComponent2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AVATAR, _PureComponent2);

  function AVATAR(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AVATAR);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(AVATAR).call(this, props));
    _this.PERSP = 1000;
    _this.Zp = {
      pc: {
        title: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(30, _this.PERSP),
        img: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(50, _this.PERSP),
        tiangle: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(10, _this.PERSP)
      },
      mobile: {
        img: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(30, _this.PERSP),
        title: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(50, _this.PERSP),
        tiangle: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(10, _this.PERSP)
      }
    };
    return _this;
  } // perspZ =(translateZ , perspective)=>{
  //     const scale = 1 + (translateZ * -1) / perspective
  //     return `translateZ(${zp.translateZ}px) scale(${zp.scale});`
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(AVATAR, [{
    key: "render",
    value: function render() {
      var zp = this.props.landscape ? this.Zp.pc : this.Zp.mobile;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'relative',
        height: this.props.SizeWidth,
        width: this.props.SizeWidth,
        transformStyle: 'preserve-3d'
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        transform: "translateZ(".concat(zp.tiangle.translateZ, "px) scale(").concat(zp.tiangle.scale, ")")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Triangle, {
        size: this.props.SizeWidth
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        transform: "translateZ(".concat(zp.img.translateZ, "px) scale(").concat(zp.img.scale, ")")
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_img__WEBPACK_IMPORTED_MODULE_9__["IMG_WithLoader"], {
        src: this.props.src,
        height: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(1, this.props.SizeWidth),
        width: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(1, this.props.SizeWidth),
        top: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(3, this.props.SizeWidth),
        left: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(4, this.props.SizeWidth),
        fetch: true
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'absolute',
        top: "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(5, this.props.SizeWidth), "px"),
        left: "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(5, this.props.SizeWidth), "px"),
        fontSize: "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(5, this.props.SizeWidth), "px"),
        color: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_2,
        fontWeight: 100,
        transform: "translateZ(".concat(zp.title.translateZ, "px) scale(").concat(zp.title.scale, ")")
      }), this.props.name));
    }
  }]);

  return AVATAR;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  // const onClose = state.Section[ownProps.name].onClose
  return {
    landscape: state.Root.view_size.is_landscape
  };
}; // export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null)(AVATAR));

/***/ })

})
//# sourceMappingURL=artisti.js.ca498d42c10739ca9ccd.hot-update.js.map