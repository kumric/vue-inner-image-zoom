(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["docs"],{"0a14":function(e,t,r){},"14c3":function(e,t,r){var n=r("c6b6"),o=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},5319:function(e,t,r){"use strict";var n=r("d784"),o=r("825a"),i=r("7b0b"),a=r("50c4"),s=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),v=Math.max,d=Math.min,f=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var _=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,b=_?"$":"$0";return[function(r,n){var o=c(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,o,n):t.call(String(o),r,n)},function(e,n){if(!_&&m||"string"===typeof n&&-1===n.indexOf(b)){var i=r(t,e,this,n);if(i.done)return i.value}var c=o(e),f=String(this),p="function"===typeof n;p||(n=String(n));var g=c.global;if(g){var E=c.unicode;c.lastIndex=0}var S=[];while(1){var y=u(c,f);if(null===y)break;if(S.push(y),!g)break;var I=String(y[0]);""===I&&(c.lastIndex=l(f,a(c.lastIndex),E))}for(var T="",R=0,A=0;A<S.length;A++){y=S[A];for(var C=String(y[0]),w=v(d(s(y.index),f.length),0),z=[],k=1;k<y.length;k++)z.push(h(y[k]));var $=y.groups;if(p){var P=[C].concat(z,w,f);void 0!==$&&P.push($);var U=String(n.apply(void 0,P))}else U=x(C,f,w,z,$,n);w>=R&&(T+=f.slice(R,w)+U,R=w+C.length)}return T+f.slice(R)}];function x(e,r,n,o,a,s){var c=n+e.length,l=o.length,u=g;return void 0!==a&&(a=i(a),u=p),t.call(s,u,(function(t,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=a[i.slice(1,-1)];break;default:var u=+i;if(0===u)return t;if(u>l){var v=f(u/10);return 0===v?t:v<=l?void 0===o[v-1]?i.charAt(1):o[v-1]+i.charAt(1):t}s=o[u-1]}return void 0===s?"":s}))}}))},6547:function(e,t,r){var n=r("a691"),o=r("1d80"),i=function(e){return function(t,r){var i,a,s=String(o(t)),c=n(r),l=s.length;return c<0||c>=l?e?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):i:e?s.slice(c,c+2):a-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"7e35":function(e,t,r){"use strict";var n=r("0a14"),o=r.n(n);o.a},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),o=r("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,s=i,c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],v=c||u||l;v&&(s=function(e){var t,r,o,s,v=this,d=l&&v.sticky,f=n.call(v),p=v.source,g=0,h=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==e[v.lastIndex-1])&&(p="(?: "+p+")",h=" "+h,g++),r=new RegExp("^(?:"+p+")",f)),u&&(r=new RegExp("^"+p+"$(?!\\s)",f)),c&&(t=v.lastIndex),o=i.call(d?r:v,h),d?o?(o.input=o.input.slice(g),o[0]=o[0].slice(g),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:c&&o&&(v.lastIndex=v.global?o.index+o[0].length:t),u&&o&&o.length>1&&a.call(o[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),o=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),o=r("d039"),i=r("b622"),a=r("9263"),s=r("9112"),c=i("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),v=i("replace"),d=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),f=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,v){var p=i(e),g=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=g&&!o((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!g||!h||"replace"===e&&(!l||!u||d)||"split"===e&&!f){var _=/./[p],m=r(p,""[e],(function(e,t,r,n,o){return t.exec===a?g&&!o?{done:!0,value:_.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=m[0],x=m[1];n(String.prototype,e,b),n(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}v&&s(RegExp.prototype[p],"sham",!0)}},eba1:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"docs"},[r("h2",{staticClass:"docs__heading"},[e._v("Docs")]),r("nav",{staticClass:"docs__nav"},[r("router-link",{attrs:{to:{path:"docs",hash:"#installation"}},nativeOn:{click:function(t){return e.scrollToHash("#installation")}}},[e._v(" Installation ")]),r("router-link",{attrs:{to:{path:"docs",hash:"#styling"}},nativeOn:{click:function(t){return e.scrollToHash("#styling")}}},[e._v(" Styling ")]),r("router-link",{attrs:{to:{path:"docs",hash:"#usage"}},nativeOn:{click:function(t){return e.scrollToHash("#usage")}}},[e._v("Usage")]),r("router-link",{attrs:{to:{path:"docs",hash:"#props"}},nativeOn:{click:function(t){return e.scrollToHash("#props")}}},[e._v("Props")])],1),e._m(0)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"docs__content"},[r("div",[r("h3",{attrs:{id:"installation"}},[e._v("Installation")]),r("h4",[e._v("NPM")]),r("pre",{staticClass:"docs__code"},[r("code",{pre:!0},[e._v("npm install vue-inner-image-zoom")])]),r("h4",[e._v("Yarn")]),r("pre",{staticClass:"docs__code"},[r("code",{pre:!0},[e._v("yarn add vue-inner-image-zoom")])])]),r("div",[r("h3",{attrs:{id:"styling"}},[e._v("Styling")]),r("h4",[e._v("Import")]),r("p",[e._v("Import the CSS from your node_modules directory:")]),r("pre",{staticClass:"docs__code"},[r("code",{pre:!0},[e._v("import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';")])])]),r("div",[r("h3",{attrs:{id:"usage"}},[e._v("Usage")]),r("p",[e._v("Import the component and include in your template:")]),r("pre",{staticClass:"docs__code"},[r("code",{pre:!0},[e._v("import InnerImageZoom from 'vue-inner-image-zoom';"),r("br"),r("br"),e._v("..."),r("br"),r("br"),e._v("export default {"),r("br"),e._v("  components: {"),r("br"),e._v("    'inner-image-zoom': InnerImageZoom"),r("br"),e._v("  }"),r("br"),e._v("}"),r("br"),r("br"),e._v("..."),r("br"),r("br"),e._v('<inner-image-zoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />')])])]),r("div",[r("h3",{attrs:{id:"props"}},[e._v("Props")]),r("ul",{staticClass:"docs__props-list"},[r("li",[r("b",[e._v("src (String): ")]),e._v("Required. URL for the original image.")]),r("li",[r("b",[e._v("srcSet (String): ")]),e._v("Default srcset attribute for a responsive original image.")]),r("li",[r("b",[e._v("sizes (String): ")]),e._v("Default sizes attribute for use with srcset.")]),r("li",[r("b",[e._v("sources (Array): ")]),e._v("A list of image sources for using the picture tag to serve the appropriate original image (see below for more details). ")]),r("li",[r("b",[e._v("zoomSrc (String): ")]),e._v("URL for the larger zoom image. Falls back to original image src if not defined. ")]),r("li",[r("b",[e._v("alt (String): ")]),e._v("Alternative text for the original image.")]),r("li",[r("b",[e._v("moveType (String): ")]),e._v("Default pan. Accepts pan or drag options. The user behavior for moving zoomed images on non-touch devices. ")]),r("li",[r("b",[e._v("fadeDuration (Number): ")]),e._v("Default 150. Fade transition time in milliseconds. If zooming in on transparent images, set this to 0 for best results. ")]),r("li",[r("b",[e._v("fullscreenOnMobile (Boolean): ")]),e._v("Default false. Enables fullscreen zoomed image on touch devices below a specified breakpoint. ")]),r("li",[r("b",[e._v("mobileBreakpoint (Number): ")]),e._v("Default 640. The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true. ")]),r("li",[r("b",[e._v("className (String): ")]),e._v("Custom classname for styling the component.")]),r("li",[r("b",[e._v("afterZoomIn (Function): ")]),e._v("Function to be called after zoom in.")]),r("li",[r("b",[e._v("afterZoomOut (Function): ")]),e._v("Function to be called after zoom out.")])]),r("h4",[e._v("Sources")]),r("p",[e._v(" This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"}},[e._v(" here")]),e._v(": ")]),r("ul",{staticClass:"docs__props-list"},[r("li",[r("b",[e._v("srcSet (String): ")]),e._v("Srcset attribute for source tag.")]),r("li",[r("b",[e._v("sizes (String): ")]),e._v("Sizes attribute for source tag.")]),r("li",[r("b",[e._v("media (String): ")]),e._v(" An attribute containing a media condition for use with the srcset. ")]),r("li",[r("b",[e._v("type (String): ")]),e._v("An image MIME type. This is useful for using newer formats like WebP. ")])])])])}],i=(r("ac1f"),r("5319"),{name:"Docs",mounted:function(){var e=this;document.body.style.height="auto",this.$route.hash&&setTimeout((function(){return e.scrollToHash(e.$route.hash.replace("#",""))}),1)},destroyed:function(){document.body.style.height="100%"},methods:{scrollToHash:function(e){window.scroll(0,document.getElementById(e.replace("#","")).offsetTop)}}}),a=i,s=(r("7e35"),r("2877")),c=Object(s["a"])(a,n,o,!1,null,"2a31859c",null);t["default"]=c.exports}}]);
//# sourceMappingURL=docs.ac9d2d37.js.map