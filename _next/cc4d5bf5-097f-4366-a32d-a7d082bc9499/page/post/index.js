
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports=webpackJsonp([5],{149:function(t,e,r){r(150),t.exports=self.fetch.bind(self)},150:function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function f(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function c(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&w(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(f(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return O.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var r=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function d(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var O=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},c.call(h.prototype),c.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];b.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:d(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},151:function(t,e,r){t.exports={default:r(152),__esModule:!0}},152:function(t,e,r){var n=r(5),o=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},153:function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t){return(0,f.default)(t,o({},y,d))}function a(t){return t&&t[y]===d}function s(t){if(!(0,h.default)(t))throw new TypeError("given propTypes must be an object");if((0,c.default)(t,y)&&!a(t[y]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,f.default)({},t,o({},y,i(function(){function e(e,r,n){var o=Object.keys(e).filter(function(e){return!(0,c.default)(t,e)});return o.length>0?new TypeError(String(n)+": unknown props found: "+String(o.join(", "))):null}return e}())))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var u=r(154),f=n(u),l=r(160),c=n(l),p=r(161),h=n(p),y="prop-types-exact: ​",d={};t.exports=e.default},154:function(t,e,r){"use strict";var n=r(61),o=r(62),i=r(64),a=r(159),s=i();n(s,{implementation:o,getPolyfill:i,shim:a}),t.exports=s},155:function(t,e,r){"use strict";var n=Object.prototype.toString;t.exports=function(t){var e=n.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee)),r}},156:function(t,e){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;t.exports=function(t,e,o){if("[object Function]"!==n.call(e))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var a=0;a<i;a++)e.call(o,t[a],a,t);else for(var s in t)r.call(t,s)&&e.call(o,t[s],s,t)}},157:function(t,e){var r=Array.prototype.slice,n=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==n.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var o,i=r.call(arguments,1),a=function(){if(this instanceof o){var n=e.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}return e.apply(t,i.concat(r.call(arguments)))},s=Math.max(0,e.length-i.length),u=[],f=0;f<s;f++)u.push("$"+f);if(o=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(a),e.prototype){var l=function(){};l.prototype=e.prototype,o.prototype=new l,l.prototype=null}return o}},158:function(t,e,r){"use strict";var n=r(33);t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;t[e]=42;for(e in t)return!1;if(0!==n(t).length)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},159:function(t,e,r){"use strict";var n=r(61),o=r(64);t.exports=function(){var t=o();return n(Object,{assign:t},{assign:function(){return Object.assign!==t}}),t}},160:function(t,e,r){var n=r(63);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},161:function(t,e){function r(t){return t&&"object"===(void 0===t?"undefined":n(t))&&!Array.isArray(t)}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.default=r,t.exports=e.default},33:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Object.prototype.toString,i=Array.prototype.slice,a=r(155),s=Object.prototype.propertyIsEnumerable,u=!s.call({toString:null},"toString"),f=s.call(function(){},"prototype"),l=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},p={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},h=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!p["$"+t]&&n.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{c(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),y=function(t){if("undefined"==typeof window||!h)return c(t);try{return c(t)}catch(t){return!1}},d=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===o.call(t),i=a(t),s=e&&"[object String]"===o.call(t),c=[];if(!e&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var p=f&&r;if(s&&t.length>0&&!n.call(t,0))for(var h=0;h<t.length;++h)c.push(String(h));if(i&&t.length>0)for(var d=0;d<t.length;++d)c.push(String(d));else for(var b in t)p&&"prototype"===b||!n.call(t,b)||c.push(String(b));if(u)for(var m=y(t),v=0;v<l.length;++v)m&&"constructor"===l[v]||!n.call(t,l[v])||c.push(l[v]);return c};d.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return t(a(e)?i.call(e):e)}}}else Object.keys=d;return Object.keys||d},t.exports=d},397:function(t,e,r){t.exports=r(398)},398:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(34),i=n(o),a=r(43),s=n(a),u=r(37),f=n(u),l=r(16),c=n(l),p=r(7),h=n(p),y=r(8),d=n(y),b=r(17),m=n(b),v=r(18),w=n(v),g=r(6),O=n(g),j=r(84),_=n(j),x=r(126),E=n(x),S=r(149),T=n(S),P=function(t){function e(){return(0,h.default)(this,e),(0,m.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,w.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){return O.default.createElement("main",null,O.default.createElement(E.default,null,O.default.createElement("title",null,this.props.title)),O.default.createElement("h1",null,this.props.title),O.default.createElement("p",null,this.props.body),O.default.createElement(_.default,{href:"/"},O.default.createElement("a",null,"Go back to home")))}}],[{key:"getInitialProps",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,f.default)(i.default.mark(function t(e){var r,n,o=e.query;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,T.default)("http://jsonplaceholder.typicode.com/posts/"+o.id);case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",(0,s.default)({},n));case 7:case"end":return t.stop()}},t,this)}));return t}()}]),e}(g.Component);e.default=P},61:function(t,e,r){"use strict";var n=r(33),o=r(156),i="function"==typeof Symbol&&"symbol"==typeof Symbol(),a=Object.prototype.toString,s=function(t){return"function"==typeof t&&"[object Function]"===a.call(t)},u=Object.defineProperty&&function(){var t={};try{Object.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(t){return!1}}(),f=function(t,e,r,n){(!(e in t)||s(n)&&n())&&(u?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},l=function(t,e){var r=arguments.length>2?arguments[2]:{},a=n(e);i&&(a=a.concat(Object.getOwnPropertySymbols(e))),o(a,function(n){f(t,n,e[n],r[n])})};l.supportsDescriptors=!!u,t.exports=l},62:function(t,e,r){"use strict";var n=r(33),o=r(63),i=function(t){return void 0!==t&&null!==t},a=r(158)(),s=Object,u=o.call(Function.call,Array.prototype.push),f=o.call(Function.call,Object.prototype.propertyIsEnumerable),l=a?Object.getOwnPropertySymbols:null;t.exports=function(t,e){if(!i(t))throw new TypeError("target must be an object");var r,o,c,p,h,y,d,b=s(t);for(r=1;r<arguments.length;++r){o=s(arguments[r]),p=n(o);var m=a&&(Object.getOwnPropertySymbols||l);if(m)for(h=m(o),c=0;c<h.length;++c)d=h[c],f(o,d)&&u(p,d);for(c=0;c<p.length;++c)d=p[c],y=o[d],f(o,d)&&(b[d]=y)}return b}},63:function(t,e,r){var n=r(157);t.exports=Function.prototype.bind||n},64:function(t,e,r){"use strict";var n=r(62),o=function(){if(!Object.assign)return!1;for(var t="abcdefghijklmnopqrst",e=t.split(""),r={},n=0;n<e.length;++n)r[e[n]]=e[n];var o=Object.assign({},r),i="";for(var a in o)i+=a;return t!==i},i=function(){if(!Object.assign||!Object.preventExtensions)return!1;var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}return!1};t.exports=function(){return Object.assign?o()?n:i()?n:Object.assign:n}},84:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=(0,w.parse)(t,!1,!0),r=(0,w.parse)((0,P.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===r.protocol&&e.host===r.host}Object.defineProperty(e,"__esModule",{value:!0});var i=r(57),a=n(i),s=r(151),u=n(s),f=r(16),l=n(f),c=r(7),p=n(c),h=r(8),y=n(h),d=r(17),b=n(d),m=r(18),v=n(m),w=r(124),g=r(6),O=n(g),j=r(58),_=n(j),x=r(153),E=n(x),S=r(79),T=n(S),P=r(44),A=function(t){function e(t){var r;(0,p.default)(this,e);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var a=(0,b.default)(this,(r=e.__proto__||(0,l.default)(e)).call.apply(r,[this,t].concat(o)));return a.linkClicked=a.linkClicked.bind(a),a.formatUrls(t),a}return(0,v.default)(e,t),(0,y.default)(e,[{key:"componentWillReceiveProps",value:function(t){this.formatUrls(t)}},{key:"linkClicked",value:function(t){var e=this;if("A"!==t.currentTarget.nodeName||!(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var r=this.props.shallow,n=this.href,i=this.as;if(o(n)){var a=window.location.pathname;n=(0,w.resolve)(a,n),i=i?(0,w.resolve)(a,i):n,t.preventDefault();var s=this.props.scroll;null==s&&(s=i.indexOf("#")<0);var u=this.props.replace,f=u?"replace":"push";T.default[f](n,i,{shallow:r}).then(function(t){t&&s&&window.scrollTo(0,0)}).catch(function(t){e.props.onError&&e.props.onError(t)})}}}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var t=window.location.pathname,e=(0,w.resolve)(t,this.href);T.default.prefetch(e)}}},{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,w.format)(t.href):t.href,this.as=t.as&&"object"===(0,a.default)(t.as)?(0,w.format)(t.as):t.as}},{key:"render",value:function(){var t=this.props.children,e=this.href,r=this.as;"string"==typeof t&&(t=O.default.createElement("a",null,t));var n=g.Children.only(t),o={onClick:this.linkClicked};return!this.props.passHref&&("a"!==n.type||"href"in n.props)||(o.href=r||e),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,S._rewriteUrlForNextExport)(o.href)),O.default.cloneElement(n,o)}}]),e}(g.Component);A.propTypes=(0,E.default)({href:_.default.oneOfType([_.default.string,_.default.object]),as:_.default.oneOfType([_.default.string,_.default.object]),prefetch:_.default.bool,replace:_.default.bool,shallow:_.default.bool,passHref:_.default.bool,children:_.default.oneOfType([_.default.element,function(t,e){return"string"==typeof t[e]&&k("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>"),null}]).isRequired}),e.default=A;var k=(0,P.execOnce)(P.warn)}},[397]);
            return { page: comp.default }
          })
        