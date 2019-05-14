webpackHotUpdate("static\\development\\pages\\artisti.js",{

/***/ "./components/info.js":
/*!****************************!*\
  !*** ./components/info.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
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
/* harmony import */ var _svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/icons_static_svg */ "./components/svg/icons_static_svg.js");









 // SVG

 // const Shape= (props) => (
//     <div
//      {...css({
//         /*初始值*/
//         opacity:0,visibility:'hidden',
//         // transform: 'scale(0) translate(-50%, -50%)',
//         transform: 'scale(0)',
//         /*初始值*/
//         /*center*/
//         zIndex:10,
//         position:'fixed',
//         /*center*/
//         background: props.color||ui.color.w_o2,
//         width:`${props.width||1400}px`,
//         height:`${props.height||1400}px`,
//        })}
//      className = {'aboutBG'}
//      >
//     </div>
// )

var Info =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Info, _PureComponent);

  function Info(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Info);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Info).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Info, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.close();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          landscape = _this$props.landscape,
          vw = _this$props.vw,
          vh = _this$props.vh;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: this.props.backgroundColor || _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.b_o2,
        padding: '7em 5em'
      }), {
        className: 'Info'
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'relative',
        top: '-1em',
        left: '-1em' // marginBottom:'1em'

      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_9__["QuoteLeft"], {
        strokeColor: this.props.contentColor || _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_o1
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        // marginRight:'1em',
        // marginLeft:'1em',
        color: this.props.contentColor || _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_o1
      }), this.props.contents), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'relative',
        bottom: '-1em',
        right: '-1em' // marginTop:'1em'

      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_9__["QuoteRight"], {
        strokeColor: _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_o1
      })));
      /*return*/
    }
    /*render*/

  }]);

  return Info;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);



/***/ }),

/***/ "./components/nav.contact.js":
/*!***********************************!*\
  !*** ./components/nav.contact.js ***!
  \***********************************/
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
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _svg_icons_logo_marca__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/icons_logo_marca */ "./components/svg/icons_logo_marca.js");
/* harmony import */ var _svg_icons_QR_Wechat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/icons_QR_Wechat */ "./components/svg/icons_QR_Wechat.js");
/* harmony import */ var _svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/icons_static_svg */ "./components/svg/icons_static_svg.js");
/* harmony import */ var _svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/icons_social_svg */ "./components/svg/icons_social_svg.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_18__);










/* global google */




 // import {canGoogle} from'reducers/root'
// import { bindActionCreators } from 'redux'
// import LOGO  from 'components/svg/icons_logo'






var MapWithAMarker = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_17__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_17__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMap"], {
    defaultZoom: 15,
    defaultCenter: {
      lat: 43.7738564,
      lng: 11.2512034
    },
    defaultOptions: {
      styles: MapStyles
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_17__["Marker"], {
    position: {
      lat: 43.7738564,
      lng: 11.2512034
    }
  }));
}));

/*https://www.facebook.com/zhong.art.it*/
// const linkDirectTo = (url) =>

var NavContact =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(NavContact, _PureComponent);

  function NavContact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavContact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NavContact).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "clickWeichat", function () {
      _this.setState({
        showQr: !_this.state.showQr
      });
    });

    _this.state = {
      showQr: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NavContact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 初始关闭 artisti显示
      gsap__WEBPACK_IMPORTED_MODULE_11__["TweenMax"].set("#nav_contact", {
        y: "".concat(this.props.view_size.vh),
        autoAlpha: 0,
        pointerEvents: 'none'
      }); // this.props.canGoogle()
    } //Immutable??redux

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.nav_on !== this.props.nav_on) {
        //避免在打开父NAV时也执行
        // nextProps.nav_on==='contact'?this.show():this.close();
        //
        if (nextProps.nav_on === 'contact') {
          //如果contact激活
          this.show();
        } else if (this.props.nav_on === 'contact') {
          //如果之前的是contact现在状态已经切换
          this.close();
        }
      }
    } //stagger

  }, {
    key: "show",
    value: function show() {
      console.log('nav-Artisti -show()');
      gsap__WEBPACK_IMPORTED_MODULE_11__["TweenMax"].fromTo("#nav_contact", 0.5, {
        y: "".concat(this.props.view_size.vh),
        opacity: 0 // pointerEvents: 'none',

      }, {
        y: 0,
        ease: Power4.easeOut,
        // pointerEvents: 'visible',
        autoAlpha: 1 //opacity:1,visibility:'visible'

      }, 0.2);
      var tl = new TimelineMax({
        repeat: 0,
        delay: 0.3
      });
      tl.staggerTo( //targets, duration, fromVars, toVars
      '.social_icons', 0.1, //
      {
        fill: 'black' // delay:2,

      }, 0.05).staggerTo( //targets, duration, fromVars, toVars
      '.social_icons', 0.1, //
      {
        fill: 'none' // delay:2,

      }, 0.08, '-=0.05').set('.social_icons', {
        clearProps: "all"
      }); //还原 原有的hover 样式
    }
  }, {
    key: "close",
    value: function close() {
      console.log('nav-About-close()');
      gsap__WEBPACK_IMPORTED_MODULE_11__["TweenMax"].to("#nav_contact", 0.3, {
        y: "".concat(this.props.view_size.vh / 9),
        // ease: Power4.easeOut,
        // pointerEvents: 'none',
        autoAlpha: 0 //opacity:0,visibility:'hidden'

      }, 0.05);
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.props.googlePass);
      var _this$props = this.props,
          view_size = _this$props.view_size,
          language = _this$props.language,
          device = _this$props.device,
          nav_on = _this$props.nav_on;
      var desktop = device === 'desktop';
      var vw = view_size.vw,
          vh = view_size.vh,
          is_landscape = view_size.is_landscape;
      var show = nav_on === 'contact';
      var mapWidth = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].px(1, vw)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].px(1, vw));
      var margin_w = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].vw(3)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].vw(5)); // const zp = is_landscape?this.Zp.pc:this.Zp.mobile

      var top = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].px(4, vh), "px") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_12__["GR"].px(6, vh), "px"); //手机端  nav bg 斜边的高度+margin

      var logoSize = is_landscape ? vw / 20 : vw / 6;
      var google = window.google; // console.log( 'googlepass:',this.props.googlepass )

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'column',

        /*居中*/
        position: 'absolute',
        top: top,
        //手机端 nav bg 斜边的高度+margin
        left: 0,
        width: '100%',
        pointerEvents: 'none',
        justifyContent: 'center',
        //初始, 隐藏
        visibility: 'hidden'
      }), {
        className: "contact",
        id: "nav_contact" // 3D 效果
        ,
        key: "nav_contact"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '2.5em',
        pointerEvents: 'none'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_logo_marca__WEBPACK_IMPORTED_MODULE_13__["default"], {
        strokeColor: this.state.showQr ? 'none' : _utils_ui__WEBPACK_IMPORTED_MODULE_12__["ui"].color.b_o1,
        size: logoSize
      }), this.state.showQr ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        width: logoSize,
        height: logoSize,
        position: 'absolute',
        margin: 'auto'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_QR_Wechat__WEBPACK_IMPORTED_MODULE_14__["default"], {
        size: logoSize
      })) : null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '1.5em'
      }), "Presidente: Xiuzhong Zhang"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '2em',
        pointerEvents: 'auto'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons",
        onClick: this.clickWeichat
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__["WeiChat"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1em'
      }), {
        onClick: function onClick() {
          // e.preventDefault()
          // Router.push('/','//www.facebook.com/zhong.art.it')}}
          // Router.replace('/','//www\.facebook\.com/zhong\.art\.it')
          // window.location.replace('//www\.facebook\.com/zhong\.art\.it');
          window.open('//www\.facebook\.com/zhong\.art\.it', '_blank' // <- This is what makes it open in a new window.
          );
        },
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__["Facebook"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1em'
      }), {
        onClick: function onClick() {
          window.open('//www\.linkedin.com\/in\/zhong-art-international-7063a3173', '_blank');
        },
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__["Linkedin"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1em'
      }), {
        onClick: function onClick() {
          window.open('//www\.instagram\.com\/zhong_art_international', '_blank');
        },
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__["Instagram"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1em'
      }), {
        onClick: function onClick() {
          window.open('//www\.youtube\.com/channel/UCMX1_p6fAUTzN49YXb8rwTA', '_blank');
        },
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_16__["Youtube"], null))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '1em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_15__["Mail"], {
        size: 18
      })), "info@zhongart.it"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_15__["Phone"], {
        size: 18
      })), "+39  055 268308"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_15__["Mobile"], {
        size: 18
      })), "+39  32721  83721"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_15__["Address"], {
        size: 18
      })), "Via del Giglio, 10-50123 ,Firenze, Italia")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_10__["css"])({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        pointerEvents: 'auto'
      }), google ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MapWithAMarker, {
        googleMapURL: "http://maps.google.cn/maps/api/js?key=AIzaSyBQdch5IcgcQaKNG76sbMQv1MEBEKLeQ-8&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        containerElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            height: is_landscape ? '60vh' : "100vw",
            width: is_landscape ? '100vw' : "100vw",
            // marginLeft:`-${margin_w}vw`,//居中
            backgroundColor: 'hsla(0, 0%, 0%, 0)'
          }
        }),
        mapElement: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      }) : null));
    }
  }]);

  return NavContact;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    view_size: state.Root.view_size,
    language: state.Root.language,
    device: state.Root.device,
    // mouse:state.Root.mouse,
    // gyo:state.Root.gyo,
    nav_on: state.nav.on,
    googlePass: state.Root.googlePass
  };
}; // const mapDispatchToProps = (dispatch) => {
//   return {
//     // root
//     canGoogle: bindActionCreators(canGoogle, dispatch),
//   }
// }
// export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, null)(NavContact));
var MapStyles = [{
  "featureType": "all",
  "elementType": "labels.text.fill",
  "stylers": [{
    "saturation": 36
  }, {
    "color": "#120d19"
  }]
}, {
  "featureType": "all",
  "elementType": "labels.text.stroke",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#ffffff"
  }, {
    "lightness": 16
  }]
}, {
  "featureType": "all",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#fefefe"
  }, {
    "lightness": 20
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#fefefe"
  }, {
    "lightness": 17
  }, {
    "weight": 1.2
  }]
}, {
  "featureType": "landscape",
  "elementType": "geometry",
  "stylers": [{
    "color": "#efefef"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry",
  "stylers": [{
    "color": "#f5f5f5"
  }, {
    "lightness": 21
  }]
}, {
  "featureType": "poi.park",
  "elementType": "geometry",
  "stylers": [{
    "color": "#dedede"
  }, {
    "lightness": 21
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#7a7a7a"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#ffffff"
  }, {
    "lightness": 29
  }, {
    "weight": 0.2
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry",
  "stylers": [{
    "color": "#7a7a7a"
  }, {
    "lightness": 25
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry",
  "stylers": [{
    "color": "#7a7a7a"
  }, {
    "lightness": 70
  }]
}, {
  "featureType": "transit",
  "elementType": "geometry",
  "stylers": [{
    "color": "#f2f2f2"
  }, {
    "lightness": 19
  }]
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": [{
    "color": "#353535"
  }]
}];
/*
icons_mobile.js
icons_Weibo.js
icons_youtube.js
icons_Address.js
icons_Facebook.js
icons_Instagram.js
icons_Mail.js
icons_Phone.js
icons_Twitter.js
icons_Video.js
icons_Viemo.js
icons_Wechat.js
icons-site.js
icons-Weibo.js
icons_info.js
icons_logo.js
icons_quote_right.js
icons_quote_left.js
icons_chevron-left.js
icons_chevron-right.js
 */

/*<iframe
 src={`https://maps.googleapis.com/maps/api/staticmap?key=YOUR_API_KEY&center=-33.9,151.14999999999998&zoom=12&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road.arterial%7Celement:labels%7Cvisibility:off&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada%7Cvisibility:off&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit%7Cvisibility:off&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size={480x360}`}
 width={mapWidth}
 height="200"
 frameborder="0"
 ></iframe>*/

/*有效*/

/*<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1359.939041885581!2d11.251240249295027!3d43.77398979302729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb39cef323dcfa7e0!2zWkFJIOS4reiJuuWbvemZhQ!5e0!3m2!1szh-CN!2sit!4v1514654536015"
 width={mapWidth}
 height="200"
 frameborder="0"
 ></iframe>*/

/***/ }),

/***/ "./components/nav.language.js":
/*!************************************!*\
  !*** ./components/nav.language.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_root__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/root */ "./reducers/root.js");






// nav.language.js







var Language =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Language, _PureComponent);

  function Language(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Language);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Language).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Language, [{
    key: "render",
    value: function render() {
      var _this = this;

      var islandscape = this.props.is_landscape;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_6__["css"])({
        position: 'fixed',
        // top:islandscape?null:0,
        bottom: 0,
        right: 0,
        display: islandscape ? 'flex' : 'none',
        flexDirection: 'row',
        cursor: 'pointer',
        pointerEvents: 'auto',
        '> span': {
          marginRight: "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_7__["GR"].vw(8), "vw")
        }
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();

          _this.props.switchLanguage('it');
        }
      }, "ITALIANO"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();

          _this.props.switchLanguage('en');
        }
      }, "ENGLISH"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        onClick: function onClick(e) {
          e.stopPropagation();
          e.preventDefault();

          _this.props.switchLanguage('zh');
        }
      }, "\u4E2D\u6587"));
    }
  }]);

  return Language;
}(react__WEBPACK_IMPORTED_MODULE_5__["PureComponent"]); // const mapStateToProps = (state) => ({
//     islandscape:state.Root.view_size.is_landscape,
// });


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    switchLanguage: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_reducers_root__WEBPACK_IMPORTED_MODULE_10__["switchLanguage"], dispatch)
  };
}; // export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, mapDispatchToProps)(Language));

/***/ }),

/***/ "./components/nav.news.js":
/*!********************************!*\
  !*** ./components/nav.news.js ***!
  \********************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pages_news__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/news */ "./pages/news/index.js");










 // import Link from 'next/link';


 // import markdown from 'markdown-in-js'



var MyDATE = function MyDATE(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
    color: _utils_ui__WEBPACK_IMPORTED_MODULE_10__["ui"].color.b_o3,
    fontSize: '.8em',
    fontWeight: 'bold'
  }), children);
};

var Title = function Title(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
    color: _utils_ui__WEBPACK_IMPORTED_MODULE_10__["ui"].color.b_o1,
    fontSize: '1.5em'
  }), children);
};

var NavNews =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NavNews, _PureComponent);

  function NavNews(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NavNews);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(NavNews).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(NavNews, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.nav_on !== this.props.nav_on) {
        //避免在打开父NAV时也执行
        if (nextProps.nav_on === 'news') {
          //如果about激活
          this.show();
        } else if (this.props.nav_on === 'news') {
          //如果之前的是about现在状态已经切换
          this.close();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.close();
    }
  }, {
    key: "_convertDate",
    value: function _convertDate(lan, date) {
      if (lan === 'zh') {
        return new Date(date).toLocaleDateString('zh-cn', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } else if (lan === 'it') {
        return new Date(date).toLocaleDateString('it-it', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } else {
        return new Date(date).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      console.log('nav-News-show()');
      gsap__WEBPACK_IMPORTED_MODULE_9__["TweenMax"].fromTo(".News_Menu", 0.6, {
        // rotationZ:15,
        autoAlpha: 0
      }, {
        ease: Power4.easeOut,
        // rotationZ:0,
        autoAlpha: 1 //opacity:1,visibility:'visible'

      }, 0.06);
    }
  }, {
    key: "close",
    value: function close() {
      console.log('nav-News-close()');
      gsap__WEBPACK_IMPORTED_MODULE_9__["TweenMax"].to(".News_Menu", 0.5, {
        y: "90vh",
        // rotationZ:-2,
        ease: Power4.easeOut,
        autoAlpha: 0 //opacity:0,visibility:'hidden'

      }, 0.06);
    }
  }, {
    key: "_fillLinkWith",
    value: function _fillLinkWith(id) {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
        // http://localhost:3000/artisti/EnzoCucchi
        // pathname :`/artisti/${id}`
        // http://localhost:3000/artisti?id=EnzoCucchi
        pathname: "/news/".concat(id),
        shallow: true
      }); // window.open(
      //                   `//www\.zhongart\.it/news/${id}`,
      //                   '_blank'
      //                 );
      //
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      console.log(_pages_news__WEBPACK_IMPORTED_MODULE_12__["default"][0].date);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 9,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        //避免遮挡Logo点击
        overflow: 'hidden' //@parallax

      }), {
        className: "News_Menu"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column' // backgroundColor:this.props.backgroundColor||ui.color.w_o2,

      }), {
        className: 'News'
      }), _pages_news__WEBPACK_IMPORTED_MODULE_12__["default"].map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
          pointerEvents: 'auto',
          cursor: 'pointer'
        }), {
          key: "".concat(item.slug, "-").concat(_this.props.language),
          onClick: function onClick() {
            return _this._fillLinkWith(item.slug);
          }
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MyDATE, null, _this._convertDate(_this.props.language, item.date)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Title, null, item.title[_this.props.language]));
      })));
    }
  }]);

  return NavNews;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    view_size: state.Root.view_size,
    language: state.Root.language,
    device: state.Root.device,
    nav_on: state.nav.on
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(NavNews));

/***/ }),

/***/ "./components/section.content.js":
/*!***************************************!*\
  !*** ./components/section.content.js ***!
  \***************************************/
/*! exports provided: _CONTENT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CONTENT", function() { return _CONTENT; });
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
/* harmony import */ var _img_parallax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img.parallax */ "./components/img.parallax.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







// import  {Component} from 'react'

 // import _IMG from './img.skew'




/*
参考 https://wangwang.taobao.com/+
    div transform: skew(0deg,-5deg) relative
        div transform: skew(0deg,5deg); absolute
 */

var BACKGROUND_COLOR = _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_1;

var _pubblic_key = Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["makeKEY"])();

var _CONTENT =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_CONTENT, _PureComponent);

  function _CONTENT(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _CONTENT);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_CONTENT).call(this, props)), _this.PERSP = 1000;
    _this.Zp = {
      pc: {
        contents: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(250, _this.PERSP)
      },
      mobile: {
        contents: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(150, _this.PERSP)
      }
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_CONTENT, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          img = _this$props.img,
          vw = _this$props.vw,
          fetch = _this$props.fetch,
          is_landscape = _this$props.is_landscape,
          marginW = _this$props.marginW,
          content = _this$props.content;
      var zp = this.props.is_landscape ? this.Zp.pc : this.Zp.mobile;
      var zParraller = Object(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["perspZ"])(200 * this.props.index, this.PERSP);
      console.log("translateZ(".concat(zParraller.translateZ, "px) scale(").concat(zParraller.scale, ")"));
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        transformStyle: 'preserve-3d',
        // position:'absolute',
        //position: '-webkit-sticky',// @safari
        // top:1/this.props.index*200,
        perspectiveOrigin: '50% 50%',
        transform: 'translate3d(0, 0, 0)',
        // transform:`translateZ(${zParraller.translateZ}px) scale(${zParraller.scale})`,
        backfaceVisibility: 'hidden' //防止闪烁(flicker)

      }), {
        className: '_CONTENT',
        key: "_CONTENT".concat(_pubblic_key)
      }), img ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_img_parallax__WEBPACK_IMPORTED_MODULE_9__["default"], {
        src: img,
        width: vw,
        height: is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(2, vw)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].px(1, vw)),
        fetch: fetch,
        is_landscape: is_landscape // key={`content_image_${_pubblic_key}`}

      }) : null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        // position:'absolute',
        // bottom:0,
        fontSize: is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].vw(9), "vw") : "1rem",
        fontWeight: 100,
        backgroundColor: BACKGROUND_COLOR,
        paddingLeft: marginW,
        paddingRight: marginW,
        paddingTop: is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].vw(8), "vw") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].vw(5), "vw"),
        paddingBottom: is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].vw(8), "vw") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_8__["GR"].vw(6), "vw"),
        transformStyle: 'preserve-3d',
        transition: "all 1s cubic-bezier(0, 0.6, 0, 1)",
        transform: "translateZ(".concat(zp.contents.translateZ, "px) scale(").concat(zp.contents.scale, ")"),
        backfaceVisibility: 'hidden' //防止闪烁(flicker)

      }), {
        className: "_content_word" // key={`content_word_${_pubblic_key}`}

      }), content.split('\n').map(function (p, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
          backfaceVisibility: 'hidden' //防止闪烁(flicker)

        }), {
          key: "Section_content_" + key
        }, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
          transform: "skew(0deg,5deg) translate3d(0, 0, 0)"
        })), p, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", null));
      })));
    }
  }]);

  return _CONTENT;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  // const onClose = state.Section[ownProps.name].onClose
  return {
    vw: state.Root.view_size.vw,
    vh: state.Root.view_size.vh,
    is_landscape: state.Root.view_size.is_landscape,
    language: state.Root.language
  };
}; // const mapDisp0000atchToProps = (dispatch ) =>{
//     return {
//         // setSectionPostionY:bindActionCreators(setSectionPostionY, dispatch ),
//     }
// }
// export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, null)(_CONTENT));

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _img_parallax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img.parallax */ "./components/img.parallax.js");
/* harmony import */ var _section_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./section.content */ "./components/section.content.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/section */ "./reducers/section.js");
/* harmony import */ var _utils_mouse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/mouse */ "./utils/mouse.js");









 // import _IMG from './img.skew'








/*
参考 https://wangwang.taobao.com/+
    div transform: skew(0deg,-5deg) relative
        div transform: skew(0deg,5deg); absolute
 */

var BACKGROUND_COLOR = _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.w_1;
var BORDER_COLOR = _utils_ui__WEBPACK_IMPORTED_MODULE_9__["ui"].color.b_o3;
/**
 * SECTION 组件
 * @props  {STRING} name (option) SECTION菜单的(导航标题)
 * @props  {STRING} img  (option)如果有首图,设置图片地址
 * @props  {ARRAY} items 传入数组{Object}对象, 每个对象包含会 {title} {img} {contents}
 * @props  {langueage} 方便组件内 map /过滤 语种内容
 * @props  {INT} vw 设备屏幕宽度
 * @props  {INT} offset 如果组件上放有IMG带有svg,减去SVG的高度,迟早要还的
 * @props  {INT} color 是内嵌 SVG 颜色
 * @props  {INT} marginW 文本左右 margin margin on Width
 * @props  {FLOAT} maxHeight 展开动画必须设置
 *
 * @state  {INT} maxHeight 用于content折叠 fold 动画
 * @return {COMPONENT}
 */
// language
// vw
// is_landscape

var Seczione =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Seczione, _PureComponent);

  function Seczione(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Seczione);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Seczione).call(this, props));
    _this.TriangleHeight = _this.props.is_landscape ? _utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].px(7, _this.props.vw) : _utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].px(4, _this.props.vw);
    _this.PERSP = 1000;
    _this.Zp = {
      pc: {
        title_backgound: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["perspZ"])(0, _this.PERSP),
        title: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["perspZ"])(120, _this.PERSP)
      },
      mobile: {
        title_backgound: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["perspZ"])(0, _this.PERSP),
        title: Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["perspZ"])(120, _this.PERSP)
      }
    };
    _this.zPos = Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["perspZ"])(_this.props.zPos, _this.PERSP);
    _this.ToggleFold = _this.toggleFold.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)); //@this._height

    _this._keyCtx = Object(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["makeKEY"])();
    _this.state = {
      height: '100%'
    };
    return _this;
  } // componentWillMount(){
  // debugger
  // console.log('willmount')
  // this.props.setClose(name,this.props.is_landscape?false:true)
  // }


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Seczione, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.onScrollingY !== nextProps.onScrollingY) {}

      if (nextProps.RePosTrigger > this.props.RePosTrigger) {
        if (nextProps.RePosTrigger) {
          this.reSetPosition();
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // debugger
      //计算 section 高度, height 动画必须
      var height = this._$CONTENT.getBoundingClientRect().height;

      this.setState({
        height: "".concat(height, "px")
      }); // onClose 状态手机和电脑(lanscape)不一样

      var name = this.props.name;
      this.props.is_landscape ? this.props.setClose(name, false) : this.props.setClose(name, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 卸载时还原到初始状态
      // componentDidMount ,mapStateToProps 分别定义了初始状态
      this.setState({
        height: "100%"
      });
      this.props.setClose(this.props.name, false);
    }
  }, {
    key: "toggleFold",
    value: function toggleFold() {
      console.log('toggle');
      this.props.setClose(this.props.name, !this.props.onClose);
    }
  }, {
    key: "reSetPosition",
    value: function reSetPosition() {
      this.props.setSectionPostionY(this.props.name, Object(_utils_mouse__WEBPACK_IMPORTED_MODULE_15__["findPos"])(this._$folder));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var zp = this.props.is_landscape ? this.Zp.pc : this.Zp.mobile;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        transformStyle: 'preserve-3d',
        //@parallax
        backgroundColor: BACKGROUND_COLOR,
        transform: "skew(0deg,-5deg) translateZ(".concat(this.props.zPos.translateZ, "px) scale(").concat(this.props.zPos.scale, ")"),
        backfaceVisibility: 'hidden' //防止闪烁(flicker)

      }), {
        key: "Section_".concat(this._keyCtx, "_").concat(this.props.name, "_").concat(this.props.artista)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        // button
        position: 'relative',
        //不设static是因为close时content上移不会叠在上面header
        top: 0,
        // zIndex:2,
        width: '100vw',
        transformStyle: 'preserve-3d',
        //@parallax
        cursor: 'pointer',
        backgroundColor: BACKGROUND_COLOR,
        height: this.TriangleHeight,
        transform: "translateZ(".concat(zp.title_backgound.translateZ, "px) scale(").concat(zp.title_backgound.scale, ")"),
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid ',
        borderBottomColor: BORDER_COLOR,
        backfaceVisibility: 'hidden' //防止闪烁(flicker)

      }), {
        onClick: this.ToggleFold,
        ref: function ref(c) {
          return _this2._$folder = c;
        },
        className: 'SECTION_HEADER'
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        position: 'absolute',
        fontSize: this.props.is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].vw(9), "vw") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].vw(6), "vw"),
        fontWeight: 100,
        top: this.props.is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].vw(8), "vw") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].vw(5), "vw"),
        left: this.props.is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].vw(4), "vw") : this.props.marginW,
        // artisti - avatar&& description 的marginLeft/marginWidth
        // zIndex:3,
        transform: "skew(0deg,5deg) translateZ(".concat(zp.title.translateZ, "px) scale(").concat(zp.title.scale, ")"),
        backfaceVisibility: 'hidden' //防止闪烁(flicker)
        // 视差
        // transformOrigin: '0 0',
        // transform: 'translateZ(-2px) scale(4)',

      }), this.props.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_8__["css"])({
        // backgroundColor:BACKGROUND_COLOR,
        paddingBottom: "".concat(this.TriangleHeight, "px"),
        // 占位避免下方title覆盖内容
        // 打开时 , 内容下一效果
        transform: this.props.onClose ? "translateY(-".concat(this.TriangleHeight, "px) ") : 'translateY(0px) ',
        height: this.props.onClose ? '1px' : "".concat(this.state.height),
        opacity: this.props.onClose ? 0 : 1,
        // 0.5更好 但关闭时会显示
        pointerEvents: 'none',

        /*
            * transformStyle ,willChange 都会造成内容在动画最后一刻位置刷新,闪烁一下
            * willChange,会使 children 的translateZ效果 会失去
         */
        transformStyle: 'preserve-3d',
        //@parallax
        transition: "all 1s cubic-bezier(0, 0.6, 0, 1)",
        overflowY: this.props.onClose ? 'hidden' : 'unset',
        //消除fold动画时scroll移动, 如果指定了合适的高度,可以只指定 hidden
        backfaceVisibility: 'hidden' //防止闪烁(flicker)

      }), {
        className: 'CONTENT_WARPPER',
        ref: function ref(c) {
          return _this2._$CONTENT = c;
        }
      }), this.props.img ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_img_parallax__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: this.props.img,
        vw: this.props.vw,
        fetch: !this.props.onClose,
        width: vw,
        height: is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].px(2, vw)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_9__["GR"].px(1, vw)),
        fullWidth: true,
        key: "section_head_img_".concat(_keyCtx)
      }) : null, this.props.items.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_section_content__WEBPACK_IMPORTED_MODULE_11__["default"], {
          img: item.img,
          title: item.title,
          content: item.content["".concat(_this2.props.language)],
          marginW: _this2.props.marginW,
          key: _this2._keyCtx + index + _this2.props.name,
          fetch: !_this2.props.onClose,
          className: 'img_&&_content',
          index: index
        });
      }), " "));
    }
  }]);

  return Seczione;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]); // language
// vw
// is_landscape


var mapStateToProps = function mapStateToProps(state, ownProps) {
  var onClose = state.Section[ownProps.name] !== undefined ? state.Section[ownProps.name].onClose : false; // const onClose = state.Section[ownProps.name].onClose

  return {
    vw: state.Root.view_size.vw,
    language: state.Root.language,
    is_landscape: state.Root.view_size.is_landscape,
    RePosTrigger: state.Section.RePosTrigger,
    onClose: onClose,
    onScrollingY: state.Root.scroll.y
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSectionPostionY: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_reducers_section__WEBPACK_IMPORTED_MODULE_14__["setSectionPostionY"], dispatch),
    setClose: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_reducers_section__WEBPACK_IMPORTED_MODULE_14__["setClose"], dispatch)
  };
}; // export default Nav;


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(Seczione)); // {
//   section:'#0',
//   rect:{top:0,left:0,bottom:0,right:0,height:0,width:0},
//   isClose:false,//如果true,可以忽略这个单元请求
//   element:[
//     {name:'#0',rect:{top:0,left:0,bottom:0,right:0,height:0,width:0}},
//     {name:'#1',rect:{top:0,left:0,bottom:0,right:0,height:0,width:0}},
//     {
//         name:'#1',// 索引element,找到element的方式
//         rect:{top:0,left:0,bottom:0,right:0}},
//   ]
// }

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/implementation.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false

})
//# sourceMappingURL=artisti.js.9ec788ef484250fbbc2b.hot-update.js.map