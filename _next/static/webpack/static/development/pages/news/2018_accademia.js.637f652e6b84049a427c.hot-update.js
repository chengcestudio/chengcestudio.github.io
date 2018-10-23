webpackHotUpdate("static\\development\\pages\\news\\2018_accademia.js",{

/***/ "./components/svg/icons_social_svg.js":
/*!********************************************!*\
  !*** ./components/svg/icons_social_svg.js ***!
  \********************************************/
/*! exports provided: Twitter, WeiChat, Youtube, Viemo, Weibo, Facebook, Instagram, Linkedin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeiChat", function() { return WeiChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viemo", function() { return Viemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weibo", function() { return Weibo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instagram", function() { return Instagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linkedin", function() { return Linkedin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_2__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import {PureComponent} from 'react'



var Svg = function Svg(obj) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
      ':hover': {
        fill: props.fill || 'black'
      },
      fill: 'none',
      stroke: props.stroke || '#000',
      strokeMiterlimit: 10,
      cursor: 'pointer'
    }), {
      width: props.size || 32,
      height: props.size || 32,
      viewBox: "0 0 32 32",
      className: 'social_icons'
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, obj.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: obj.d
    }));
  };
};

var Twitter = Svg({
  title: 'Twitter',
  d: 'M30,7.32a11.44,11.44,0,0,1-3.3.9A5.76,5.76,0,0,0,29.23,5a11.53,11.53,0,0,1-3.65,1.4,5.76,5.76,0,0,0-9.79,5.24A16.32,16.32,0,0,1,4,5.67a5.68,5.68,0,0,0-.78,2.89,5.74,5.74,0,0,0,2.55,4.78,5.75,5.75,0,0,1-2.6-.72v.07a5.73,5.73,0,0,0,4.61,5.63,5.4,5.4,0,0,1-1.51.21,5.6,5.6,0,0,1-1.09-.11,5.78,5.78,0,0,0,5.37,4,11.48,11.48,0,0,1-7.14,2.46A10.39,10.39,0,0,1,2,24.79a16.22,16.22,0,0,0,8.81,2.58c10.56,0,16.34-8.75,16.34-16.34,0-.25,0-.5,0-.74a11.58,11.58,0,0,0,2.87-3Z'
});
var WeiChat = Svg({
  title: 'WeiChat',
  d: 'M9.71,9.84A1.21,1.21,0,0,0,8.42,8.55,1.44,1.44,0,0,0,6.88,9.84a1.43,1.43,0,0,0,1.54,1.27A1.2,1.2,0,0,0,9.71,9.84ZM20.23,17A1.17,1.17,0,0,0,19,16a1,1,0,0,0,0,2.05A1.17,1.17,0,0,0,20.23,17ZM16.89,9.84a1.21,1.21,0,0,0-1.27-1.29,1.44,1.44,0,0,0-1.55,1.29,1.43,1.43,0,0,0,1.55,1.27A1.2,1.2,0,0,0,16.89,9.84Zm9,7.18a1.18,1.18,0,0,0-1.29-1,1,1,0,0,0,0,2.05A1.18,1.18,0,0,0,25.88,17ZM12.73,21.61c-.33,0-.64,0-1,0a17.85,17.85,0,0,1-3.6-.51l-3.58,1.8,1-3.09C3,18.05,1.5,15.73,1.5,12.91,1.5,8,6.12,4.19,11.77,4.19c5,0,8.92,2.52,9.94,6.66m8.79,8.49c0,2.31-1.53,4.36-3.6,5.91l.78,2.56-2.82-1.54a13.33,13.33,0,0,1-3.08.52c-4.89,0-8.73-3.34-8.73-7.45s3.84-7.45,8.73-7.45C26.39,11.89,30.5,15.23,30.5,19.34Z'
});
var Youtube = Svg({
  title: 'Youtube',
  d: 'M30.21,10.2a6.25,6.25,0,0,0-1.15-2.88,4.2,4.2,0,0,0-2.91-1.23C22.1,5.8,16,5.8,16,5.8h0s-6.09,0-10.15.29A4.17,4.17,0,0,0,3,7.32,6.14,6.14,0,0,0,1.8,10.2a44,44,0,0,0-.29,4.7v2.19a44,44,0,0,0,.29,4.7A6.25,6.25,0,0,0,3,24.67a5,5,0,0,0,3.2,1.24c2.32.22,9.86.29,9.86.29s6.09,0,10.15-.3a4.18,4.18,0,0,0,2.9-1.23,6.31,6.31,0,0,0,1.16-2.88,44,44,0,0,0,.29-4.7V14.9a45.57,45.57,0,0,0-.3-4.7ZM13,19.76V11.61l7.84,4.09Z'
});
var Viemo = Svg({
  title: 'viemo',
  d: 'M30.49,9.26q-.19,4.23-5.91,11.6-5.92,7.68-10,7.68-2.53,0-4.29-4.68L7.94,15.28c-.87-3.12-1.79-4.68-2.79-4.68A9,9,0,0,0,2.87,12L1.51,10.21C2.94,9,4.35,7.7,5.74,6.44Q8.61,4,10,3.83q3.38-.31,4.17,4.63c.56,3.56.95,5.78,1.17,6.64.65,3,1.36,4.44,2.15,4.44q.9,0,2.73-2.88a11.39,11.39,0,0,0,2-4.38c.17-1.65-.48-2.48-2-2.48a5.57,5.57,0,0,0-2.15.47q2.14-7,8.17-6.8,4.47.12,4.21,5.79Z'
});
var Weibo = Svg({
  title: 'Weibo',
  d: 'M13.68,27c-4.8.47-8.95-1.7-9.26-4.85s3.33-6.09,8.13-6.57,9,1.7,9.26,4.85S18.48,26.56,13.68,27Zm9.6-10.47c-.4-.12-.69-.2-.47-.74a3,3,0,0,0,0-2.89c-.94-1.34-3.51-1.27-6.46,0,0,0-.93.4-.69-.33.45-1.46.38-2.68-.33-3.39-1.6-1.6-5.86.06-9.51,3.72C3.09,15.62,1.5,18.53,1.5,21c0,4.79,6.15,7.71,12.17,7.71,7.88,0,13.13-4.59,13.13-8.22,0-2.21-1.85-3.45-3.51-4Zm6.85-1.27h0a7.65,7.65,0,0,0-1.61-7.49h0a7.66,7.66,0,0,0-7.3-2.36h0m5.16,8.67a3.75,3.75,0,0,0-.79-3.66h0A3.74,3.74,0,0,0,22,9.28M14.16,18A5.23,5.23,0,0,0,8.3,20.59a3.57,3.57,0,0,0,2.27,5.08,5.19,5.19,0,0,0,6.19-2.62,3.57,3.57,0,0,0-2.6-5Z'
});
var Facebook = Svg({
  title: 'Facebook',
  d: 'M18.72,6.94h4.53V1.5H18.72a6.35,6.35,0,0,0-6.34,6.34v2.72H8.75V16h3.63V30.5h5.43V16h4.53l.91-5.44H17.81V7.84A.92.92,0,0,1,18.72,6.94Z'
});
var Instagram = Svg({
  title: 'Instagram',
  d: 'M15.83,1.49h0c-3.62,0-4.31,0-5.65.07-.51,0-1,.05-1.46.1a9.41,9.41,0,0,0-2.24.44,7.42,7.42,0,0,0-.82.32A6.11,6.11,0,0,0,3.75,3.75a6.21,6.21,0,0,0-1.36,2c-.09.2-.17.4-.25.63a10.16,10.16,0,0,0-.51,2.58l-.06,1C1.51,11.35,1.5,12.12,1.5,16s0,4.64.07,6.05c0,.34,0,.66.06,1a10.16,10.16,0,0,0,.51,2.58c.07.22.16.43.24.62a6.32,6.32,0,0,0,1.37,2,6.41,6.41,0,0,0,2,1.36,6.36,6.36,0,0,0,.63.25,9.71,9.71,0,0,0,2.58.5c.33,0,.65.05,1,.06,1.41.06,2.18.08,6.06.08s4.64,0,6.06-.08l1-.06a9.79,9.79,0,0,0,2.58-.5l.62-.24a6.31,6.31,0,0,0,2-1.38,6.24,6.24,0,0,0,1.37-2c.08-.19.17-.4.25-.63a10.13,10.13,0,0,0,.5-2.58q0-.5.06-1c.06-1.42.08-2.19.08-6.06s0-4.64-.08-6.06q0-.49-.06-1a10.13,10.13,0,0,0-.5-2.58q-.12-.35-.24-.63a6.12,6.12,0,0,0-1.37-2,6.26,6.26,0,0,0-2.09-1.42l-.4-.16a10.14,10.14,0,0,0-3-.57l-.42,0C20.84,1.51,20,1.49,15.83,1.49ZM16,22.7A6.73,6.73,0,1,1,22.72,16,6.73,6.73,0,0,1,16,22.7ZM26.43,7.49a1.92,1.92,0,1,1-1.92-1.92A1.92,1.92,0,0,1,26.43,7.49Z'
});
var Linkedin = Svg({
  title: 'Linkedin',
  d: 'M138.7,53.9h-40c-2.2,0-4,1.8-4,4v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4v-40C142.7,55.7,140.9,53.9,138.7,53.9 z M108.7,94.9h-7v-23h7V94.9z M104.5,68.8c-1.9-0.3-3.5-1.8-3.7-3.7c-0.5-3,2.1-5.6,5.2-5.2c1.9,0.3,3.4,1.8,3.7,3.7 C110.2,66.7,107.6,69.3,104.5,68.8z M135.7,95.2h-7V84c0-3.9-0.9-6.1-3.3-6.1c-3.3,0-4.7,2.4-4.7,6.1v11.1h-7v-23h6.5v3.3 c0.9-1.9,3.3-3.6,6.9-3.6c6.9,0,8.6,3.7,8.6,10.6V95.2z'
});

/***/ })

})
//# sourceMappingURL=2018_accademia.js.637f652e6b84049a427c.hot-update.js.map