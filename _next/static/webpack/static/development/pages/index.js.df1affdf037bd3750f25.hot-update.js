webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/aboutBackGround.js":
/*!***************************************!*\
  !*** ./components/aboutBackGround.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! glamor */ "./node_modules/glamor/lib/index.js");
/* harmony import */ var glamor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(glamor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ui */ "./utils/ui.js");
/* harmony import */ var _utils_ui__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_ui__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _about_it_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about.it.md */ "./components/about.it.md");
/* harmony import */ var _about_cn_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about.cn.md */ "./components/about.cn.md");
/* harmony import */ var _about_en_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about.en.md */ "./components/about.en.md");
/* harmony import */ var _reducers_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers/nav */ "./reducers/nav.js");












 // import {setFocusOn} from'reducers/artisti.tabs'






var Shape = function Shape(props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
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
    background: props.color || _utils_ui__WEBPACK_IMPORTED_MODULE_8__["ui"].color.w_o2,
    width: "".concat(props.width || 1400, "px"),
    height: "".concat(props.height || 1400, "px")
  }), {
    className: 'aboutBG'
  }));
};

var AboutBG =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AboutBG, _PureComponent);

  function AboutBG(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutBG);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AboutBG).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutBG, [{
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
      gsap__WEBPACK_IMPORTED_MODULE_9__["TweenMax"].staggerTo(".aboutBG", 0.5, {
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
      gsap__WEBPACK_IMPORTED_MODULE_9__["TweenMax"].staggerTo(".aboutBG", 0.3, {
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
        position: 'fixed',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Shape, {
        width: vw,
        height: vh
      }), this.props.showAbout ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(glamor__WEBPACK_IMPORTED_MODULE_7__["css"])({
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
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]); //aboutInfo[`en`]
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
    setPanelOn: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(_reducers_nav__WEBPACK_IMPORTED_MODULE_15__["setPanelOn"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(AboutBG));
var aboutInfo = {
  //   "it": "Fondata nel 2017 la Zhong Art International è un’agenzia che opera nel campo dell'Arte e delle Attività Culturali. La Mission consiste nell’organizzare di mostre d’arte ed eventi. Abbiamo la parternship con Enti ed Istituzioni, tra cui il Ministero della Cultura cinese, i Consolati e le Ambasciate in Cina in Italia e siamo impegnati inoltre a favorire scambi culturali tra Università ed Accademie, Musei statali e privati. Essa è fortemente radicata nel territorio fiorentino e a Beijing, ed offre un ventaglio di servizi completo. Un team di professionisti al tuo fianco per assicurare qualità, serietà e risultati. \n\nPartendo da quelle che sono le esigenze ed i desideri del cliente siamo in grado di progettare, organizzare e realizzare Mostre ed Eventi di alto profilo scientifico, con elevata creatività ed esperienza professionale, offrendo servizi e consulenze su misura per ogni occasione.\nOltre all’organizzazione di mostre temporanee, ci dedichiamo alla realizzazione di tutte quelle attività che possano creare un ponte culturale tra Italia e Cina e favorire rapporti di scambio tra Enti ed Istituti dei due Paesi, progetti e collaborazioni che uniscono realtà che hanno come fondamento l’Arte e la Cultura.\nCrediamo che l’arte sia un mezzo di comunicazione efficace ed immediato, in grado di superare ogni difficoltà e barriere linguistiche, di stimolare, incuriosire e far conoscere nuove realtà.",
  "it": react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_about_it_md__WEBPACK_IMPORTED_MODULE_12__["default"], null),
  "zh": react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_about_cn_md__WEBPACK_IMPORTED_MODULE_13__["default"], null),
  "en": react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_about_en_md__WEBPACK_IMPORTED_MODULE_14__["default"], null)
};

/***/ })

})
//# sourceMappingURL=index.js.df1affdf037bd3750f25.hot-update.js.map