!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/public/build/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n(2),n(3),n(4),n(5);var i,s=a(n(6)),r=a(n(7));function a(t){return t&&t.__esModule?t:{default:t}}n(8),i=function(){(0,s.default)(),new r.default},"loading"!=document.readyState?i():document.addEventListener?document.addEventListener("DOMContentLoaded",i):document.attachEvent("onreadystatechange",function(){"complete"==document.readyState&&i()})},function(t,e,n){t.exports=n.p+"fonts/icons.eot"},function(t,e,n){t.exports=n.p+"fonts/icons.svg"},function(t,e,n){t.exports=n.p+"fonts/icons.ttf"},function(t,e,n){t.exports=n.p+"fonts/icons.woff"},function(t,e,n){"use strict";var i="bfred-it:object-fit-images",s=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,r="undefined"==typeof Image?{style:{"object-position":1}}:new Image,a="object-fit"in r.style,o="object-position"in r.style,c="background-size"in r.style,l="string"==typeof r.currentSrc,u=r.getAttribute,f=r.setAttribute,d=!1;function v(t,e,n){var i="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";u.call(t,"src")!==i&&f.call(t,"src",i)}function g(t,e){t.naturalWidth?e(t):setTimeout(g,100,t,e)}function p(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,i={};null!==(e=s.exec(n));)i[e[1]]=e[2];return i}(t),n=t[i];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&a&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=u.call(t,"data-ofi-srcset")||t.srcset,n.img.src=u.call(t,"data-ofi-src")||t.src,f.call(t,"data-ofi-src",t.src),t.srcset&&f.call(t,"data-ofi-srcset",t.srcset),v(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[i].img[e||"src"]},set:function(e,n){return t[i].img[n||"src"]=e,f.call(t,"data-ofi-"+n,e),p(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!l&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(n.img,function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,function(e){v(t,e.naturalWidth,e.naturalHeight)})}function m(t,e){var n=!d&&!t;if(e=e||{},t=t||"img",o&&!e.skipTest||!c)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var s=0;s<t.length;s++)t[s][i]=t[s][i]||{skipTest:e.skipTest},p(t[s]);n&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&m(t.target,{skipTest:e.skipTest})},!0),d=!0,t="img"),e.watchMQ&&window.addEventListener("resize",m.bind(null,t,{skipTest:e.skipTest}))}m.supportsObjectFit=a,m.supportsObjectPosition=o,function(){function t(t,e){return t[i]&&t[i].img&&("src"===e||"srcset"===e)?t[i].img:t}o||(HTMLImageElement.prototype.getAttribute=function(e){return u.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return f.call(t(this,e),e,String(n))})}(),t.exports=m},function(t,e,n){"use strict";var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();t.exports=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=Object.assign({slideNavClass:"slide-nav",slideNavActiveClass:"slide-nav--active",slideNavOverlayClass:"slide-nav__overlay",overlayNavClass:"overlay-nav",overlayNavClassActive:"overlay-nav--active",overlayNavOpenBtnClass:"overlay-nav__button"},e);for(var i in n)n.hasOwnProperty(i)&&(this[i]=n[i]);this.makeOverlayNavActive(this),this.toggleSlideNav(this)}return i(t,[{key:"makeOverlayNavActive",value:function(t){window.addEventListener("scroll",function(e){var n=window.scrollY,i=document.querySelector("."+t.overlayNavClass);void 0!==n&&n>32&&!i.classList.contains(t.overlayNavClassActive)?i.classList.add(t.overlayNavClassActive):n<32&&i.classList.contains(t.overlayNavClassActive)&&i.classList.remove(t.overlayNavClassActive)})}},{key:"toggleSlideNav",value:function(t){var e=document.querySelector("."+t.overlayNavOpenBtnClass),n=document.querySelector("."+t.slideNavClass);e.addEventListener("click",function(e){n.classList.contains(t.slideNavActiveClass)?n.classList.remove(t.slideNavActiveClass):n.classList.add(t.slideNavActiveClass)}),document.addEventListener("click",function(e){var i=e.target;i.classList.contains(t.slideNavOverlayClass)&&n.classList.remove(t.slideNavActiveClass),i.classList.contains(t.overlayNavClass)&&n.classList.remove(t.slideNavActiveClass)})}}]),t}()},function(t,e){}]);