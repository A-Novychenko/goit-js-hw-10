!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):i.test(e)?NaN:+e}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function j(t){return a=t,f=setTimeout(w,e),l?h(t):u}function g(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function w(){var t=b();if(g(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?p(n,i-(t-a)):n}(t))}function T(t){return f=void 0,d&&o?h(t):(o=r=void 0,u)}function O(){var t=b(),n=g(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return j(c);if(s)return f=setTimeout(w,e),h(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(m(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:T(b())},O};var h=document.querySelector("#search-box");h.addEventListener("input",t(e)((function(t){(e=h.value,fetch("".concat("https://restcountries.com/v3.1/name/").concat(e)).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((function(t){return console.log(t)})).catch();var e}),300))}();
//# sourceMappingURL=index.69a97b4c.js.map
