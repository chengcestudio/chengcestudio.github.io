
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports=webpackJsonp([11],{28:function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noWarn,r=void 0!==n&&n,o=t.createElement,i=void 0===o||o,a=function(t){function n(){var e,t,o,i;R(this,n);for(var a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];return t=o=_(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),o.warned=r,o.state={theme:{}},o.setTheme=function(e){return o.setState({theme:e})},i=t,_(o,i)}return G(n,t),N(n,[{key:"componentWillMount",value:function(){this.context[L];var e=this.props.theme;this.context[L]?this.setTheme(e||this.context[L].getState()):this.setTheme(e||{})}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)}},{key:"componentDidMount",value:function(){this.context[L]&&!this.props.theme&&(this.subscriptionId=this.context[L].subscribe(this.setTheme))}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[L].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return i?P.a.createElement(e,I({},this.props,this.state)):e.call(this,I({},this.props,this.state),this.context)}}]),n}(P.a.Component);a.propTypes={theme:j.object};var u=B({},L,j.object),c=null;return Object.defineProperty(a,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){c=e},get:function(){return c?I({},u,c):u}}),a}function o(e){var t=q.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return!0===W(e)&&"[object Object]"===Object.prototype.toString.call(e)}function a(e){function t(){return u}function n(e){u=e;for(var t=Object.keys(i),n=0,r=t.length;n<r;n++)i[t[n]]&&i[t[n]](e)}function r(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=a;return i[t]=e,a+=1,t}function o(e){i[e]=void 0}var i={},a=1,u=e;return{getState:t,setState:n,subscribe:r,unsubscribe:o}}function u(e){var t=[],n=[];return e.toString().split(" ").forEach(function(e){if(0===e.indexOf("css-")){var r=c(e);n.push(r)}else t.push(e)}),{glamorlessClassName:t,glamorStyles:n}}function c(e){return B({},"data-"+e,"")}function s(e){var t=e.styles,n=e.props,r=e.cssOverrides,o=e.cssProp,i=e.context,a=(e.displayName,l([].concat(U(t),[n.className,r,o]),n,i)),u=a.mappedArgs,c=a.nonGlamorClassNames;return(O.css.apply(void 0,[null].concat(U(u))).toString()+" "+c.join(" ").trim()).trim()}function l(e,t,n){for(var r=void 0,o=[],i=[],a=0;a<e.length;a++)if("function"==typeof(r=e[a])){var c=r(t,n);if("string"==typeof c){var s=u(c),d=s.glamorStyles,f=s.glamorlessClassName;o.push.apply(o,U(d)),i.push.apply(i,U(f))}else o.push(c)}else if("string"==typeof r){var p=u(r),h=p.glamorStyles,m=p.glamorlessClassName;o.push.apply(o,U(h)),i.push.apply(i,U(m))}else if(Array.isArray(r)){var g=l(r,t,n);o.push.apply(o,U(g.mappedArgs)),i.push.apply(i,U(g.nonGlamorClassNames))}else o.push(r);return{mappedArgs:o,nonGlamorClassNames:i}}function d(e,t,n,r){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,n),r)):Array.isArray(e)?Object.assign(t,d(e,t,n,r)):Object.assign(t,e)}),Object.assign(t,n)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function p(e,t){return e?e.concat(t):t}function h(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function m(e,t){var n=t&&t.cache?t.cache:X,r=t&&t.serializer?t.serializer:T;return(t&&t.strategy?t.strategy:C)(e,{cache:n,serializer:r})}function g(e){return null==e||"function"!=typeof e&&"object"!=typeof e}function y(e,t,n,r){var o=g(r)?r:n(r);if(!t.has(o)){var i=e.call(this,r);return t.set(o,i),i}return t.get(o)}function b(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r);if(!t.has(o)){var i=e.apply(this,r);return t.set(o,i),i}return t.get(o)}function v(e,t,n,r,o){return n.bind(t,e,r,o)}function C(e,t){return v(e,this,1===e.length?y:b,t.cache.create(),t.serializer)}function F(e,t){return v(e,this,b,t.cache.create(),t.serializer)}function k(e,t){return v(e,this,y,t.cache.create(),t.serializer)}function T(){return JSON.stringify(arguments)}function x(){this.cache=Object.create(null)}function S(e,t){var n=t.propsAreCssOverrides,r=t.rootEl,o=t.filterProps,i=t.forwardProps,a=e.css,u=(e.theme,e.className,e.innerRef,e.glam,H(e,["css","theme","className","innerRef","glam"])),c={toForward:{},cssProp:a,cssOverrides:{}};return n||"string"==typeof r||0!==o.length?Object.keys(u).reduce(function(e,t){return-1!==o.indexOf(t)?e:(-1!==i.indexOf(t)||Ct(r,t)?e.toForward[t]=u[t]:n&&(e.cssOverrides[t]=u[t]),e)},c):(c.toForward=u,c)}function w(e){return e.slice(0,1).toUpperCase()+e.slice(1)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"ThemeProvider",function(){return K}),n.d(t,"withTheme",function(){return r}),n.d(t,"A",function(){return kt}),n.d(t,"Abbr",function(){return Tt}),n.d(t,"Acronym",function(){return xt}),n.d(t,"Address",function(){return St}),n.d(t,"Applet",function(){return wt}),n.d(t,"Area",function(){return Mt}),n.d(t,"Article",function(){return Pt}),n.d(t,"Aside",function(){return Ot}),n.d(t,"Audio",function(){return At}),n.d(t,"B",function(){return Dt}),n.d(t,"Base",function(){return Et}),n.d(t,"Basefont",function(){return Lt}),n.d(t,"Bdi",function(){return jt}),n.d(t,"Bdo",function(){return Rt}),n.d(t,"Bgsound",function(){return Nt}),n.d(t,"Big",function(){return Bt}),n.d(t,"Blink",function(){return It}),n.d(t,"Blockquote",function(){return Gt}),n.d(t,"Body",function(){return Ht}),n.d(t,"Br",function(){return _t}),n.d(t,"Button",function(){return Ut}),n.d(t,"Canvas",function(){return zt}),n.d(t,"Caption",function(){return qt}),n.d(t,"Center",function(){return Wt}),n.d(t,"Cite",function(){return Vt}),n.d(t,"Code",function(){return Kt}),n.d(t,"Col",function(){return Xt}),n.d(t,"Colgroup",function(){return Yt}),n.d(t,"Command",function(){return Jt}),n.d(t,"Content",function(){return Qt}),n.d(t,"Data",function(){return Zt}),n.d(t,"Datalist",function(){return $t}),n.d(t,"Dd",function(){return en}),n.d(t,"Del",function(){return tn}),n.d(t,"Details",function(){return nn}),n.d(t,"Dfn",function(){return rn}),n.d(t,"Dialog",function(){return on}),n.d(t,"Dir",function(){return an}),n.d(t,"Div",function(){return un}),n.d(t,"Dl",function(){return cn}),n.d(t,"Dt",function(){return sn}),n.d(t,"Element",function(){return ln}),n.d(t,"Em",function(){return dn}),n.d(t,"Embed",function(){return fn}),n.d(t,"Fieldset",function(){return pn}),n.d(t,"Figcaption",function(){return hn}),n.d(t,"Figure",function(){return mn}),n.d(t,"Font",function(){return gn}),n.d(t,"Footer",function(){return yn}),n.d(t,"Form",function(){return bn}),n.d(t,"Frame",function(){return vn}),n.d(t,"Frameset",function(){return Cn}),n.d(t,"H1",function(){return Fn}),n.d(t,"H2",function(){return kn}),n.d(t,"H3",function(){return Tn}),n.d(t,"H4",function(){return xn}),n.d(t,"H5",function(){return Sn}),n.d(t,"H6",function(){return wn}),n.d(t,"Head",function(){return Mn}),n.d(t,"Header",function(){return Pn}),n.d(t,"Hgroup",function(){return On}),n.d(t,"Hr",function(){return An}),n.d(t,"Html",function(){return Dn}),n.d(t,"I",function(){return En}),n.d(t,"Iframe",function(){return Ln}),n.d(t,"Image",function(){return jn}),n.d(t,"Img",function(){return Rn}),n.d(t,"Input",function(){return Nn}),n.d(t,"Ins",function(){return Bn}),n.d(t,"Isindex",function(){return In}),n.d(t,"Kbd",function(){return Gn}),n.d(t,"Keygen",function(){return Hn}),n.d(t,"Label",function(){return _n}),n.d(t,"Legend",function(){return Un}),n.d(t,"Li",function(){return zn}),n.d(t,"Link",function(){return qn}),n.d(t,"Listing",function(){return Wn}),n.d(t,"Main",function(){return Vn}),n.d(t,"MapTag",function(){return Kn}),n.d(t,"Mark",function(){return Xn}),n.d(t,"Marquee",function(){return Yn}),n.d(t,"MathTag",function(){return Jn}),n.d(t,"Menu",function(){return Qn}),n.d(t,"Menuitem",function(){return Zn}),n.d(t,"Meta",function(){return $n}),n.d(t,"Meter",function(){return er}),n.d(t,"Multicol",function(){return tr}),n.d(t,"Nav",function(){return nr}),n.d(t,"Nextid",function(){return rr}),n.d(t,"Nobr",function(){return or}),n.d(t,"Noembed",function(){return ir}),n.d(t,"Noframes",function(){return ar}),n.d(t,"Noscript",function(){return ur}),n.d(t,"ObjectTag",function(){return cr}),n.d(t,"Ol",function(){return sr}),n.d(t,"Optgroup",function(){return lr}),n.d(t,"Option",function(){return dr}),n.d(t,"Output",function(){return fr}),n.d(t,"P",function(){return pr}),n.d(t,"Param",function(){return hr}),n.d(t,"Picture",function(){return mr}),n.d(t,"Plaintext",function(){return gr}),n.d(t,"Pre",function(){return yr}),n.d(t,"Progress",function(){return br}),n.d(t,"Q",function(){return vr}),n.d(t,"Rb",function(){return Cr}),n.d(t,"Rbc",function(){return Fr}),n.d(t,"Rp",function(){return kr}),n.d(t,"Rt",function(){return Tr}),n.d(t,"Rtc",function(){return xr}),n.d(t,"Ruby",function(){return Sr}),n.d(t,"S",function(){return wr}),n.d(t,"Samp",function(){return Mr}),n.d(t,"Script",function(){return Pr}),n.d(t,"Section",function(){return Or}),n.d(t,"Select",function(){return Ar}),n.d(t,"Shadow",function(){return Dr}),n.d(t,"Slot",function(){return Er}),n.d(t,"Small",function(){return Lr}),n.d(t,"Source",function(){return jr}),n.d(t,"Spacer",function(){return Rr}),n.d(t,"Span",function(){return Nr}),n.d(t,"Strike",function(){return Br}),n.d(t,"Strong",function(){return Ir}),n.d(t,"Style",function(){return Gr}),n.d(t,"Sub",function(){return Hr}),n.d(t,"Summary",function(){return _r}),n.d(t,"Sup",function(){return Ur}),n.d(t,"Svg",function(){return zr}),n.d(t,"Table",function(){return qr}),n.d(t,"Tbody",function(){return Wr}),n.d(t,"Td",function(){return Vr}),n.d(t,"Template",function(){return Kr}),n.d(t,"Textarea",function(){return Xr}),n.d(t,"Tfoot",function(){return Yr}),n.d(t,"Th",function(){return Jr}),n.d(t,"Thead",function(){return Qr}),n.d(t,"Time",function(){return Zr}),n.d(t,"Title",function(){return $r}),n.d(t,"Tr",function(){return eo}),n.d(t,"Track",function(){return to}),n.d(t,"Tt",function(){return no}),n.d(t,"U",function(){return ro}),n.d(t,"Ul",function(){return oo}),n.d(t,"Var",function(){return io}),n.d(t,"Video",function(){return ao}),n.d(t,"Wbr",function(){return uo}),n.d(t,"Xmp",function(){return co}),n.d(t,"AltGlyph",function(){return so}),n.d(t,"AltGlyphDef",function(){return lo}),n.d(t,"AltGlyphItem",function(){return fo}),n.d(t,"Animate",function(){return po}),n.d(t,"AnimateColor",function(){return ho}),n.d(t,"AnimateMotion",function(){return mo}),n.d(t,"AnimateTransform",function(){return go}),n.d(t,"Animation",function(){return yo}),n.d(t,"Circle",function(){return bo}),n.d(t,"ClipPath",function(){return vo}),n.d(t,"ColorProfile",function(){return Co}),n.d(t,"Cursor",function(){return Fo}),n.d(t,"Defs",function(){return ko}),n.d(t,"Desc",function(){return To}),n.d(t,"Discard",function(){return xo}),n.d(t,"Ellipse",function(){return So}),n.d(t,"FeBlend",function(){return wo}),n.d(t,"FeColorMatrix",function(){return Mo}),n.d(t,"FeComponentTransfer",function(){return Po}),n.d(t,"FeComposite",function(){return Oo}),n.d(t,"FeConvolveMatrix",function(){return Ao}),n.d(t,"FeDiffuseLighting",function(){return Do}),n.d(t,"FeDisplacementMap",function(){return Eo}),n.d(t,"FeDistantLight",function(){return Lo}),n.d(t,"FeDropShadow",function(){return jo}),n.d(t,"FeFlood",function(){return Ro}),n.d(t,"FeFuncA",function(){return No}),n.d(t,"FeFuncB",function(){return Bo}),n.d(t,"FeFuncG",function(){return Io}),n.d(t,"FeFuncR",function(){return Go}),n.d(t,"FeGaussianBlur",function(){return Ho}),n.d(t,"FeImage",function(){return _o}),n.d(t,"FeMerge",function(){return Uo}),n.d(t,"FeMergeNode",function(){return zo}),n.d(t,"FeMorphology",function(){return qo}),n.d(t,"FeOffset",function(){return Wo}),n.d(t,"FePointLight",function(){return Vo}),n.d(t,"FeSpecularLighting",function(){return Ko}),n.d(t,"FeSpotLight",function(){return Xo}),n.d(t,"FeTile",function(){return Yo}),n.d(t,"FeTurbulence",function(){return Jo}),n.d(t,"Filter",function(){return Qo}),n.d(t,"FontFace",function(){return Zo}),n.d(t,"FontFaceFormat",function(){return $o}),n.d(t,"FontFaceName",function(){return ei}),n.d(t,"FontFaceSrc",function(){return ti}),n.d(t,"FontFaceUri",function(){return ni}),n.d(t,"ForeignObject",function(){return ri}),n.d(t,"G",function(){return oi});n.d(t,"Glyph",function(){return ii}),n.d(t,"GlyphRef",function(){return ai}),n.d(t,"Handler",function(){return ui}),n.d(t,"Hatch",function(){return ci}),n.d(t,"Hatchpath",function(){return si}),n.d(t,"Hkern",function(){return li}),n.d(t,"Line",function(){return di}),n.d(t,"LinearGradient",function(){return fi}),n.d(t,"Listener",function(){return pi}),n.d(t,"Marker",function(){return hi}),n.d(t,"Mask",function(){return mi}),n.d(t,"Mesh",function(){return gi}),n.d(t,"Meshgradient",function(){return yi}),n.d(t,"Meshpatch",function(){return bi}),n.d(t,"Meshrow",function(){return vi}),n.d(t,"Metadata",function(){return Ci}),n.d(t,"MissingGlyph",function(){return Fi}),n.d(t,"Mpath",function(){return ki}),n.d(t,"Path",function(){return Ti}),n.d(t,"Pattern",function(){return xi}),n.d(t,"Polygon",function(){return Si}),n.d(t,"Polyline",function(){return wi}),n.d(t,"Prefetch",function(){return Mi}),n.d(t,"RadialGradient",function(){return Pi}),n.d(t,"Rect",function(){return Oi}),n.d(t,"SetTag",function(){return Ai}),n.d(t,"SolidColor",function(){return Di}),n.d(t,"Solidcolor",function(){return Ei}),n.d(t,"Stop",function(){return Li}),n.d(t,"Switch",function(){return ji}),n.d(t,"SymbolTag",function(){return Ri}),n.d(t,"Tbreak",function(){return Ni}),n.d(t,"Text",function(){return Bi}),n.d(t,"TextArea",function(){return Ii}),n.d(t,"TextPath",function(){return Gi}),n.d(t,"Tref",function(){return Hi}),n.d(t,"Tspan",function(){return _i}),n.d(t,"Unknown",function(){return Ui}),n.d(t,"Use",function(){return zi}),n.d(t,"View",function(){return qi}),n.d(t,"Vkern",function(){return Wi});var M=n(0),P=n.n(M),O=n(7),A=(n.n(O),["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]),D=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],E=A.concat(D).filter(function(e,t,n){return n.indexOf(e)===t}),L="__glamorous__",j=void 0;if(parseFloat(P.a.version.slice(0,4))>=15.5)try{j=n(13)}catch(e){}j=j||P.a.PropTypes;var R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},z=o,q=Object.prototype.toString,W=function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)},V=function(e){var t,n;return!1!==i(e)&&("function"==typeof(t=e.constructor)&&(n=t.prototype,!1!==i(n)&&!1!==n.hasOwnProperty("isPrototypeOf")))},K=function(e){function t(){var e,n,r,o;R(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=r=_(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.broadcast=a(r.props.theme),r.setOuterTheme=function(e){r.outerTheme=e},o=n,_(r,o)}return G(t,e),N(t,[{key:"getTheme",value:function(e){var t=e||this.props.theme;if(z(t)){var n=t(this.outerTheme);if(!V(n))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return n}return I({},this.outerTheme,t)}},{key:"getChildContext",value:function(){return B({},L,this.broadcast)}},{key:"componentDidMount",value:function(){this.context[L]&&(this.subscriptionId=this.context[L].subscribe(this.setOuterTheme))}},{key:"componentWillMount",value:function(){this.context[L]&&(this.setOuterTheme(this.context[L].getState()),this.broadcast.setState(this.getTheme()))}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.broadcast.setState(this.getTheme(e.theme))}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[L].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return this.props.children?P.a.Children.only(this.props.children):null}}]),t}(P.a.Component);K.childContextTypes=B({},L,j.object.isRequired),K.contextTypes=B({},L,j.object),K.propTypes={theme:j.oneOfType([j.object,j.func]).isRequired,children:j.node},x.prototype.has=function(e){return e in this.cache},x.prototype.get=function(e){return this.cache[e]},x.prototype.set=function(e,t){this.cache[e]=t};var X={create:function(){return new x}},Y=m,J={variadic:F,monadic:k};Y.strategies=J;var Q=["coords","download","href","name","rel","shape","target","type"],Z=["title"],$=["alt","height","name","width"],ee=["alt","coords","download","href","rel","shape","target","type"],te=["controls","loop","muted","preload","src"],ne=["href","target"],re=["size"],oe=["dir"],ie=["cite"],ae=["disabled","form","name","type","value"],ue=["height","width"],ce=["span","width"],se=["span","width"],le=["value"],de=["cite"],fe=["open"],pe=["title"],he=["open"],me=["height","src","type","width"],ge=["disabled","form","name"],ye=["size"],be=["accept","action","method","name","target"],ve=["name","scrolling","src"],Ce=["cols","rows"],Fe=["profile"],ke=["size","width"],Te=["manifest"],xe=["height","name","sandbox","scrolling","src","width"],Se=["alt","height","name","sizes","src","width"],we=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],Me=["cite"],Pe=["challenge","disabled","form","name"],Oe=["form"],Ae=["type","value"],De=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],Ee=["name"],Le=["content","name"],je=["high","low","max","min","optimum","value"],Re=["data","form","height","name","type","width"],Ne=["reversed","start","type"],Be=["disabled","label"],Ie=["disabled","label","selected","value"],Ge=["form","name"],He=["name","type","value"],_e=["width"],Ue=["max","value"],ze=["cite"],qe=["async","defer","integrity","nonce","src","type"],We=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],Ve=["name"],Ke=["media","sizes","src","type"],Xe=["media","nonce","title","type"],Ye=["summary","width"],Je=["headers","height","scope","width"],Qe=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],Ze=["headers","height","scope","width"],$e=["default","kind","label","src"],et=["type"],tt=["controls","height","loop","muted","poster","preload","src","width"],nt=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],rt={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ot={a:Q,abbr:Z,applet:$,area:ee,audio:te,base:ne,basefont:re,bdo:oe,blockquote:ie,button:ae,canvas:ue,col:ce,colgroup:se,data:le,del:de,details:fe,dfn:pe,dialog:he,embed:me,fieldset:ge,font:ye,form:be,frame:ve,frameset:Ce,head:Fe,hr:ke,html:Te,iframe:xe,img:Se,input:we,ins:Me,keygen:Pe,label:Oe,li:Ae,link:De,map:Ee,meta:Le,meter:je,object:Re,ol:Ne,optgroup:Be,option:Ie,output:Ge,param:He,pre:_e,progress:Ue,q:ze,script:qe,select:We,slot:Ve,source:Ke,style:Xe,table:Ye,td:Je,textarea:Qe,th:Ze,track:$e,ul:et,video:tt,svg:nt,elements:rt,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},it=Object.freeze({a:Q,abbr:Z,applet:$,area:ee,audio:te,base:ne,basefont:re,bdo:oe,blockquote:ie,button:ae,canvas:ue,col:ce,colgroup:se,data:le,del:de,details:fe,dfn:pe,dialog:he,embed:me,fieldset:ge,font:ye,form:be,frame:ve,frameset:Ce,head:Fe,hr:ke,html:Te,iframe:xe,img:Se,input:we,ins:Me,keygen:Pe,label:Oe,li:Ae,link:De,map:Ee,meta:Le,meter:je,object:Re,ol:Ne,optgroup:Be,option:Ie,output:Ge,param:He,pre:_e,progress:Ue,q:ze,script:qe,select:We,slot:Ve,source:Ke,style:Xe,table:Ye,td:Je,textarea:Qe,th:Ze,track:$e,ul:et,video:tt,svg:nt,elements:rt,default:ot}),at=it&&ot||it,ut=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=at,e.exports=at}),ct=function(e){return e&&e.__esModule?e.default:e}(ut),st=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"],lt=ct["*"],dt=ct.elements.svg,ft=ct.elements.html,pt=["color","height","width"],ht=RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")),mt=function(e){return"svg"===e||-1===ft.indexOf(e)&&-1!==dt.indexOf(e)},gt=function(e,t){var n=void 0;return n=mt(t)?ct.svg:ct[t]||[],-1!==lt.indexOf(e)||-1!==n.indexOf(e)},yt=function(e){return-1!==pt.indexOf(e)},bt=function(e){return-1!==st.indexOf(e)},vt=function(e,t){return"string"!=typeof e||(gt(t,e)||bt(t)||ht(t.toLowerCase()))&&(!yt(t)||mt(e))},Ct=Y(vt),Ft=function(e){function t(o){function i(e){return t(o,I({},u,e))}function a(){function a(e,t,n){if(!f)return!0;var r=!0;return n&&(f(n.props,e,n.context,t)||(r=!1)),r}for(var u=arguments.length,p=Array(u),m=0;m<u;m++)p[m]=arguments[m];var y=r(function(t,n){t=d(y.propsToApply,{},t,n);var r=a(t,n,this.previous);f&&(this.previous={props:t,context:n});var o=e(t,y),i=o.toForward,u=o.cssOverrides,c=o.cssProp;return this.className=r?s({styles:y.styles,props:t,cssOverrides:u,cssProp:c,context:n,displayName:y.displayName}):this.className,P.a.createElement(y.comp,I({ref:t.innerRef},i,{className:this.className}))},{noWarn:!0,createElement:!1});return y.propTypes={className:j.oneOfType([j.string,j.object]),cssOverrides:j.object,innerRef:j.func,glam:j.object},Object.assign(y,n({comp:o,styles:p,rootEl:c,filterProps:h,forwardProps:g,displayName:l,propsToApply:v}),{isGlamorousComponent:!0,propsAreCssOverrides:b,withComponent:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=y.forwardProps,o=y.filterProps,i=H(y,["forwardProps","filterProps"]);return t(I({},i,{comp:e}),I({forwardProps:r,filterProps:o},n))()},withProps:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(y,{withProps:n})()},withConfig:i}),y}var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=u.rootEl,l=u.displayName,f=u.shouldClassNameUpdate,p=u.filterProps,h=void 0===p?[]:p,m=u.forwardProps,g=void 0===m?[]:m,y=u.propsAreCssOverrides,b=void 0===y?o.propsAreCssOverrides:y,v=u.withProps;return Object.assign(a,{withConfig:i}),a}function n(e){var t=e.comp,n=e.styles,r=e.rootEl,o=e.filterProps,i=e.forwardProps,a=e.displayName,u=e.propsToApply,c=t.comp?t.comp:t,s=t.propsToApply?[].concat(U(t.propsToApply),U(f(u))):f(u);return{styles:p(t.styles,n),comp:c,rootEl:r||c,forwardProps:p(t.forwardProps,i),filterProps:p(t.filterProps,o),displayName:a||"glamorous("+h(t)+")",propsToApply:s}}return t}(S);Object.assign(Ft,E.reduce(function(e,t){return e[t]=Ft(t),e},{})),Object.assign(Ft,E.reduce(function(e,t){var n=w(t);return e[n]=Ft[t](),e[n].displayName="glamorous."+n,e[n].propsAreCssOverrides=!0,e},{})),Ft.default=Ft;var kt=Ft.A,Tt=Ft.Abbr,xt=Ft.Acronym,St=Ft.Address,wt=Ft.Applet,Mt=Ft.Area,Pt=Ft.Article,Ot=Ft.Aside,At=Ft.Audio,Dt=Ft.B,Et=Ft.Base,Lt=Ft.Basefont,jt=Ft.Bdi,Rt=Ft.Bdo,Nt=Ft.Bgsound,Bt=Ft.Big,It=Ft.Blink,Gt=Ft.Blockquote,Ht=Ft.Body,_t=Ft.Br,Ut=Ft.Button,zt=Ft.Canvas,qt=Ft.Caption,Wt=Ft.Center,Vt=Ft.Cite,Kt=Ft.Code,Xt=Ft.Col,Yt=Ft.Colgroup,Jt=Ft.Command,Qt=Ft.Content,Zt=Ft.Data,$t=Ft.Datalist,en=Ft.Dd,tn=Ft.Del,nn=Ft.Details,rn=Ft.Dfn,on=Ft.Dialog,an=Ft.Dir,un=Ft.Div,cn=Ft.Dl,sn=Ft.Dt,ln=Ft.Element,dn=Ft.Em,fn=Ft.Embed,pn=Ft.Fieldset,hn=Ft.Figcaption,mn=Ft.Figure,gn=Ft.Font,yn=Ft.Footer,bn=Ft.Form,vn=Ft.Frame,Cn=Ft.Frameset,Fn=Ft.H1,kn=Ft.H2,Tn=Ft.H3,xn=Ft.H4,Sn=Ft.H5,wn=Ft.H6,Mn=Ft.Head,Pn=Ft.Header,On=Ft.Hgroup,An=Ft.Hr,Dn=Ft.Html,En=Ft.I,Ln=Ft.Iframe,jn=Ft.Image,Rn=Ft.Img,Nn=Ft.Input,Bn=Ft.Ins,In=Ft.Isindex,Gn=Ft.Kbd,Hn=Ft.Keygen,_n=Ft.Label,Un=Ft.Legend,zn=Ft.Li,qn=Ft.Link,Wn=Ft.Listing,Vn=Ft.Main,Kn=Ft.Map,Xn=Ft.Mark,Yn=Ft.Marquee,Jn=Ft.Math,Qn=Ft.Menu,Zn=Ft.Menuitem,$n=Ft.Meta,er=Ft.Meter,tr=Ft.Multicol,nr=Ft.Nav,rr=Ft.Nextid,or=Ft.Nobr,ir=Ft.Noembed,ar=Ft.Noframes,ur=Ft.Noscript,cr=Ft.Object,sr=Ft.Ol,lr=Ft.Optgroup,dr=Ft.Option,fr=Ft.Output,pr=Ft.P,hr=Ft.Param,mr=Ft.Picture,gr=Ft.Plaintext,yr=Ft.Pre,br=Ft.Progress,vr=Ft.Q,Cr=Ft.Rb,Fr=Ft.Rbc,kr=Ft.Rp,Tr=Ft.Rt,xr=Ft.Rtc,Sr=Ft.Ruby,wr=Ft.S,Mr=Ft.Samp,Pr=Ft.Script,Or=Ft.Section,Ar=Ft.Select,Dr=Ft.Shadow,Er=Ft.Slot,Lr=Ft.Small,jr=Ft.Source,Rr=Ft.Spacer,Nr=Ft.Span,Br=Ft.Strike,Ir=Ft.Strong,Gr=Ft.Style,Hr=Ft.Sub,_r=Ft.Summary,Ur=Ft.Sup,zr=Ft.Svg,qr=Ft.Table,Wr=Ft.Tbody,Vr=Ft.Td,Kr=Ft.Template,Xr=Ft.Textarea,Yr=Ft.Tfoot,Jr=Ft.Th,Qr=Ft.Thead,Zr=Ft.Time,$r=Ft.Title,eo=Ft.Tr,to=Ft.Track,no=Ft.Tt,ro=Ft.U,oo=Ft.Ul,io=Ft.Var,ao=Ft.Video,uo=Ft.Wbr,co=Ft.Xmp,so=Ft.AltGlyph,lo=Ft.AltGlyphDef,fo=Ft.AltGlyphItem,po=Ft.Animate,ho=Ft.AnimateColor,mo=Ft.AnimateMotion,go=Ft.AnimateTransform,yo=Ft.Animation,bo=Ft.Circle,vo=Ft.ClipPath,Co=Ft["Color-profile"],Fo=Ft.Cursor,ko=Ft.Defs,To=Ft.Desc,xo=Ft.Discard,So=Ft.Ellipse,wo=Ft.FeBlend,Mo=Ft.FeColorMatrix,Po=Ft.FeComponentTransfer,Oo=Ft.FeComposite,Ao=Ft.FeConvolveMatrix,Do=Ft.FeDiffuseLighting,Eo=Ft.FeDisplacementMap,Lo=Ft.FeDistantLight,jo=Ft.FeDropShadow,Ro=Ft.FeFlood,No=Ft.FeFuncA,Bo=Ft.FeFuncB,Io=Ft.FeFuncG,Go=Ft.FeFuncR,Ho=Ft.FeGaussianBlur,_o=Ft.FeImage,Uo=Ft.FeMerge,zo=Ft.FeMergeNode,qo=Ft.FeMorphology,Wo=Ft.FeOffset,Vo=Ft.FePointLight,Ko=Ft.FeSpecularLighting,Xo=Ft.FeSpotLight,Yo=Ft.FeTile,Jo=Ft.FeTurbulence,Qo=Ft.Filter,Zo=Ft["Font-face"],$o=Ft["Font-face-format"],ei=Ft["Font-face-name"],ti=Ft["Font-face-src"],ni=Ft["Font-face-uri"],ri=Ft.ForeignObject,oi=Ft.G,ii=Ft.Glyph,ai=Ft.GlyphRef,ui=Ft.Handler,ci=Ft.Hatch,si=Ft.Hatchpath,li=Ft.Hkern,di=Ft.Line,fi=Ft.LinearGradient,pi=Ft.Listener,hi=Ft.Marker,mi=Ft.Mask,gi=Ft.Mesh,yi=Ft.Meshgradient,bi=Ft.Meshpatch,vi=Ft.Meshrow,Ci=Ft.Metadata,Fi=Ft["Missing-glyph"],ki=Ft.Mpath,Ti=Ft.Path,xi=Ft.Pattern,Si=Ft.Polygon,wi=Ft.Polyline,Mi=Ft.Prefetch,Pi=Ft.RadialGradient,Oi=Ft.Rect,Ai=Ft.Set,Di=Ft.SolidColor,Ei=Ft.Solidcolor,Li=Ft.Stop,ji=Ft.Switch,Ri=Ft.Symbol,Ni=Ft.Tbreak,Bi=Ft.Text,Ii=Ft.TextArea,Gi=Ft.TextPath,Hi=Ft.Tref,_i=Ft.Tspan,Ui=Ft.Unknown,zi=Ft.Use,qi=Ft.View,Wi=Ft.Vkern;t.default=Ft},454:function(e,t,n){e.exports=n(455)},455:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=r(o),a=n(7),u=n(28),c=r(u);"undefined"!=typeof window&&(0,a.rehydrate)(window.__NEXT_DATA__.ids),t.default=function(){var e={backgroundColor:"white",color:"cornflowerblue",border:"1px solid lightgreen",borderRight:"none",borderBottom:"none",boxShadow:"5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow",transition:"all 0.1s linear",margin:"3rem 0",padding:"1rem 0.5rem"},t={":hover":{color:"white",backgroundColor:"lightgray",borderColor:"aqua",boxShadow:"-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue"},"& code":{backgroundColor:"linen"}},n=function(e){var n=t,r=a.css.keyframes({"0%":{transform:"scale(1.01)"},"100%":{transform:"scale(0.99)"}});return n.animation=r+" 0.2s infinite ease-in-out alternate",n},r=c.default.div(e),o=c.default.div(e,t),u=c.default.div(e,t,n);return i.default.createElement("div",null,i.default.createElement(r,null,"Cool Styles"),i.default.createElement(o,null,"With ",i.default.createElement("code",null,":hover"),"."),i.default.createElement(u,null,"Let's bounce."))}}},[454]);
            return { page: comp.default }
          })
        