parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=new Promise(function(n,e){document.addEventListener("click",function(){n("First promise was resolved")}),setTimeout(function(){e(new Error("First promise was rejected"))},3e3)}),t=new Promise(function(n,e){document.addEventListener("click",function(){n("Second promise was resolved")}),document.addEventListener("contextmenu",function(e){e.preventDefault(),n("Second promise was resolved")})}),c=new Promise(function(n,e){var t=!1,c=!1;document.addEventListener("mousedown",function(e){0===e.button&&(t=!0),2===e.button&&(c=!0),c&&t&&n("Third promise was resolved")})});function o(e,t){n.insertAdjacentHTML("beforeend",'\n    <div class="'.concat(e,'" data-qa="notification">\n      ').concat(t,"\n    </div>\n  "))}e.then(function(n){o("succes",n)}).catch(function(n){o("warning",n)}),t.then(function(n){o("succes",n)}).catch(function(n){o("warning",n)}),c.then(function(n){o("succes",n)}).catch(function(n){o("warning",n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7e420fdf.js.map