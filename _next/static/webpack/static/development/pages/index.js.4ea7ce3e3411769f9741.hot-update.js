webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/svg/icons_static_svg.js":
/*!********************************************!*\
  !*** ./components/svg/icons_static_svg.js ***!
  \********************************************/
/*! exports provided: Phone, Mobile, Mail, Address, Site, QuoteLeft, QuoteRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mobile", function() { return Mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteLeft", function() { return QuoteLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteRight", function() { return QuoteRight; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_2__);




var Svg = function Svg(obj) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
      ':hover': {
        fill: props.fill || 'black'
      },
      fill: 'none',
      stroke: props.strokeColor || '#000',
      strokeMiterlimit: 10,
      cursor: 'pointer'
    }), {
      width: props.size || 32,
      height: props.size || 32,
      viewBox: "0 0 32 32"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, obj.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      className: 'icons',
      d: obj.d
    }));
  };
};

var Phone = Svg({
  title: 'Phone',
  d: 'M24.69,30.5a18.06,18.06,0,0,1-8.12-2.16,30.06,30.06,0,0,1-7.43-5.48,29.81,29.81,0,0,1-5.47-7.44A18.06,18.06,0,0,1,1.51,7.3C1.51,5.64,3.06,4,3.73,3.41c1-.88,2.46-1.91,3.56-1.91a3.32,3.32,0,0,1,2,1.12,19.51,19.51,0,0,1,2,2.24c.42.54,2.5,3.29,2.5,4.62,0,1.08-1.22,1.83-2.52,2.63A12.88,12.88,0,0,0,9.9,13c-.4.32-.47.48-.48.52a19.12,19.12,0,0,0,9,9s.2-.07.52-.48a12.88,12.88,0,0,0,.93-1.39c.8-1.3,1.55-2.52,2.63-2.52,1.33,0,4.08,2.08,4.62,2.5a19.51,19.51,0,0,1,2.24,2,3.32,3.32,0,0,1,1.12,2c0,1.1-1,2.61-1.91,3.57C28,28.94,26.35,30.5,24.69,30.5Z'
});
var Mobile = Svg({
  title: 'Mobile',
  d: 'M24.79,24.75h-17v4.42a1.36,1.36,0,0,0,1.36,1.36h14.5A1.36,1.36,0,0,0,25,29.17V24.75Zm-8,4.56a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16.83,29.31ZM7.77,24.75V2.89A1.36,1.36,0,0,1,9.13,1.53h14.5A1.36,1.36,0,0,1,25,2.89V24.75'
});
var Mail = Svg({
  title: 'Mail',
  d: 'M3,9.79l11.28,7.52a3.22,3.22,0,0,0,3.38,0L29,9.79m.24-2.95H2.79c-1.26,0-1.29,1-1.29,2.29V22.87c0,1.26,0,2.29,1.29,2.29H29.21c1.26,0,1.29-1,1.29-2.29V9.13C30.5,7.87,30.47,6.84,29.21,6.84Z'
});
var Address = Svg({
  title: 'Address',
  d: 'M15.85,1.48a8.71,8.71,0,0,0-8.7,8.7,23.47,23.47,0,0,0,1.28,7.26,41.34,41.34,0,0,0,2.79,6.4,47.38,47.38,0,0,0,4.06,6.36l.57.28.57-.28a47.38,47.38,0,0,0,4.06-6.36,41.34,41.34,0,0,0,2.79-6.4,23.47,23.47,0,0,0,1.28-7.26A8.71,8.71,0,0,0,15.85,1.48Zm0,13.05a4.35,4.35,0,1,1,4.35-4.35A4.35,4.35,0,0,1,15.85,14.53Z'
});
var Site = Svg({
  title: 'Site',
  d: 'M26.25,5.75a14.5,14.5,0,1,0-20.5,20.5,14.5,14.5,0,1,0,20.5-20.5ZM16,30.55A15.2,15.2,0,0,1,3,22.46c.43-.8,1.37-2.18,1-3.74,0,0,1.44-2.16,1-3-.29-.57-1-1-2.53-1.3l-.65-.12A14.3,14.3,0,0,1,16,1.45,17.42,17.42,0,0,1,23.7,3.66c-.51-.23-4.25.41-5,0-1.17-.62-2.06-2-2.94-2A6.73,6.73,0,0,0,12,3.12a6.88,6.88,0,0,0-2.76,3.7,6.23,6.23,0,0,0,.14,4.29c.66,1.5,1.53,2.18,2.82,2.18l1-.08,1-.08a3.74,3.74,0,0,1,1.21.19c.71.24,1.24,1,1.6,2.43a28.36,28.36,0,0,1,.63,4.75A28.14,28.14,0,0,0,18.09,24a3.68,3.68,0,0,0,.52,1.31,1.56,1.56,0,0,0,1.31.74,4.35,4.35,0,0,0,3.39-1.37,7.16,7.16,0,0,0,1.32-2.44,4.25,4.25,0,0,1,.5-1.08,5.63,5.63,0,0,0,1.51-5c-.1-.91-.1-1.24.27-1.57l.93-.84a17.07,17.07,0,0,0,1.3-1.23,1.61,1.61,0,0,0,.55-1.39v0A14.54,14.54,0,0,1,16,30.55ZM29.57,10.76c-.31-.56-1.11-.83-2.14-1.19s-1.5-1.52-2-2.84A6.05,6.05,0,0,0,23.7,3.66,14.62,14.62,0,0,1,29.57,10.76Z'
});
var QuoteLeft = Svg({
  title: 'quote left',
  d: 'M30.5,26.88V16H23.25A7.26,7.26,0,0,1,30.5,8.75V5.12A10.89,10.89,0,0,0,19.62,16V26.88Zm-18.12,0V16H5.12a7.26,7.26,0,0,1,7.26-7.25V5.12A10.89,10.89,0,0,0,1.5,16V26.88Z'
});
var QuoteRight = Svg({
  title: 'quote right',
  d: 'M1.5,5.12V16H8.75A7.26,7.26,0,0,1,1.5,23.25v3.63A10.89,10.89,0,0,0,12.38,16V5.12Zm18.12,0V16h7.26a7.26,7.26,0,0,1-7.26,7.25v3.63A10.89,10.89,0,0,0,30.5,16V5.12Z'
});

/***/ })

})
//# sourceMappingURL=index.js.4ea7ce3e3411769f9741.hot-update.js.map