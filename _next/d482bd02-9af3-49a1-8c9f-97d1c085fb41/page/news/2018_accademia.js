module.exports=__NEXT_REGISTER_PAGE("/news/2018_accademia",function(){var e=webpackJsonp([4],{13:function(e,t,r){"use strict";t["a"]=a;t["b"]=i;function n(e){var t;if(!e)var e=window.event;e.target?t=e.target:e.srcElement&&(t=e.srcElement);3==t.nodeType&&(t=t.parentNode);return t}function o(e){var t=0;var r=0;if(!e)var e=window.event;if(e.pageX||e.pageY){t=e.pageX;r=e.pageY}else if(e.clientX||e.clientY){t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;r=e.clientY+document.body.scrollTop+document.documentElement.scrollTop}return{x:t,y:r}}function a(e){var t=0;var r=0;if(e.offsetParent)do{t+=e.offsetLeft;r+=e.offsetTop}while(e=e.offsetParent);return{left:t,top:r}}function i(e){var t=o(e);var r=n(e);var i=a(r);var l=t.x-i.left;var s=t.y-i.top;return{x:l,y:s}}function l(e,t){var r=i(e);return{x:r.x+t,y:r.y+t}}},21:function(e,t,r){r(39);e.exports=self.fetch.bind(self)},35:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(3);var i=r(4);var l=r(24);var s=r.n(l);var c=r(12);var u=r(36);var p=r.n(u);var f=r(19);var h=r.n(f);var d=r(18);var m=r.n(d);var v=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var E=function(e){g(t,e);function t(e){b(this,t);var r=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.isScrollUp=function(){r._scrollY=r.props.BarOnId?r.$win.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(r._scrollY===r._prevScrollY)return;if(r._scrollY-r._prevScrollY<=0){console.log("↑");r.props.setScroll(true)}else{console.log("↓");r.props.setScroll(false)}r._prevScrollY=r._scrollY};r.updateY=function(){var e=r.props.BarOnId?r.$win.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r._scrollY=e};r.handleScroll=function(e){e.preventDefault();e.stopPropagation();r.lazySetOnUp()};r.lazySetOnUp=p()(r.isScrollUp,500);r._prevScrollY=0;return r}v(t,[{key:"componentDidMount",value:function e(){this.$win=this.props.BarOnId?document.getElementById(this.props.BarOnId):window;this._prevScrollY=this.props.BarOnId?this.$win.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.$win.addEventListener("scroll",this.handleScroll,false)}},{key:"componentWillMount",value:function e(){if("undefined"==typeof this.$win)return;this.$win.removeEventListener("scroll",this.handleScroll,false)}},{key:"componentWillUnmount",value:function e(){if("undefined"==typeof this.$win)return;this.$win.removeEventListener("scroll",this.handleScroll,false)}},{key:"render",value:function e(){return null}}]);return t}(n["PureComponent"]);var w=function e(t){return{setScroll:Object(a["bindActionCreators"])(c["d"],t),setScrollOffsetY:Object(a["bindActionCreators"])(c["e"],t)}};t["a"]=Object(i["connect"])(null,w)(E)},36:function(e,t,r){var n=r(19),o=r(25);var a="Expected a function";function i(e,t,r){var i=true,l=true;if("function"!=typeof e)throw new TypeError(a);if(o(r)){i="leading"in r?!!r.leading:i;l="trailing"in r?!!r.trailing:l}return n(e,t,{leading:i,maxWait:t,trailing:l})}e.exports=i},38:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(21);var i=r.n(a);var l=r(1);var s=r.n(l);var c=r(2);var u=r.n(c);var p=r(26);var f=r.n(p);var h=r(55);var d=r.n(h);var m=r(56);var v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var b=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function y(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,a){try{var i=t[o](a);var l=i.value}catch(e){r(e);return}if(!i.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){w(t,e);function t(e){g(this,t);return E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}b(t,[{key:"render",value:function e(){return o.a.createElement("div",Object(l["css"])({backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"transparent",backgroundPosition:"center",left:this.props.left,top:this.props.top,opacity:this.props.show?1:0,width:"100%",height:"100%",backgroundImage:this.props.show?"url("+this.props.src+")":null,transition:"opacity 1s cubic-bezier(0.24, 0.49, 0.82, 0.6)",backfaceVisibility:"hidden"}))}}]);return t}(n["PureComponent"]);var O=l["css"].keyframes({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}});var P=function e(t){return o.a.createElement("div",Object(l["css"])({position:"absolute",zIndex:1,fontWeight:100,flexDirection:"column",alignItems:"center",justifyContent:"center",display:"flex",left:t.left?t.left:0,top:t.top?t.top:0,width:"100%",height:t.height,opacity:t.show?1:0,backfaceVisibility:"hidden"}),o.a.createElement("svg",v({},Object(l["css"])({width:"20%",height:"20%",transformOrigin:"48% 48%",animation:O+" 1s cubic-bezier(0.24, 0.49, 0.82, 0.6) infinite",animationPlayState:t.show?"running":"paused",backfaceVisibility:"hidden"}),{viewBox:"1 1 50.1 43.4"}),o.a.createElement("polygon",{fill:c["ui"].color.secondary,points:"1,43.4 50.1,43.4 25.1,1"})),o.a.createElement("p",v({},Object(l["css"])({color:c["ui"].color.disabled_on_light,fontSize:"0.2rem",backfaceVisibility:"hidden"}),{className:"loader"}),t.percent+"%"))};var j=function(e){w(t,e);function t(e){g(this,t);var r=E(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.PERSP=1e3;r.state={percent:0,src:r.props.src,loaded:false};r._src=r.props.src;r.progress=r.onProgress.bind(r);r.key=Object(c["makeKEY"])();r.Zp={pc:{img:Object(c["perspZ"])(10,r.PERSP),img_pseudo:Object(c["perspZ"])(0,r.PERSP)},mobile:{img:Object(c["perspZ"])(10,r.PERSP),img_pseudo:Object(c["perspZ"])(0,r.PERSP)}};return r}b(t,[{key:"componentDidMount",value:function e(){true==this.props.fetch&&this.fetchImg()}},{key:"componentWillReceiveProps",value:function e(t,r){if(t.fetch!==this.props.fetch&&true===t.fetch){this.fetchImg(t.src);return}}},{key:"onProgress",value:function e(t){this._fetching=true;if(t.lengthComputable){var r=Math.round(t.loaded/t.total*100);console.log(r,"%");this.setState({percent:""+r,loaded:false})}else console.log("@onProgress 该资源无法计算byte长度")}},{key:"fetchImg",value:function(){var e=y(f.a.mark(function e(t){var r=this;var n,o,a,i,l,s;return f.a.wrap(function e(c){while(1)switch(c.prev=c.next){case 0:n=this.props.width;o=this.props.height;a=t||this.props.src;i=Object(m["a"])(a,n,o);l=new d.a;l.onProgress=this.progress;c.next=8;return l.send(i);case 8:s=c.sent;s?this.setState({src:i,loaded:true},function(){r._src=a}):console.error("图片fetchImg 发送不成功");case 10:case"end":return c.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"render",value:function e(){var t=this.props.is_landscape?this.Zp.pc:this.Zp.mobile;return o.a.createElement("div",v({},Object(l["css"])({position:"relative",overflow:"hidden",width:this.props.width+"px",height:this.props.height+"px",transformStyle:"preserve-3d",transform:"translateZ("+t.img.translateZ+"px) scale("+t.img.scale+")",":before":{display:"block",position:"absolute",content:'""',backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",transform:"skew(0deg,5deg) scale(1.2)",opacity:this.state.loaded?1:0,width:"100%",height:"100%",backgroundImage:this.state.loaded?"url("+this.state.src+")":null,transition:"opacity 1s cubic-bezier(0.24, 0.49, 0.82, 0.6)",backfaceVisibility:"hidden"}}),{key:"_IMG_"+this.key,className:"imgLoader"}),o.a.createElement(P,{width:this.props.width,height:this.props.height,show:false==this.state.loaded,percent:this.state.percent,left:this.props.left,top:this.props.top,key:"_LOADIMGER_"+this.key}))}}]);return t}(n["PureComponent"]);var A=j;var k=r(4);var R=r(3);var T=r(13);var x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var S=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function I(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var z=c["ui"].color.w_1;var Z=Object(c["makeKEY"])();var D=function(e){I(t,e);function t(e){var r;B(this,t);r=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r,r.PERSP=1e3;r.Zp={pc:{contents:Object(c["perspZ"])(250,r.PERSP)},mobile:{contents:Object(c["perspZ"])(150,r.PERSP)}};return r}S(t,[{key:"render",value:function e(){var t=this.props,r=t.img,n=t.vw,a=t.fetch,i=t.is_landscape,s=t.marginW,u=t.content;var p=this.props.is_landscape?this.Zp.pc:this.Zp.mobile;var f=Object(c["perspZ"])(200*this.props.index,this.PERSP);console.log("translateZ("+f.translateZ+"px) scale("+f.scale+")");return o.a.createElement("div",x({},Object(l["css"])({transformStyle:"preserve-3d",perspectiveOrigin:"50% 50%",transform:"translate3d(0, 0, 0)",backfaceVisibility:"hidden"}),{className:"_CONTENT",key:"_CONTENT"+Z}),r?o.a.createElement(A,{src:r,width:n,height:i?""+c["GR"].px(2,n):""+c["GR"].px(1,n),fetch:a,is_landscape:i}):null,o.a.createElement("div",x({},Object(l["css"])({fontSize:i?c["GR"].vw(9)+"vw":"1rem",fontWeight:100,backgroundColor:z,paddingLeft:s,paddingRight:s,paddingTop:i?c["GR"].vw(8)+"vw":c["GR"].vw(5)+"vw",paddingBottom:i?c["GR"].vw(8)+"vw":c["GR"].vw(6)+"vw",transformStyle:"preserve-3d",transition:"all 1s cubic-bezier(0, 0.6, 0, 1)",transform:"translateZ("+p.contents.translateZ+"px) scale("+p.contents.scale+")",backfaceVisibility:"hidden"}),{className:"_content_word"}),u.split("\n").map(function(e,t){return o.a.createElement("div",x({},Object(l["css"])({backfaceVisibility:"hidden"}),{key:"Section_content_"+t},Object(l["css"])({transform:"skew(0deg,5deg) translate3d(0, 0, 0)"})),e,o.a.createElement("br",null))})))}}]);return t}(n["PureComponent"]);var F=function e(t,r){return{vw:t.Root.view_size.vw,vh:t.Root.view_size.vh,is_landscape:t.Root.view_size.is_landscape,language:t.Root.language}};var N=Object(k["connect"])(F,null)(D);var Y=r(63);var G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function H(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var V=c["ui"].color.w_1;var $=c["ui"].color.b_o3;var M=Object(c["makeKEY"])();var q=function(e){H(t,e);function t(e){L(this,t);var r=W(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.TriangleHeight=r.props.is_landscape?c["GR"].px(7,r.props.vw):c["GR"].px(4,r.props.vw);r.PERSP=1e3;r.Zp={pc:{title_backgound:Object(c["perspZ"])(0,r.PERSP),title:Object(c["perspZ"])(120,r.PERSP)},mobile:{title_backgound:Object(c["perspZ"])(0,r.PERSP),title:Object(c["perspZ"])(120,r.PERSP)}};r.zPos=Object(c["perspZ"])(r.props.zPos,r.PERSP);r.ToggleFold=r.toggleFold.bind(r);r._keyCtx=Object(c["makeKEY"])();r.state={height:"100%"};return r}U(t,[{key:"componentWillReceiveProps",value:function e(t){this.props.onScrollingY!==t.onScrollingY;t.RePosTrigger>this.props.RePosTrigger&&t.RePosTrigger&&this.reSetPosition()}},{key:"componentDidMount",value:function e(){var t=this._$CONTENT.getBoundingClientRect().height;this.setState({height:t+"px"});var r=this.props.name;this.props.is_landscape?this.props.setClose(r,false):this.props.setClose(r,true)}},{key:"componentWillUnmount",value:function e(){this.setState({height:"100%"});this.props.setClose(this.props.name,false)}},{key:"toggleFold",value:function e(){console.log("toggle");this.props.setClose(this.props.name,!this.props.onClose)}},{key:"reSetPosition",value:function e(){this.props.setSectionPostionY(this.props.name,Object(T["a"])(this._$folder))}},{key:"render",value:function e(){var t=this;var r=this.props.is_landscape?this.Zp.pc:this.Zp.mobile;return o.a.createElement("div",G({},Object(l["css"])({transformStyle:"preserve-3d",backgroundColor:V,transform:"skew(0deg,-5deg) translateZ("+this.props.zPos.translateZ+"px) scale("+this.props.zPos.scale+")",backfaceVisibility:"hidden"}),{key:"Section_"+this._keyCtx+"_"+this.props.name+"_"+this.props.artista}),o.a.createElement("div",G({},Object(l["css"])({position:"relative",top:0,width:"100vw",transformStyle:"preserve-3d",cursor:"pointer",backgroundColor:V,height:this.TriangleHeight,transform:"translateZ("+r.title_backgound.translateZ+"px) scale("+r.title_backgound.scale+")",borderBottomWidth:"1px",borderBottomStyle:"solid ",borderBottomColor:$,backfaceVisibility:"hidden"}),{onClick:this.ToggleFold,ref:function e(r){return t._$folder=r},className:"SECTION_HEADER"}),o.a.createElement("div",Object(l["css"])({position:"absolute",fontSize:this.props.is_landscape?c["GR"].vw(9)+"vw":c["GR"].vw(6)+"vw",fontWeight:100,top:this.props.is_landscape?c["GR"].vw(8)+"vw":c["GR"].vw(5)+"vw",left:this.props.is_landscape?c["GR"].vw(4)+"vw":this.props.marginW,transform:"skew(0deg,5deg) translateZ("+r.title.translateZ+"px) scale("+r.title.scale+")",backfaceVisibility:"hidden"}),this.props.name)),o.a.createElement("div",G({},Object(l["css"])({paddingBottom:this.TriangleHeight+"px",transform:this.props.onClose?"translateY(-"+this.TriangleHeight+"px) ":"translateY(0px) ",height:this.props.onClose?"1px":""+this.state.height,opacity:this.props.onClose?0:1,pointerEvents:"none",transformStyle:"preserve-3d",transition:"all 1s cubic-bezier(0, 0.6, 0, 1)",overflowY:this.props.onClose?"hidden":"unset",backfaceVisibility:"hidden"}),{className:"CONTENT_WARPPER",ref:function e(r){return t._$CONTENT=r}}),this.props.img?o.a.createElement(A,{src:this.props.img,vw:this.props.vw,fetch:!this.props.onClose,width:vw,height:is_landscape?""+c["GR"].px(2,vw):""+c["GR"].px(1,vw),fullWidth:true,key:"section_head_img_"+_keyCtx}):null,this.props.items.map(function(e,r){return o.a.createElement(N,{img:e.img,title:e.title,content:e.content[""+t.props.language],marginW:t.props.marginW,key:t._keyCtx+r+t.props.name,fetch:!t.props.onClose,className:"img_&&_content",index:r})})," "))}}]);return t}(n["PureComponent"]);var X=function e(t,r){var n=void 0!==t.Section[r.name]&&t.Section[r.name].onClose;return{vw:t.Root.view_size.vw,language:t.Root.language,is_landscape:t.Root.view_size.is_landscape,RePosTrigger:t.Section.RePosTrigger,onClose:n,onScrollingY:t.Root.scroll.y}};var K=function e(t){return{setSectionPostionY:Object(R["bindActionCreators"])(Y["c"],t),setClose:Object(R["bindActionCreators"])(Y["b"],t)}};var J=t["a"]=Object(k["connect"])(X,K)(q)},39:function(e,t){(function(e){"use strict";if(e.fetch)return;var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{new Blob;return true}catch(e){return false}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer){var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"];var n=function(e){return e&&DataView.prototype.isPrototypeOf(e)};var o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1}}function a(e){"string"!==typeof e&&(e=String(e));if(/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function i(e){"string"!==typeof e&&(e=String(e));return e}function l(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};t.iterable&&(r[Symbol.iterator]=function(){return r});return r}function s(e){this.map={};e instanceof s?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}s.prototype.append=function(e,t){e=a(e);t=i(t);var r=this.map[e];this.map[e]=r?r+","+t:t};s.prototype["delete"]=function(e){delete this.map[a(e)]};s.prototype.get=function(e){e=a(e);return this.has(e)?this.map[e]:null};s.prototype.has=function(e){return this.map.hasOwnProperty(a(e))};s.prototype.set=function(e,t){this.map[a(e)]=i(t)};s.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)};s.prototype.keys=function(){var e=[];this.forEach(function(t,r){e.push(r)});return l(e)};s.prototype.values=function(){var e=[];this.forEach(function(t){e.push(t)});return l(e)};s.prototype.entries=function(){var e=[];this.forEach(function(t,r){e.push([r,t])});return l(e)};t.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);function c(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=true}function u(e){return new Promise(function(t,r){e.onload=function(){t(e.result)};e.onerror=function(){r(e.error)}})}function p(e){var t=new FileReader;var r=u(t);t.readAsArrayBuffer(e);return r}function f(e){var t=new FileReader;var r=u(t);t.readAsText(e);return r}function h(e){var t=new Uint8Array(e);var r=new Array(t.length);for(var n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function d(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);t.set(new Uint8Array(e));return t.buffer}function m(){this.bodyUsed=false;this._initBody=function(e){this._bodyInit=e;if(e)if("string"===typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&n(e)){this._bodyArrayBuffer=d(e.buffer);this._bodyInit=new Blob([this._bodyArrayBuffer])}else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=d(e)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))};if(t.blob){this.blob=function(){var e=c(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))};this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}}this.text=function(){var e=c(this);if(e)return e;if(this._bodyBlob)return f(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(h(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)};t.formData&&(this.formData=function(){return this.text().then(g)});this.json=function(){return this.text().then(JSON.parse)};return this}var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e){var t=e.toUpperCase();return v.indexOf(t)>-1?t:e}function y(e,t){t=t||{};var r=t.body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url;this.credentials=e.credentials;t.headers||(this.headers=new s(e.headers));this.method=e.method;this.mode=e.mode;if(!r&&null!=e._bodyInit){r=e._bodyInit;e.bodyUsed=true}}else this.url=String(e);this.credentials=t.credentials||this.credentials||"omit";!t.headers&&this.headers||(this.headers=new s(t.headers));this.method=b(t.method||this.method||"GET");this.mode=t.mode||this.mode||null;this.referrer=null;if(("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})};function g(e){var t=new FormData;e.trim().split("&").forEach(function(e){if(e){var r=e.split("=");var n=r.shift().replace(/\+/g," ");var o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}});return t}function E(e){var t=new s;e.split(/\r?\n/).forEach(function(e){var r=e.split(":");var n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}});return t}m.call(y.prototype);function w(e,t){t||(t={});this.type="default";this.status="status"in t?t.status:200;this.ok=this.status>=200&&this.status<300;this.statusText="statusText"in t?t.statusText:"OK";this.headers=new s(t.headers);this.url=t.url||"";this._initBody(e)}m.call(w.prototype);w.prototype.clone=function(){return new w(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})};w.error=function(){var e=new w(null,{status:0,statusText:""});e.type="error";return e};var _=[301,302,303,307,308];w.redirect=function(e,t){if(-1===_.indexOf(t))throw new RangeError("Invalid status code");return new w(null,{status:t,headers:{location:e}})};e.Headers=s;e.Request=y;e.Response=w;e.fetch=function(e,r){return new Promise(function(n,o){var a=new y(e,r);var i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:E(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new w(t,e))};i.onerror=function(){o(new TypeError("Network request failed"))};i.ontimeout=function(){o(new TypeError("Network request failed"))};i.open(a.method,a.url,true);"include"===a.credentials&&(i.withCredentials=true);"responseType"in i&&t.blob&&(i.responseType="blob");a.headers.forEach(function(e,t){i.setRequestHeader(t,e)});i.send("undefined"===typeof a._bodyInit?null:a._bodyInit)})};e.fetch.polyfill=true})("undefined"!==typeof self?self:this)},536:function(e,t,r){e.exports=r(537)},537:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"outline",function(){return s});var n=r(0);var o=r.n(n);var a=r(83);var i=r.n(a);var l=r(84);var s={title:{it:"Bando 2018 per Scambio estivo con ACCADEMIA DELLE BELLE ARTI DI FIRENZE",zh:"2018中国四川美术学院 赴意大利佛罗伦萨美术学院暑期交换生项目",en:"2018 Florence Academy of Fine Arts Summer Exchange Program"},slug:"2018_accademia",date:"2018-4-17",image:"https://user-images.githubusercontent.com/50838/28487049-1f6156ac-6ea7-11e7-99cc-0ee227c40ba1.png",description:"佛罗伦萨美术学院，建校可追溯到14世纪的文艺复兴时期，前身是意大利绘画学院，成立于1562年，背靠文艺复兴之都佛罗伦萨，为西方艺术教育作出了杰出贡献，是世界上第一所美术学院，现隶属意大利教育部。“世界美术学院之母，四大美术学院之首”这是对佛罗伦萨美术学院最简洁的评价",keywords:["中艺国际","驻留计划","艺术家","artisti","artist","佛罗伦萨","中国艺术家赴意大利"],links:{facebook:"https://www.facebook.com/zhong.art.it"}};t["default"]=Object(l["a"])(s)(i()(function(e){return o.a.createElement("div",{className:"_markdown_"},o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"项目历程")),o.a.createElement(e.p,null,"佛罗伦萨美术学院，建校可追溯到14世纪的文艺复兴时期，前身是意大利绘画学院，成立于1562年，背靠文艺复兴之都佛罗伦萨，为西方艺术教育作出了杰出贡献，是世界上第一所美术学院，现隶属意大利教育部。“世界美术学院之母，四大美术学院之首”这是对佛罗伦萨美术学院最简洁的评价。"),o.a.createElement(e.p,null,"2015年5月，佛罗伦萨美术学院院长Cecioni先生受四川美术学院罗中立院长邀请，正式访问四川美术学院，双方就签订两校校际合作备忘录，针对美院教师访学，交换生项目，校际展览等达成一致。2016年11月，受四川美术学院庞茂琨院长邀请，佛罗伦萨美术学院作为合作院校参加了“2016学院本色”美院联展。"),o.a.createElement(e.p,null,"2017年7月，佛罗伦萨美术学院与四川美术学院正式签订两校校际合作协议，肯定了两校为建立校际合作，共同推进学院建设的同时，明确表示2018年暑期，为方便广大四川美术学院优秀学子海外交流学习、深化了西方艺术教育体系、开阔眼界，拟定了两校交换生项目。"),o.a.createElement(e.p,null,"2018年，佛罗伦萨美术学院院长Rocca先生受四川美术学院庞茂琨院长邀请，访问四川美术学院，进一步加强推进了双方教师交流互访、学生交流课程、美院之间校际合作协议等，并明确表示2018年暑期，首批四川美术学院学生暑期交换课程将于今年7月在佛罗伦萨美术学院展开，此次短期课程学术意义重大，将是佛美历史上首次为中国艺术类高等院校提供暑期交换机会。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"项目组成与特色")),o.a.createElement(e.p,null,"暑期交换生课程旨在打开艺术思考维度，为学生创造海外交流学习机会。由「",o.a.createElement(e.strong,null,"佛美课程学习"),"」、「",o.a.createElement(e.strong,null,"博物馆考察"),"」、「",o.a.createElement(e.strong,null,"历史人文考察"),"」、「",o.a.createElement(e.strong,null,"艺术家工作室参访"),"」四部分组成，学员将师从佛罗伦萨美术学院教授，在佛美校园内展开暑期交换课程的学习； 从文艺复兴的发源地——佛罗伦萨出发，考察知名艺术博物馆，沉浸在世界一流的文化艺术宝库中; 走访源自中世纪的历史古镇、知名当代艺术家工作室，细看意大利古典与现代艺术的发展与交织，品读西方文化与艺术的发展脉络，提升自我的艺术感悟："),o.a.createElement(e.ol,null,o.a.createElement(e.li,null,o.a.createElement(e.p,null,"学生将在佛罗伦萨美术学院的教室内学习不同学科的精选课程，开展为期10天，共计42课时的交流课程，开设绘画、新媒体影像、艺术史（文艺复兴时期和当代艺术）和西方艺术市场4门课。所有课程由佛罗伦萨美术学院知名教授任教，帮助学生梳理专业知识的储备，课堂上强调师生互动，激发学生的独立艺术思维，保障课程教学质量（所有课程均配有翻译老师）。")),o.a.createElement(e.li,null,o.a.createElement(e.p,null,"拓宽同学们的国际化视野，重点考察意大利罗马和佛罗伦萨两座欧洲艺术文化圣地。课程周末安排意大利历史文化古镇人文考察，探索西方文明发展的历史脉络，深入感受意大利的传统文化魅力。")),o.a.createElement(e.li,null,o.a.createElement(e.p,null,"参观考察意大利主要美术馆、博物馆、教堂，如乌菲奇美术馆，梵蒂冈博物馆，意大利国立现代美术馆，贝里尼雕塑博物馆，圣彼得大教堂等等，由佛美教授带领大家参观并亲身讲解，通过这些人类的美学殿堂，感受西方文化从古罗马的恢弘遗迹、中世纪的神圣庄严，到文艺复兴的人性光辉，有助于学生整理自己的艺术理解脉络。")),o.a.createElement(e.li,null,o.a.createElement(e.p,null,"带领学生访问知名艺术家马可·巴诺利工作室，了解国际知名艺术家的艺术生活、创作状态，工作室占地超过800平米，即是艺术家的创作场地，也是艺术家的展示空间，是一次不可多得的学习体验。"))),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"行程安排")),o.a.createElement(e.p,null,"佛罗伦美术学院暑期交换生课程：",o.a.createElement(e.strong,null,"7月21日- 31日")),o.a.createElement(e.p,null,"课程开设"),o.a.createElement(e.ul,null,o.a.createElement(e.li,null,"绘画"),o.a.createElement(e.li,null,"新媒体影像"),o.a.createElement(e.li,null,"艺术史（文艺复兴艺术史、当代艺术史）"),o.a.createElement(e.li,null,"西方艺术市场"),o.a.createElement(e.li,null,"访问意大利当代艺术家马可·巴诺利工作室")),o.a.createElement(e.p,null,"古城艺术考察：利用周末时间，参观锡耶纳、圣吉米尼亚诺、比萨等意大利历史文化古城"),o.a.createElement(e.p,null,"意大利艺术博物馆考察：8月1日-3日（以及交换生课程间隙）"),o.a.createElement(e.p,null,"部分美术馆简介："),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"乌菲奇美术馆"),"，世界著名绘画艺术博物馆，以收藏欧洲文艺复兴时期和其他各画派代表人物如达·芬奇、米开朗基罗、拉斐尔、波提切利、丁托列托、伦勃朗、鲁本斯、凡·代克等作品而驰名，并藏有古希腊、罗马的雕塑作品，素有“文艺复兴艺术宝库”之称。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"梵蒂冈博物馆"),"，世界上最伟大的博物馆之一，其中的藏品是多个世纪以来罗马天主教会收集、积累的成果。艺术藏品十分丰富，绘画上如米开朗琪罗创作的《创世纪》和《最后的审判》，拉斐尔的《雅典学院》，达芬奇的《圣杰洛姆》和卡拉瓦乔的《基督下十字架》等，雕塑作品有古罗马的雕塑作品拉奥孔、太阳神阿波罗、古罗马雕塑墓碑和碑铭等。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"碧提宫"),"，佛罗伦萨最宏伟的建筑之—，原为美帝奇家族的住家。收藏着历任梅迪奇家族收集来的艺术珍品，包括拉斐尔、波提切利、提香等艺术家的作品，宫殿内的天花板上还有精美的湿壁画。拉斐尔在文艺复兴鼎盛时期的作品《椅子上的圣母》和《带面纱的女士》都收藏在这里。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"意大利国立现代美术馆"),"，开馆于1883年，意大利收藏现代美术作品最丰富的美术馆。收藏有19至20世纪的新古典主义、马基亚伊奥利画派、未来主义、形而上画派、抽象主义等的绘画作品。是了解意大利现代艺术发展脉络的百科全书。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"佛罗伦萨美术学院美术馆"),"，成立于1784年，每年吸引着数以百万的游客前来朝拜。最有名的展品是米开朗基罗的大卫像。除此之外，还可以看到米开朗基罗其他的作品，乔托、契马布埃、维拉基奥、波提切利等艺术大师的作品，以及十九世纪美术学院的优秀雕塑留校作品。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"博尔盖塞美术馆"),"，主要收藏意大利文艺复兴和巴洛克美术藏品。美术馆的建筑在历史上曾是罗马贵族博尔盖塞家族的住所。1903年之后，这里成为意大利的国立美术馆。馆内主要收藏了济安·贝尼尼的多件经典原作，如《阿波罗与黛芙妮》，《被掳掠的珀耳塞福涅》等，还有乔尔乔内、拉斐尔、提香等众多大师的绘画作品。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"其他"),"，其他艺术考察例如圣马可教堂（安吉利科湿壁画）、圣罗伦佐教堂和圣彼得镣铐教堂（米开朗基罗的晨昏昼夜和摩西）、新圣母大殿（马萨乔的圣三位一体）、古罗马斗兽场和古罗马遗迹、贝里尼喷泉雕塑等等。"),o.a.createElement(e.p,null,"佛罗伦萨暑期交换生项目管理"),o.a.createElement(e.p,null,"交换学习期间，学生应自觉接受项目组织方、意大利佛罗伦萨美术学院方的管理："),o.a.createElement(e.ol,null,o.a.createElement(e.li,null,"7月20日学员落地意大利后，将由佛罗伦萨美术学院老师与四川美术学院带队老师对接。统一带领学员办理入学手续，住宿登记，学员信息核对等，向每位学员发放佛罗伦萨美院短期课程在读证明，学员每日凭在读证明入校，并记考勤。"),o.a.createElement(e.li,null,"每日课程结束后，学员将由带队老师例行管理监督，保障学员的出行纪律和在意大利期间的安全。"),o.a.createElement(e.li,null,"艺术博物馆考察期间，学员的食、宿、行将统一安排，每日出行前及结束后将由带队老师核对学员人数，整理学员意见和反馈，保证学习考察的质量。"),o.a.createElement(e.li,null,"行程结束后，带队老师和随同人员将确保每位学员顺利办理安检登机等手续，安全乘坐返程飞机，结束为期15天的暑期交换课程。")),o.a.createElement(e.h5,null),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"证书颁发")),o.a.createElement(e.p,null,"学习期满，将根据学员每日考勤和课堂表现情况进行考核，考核成绩合格者，为其颁发《佛罗伦萨美术学院短期交流课程结业证书》。学员返校后，凭证书可转换相应学分，具体学分转换制度细节将在课程进程中公布。"),o.a.createElement(e.h5,null),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"学费标准及交费方式")),o.a.createElement(e.p,null,"学费标准：23000元/人"),o.a.createElement(e.p,null,"包含：境外保险费、住宿、餐费、艺术考察期间的旅行包车费、佛美短期课程学费、博物馆画廊等参观地点门票费用、短期课程学生证、佛美场地及相关设施使用维护费等。"),o.a.createElement(e.p,null,"不包含：机票及签证（报名确认后，佛美为学生开学习邀请函，学生可送签至重庆海外旅业集团有限公司办理，有相关工作人员对接）"),o.a.createElement(e.p,null,"川美也提供了短期海外课程奖学金，每人每次",o.a.createElement(e.strong,null,"5000"),"元，项目学习结束后凭学习证书，于返校报到后1个月内申请。"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"需提交材料：")),o.a.createElement(e.p,null,"·《四川美术学院学生出国/境申请表》"),o.a.createElement(e.p,null,"·国外学校正式邀请信原件及复印件"),o.a.createElement(e.p,null,"·佛罗伦萨美术学院短期交流课程结业证书"),o.a.createElement(e.h5,null),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"时间细则")),o.a.createElement(e.p,null,"项目总时间: 2018年7月19日- 8月4日（15天）"),o.a.createElement(e.p,null,"出发时间: 2018年7月19日"),o.a.createElement(e.p,null,"返程时间: 2018年8月3日"),o.a.createElement(e.p,null,"报名人数限制: 25人"),o.a.createElement(e.p,null,"报名截止日期: 2018年5月31日"),o.a.createElement(e.p,null,"课程地点: 意大利佛罗伦萨美术学院"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"报名咨询"),"023- 6592 0818 / 1098  川美国际（工作时间8:30-12:00/14:00-17:30）"),o.a.createElement(e.p,null,"邮箱：zhongart@hotmail.com"),o.a.createElement(e.p,null,"微信咨询(微信服务号)：zhongartit"),o.a.createElement(e.p,null,"四川美术学院国际处"),o.a.createElement(e.p,null,"中艺国际(四川美术学院佛罗伦萨工作室)"),o.a.createElement(e.p,null,o.a.createElement(e.strong,null,"报名表格")),o.a.createElement(e.p,null,"2018暑期佛美报名所需材料（护照可适时后补） ",o.a.createElement(e.a,{href:"https://raw.githubusercontent.com/carllx/zhongart_Pages/master/static/contents/news/2018%E6%9A%91%E6%9C%9F%E4%BD%9B%E7%BE%8E%E6%8A%A5%E5%90%8D%E6%89%80%E9%9C%80%E6%9D%90%E6%96%99%EF%BC%88%E6%8A%A4%E7%85%A7%E5%8F%AF%E9%80%82%E6%97%B6%E5%90%8E%E8%A1%A5%EF%BC%89.pdf"},"下载")),o.a.createElement(e.p,null,"2018暑期佛美交换生项目申请表  ",o.a.createElement(e.a,{href:"https://raw.githubusercontent.com/carllx/zhongart_Pages/master/static/contents/news/2018%E4%BD%9B%E7%BE%8E%E6%9A%91%E6%9C%9F%E4%BA%A4%E6%8D%A2%E7%94%9F%E9%A1%B9%E7%9B%AE%E7%94%B3%E8%AF%B7%E8%A1%A8.pdf"},"下载")),o.a.createElement(e.p,null,"2018暑期交换课程川美学生出国（境）家长知情保证书 ",o.a.createElement(e.a,{href:"https://raw.githubusercontent.com/carllx/zhongart_Pages/master/static/contents/news/2018%E6%9A%91%E6%9C%9F%E4%BA%A4%E6%8D%A2%E8%AF%BE%E7%A8%8B%E5%B7%9D%E7%BE%8E%E5%AD%A6%E7%94%9F%E5%87%BA%E5%9B%BD%EF%BC%88%E5%A2%83%EF%BC%89%E5%AE%B6%E9%95%BF%E7%9F%A5%E6%83%85%E4%BF%9D%E8%AF%81%E4%B9%A6.pdf"},"下载")))}))},59:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(1);var i=r.n(a);var l=r(2);var s=r.n(l);var c=r(4);var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){m(t,e);function t(e){h(this,t);var r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.ctx={zh:"Copyright © 2017 中艺国际 All rights reserved",it:"Copyright © 2017 ZHONG ART INTERNATIONAL All rights reserved",en:"Copyright © 2017 ZHONG ART INTERNATIONAL All rights reserved"};return r}p(t,[{key:"render",value:function e(){var t;return o.a.createElement("div",u({},Object(a["css"])((t={color:l["ui"].color.b_o2,position:"relative",right:0,left:0,bottom:0,textAlign:"center",paddingBottom:"0.5rem"},f(t,"textAlign","center"),f(t,"margin",this.props.landscape?"0 5em 1em 5em":"0 1em 1em 1em"),t)),{key:"COPYRIGHT_"+this.props.language}),this.ctx[this.props.language])}}]);return t}(n["PureComponent"]);var b=function e(t){return{landscape:t.Root.view_size.is_landscape,language:t.Root.language}};t["a"]=Object(c["connect"])(b,null)(v)},83:function(e,t,r){"use strict";var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var o=function e(t,r){if(t.length>=0&&t.raw||r&&r.length&&r.raw)throw new Error("you forgot to add 'markdown-in-js/babel' to your babel plugins");if("function"===typeof t)return e({},t);if(!r)return function(r){return e(t,r)};if("function"===typeof r)return r(n({br:"br",a:"a",img:"img",em:"em",strong:"strong",p:"p",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",code:"code",pre:"pre",hr:"hr",blockquote:"blockquote",ul:"ul",ol:"ol",li:"li"},t))};e.exports=o},84:function(e,t,r){"use strict";t["a"]=x;var n=r(0);var o=r.n(n);var a=r(3);var i=r(34);var l=r.n(i);var s=r(1);var c=r.n(s);var u=r(18);var p=r.n(u);var f=r(33);var h=r.n(f);var d=r(2);var m=r.n(d);var v=r(24);var b=r.n(v);var y=r(12);var g=r(35);var E=r(54);var w=r(57);var _=r(38);var O=r(44);var P=r(59);var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};var A=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function T(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function x(e){return function(t){var r=function(r){T(n,r);function n(){k(this,n);return R(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}A(n,[{key:"getShareLink",value:function t(r){return"/share?slug="+e.slug+"&redirectTo="+encodeURIComponent(r)}},{key:"render",value:function r(){var n=this.props||{language:"zh"},a=n.language;var i=this.props.view_size||{view_size:{is_landscap:false}},l=i.is_landscape;return o.a.createElement("main",null,o.a.createElement(h.a,null,o.a.createElement("title",null,e.title[a]),o.a.createElement("meta",{content:"ZAI - "+e.title[a],name:"title"}),o.a.createElement("meta",{content:"ZAI - "+e.title[a],property:"og:title"}),o.a.createElement("meta",{content:"ZAI - "+e.title.zh+" "+e.title[a]+" "+e.title.en,name:"description"}),o.a.createElement("meta",{content:"ZAI - "+e.title.zh+" "+e.title[a]+" "+e.title.en,property:"og:description"}),o.a.createElement("meta",{content:e.keywords+" ZAI,中艺国际, zhongart, firenze, Gallery, arte, 佛罗伦萨 ",name:"keywords"}),o.a.createElement("meta",{content:"article",property:"og:type"}),o.a.createElement("meta",{content:"http://www.zhongart.it/news/"+e.slug,property:"og:url"})),o.a.createElement("div",Object(s["css"])({overflowY:"auto",marginTop:(l?d["GR"].vw(4):d["GR"].vw(6))+"vw",marginBottom:"0",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),o.a.createElement("div",Object(s["css"])({width:l?"65vw":"90vw"}),o.a.createElement("h1",Object(s["css"])({textAlign:"center"}),e.title[a])),o.a.createElement("div",j({},Object(s["css"])({width:l?"65vw":"95vw",display:"flex",flexDirection:"column",marginBottom:d["GR"].vw(3)+"vh"}),{key:e.slug+"-"+this.props.language,id:"win_scroller"}),t),o.a.createElement(P["a"],null)),o.a.createElement(p.a,null,o.a.createElement(w["a"],{show_on_init:!l})),o.a.createElement(p.a,null,o.a.createElement(g["a"],null)),o.a.createElement(E["a"],null))}}]);return n}(n["PureComponent"]);var i=function e(t){return{view_size:t.Root.view_size,language:t.Root.language}};var c=function e(t){return{switchLanguage:Object(a["bindActionCreators"])(y["h"],t),onDevice:Object(a["bindActionCreators"])(y["b"],t)}};return l()(O["a"],i,c)(r)}}}},[536]);return{page:e.default}});