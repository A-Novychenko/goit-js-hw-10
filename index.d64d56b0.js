function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function b(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function g(t){return a=t,f=setTimeout(w,e),l?m(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function w(){var t=p();if(j(t))return T(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?v(n,i-(t-a)):n}(t))}function T(t){return f=void 0,h&&o?m(t):(o=r=void 0,u)}function x(){var t=p(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return g(c);if(s)return f=setTimeout(w,e),m(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=y(e)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,h="trailing"in n?!!n.trailing:h),x.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},x.flush=function(){return void 0===f?u:T(p())},x};const h=document.querySelector("#search-box");h.addEventListener("input",t(e)((function(t){(e=h.value,fetch(`https://restcountries.com/v3.1/name/${e}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))).then((t=>console.log(t))).catch();var e}),300));
//# sourceMappingURL=index.d64d56b0.js.map
