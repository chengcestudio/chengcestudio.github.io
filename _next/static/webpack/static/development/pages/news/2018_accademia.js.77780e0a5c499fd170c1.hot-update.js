webpackHotUpdate("static\\development\\pages\\news\\2018_accademia.js",{

/***/ "./components/nav.contact.js":
/*!***********************************!*\
  !*** ./components/nav.contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg_icons_logo_marca__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/icons_logo_marca */ "./components/svg/icons_logo_marca.js");
/* harmony import */ var _svg_icons_QR_Wechat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/icons_QR_Wechat */ "./components/svg/icons_QR_Wechat.js");
/* harmony import */ var _svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/icons_static_svg */ "./components/svg/icons_static_svg.js");
/* harmony import */ var _svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/icons_social_svg */ "./components/svg/icons_social_svg.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-google-maps */ "./node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global google */





 // import {canGoogle} from'reducers/root'
// import { bindActionCreators } from 'redux'
// import LOGO  from 'components/svg/icons_logo'






var MapWithAMarker = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["withGoogleMap"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["GoogleMap"], {
    defaultZoom: 15,
    defaultCenter: {
      lat: 43.7738564,
      lng: 11.2512034
    },
    defaultOptions: {
      styles: MapStyles
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
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
  _inherits(NavContact, _PureComponent);

  // /*验证客户端是否能访问 google map */
  // static async getInitialProps () {
  //     // eslint-disable-next-line no-undef
  //     const res = await fetch('https://maps.googleapis.com/maps/api/js?key=AIzaSyBQdch5IcgcQaKNG76sbMQv1MEBEKLeQ-8&v=3.exp&libraries=geometry,drawing,places')
  //     if(res.status===200){
  //         return { googlepass: true }
  //     }else{
  //         return { googlepass: false }
  //     }
  //   }
  function NavContact(props) {
    var _this;

    _classCallCheck(this, NavContact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavContact).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickWeichat", function () {
      _this.setState({
        showQr: !_this.state.showQr
      });
    });

    _this.state = {
      showQr: false // this.canGoogle = require(`/maps.googleapis.com/maps/api/js?key=AIzaSyBQdch5IcgcQaKNG76sbMQv1MEBEKLeQ-8&v=3.exp&libraries=geometry,drawing,places`);

    };
    return _this;
  }

  _createClass(NavContact, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // 初始关闭 artisti显示
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].set("#nav_contact", {
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
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].fromTo("#nav_contact", 0.5, {
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
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to("#nav_contact", 0.3, {
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
      var mapWidth = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].px(1, vw)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].px(1, vw));
      var margin_w = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].vw(3)) : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].vw(5)); // const zp = is_landscape?this.Zp.pc:this.Zp.mobile

      var top = is_landscape ? "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].px(4, vh), "px") : "".concat(_utils_ui__WEBPACK_IMPORTED_MODULE_5__["GR"].px(6, vh), "px"); //手机端  nav bg 斜边的高度+margin

      var logoSize = is_landscape ? vw / 20 : vw / 6;
      var google = window.google; // console.log( 'googlepass:',this.props.googlepass )

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '2.5em',
        pointerEvents: 'none'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_logo_marca__WEBPACK_IMPORTED_MODULE_6__["default"], {
        strokeColor: this.state.showQr ? 'none' : _utils_ui__WEBPACK_IMPORTED_MODULE_5__["ui"].color.b_o1,
        size: logoSize
      }), this.state.showQr ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        width: logoSize,
        height: logoSize,
        position: 'absolute',
        margin: 'auto'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_QR_Wechat__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: logoSize
      })) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '1.5em'
      }), "Presidente: Xiuzhong Zhang"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '2em',
        pointerEvents: 'auto'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Twitter"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons",
        onClick: this.clickWeichat
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["WeiChat"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Weibo"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Facebook"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Instagram"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        onClick: function onClick() {
          window.open('//www\.youtube\.com/channel/UCMX1_p6fAUTzN49YXb8rwTA', '_blank' // <- This is what makes it open in a new window.
          );
        },
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Youtube"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1em'
      }), {
        className: "flashIcons"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_social_svg__WEBPACK_IMPORTED_MODULE_9__["Viemo"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '1em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_8__["Mail"], {
        size: 18
      })), "info@zhongart.it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_8__["Phone"], {
        size: 18
      })), "+39  055 268308"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_8__["Mobile"], {
        size: 18
      })), "+39  32721  83721"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        flexDirection: 'row',
        width: '21em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        marginRight: '1.5em'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_icons_static_svg__WEBPACK_IMPORTED_MODULE_8__["Address"], {
        size: 18
      })), "Via del Giglio, 10-50123 ,Firenze, Italia")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_2__["css"])({
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        pointerEvents: 'auto'
      }), google ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapWithAMarker, {
        googleMapURL: "http://maps.google.cn/maps/api/js?key=AIzaSyBQdch5IcgcQaKNG76sbMQv1MEBEKLeQ-8&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        }),
        containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: is_landscape ? '60vh' : "100vw",
            width: is_landscape ? '100vw' : "100vw",
            // marginLeft:`-${margin_w}vw`,//居中
            backgroundColor: 'hsla(0, 0%, 0%, 0)'
          }
        }),
        mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: "100%"
          }
        })
      }) : null));
    }
  }]);

  return NavContact;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

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


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(NavContact));
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

/***/ })

})
//# sourceMappingURL=2018_accademia.js.77780e0a5c499fd170c1.hot-update.js.map