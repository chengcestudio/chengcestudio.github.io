webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/aboutBackGround.js":
/*!***************************************!*\
  !*** ./components/aboutBackGround.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _about_it_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.it.md */ "./components/about.it.md");
/* harmony import */ var _reducers_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/nav */ "./reducers/nav.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






 // import {setFocusOn} from'reducers/artisti.tabs'




var Shape = function Shape(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(glamor__WEBPACK_IMPORTED_MODULE_1__["css"])({
    /*初始值*/
    opacity: 0,
    visibility: 'hidden',
    // transform: 'scale(0) translate(-50%, -50%)',
    transform: 'scale(0)',

    /*初始值*/

    /*center*/
    zIndex: 10,
    position: 'absolute',

    /*center*/
    left: 0,
    right: 0,
    background: props.color || _utils_ui__WEBPACK_IMPORTED_MODULE_2__["ui"].color.w_o2,
    width: "".concat(props.width || 1400, "px"),
    height: "".concat(props.height || 1400, "px")
  }), {
    className: 'aboutBG'
  }));
};

var AboutBG =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AboutBG, _PureComponent);

  function AboutBG(props) {
    _classCallCheck(this, AboutBG);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutBG).call(this, props));
  }

  _createClass(AboutBG, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // this.close();
    // 两个数之间的随机值

  }, {
    key: "getRandomInt",
    value: function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
    /*
                // ease: Power4.easeOut,
                  // ease: Elastic.easeOut.config(1, 0.3),
                   ease:Back.easeOut.config(2),
                  // ease: Elastic.easeOut.config(1, 0.3),
                  ease: Back.easeIn.config(2)
       */

  }, {
    key: "toInfo",
    value: function toInfo() {
      var rot_value = this.props.landscape ? 500 : -122; // console.log(`toInfo_${rot_value}`)

      this.props.setPanelOn('show');
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].staggerTo(".aboutBG", 0.5, {
        scale: 1,
        rotationZ: rot_value,
        transformOrigin: "center center",
        ease: Power4.easeOut,
        autoAlpha: 1 //opacity:0,visibility:'hidden'

      }, 0.06);
    }
  }, {
    key: "toLogo",
    value: function toLogo() {
      var rot_value = this.getRandomInt(-360, 360); // console.log(`toLogo_${rot_value}`)

      this.props.setPanelOn('close');
      gsap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].staggerTo(".aboutBG", 0.3, {
        scale: 0.1,
        rotationZ: rot_value,
        transformOrigin: "center center",
        // ease: Power4.easeOut,
        autoAlpha: 0 //opacity:0,visibility:'hidden'

      }, 0.06);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.showAbout !== this.props.showAbout) {
        if (nextProps.showAbout === false) {
          this.toLogo();
        } else {
          this.toInfo();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          landscape = _this$props.landscape,
          vw = _this$props.vw,
          vh = _this$props.vh;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_1__["css"])({
        position: 'fixed',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), this.props.showAbout ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_1__["css"])({
        // fontSize:'14px',
        position: 'relative',
        zIndex: 13,
        width: landscape ? "45vw" : "80vw",
        overflowY: 'auto',
        maxHeight: landscape ? '58vh' : '58vh',
        fontSize: '0.8em' // height:'100vh',
        // zIndex:10,

      }), aboutInfo["".concat(this.props.language)]) : null);
      /*return*/
    }
    /*render*/

  }]);

  return AboutBG;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]); //aboutInfo[`en`]
//aboutInfo[`${this.props.language}`]


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
    setPanelOn: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_reducers_nav__WEBPACK_IMPORTED_MODULE_7__["setPanelOn"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(AboutBG));
var aboutInfo = {
  //   "it": "Fondata nel 2017 la Zhong Art International è un’agenzia che opera nel campo dell'Arte e delle Attività Culturali. La Mission consiste nell’organizzare di mostre d’arte ed eventi. Abbiamo la parternship con Enti ed Istituzioni, tra cui il Ministero della Cultura cinese, i Consolati e le Ambasciate in Cina in Italia e siamo impegnati inoltre a favorire scambi culturali tra Università ed Accademie, Musei statali e privati. Essa è fortemente radicata nel territorio fiorentino e a Beijing, ed offre un ventaglio di servizi completo. Un team di professionisti al tuo fianco per assicurare qualità, serietà e risultati. \n\nPartendo da quelle che sono le esigenze ed i desideri del cliente siamo in grado di progettare, organizzare e realizzare Mostre ed Eventi di alto profilo scientifico, con elevata creatività ed esperienza professionale, offrendo servizi e consulenze su misura per ogni occasione.\nOltre all’organizzazione di mostre temporanee, ci dedichiamo alla realizzazione di tutte quelle attività che possano creare un ponte culturale tra Italia e Cina e favorire rapporti di scambio tra Enti ed Istituti dei due Paesi, progetti e collaborazioni che uniscono realtà che hanno come fondamento l’Arte e la Cultura.\nCrediamo che l’arte sia un mezzo di comunicazione efficace ed immediato, in grado di superare ogni difficoltà e barriere linguistiche, di stimolare, incuriosire e far conoscere nuove realtà.",
  "it": react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_about_it_md__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  "zh": "中艺国际是一个位于意大利佛罗伦萨的国际性艺术与文化交流机构。\n成立于2017年，在中国北京和意大利佛罗伦萨均有办事机构，我们的宗旨是为中国和意大利两国提供文化领域的交流与合作，通过积极为两国的艺术机构之间和艺术家之间策划展览和艺术家之间的学术交流活动，推动促进两国文化积极友好的发展。\n我们与意大利很多国家级的很多重要文化机构如文化部、大使馆等都有长期项目往来，与一些艺术类高等院校如罗马美术学院、佛罗伦萨大学美术学院、欧洲设计学院等都有校际合作关系。\n我们为专业人士提供专业性对接交流，旨在为中国和意大利两国的艺术发展建立文化沟通的桥梁。\n",
  "en": " Zhong Art International is a reality based in Italy and China, which operates in the field of Arts and Cultural Activities Italy-China. Our main activity is organizing art exhibitions and cultural events. We have parternships with Entities and Institutions, including the Chinese Ministry of Culture, Consulates and Embassies both in China and in Italy, as well as cultural exchanges between Universities and Academies, State and Private Museums, and the most important artistic organization of the country.\nIn addition to exhibitions, we are dedicated to the realization of all those activities that can create a cultural bridge between Italy and China: for example, we work to create new and lasting exchanges between institutions and institutes of the two countries, projects and collaborations that combine similar realities the basis of Art and Culture.\nThe root of our work, the will that drives our whole business, is the commitment to create a strong link between two ancient cultures—China and Italy. We believe that art is the most effective and immediate ways of communication, the only one able to overcome every difficulty and language barriers. Our purpose today is to stimulate the culture’s vitality, to excite our curiosity and to create some new meaningful activities,  and we hope that in the future we can make a prosperous world for our next generation.\nStarting from the demands of our customers, we are able to organize quality events with high creativity and professional experience, offering customized services and practical consultations for every occasions.\nFounded in 2017, Zhong Art International, a highly organized event agency in the Florence and Beijing areas, offers a full range of services.We are the propagators of Chinese art and culture, we strive to promote them to be duly appreciated in Italy. A team of professionals beside you to ensure the quality, reliability and results. "
};

/***/ })

})
//# sourceMappingURL=index.js.1df55149bf3278315adb.hot-update.js.map