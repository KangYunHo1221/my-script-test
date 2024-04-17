!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).tossAppBridge={})}(this,(function(e){"use strict";function n(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function r(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e,n){var r=n.isSupported;return Object.defineProperty(e,"isSupported",{get:r}),e}var u=globalThis;function c(){if(null==u||!u.navigator)return"0.0.0";var e=u.navigator.userAgent,n=/TossApp\/((\d+).(\d+).(\d+))/g.exec(e);return n?n[1]:"0.0.0"}function l(){return!(void 0===u||!u.navigator)&&u.navigator.userAgent.toLowerCase().includes("android")}function d(){if(void 0===u||!u.navigator)return!1;var e=u.navigator.userAgent.toLowerCase();return/iphone|ipad|ipod/.test(e)}function f(){var e;return null!=(null==u||null===(e=u.__toss)||void 0===e?void 0:e.appBridgeEnvironment)?u.__toss.appBridgeEnvironment:{type:p(),appVersion:c()}}function p(){if(void 0!==u&&(void 0!==u.TossApp||null!=(null===(e=u.webkit)||void 0===e?void 0:e.messageHandlers)&&u.navigator&&u.navigator.userAgent.toLowerCase().includes("tossapp"))){if(d())return"toss-ios-web";if(l())return"toss-android-web"}else{if(d())return"browser-ios";if(l())return"browser-android"}var e;return"browser-unknown"}function g(){switch(f().type){case"browser-android":case"toss-android-rn":case"toss-android-web":return!0;default:return!1}}function v(){switch(f().type){case"browser-ios":case"toss-ios-rn":case"toss-ios-web":return!0;default:return!1}}function b(){switch(f().type){case"toss-ios-rn":case"toss-ios-web":case"toss-android-rn":case"toss-android-web":return!0;default:return!1}}var m={get type(){switch(f().type){case"toss-ios-web":case"toss-ios-rn":return"ios-toss";case"toss-android-rn":case"toss-android-web":return"android-toss";case"browser-ios":return"ios-not-toss";case"browser-android":return"android-not-toss";default:return"unknown"}},get isIos(){return v()},get isAos(){return g()},get isAndroid(){return g()},get isTossApp(){return b()},get isTossIos(){return v()&&b()},get isTossAos(){return g()&&b()},get isTossAndroid(){return g()&&b()},get isRN(){return function(){switch(f().type){case"toss-android-rn":case"toss-ios-rn":return!0;default:return!1}}()}};"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var y=function(e,n){return e(n={exports:{}},n.exports),n.exports}((function(e,n){e.exports=function(){var e=/^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;function n(e,n){return-1===e.indexOf(n)?e.length:e.indexOf(n)}function r(e){var r=e.replace(/^v/,"").replace(/\+.*$/,""),t=n(r,"-"),o=r.substring(0,t).split(".");return o.push(r.substring(t+1)),o}function t(e){return isNaN(Number(e))?e:Number(e)}function o(n){if("string"!=typeof n)throw new TypeError("Invalid argument expected string");if(!e.test(n))throw new Error("Invalid argument not valid semver ('"+n+"' received)")}return function(e,n){[e,n].forEach(o);for(var i=r(e),s=r(n),a=0;a<Math.max(i.length-1,s.length-1);a++){var u=parseInt(i[a]||0,10),c=parseInt(s[a]||0,10);if(u>c)return 1;if(c>u)return-1}var l=i[i.length-1],d=s[s.length-1];if(l&&d){var f=l.split(".").map(t),p=d.split(".").map(t);for(a=0;a<Math.max(f.length,p.length);a++){if(void 0===f[a]||"string"==typeof p[a]&&"number"==typeof f[a])return-1;if(void 0===p[a]||"string"==typeof f[a]&&"number"==typeof p[a])return 1;if(f[a]>p[a])return 1;if(p[a]>f[a])return-1}}else if(l||d)return l?-1:1;return 0}}()}));function h(e){return"always"===e?"0.0.0":"never"===e?"999.99.99":e}var w="5.79.0",_="5.72.0";function A(e){if(!m.isTossApp)return!1;var n,r,t,o=(r=(n=e).ios,t=n.android,{ios:"string"==typeof r?{web:r,rn:r}:r,android:"string"==typeof t?{web:t,rn:t}:t}),i={ios:o.ios.web,android:o.android.web},s={ios:O(h(o.ios.rn),w),android:O(h(o.android.rn),_)},a=m.isRN?s:i,u=m.isTossIos?h(a.ios.trim()):m.isTossAos?h(a.android.trim()):"0.0.0",c=f().appVersion;return y(c,u)>=0}function O(e,n){return y(e,n)>0?e:n}function k(e){return e?(e^16*Math.random()>>e/4).toString(16):(String(1e7)+1e3+4e3+8e3+1e11).replace(/[018]/g,k)}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.prefix,r=void 0===n?"":n;return"_tab_cb_".concat(r,"_").concat(k())}var j="\n  display: inline-block;\n  padding: 2px 4px;\n  color: #fff;\n";function x(e){var n=e.title,r=e.titleStyle,t="%cTossAppBridge%c".concat(n,"%c"),o=["".concat(j,"\n    background-color: #999;"),"".concat(j,"\n    background-color: #0d64ad;\n    ").concat(r),""];function i(e){var n=e.message,r=e.style;t="".concat(t).concat(void 0===r?"":"%c").concat(n),void 0!==r&&o.push(r)}return{log:function(){var e;return(e=console).debug.apply(e,[t].concat(o))},append:i,appendLine:function(e){var n=e.message,r=e.style;i({message:"\n"}),i({message:n,style:r})}}}function E(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.titleStyle;if("undefined"!=typeof process&&"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV){var o=x({title:e,titleStyle:t});Array.isArray(n)?(n.forEach((function(e){var n=Array.isArray(e),r=n?"\n".concat("".concat(e[0]," ").padEnd(40,"-")):"";o.appendLine({message:"".concat(r)}),T(n?e[1]:e).forEach(o.append)})),o.log()):T(n).forEach(o.append)}}function T(e){return void 0===e?[]:Object.keys(e).map((function(n){return[{message:"\n"},{message:"[".concat(n,"] ")},{message:(r=JSON.stringify(e[n]),{orElse:function(e){return void 0===r?e:r}}).orElse("undefined").replace(/\\n/g,"\n"),style:"font-weight: 700;"}];var r})).reduce((function(e,n){return[].concat(i(e),i(n))}),[])}var B,M={warn:function(e){return E(e.title,e.target,{titleStyle:"\n      background-color: #519cea;\n    "})},log:E};function N(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.prefix,t=u;null!=t&&t.tossWebBridge||(t.tossWebBridge={}),null!=t&&t.tossWebBridge._callbacks||(t.tossWebBridge._callbacks={});var o=S({prefix:r}),i=W(e);if(void 0!==i)return t.tossWebBridge._callbacks[o]=i,"(\n    function(){\n      return (\n        typeof tossWebBridge !== 'undefined' &&\n        typeof tossWebBridge._callbacks.".concat(o," === 'function' &&\n        tossWebBridge._callbacks.").concat(o,".apply(tossWebBridge._callbacks, arguments)\n      );\n    }\n  )").replace(/(\n|\s{2,})/g," ");M.warn({title:"RegisterCallback argument invariant not matched",target:{message:"Only functions or global function names (properties of window) can be supplied to registerCallback."}})}function W(e){if("function"==typeof e)return e;var n=u[e];return void 0!==n?n:void 0}function P(e,n){if(void 0!==n){var r={};for(var t in n){var o=n[t];C(o)?r[t]=P(e,o):r[t]="function"==typeof o?N(o,{prefix:e})||"":o}return r}}function C(e){return null!=e&&"object"===t(e)&&e.constructor===Object&&!Array.isArray(e)}!function(e){e.leanplum="leanplum",e.toss="toss",e.facebook="facebook",e.appsflyer="appsflyer"}(B||(B={}));var I=[B.toss];function D(e){return Object.keys(e).filter((function(n){return void 0!==e[n]})).reduce((function(n,t){return r(r({},n),{},o({},t,"".concat(e[t])))}),{action_type:"WB"})}function V(e){return Object.keys(e).filter((function(n){return void 0!==e[n]})).reduce((function(n,t){return r(r({},n),{},o({},t,e[t]))}),{})}function L(e){M.log("PostMessage",[{name:e.name},["params",e.params],["raw message",e]])}function z(e,n,t,o,i){return A({ios:"never",android:"4.85.0"})?r({log_type:n.log_type,schema_id:e,params:D(n),_trackers:t,_immediate:o},null!=i?{company:i}:{}):{params:D(r(r({},n),{},{schema_id:e,is_transform:!0})),_trackers:t,_immediate:o}}function H(e,n,t,o){var i="test";return A({ios:"4.84.0",android:"never"})?r({schema_id:e,params:V(n),_immediate:t},null!=o?{company:o}:{}):{log_type:"event",log_name:i,service:i,params:r(r({},V(n)),{},{schema_id:e,is_transform:!0}),_immediate:t}}var J=function(){switch(m.type){case"ios-toss":return{postMessage:function(e){var n,t;L(e);var o=r(r({},e),{},{params:P(e.name,e.params)});null===(n=u.webkit.messageHandlers)||void 0===n||null===(t=n.tosWebViewAction)||void 0===t||t.postMessage(o)},log:{schema:function(e){var n,r,t=H(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>3?arguments[3]:void 0,arguments.length>4?arguments[4]:void 0);null===(n=u.webkit.messageHandlers)||void 0===n||null===(r=n.tosWebViewEventLog)||void 0===r||r.postMessage(t)}}};case"android-toss":return{postMessage:function(e){var n,t;L(e);var o=r(r({},e),{},{params:P(e.name,e.params)});null===(n=u.TossApp)||void 0===n||null===(t=n.postMessage)||void 0===t||t.call(n,JSON.stringify(o))},log:{schema:function(e){var n,r,t=z(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:I,arguments.length>3?arguments[3]:void 0,arguments.length>4?arguments[4]:void 0);null===(n=u.TossApp)||void 0===n||null===(r=n.sendLog)||void 0===r||r.call(n,JSON.stringify(t))}}};default:return{postMessage:function(){},log:{schema:function(){}}}}},R=function(){var e,n,r=J(),t=null==u||null===(e=u.__toss)||void 0===e||null===(n=e.appBridgeConfig)||void 0===n?void 0:n.handler;return null!=t?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return{postMessage:function(e){n.forEach((function(n){n.postMessage(e)}))},log:{schema:function(e,r,t,o){n.forEach((function(n){n.log.schema(e,r,t,o)}))}}}}(t,r):r};function $(e){!function(e){var n,r,t;L(e),(null===(n=null==u||null===(r=u.__toss)||void 0===r||null===(t=r.appBridgeConfig)||void 0===t?void 0:t.serializeCallbacks)||void 0===n||n)&&(e.params=P(e.name,e.params)),R().postMessage(e)}(e)}var U=a((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pendingDismiss:!1};$({name:"close",params:e})}),{schema:void 0,isSupported:function(){return A({ios:"always",android:"4.20.0"})}}),q=a((function(e){$({name:"setVisibleCTA",params:e})}),{schema:void 0,isSupported:function(){return A({ios:"5.160.0",android:"5.161.0"})}});e.closeWebView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.nextUrl,r=e.pendingDismiss;U({url:n,pendingDismiss:r})},e.setVisibleCTA=q,Object.defineProperty(e,"__esModule",{value:!0})}));
