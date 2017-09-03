
          window.__NEXT_REGISTER_PAGE('/_error', function() {
            var comp = module.exports=webpackJsonp([10],{405:function(e,t,r){e.exports=r(406)},406:function(e,t,r){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),o=u(n),s=r(2),a=u(s),l=r(3),d=u(l),f=r(8),i=u(f),c=r(9),p=u(c),_=r(1),v=u(_),h=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return v.default.createElement("p",null,this.props.statusCode?"An error "+this.props.statusCode+" occurred on server":"An error occurred on client")}}],[{key:"getInitialProps",value:function(e){var t=e.res,r=e.jsonPageRes;return{statusCode:t?t.statusCode:r?r.status:null}}}]),t}(v.default.Component);t.default=h}},[405]);
            return { page: comp.default }
          })
        