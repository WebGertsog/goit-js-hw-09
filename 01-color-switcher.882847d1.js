parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"v8pr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stopBtnRef=exports.startBtnRef=exports.bodyRef=void 0;const t=document.querySelector("body");exports.bodyRef=t;const e=document.querySelector("button[data-start]");exports.startBtnRef=e;const o=document.querySelector("button[data-stop]");exports.stopBtnRef=o,e.style.padding="10px 20px",e.style.margin="30px",e.style.marginTop="250px",e.style.color="LimeGreen",e.style.fontSize="30px",e.style.letterSpacing="2px",e.style.fontFamily="Montserrat",e.style.fontWeight="bold",e.style.textTransform="uppercase",e.style.borderRadius="10px",e.style.boxShadow="0 0 20px rgba(0, 0, 0, .1)",e.style.transition=".5s",o.style.padding="10px 30px",o.style.margin="30px",o.style.marginTop="250px",o.style.color="tomato",o.style.fontSize="30px",o.style.letterSpacing="2px",o.style.fontFamily="Montserrat",o.style.fontWeight="bold",o.style.textTransform="uppercase",o.style.borderRadius="10px",o.style.boxShadow="0 0 20px rgba(0, 0, 0, .1)",o.style.transition=".5s";
},{}],"TCaP":[function(require,module,exports) {
"use strict";var t=require("./helpers/ref-task-1");let e=null;const r=()=>`#${Math.floor(16777215*Math.random()).toString(16)}`,s=()=>{t.bodyRef.style.backgroundColor=r()};t.startBtnRef.addEventListener("click",()=>{e=setInterval(s,1e3),t.startBtnRef.setAttribute("disabled",!0),t.stopBtnRef.removeAttribute("disabled")}),t.stopBtnRef.addEventListener("click",()=>{clearInterval(e),t.startBtnRef.removeAttribute("disabled"),t.stopBtnRef.setAttribute("disabled",!0)});
},{"./helpers/ref-task-1":"v8pr"}]},{},["TCaP"], null)
//# sourceMappingURL=/goit-js-hw-09/01-color-switcher.882847d1.js.map