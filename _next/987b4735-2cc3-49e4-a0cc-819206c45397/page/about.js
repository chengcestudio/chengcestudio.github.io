module.exports=__NEXT_REGISTER_PAGE("/about",function(){var e=webpackJsonp([10],{349:function(e,r,t){"use strict";var a=t(0);var o=t.n(a);var n=t(2);var i=t.n(n);var s=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"];var l=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"];var u=s.concat(l).filter(function(e,r,t){return t.indexOf(e)===r});var p="__glamorous__";var c=false;var v=void 0;if(c){if(!o.a.PropTypes){v=function e(){return v};["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){v[e]=v})}if(!o.a.Children){var d={map:function e(r,t,a){if(null==r)return null;r=d.toArray(r);a&&a!==r&&(t=t.bind(a));return r.map(t)},forEach:function e(r,t,a){if(null==r)return null;r=d.toArray(r);a&&a!==r&&(t=t.bind(a));r.forEach(t)},count:function e(r){return r&&r.length||0},only:function e(r){r=d.toArray(r);if(1!==r.length)throw new Error("Children.only() expects only one child.");return r[0]},toArray:function e(r){if(null==r)return[];return[].concat(r)}};o.a.Children=d}}else if(parseFloat(o.a.version.slice(0,4))>=15.5)try{v=t(5)}catch(e){}v=v||o.a.PropTypes;var f=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")};var h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e};var m=function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)};var g=function(e,r){var t={};for(var a in e){if(r.indexOf(a)>=0)continue;if(!Object.prototype.hasOwnProperty.call(e,a))continue;t[a]=e[a]}return t};var y=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r};function b(e){var r=e.displayName||e.name||"FunctionComponent";return'glamorous warning: Expected component called "'+r+'" which uses withTheme to be within a ThemeProvider but none was found.'}function C(e){var r;var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.noWarn,n=void 0!==a&&a,i=t.createElement,s=void 0===i||i;var l=function(r){m(t,r);function t(){var e,a,o;f(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(e=(a=y(this,r.call.apply(r,[this].concat(s))),a),a.warned=n,a.state={theme:{}},a.setTheme=function(e){return a.setState({theme:e})},e),y(a,o)}t.prototype.componentWillMount=function e(){this.context[p]||false;var r=this.props.theme;this.context[p]?this.setTheme(r||this.context[p].getState()):this.setTheme(r||{})};t.prototype.componentWillReceiveProps=function e(r){this.props.theme!==r.theme&&this.setTheme(r.theme)};t.prototype.componentDidMount=function e(){this.context[p]&&!this.props.theme&&(this.subscriptionId=this.context[p].subscribe(this.setTheme))};t.prototype.componentWillUnmount=function e(){this.subscriptionId&&this.context[p].unsubscribe(this.subscriptionId)};t.prototype.render=function r(){return s?o.a.createElement(e,h({},this.props,this.state)):e.call(this,h({},this.props,this.state),this.context)};return t}(o.a.Component);void 0;var u=(r={},r[p]=v.object,r);var c=null;Object.defineProperty(l,"contextTypes",{enumerable:true,configurable:true,set:function e(r){c=r},get:function e(){if(c)return h({},u,c);return u}});return l}var x=k;var w=Object.prototype.toString;function k(e){var r=w.call(e);return"[object Function]"===r||"function"===typeof e&&"[object RegExp]"!==r||"undefined"!==typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}var T=function e(r){return null!=r&&"object"===typeof r&&false===Array.isArray(r)};function S(e){return true===T(e)&&"[object Object]"===Object.prototype.toString.call(e)}var F=function e(r){var t,a;if(false===S(r))return false;t=r.constructor;if("function"!==typeof t)return false;a=t.prototype;if(false===S(a))return false;if(false===a.hasOwnProperty("isPrototypeOf"))return false;return true};function O(e){var r={};var t=1;var a=e;function o(){return a}function n(e){a=e;var t=Object.keys(r);var o=0;var n=t.length;for(;o<n;o++)r[t[o]]&&r[t[o]](e)}function i(e){if("function"!==typeof e)throw new Error("listener must be a function.");var a=t;r[a]=e;t+=1;return a}function s(e){r[e]=void 0}return{getState:o,setState:n,subscribe:i,unsubscribe:s}}var P,M;var A=function(e){m(r,e);function r(){var t,a,o;f(this,r);for(var n=arguments.length,i=Array(n),s=0;s<n;s++)i[s]=arguments[s];return o=(t=(a=y(this,e.call.apply(e,[this].concat(i))),a),a.setOuterTheme=function(e){a.outerTheme=e;void 0!==a.broadcast&&a.publishTheme()},t),y(a,o)}r.prototype.getTheme=function e(r){var t=r||this.props.theme;if(x(t)){var a=t(this.outerTheme);if(!F(a))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return a}return h({},this.outerTheme,t)};r.prototype.getChildContext=function e(){var r;return r={},r[p]=this.broadcast,r};r.prototype.publishTheme=function e(r){this.broadcast.setState(this.getTheme(r))};r.prototype.componentDidMount=function e(){this.context[p]&&(this.subscriptionId=this.context[p].subscribe(this.setOuterTheme))};r.prototype.componentWillMount=function e(){this.context[p]&&this.setOuterTheme(this.context[p].getState());this.broadcast=O(this.getTheme(this.props.theme))};r.prototype.componentWillReceiveProps=function e(r){this.props.theme!==r.theme&&this.publishTheme(r.theme)};r.prototype.componentWillUnmount=function e(){this.subscriptionId&&this.context[p].unsubscribe(this.subscriptionId)};r.prototype.render=function e(){return this.props.children?o.a.Children.only(this.props.children):null};return r}(o.a.Component);A.childContextTypes=(P={},P[p]=v.object.isRequired,P);A.contextTypes=(M={},M[p]=v.object,M);void 0;function E(e){var r=[];var t=[];e.toString().split(" ").forEach(function(e){if(0===e.indexOf("css-")){var a=D(e);t.push(a)}else r.push(e)});return{glamorlessClassName:r,glamorStyles:t}}function D(e){var r;return r={},r["data-"+e]="",r}function L(e){var r=e.styles,t=e.props,a=e.cssOverrides,o=e.cssProp,i=e.context,s=e.displayName;var l=j([].concat(r,[t.className,a,o]),t,i),u=l.mappedArgs,p=l.nonGlamorClassNames;var c=(false,false);var v=c?{label:s}:null;var d=n["css"].apply(void 0,[v].concat(u)).toString();var f=p.join(" ").trim();return(d+" "+f).trim()}function j(e,r,t){var a=void 0;var o=[];var n=[];for(var i=0;i<e.length;i++){a=e[i];while("function"===typeof a)a=a(r,t);if("string"===typeof a){var s=E(a),l=s.glamorStyles,u=s.glamorlessClassName;o.push.apply(o,l);n.push.apply(n,u)}else if(Array.isArray(a)){var p=j(a,r,t);o.push.apply(o,p.mappedArgs);n.push.apply(n,p.nonGlamorClassNames)}else o.push(a)}return{mappedArgs:o,nonGlamorClassNames:n}}function R(e){return r;function r(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var i=n.rootEl,s=n.displayName,l=n.shouldClassNameUpdate,u=n.filterProps,p=void 0===u?[]:u,c=n.forwardProps,v=void 0===c?[]:c,d=n.propsAreCssOverrides,f=void 0===d?a.propsAreCssOverrides:d,m=n.withProps;Object.assign(b,{withConfig:y});return b;function y(e){return r(a,h({},n,e))}function b(){for(var n=arguments.length,u=Array(n),c=0;c<n;c++)u[c]=arguments[c];var d=C(function(r,t){r=N(d.propsToApply,{},r,t);var a=b(r,t,this.previous);l&&(this.previous={props:r,context:t});var n=e(r,d),i=n.toForward,s=n.cssOverrides,u=n.cssProp;this.className=a?L({styles:d.styles,props:r,cssOverrides:s,cssProp:u,context:t,displayName:d.displayName}):this.className;return o.a.createElement(d.comp,h({ref:"innerRef"in i?void 0:r.innerRef},i,{className:this.className}))},{noWarn:true,createElement:false});void 0;function b(e,r,t){if(!l)return true;var a=true;t&&(l(t.props,e,t.context,r)||(a=false));return a}Object.assign(d,t({comp:a,styles:u,rootEl:i,filterProps:p,forwardProps:v,displayName:s,propsToApply:m}),{isGlamorousComponent:true,propsAreCssOverrides:f,withComponent:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var a=d.forwardProps,o=d.filterProps,n=g(d,["forwardProps","filterProps"]);return r(h({},n,{comp:e,rootEl:G(e)}),h({forwardProps:a,filterProps:o},t))()},withProps:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return r(d,{withProps:t})()},withConfig:y});return d}}function t(e){var r=e.comp,t=e.styles,a=e.rootEl,o=e.filterProps,n=e.forwardProps,i=e.displayName,s=e.propsToApply;var l=r.comp?r.comp:r;var u=r.propsToApply?[].concat(r.propsToApply,I(s)):I(s);return{styles:B(r.styles,t),comp:l,rootEl:a||G(r),forwardProps:B(r.forwardProps,n),filterProps:B(r.filterProps,o),displayName:i||"glamorous("+z(r)+")",propsToApply:u}}}function N(e,r,t,a){e.forEach(function(e){if("function"===typeof e)return Object.assign(r,e(Object.assign({},r,t),a));if(Array.isArray(e))return Object.assign(r,N(e,r,t,a));return Object.assign(r,e)});return Object.assign(r,t)}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function B(e,r){return e?e.concat(r):r}function G(e){return e.rootEl?e.rootEl:e.comp||e}function z(e){return"string"===typeof e?e:e.displayName||e.name||"unknown"}function H(e,r){var t=r&&r.cache?r.cache:Z;var a=r&&r.serializer?r.serializer:Y;var o=r&&r.strategy?r.strategy:V;return o(e,{cache:t,serializer:a})}function U(e){return null==e||"number"===typeof e||"boolean"===typeof e}function _(e,r,t,a){var o=U(a)?a:t(a);var n=r.get(o);if("undefined"===typeof n){n=e.call(this,a);r.set(o,n)}return n}function q(e,r,t){var a=Array.prototype.slice.call(arguments,3);var o=t(a);var n=r.get(o);if("undefined"===typeof n){n=e.apply(this,a);r.set(o,n)}return n}function W(e,r,t,a,o){return t.bind(r,e,a,o)}function V(e,r){var t=1===e.length?_:q;return W(e,this,t,r.cache.create(),r.serializer)}function X(e,r){var t=q;return W(e,this,t,r.cache.create(),r.serializer)}function K(e,r){var t=_;return W(e,this,t,r.cache.create(),r.serializer)}function Y(){return JSON.stringify(arguments)}function J(){this.cache=Object.create(null)}J.prototype.has=function(e){return e in this.cache};J.prototype.get=function(e){return this.cache[e]};J.prototype.set=function(e,r){this.cache[e]=r};var Z={create:function e(){return new J}};var Q=H;var $={variadic:X,monadic:K};Q.strategies=$;function ee(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function re(e,r){return r={exports:{}},e(r,r.exports),r.exports}var te=["coords","download","href","name","rel","shape","target","type"];var ae=["title"];var oe=["alt","height","name","width"];var ne=["alt","coords","download","href","rel","shape","target","type"];var ie=["controls","loop","muted","preload","src"];var se=["href","target"];var le=["size"];var ue=["dir"];var pe=["cite"];var ce=["disabled","form","name","type","value"];var ve=["height","width"];var de=["span","width"];var fe=["span","width"];var he=["value"];var me=["cite"];var ge=["open"];var ye=["title"];var be=["open"];var Ce=["height","src","type","width"];var xe=["disabled","form","name"];var we=["size"];var ke=["accept","action","method","name","target"];var Te=["name","scrolling","src"];var Se=["cols","rows"];var Fe=["profile"];var Oe=["size","width"];var Pe=["manifest"];var Me=["height","name","sandbox","scrolling","src","width"];var Ae=["alt","height","name","sizes","src","width"];var Ee=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"];var De=["cite"];var Le=["challenge","disabled","form","name"];var je=["form"];var Re=["type","value"];var Ne=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"];var Ie=["name"];var Be=["content","name"];var Ge=["high","low","max","min","optimum","value"];var ze=["data","form","height","name","type","width"];var He=["reversed","start","type"];var Ue=["disabled","label"];var _e=["disabled","label","selected","value"];var qe=["form","name"];var We=["name","type","value"];var Ve=["width"];var Xe=["max","value"];var Ke=["cite"];var Ye=["async","defer","integrity","nonce","src","type"];var Je=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"];var Ze=["name"];var Qe=["media","sizes","src","type"];var $e=["media","nonce","title","type"];var er=["summary","width"];var rr=["headers","height","scope","width"];var tr=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"];var ar=["headers","height","scope","width"];var or=["default","kind","label","src"];var nr=["type"];var ir=["controls","height","loop","muted","playsInline","poster","preload","src","width"];var sr=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"];var lr={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]};var ur={a:te,abbr:ae,applet:oe,area:ne,audio:ie,base:se,basefont:le,bdo:ue,blockquote:pe,button:ce,canvas:ve,col:de,colgroup:fe,data:he,del:me,details:ge,dfn:ye,dialog:be,embed:Ce,fieldset:xe,font:we,form:ke,frame:Te,frameset:Se,head:Fe,hr:Oe,html:Pe,iframe:Me,img:Ae,input:Ee,ins:De,keygen:Le,label:je,li:Re,link:Ne,map:Ie,meta:Be,meter:Ge,object:ze,ol:He,optgroup:Ue,option:_e,output:qe,param:We,pre:Ve,progress:Xe,q:Ke,script:Ye,select:Je,slot:Ze,source:Qe,style:$e,table:er,td:rr,textarea:tr,th:ar,track:or,ul:nr,video:ir,svg:sr,elements:lr,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]};var pr=Object.freeze({a:te,abbr:ae,applet:oe,area:ne,audio:ie,base:se,basefont:le,bdo:ue,blockquote:pe,button:ce,canvas:ve,col:de,colgroup:fe,data:he,del:me,details:ge,dfn:ye,dialog:be,embed:Ce,fieldset:xe,font:we,form:ke,frame:Te,frameset:Se,head:Fe,hr:Oe,html:Pe,iframe:Me,img:Ae,input:Ee,ins:De,keygen:Le,label:je,li:Re,link:Ne,map:Ie,meta:Be,meter:Ge,object:ze,ol:He,optgroup:Ue,option:_e,output:qe,param:We,pre:Ve,progress:Xe,q:Ke,script:Ye,select:Je,slot:Ze,source:Qe,style:$e,table:er,td:rr,textarea:tr,th:ar,track:or,ul:nr,video:ir,svg:sr,elements:lr,default:ur});var cr=pr&&ur||pr;var vr=re(function(e,r){Object.defineProperty(r,"__esModule",{value:true});r.default=cr;e.exports=cr});var dr=ee(vr);var fr=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];c&&fr.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var hr=dr["*"];var mr=dr.elements.svg;var gr=dr.elements.html;var yr=["color","height","width"];var br=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";var Cr=br+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";var xr=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Cr+"]*$"));var wr=function(e){return"svg"===e||-1===gr.indexOf(e)&&-1!==mr.indexOf(e)};var kr=function(e,r){var t=void 0;t=wr(r)?dr.svg:dr[r]||[];return-1!==hr.indexOf(e)||-1!==t.indexOf(e)};var Tr=function(e){return-1!==yr.indexOf(e)};var Sr=function(e){return-1!==fr.indexOf(e)};var Fr=function(e,r){return"string"!==typeof e||(kr(r,e)||Sr(r)||xr(r.toLowerCase()))&&(!Tr(r)||wr(e))};var Or=Q(Fr);function Pr(e,r){var t=r.propsAreCssOverrides,a=r.rootEl,o=r.filterProps,n=r.forwardProps;var i=e.css,s=e.innerRef,l=e.theme,u=e.className,p=e.glam,c=g(e,["css","innerRef","theme","className","glam"]);void 0!==s&&-1!==n.indexOf("innerRef")&&(c.innerRef=s);var v={toForward:{},cssProp:i,cssOverrides:{}};if(!t&&"string"!==typeof a&&0===o.length){v.toForward=c;return v}return Object.keys(c).reduce(function(e,r){if(-1!==o.indexOf(r))return e;-1!==n.indexOf(r)||Or(a,r)?e.toForward[r]=c[r]:t&&(e.cssOverrides[r]=c[r]);return e},v)}var Mr=R(Pr);Object.assign(Mr,u.reduce(function(e,r){e[r]=Mr(r);return e},{}));Object.assign(Mr,u.reduce(function(e,r){var t=Ar(r);e[t]=Mr[r]();e[t].displayName="glamorous."+t;e[t].propsAreCssOverrides=true;return e},{}));function Ar(e){return e.slice(0,1).toUpperCase()+e.slice(1)}Mr.default=Mr;var Er=Mr["A"];var Dr=Mr["Abbr"];var Lr=Mr["Acronym"];var jr=Mr["Address"];var Rr=Mr["Applet"];var Nr=Mr["Area"];var Ir=Mr["Article"];var Br=Mr["Aside"];var Gr=Mr["Audio"];var zr=Mr["B"];var Hr=Mr["Base"];var Ur=Mr["Basefont"];var _r=Mr["Bdi"];var qr=Mr["Bdo"];var Wr=Mr["Bgsound"];var Vr=Mr["Big"];var Xr=Mr["Blink"];var Kr=Mr["Blockquote"];var Yr=Mr["Body"];var Jr=Mr["Br"];var Zr=Mr["Button"];var Qr=Mr["Canvas"];var $r=Mr["Caption"];var et=Mr["Center"];var rt=Mr["Cite"];var tt=Mr["Code"];var at=Mr["Col"];var ot=Mr["Colgroup"];var nt=Mr["Command"];var it=Mr["Content"];var st=Mr["Data"];var lt=Mr["Datalist"];var ut=Mr["Dd"];var pt=Mr["Del"];var ct=Mr["Details"];var vt=Mr["Dfn"];var dt=Mr["Dialog"];var ft=Mr["Dir"];var ht=Mr["Div"];var mt=Mr["Dl"];var gt=Mr["Dt"];var yt=Mr["Element"];var bt=Mr["Em"];var Ct=Mr["Embed"];var xt=Mr["Fieldset"];var wt=Mr["Figcaption"];var kt=Mr["Figure"];var Tt=Mr["Font"];var St=Mr["Footer"];var Ft=Mr["Form"];var Ot=Mr["Frame"];var Pt=Mr["Frameset"];var Mt=Mr["H1"];var At=Mr["H2"];var Et=Mr["H3"];var Dt=Mr["H4"];var Lt=Mr["H5"];var jt=Mr["H6"];var Rt=Mr["Head"];var Nt=Mr["Header"];var It=Mr["Hgroup"];var Bt=Mr["Hr"];var Gt=Mr["Html"];var zt=Mr["I"];var Ht=Mr["Iframe"];var Ut=Mr["Image"];var _t=Mr["Img"];var qt=Mr["Input"];var Wt=Mr["Ins"];var Vt=Mr["Isindex"];var Xt=Mr["Kbd"];var Kt=Mr["Keygen"];var Yt=Mr["Label"];var Jt=Mr["Legend"];var Zt=Mr["Li"];var Qt=Mr["Link"];var $t=Mr["Listing"];var ea=Mr["Main"];var ra=Mr["Map"];var ta=Mr["Mark"];var aa=Mr["Marquee"];var oa=Mr["Math"];var na=Mr["Menu"];var ia=Mr["Menuitem"];var sa=Mr["Meta"];var la=Mr["Meter"];var ua=Mr["Multicol"];var pa=Mr["Nav"];var ca=Mr["Nextid"];var va=Mr["Nobr"];var da=Mr["Noembed"];var fa=Mr["Noframes"];var ha=Mr["Noscript"];var ma=Mr["Object"];var ga=Mr["Ol"];var ya=Mr["Optgroup"];var ba=Mr["Option"];var Ca=Mr["Output"];var xa=Mr["P"];var wa=Mr["Param"];var ka=Mr["Picture"];var Ta=Mr["Plaintext"];var Sa=Mr["Pre"];var Fa=Mr["Progress"];var Oa=Mr["Q"];var Pa=Mr["Rb"];var Ma=Mr["Rbc"];var Aa=Mr["Rp"];var Ea=Mr["Rt"];var Da=Mr["Rtc"];var La=Mr["Ruby"];var ja=Mr["S"];var Ra=Mr["Samp"];var Na=Mr["Script"];var Ia=Mr["Section"];var Ba=Mr["Select"];var Ga=Mr["Shadow"];var za=Mr["Slot"];var Ha=Mr["Small"];var Ua=Mr["Source"];var _a=Mr["Spacer"];var qa=Mr["Span"];var Wa=Mr["Strike"];var Va=Mr["Strong"];var Xa=Mr["Style"];var Ka=Mr["Sub"];var Ya=Mr["Summary"];var Ja=Mr["Sup"];var Za=Mr["Svg"];var Qa=Mr["Table"];var $a=Mr["Tbody"];var eo=Mr["Td"];var ro=Mr["Template"];var to=Mr["Textarea"];var ao=Mr["Tfoot"];var oo=Mr["Th"];var no=Mr["Thead"];var io=Mr["Time"];var so=Mr["Title"];var lo=Mr["Tr"];var uo=Mr["Track"];var po=Mr["Tt"];var co=Mr["U"];var vo=Mr["Ul"];var fo=Mr["Var"];var ho=Mr["Video"];var mo=Mr["Wbr"];var go=Mr["Xmp"];var yo=Mr["AltGlyph"];var bo=Mr["AltGlyphDef"];var Co=Mr["AltGlyphItem"];var xo=Mr["Animate"];var wo=Mr["AnimateColor"];var ko=Mr["AnimateMotion"];var To=Mr["AnimateTransform"];var So=Mr["Animation"];var Fo=Mr["Circle"];var Oo=Mr["ClipPath"];var Po=Mr["Color-profile"];var Mo=Mr["Cursor"];var Ao=Mr["Defs"];var Eo=Mr["Desc"];var Do=Mr["Discard"];var Lo=Mr["Ellipse"];var jo=Mr["FeBlend"];var Ro=Mr["FeColorMatrix"];var No=Mr["FeComponentTransfer"];var Io=Mr["FeComposite"];var Bo=Mr["FeConvolveMatrix"];var Go=Mr["FeDiffuseLighting"];var zo=Mr["FeDisplacementMap"];var Ho=Mr["FeDistantLight"];var Uo=Mr["FeDropShadow"];var _o=Mr["FeFlood"];var qo=Mr["FeFuncA"];var Wo=Mr["FeFuncB"];var Vo=Mr["FeFuncG"];var Xo=Mr["FeFuncR"];var Ko=Mr["FeGaussianBlur"];var Yo=Mr["FeImage"];var Jo=Mr["FeMerge"];var Zo=Mr["FeMergeNode"];var Qo=Mr["FeMorphology"];var $o=Mr["FeOffset"];var en=Mr["FePointLight"];var rn=Mr["FeSpecularLighting"];var tn=Mr["FeSpotLight"];var an=Mr["FeTile"];var on=Mr["FeTurbulence"];var nn=Mr["Filter"];var sn=Mr["Font-face"];var ln=Mr["Font-face-format"];var un=Mr["Font-face-name"];var pn=Mr["Font-face-src"];var cn=Mr["Font-face-uri"];var vn=Mr["ForeignObject"];var dn=Mr["G"];var fn=Mr["Glyph"];var hn=Mr["GlyphRef"];var mn=Mr["Handler"];var gn=Mr["Hatch"];var yn=Mr["Hatchpath"];var bn=Mr["Hkern"];var Cn=Mr["Line"];var xn=Mr["LinearGradient"];var wn=Mr["Listener"];var kn=Mr["Marker"];var Tn=Mr["Mask"];var Sn=Mr["Mesh"];var Fn=Mr["Meshgradient"];var On=Mr["Meshpatch"];var Pn=Mr["Meshrow"];var Mn=Mr["Metadata"];var An=Mr["Missing-glyph"];var En=Mr["Mpath"];var Dn=Mr["Path"];var Ln=Mr["Pattern"];var jn=Mr["Polygon"];var Rn=Mr["Polyline"];var Nn=Mr["Prefetch"];var In=Mr["RadialGradient"];var Bn=Mr["Rect"];var Gn=Mr["Set"];var zn=Mr["SolidColor"];var Hn=Mr["Solidcolor"];var Un=Mr["Stop"];var _n=Mr["Switch"];var qn=Mr["Symbol"];var Wn=Mr["Tbreak"];var Vn=Mr["Text"];var Xn=Mr["TextArea"];var Kn=Mr["TextPath"];var Yn=Mr["Tref"];var Jn=Mr["Tspan"];var Zn=Mr["Unknown"];var Qn=Mr["Use"];var $n=Mr["View"];var ei=Mr["Vkern"];r["a"]=Mr},483:function(e,r,t){e.exports=t(484)},484:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:true});var a=t(0);var o=t.n(a);var n=t(2);var i=t.n(n);var s=t(349);"undefined"!==typeof window&&Object(n["rehydrate"])(window.__NEXT_DATA__.ids);r["default"]=function(){var e={backgroundColor:"white",color:"cornflowerblue",border:"1px solid lightgreen",borderRight:"none",borderBottom:"none",boxShadow:"5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow",transition:"all 0.1s linear",margin:"3rem 0",padding:"1rem 0.5rem"};var r={":hover":{color:"white",backgroundColor:"lightgray",borderColor:"aqua",boxShadow:"-15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue"},"& code":{backgroundColor:"linen"}};var t=function e(t){var e=r;var a=n["css"].keyframes({"0%":{transform:"scale(1.01)"},"100%":{transform:"scale(0.99)"}});e.animation=a+" 0.2s infinite ease-in-out alternate";return e};var a=s["a"].div(e);var i=s["a"].div(e,r);var l=s["a"].div(e,r,t);return o.a.createElement("div",null,o.a.createElement(a,null,"Cool Styles"),o.a.createElement(i,null,"With ",o.a.createElement("code",null,":hover"),"."),o.a.createElement(l,null,"Let's bounce."))}}},[483]);return{page:e.default}});