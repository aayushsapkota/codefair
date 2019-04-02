/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

var _objectFitImages = __webpack_require__(6);

var _objectFitImages2 = _interopRequireDefault(_objectFitImages);

var _slideNav = __webpack_require__(7);

var _slideNav2 = _interopRequireDefault(_slideNav);

var _formStep = __webpack_require__(8);

var _formStep2 = _interopRequireDefault(_formStep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//style imports for build system
__webpack_require__(9);

//libs import


//custom components imports


ready(function () {
  (0, _objectFitImages2.default)();

  new _slideNav2.default();

  new _formStep2.default();
});

//other helper functions
function ready(callback) {
  // in case the document is already rendered
  if (document.readyState != 'loading') callback();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function () {
        if (document.readyState == 'complete') callback();
      });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icons.eot";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icons.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icons.ttf";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icons.woff";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! npm.im/object-fit-images 3.2.3 */


var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? { style: { 'object-position': 1 } } : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E";
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, { reselect: true });
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, { reselect: true });
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (!ofi.skipTest && // unless user wants to apply regardless of browser support
		supportsObjectFit && // if browser already supports object-fit
		!style['object-position'] // unless object-position is used
		) {
				return;
			}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + (ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"') + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, "data-ofi-" + prop, value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function get() {
			return descriptors.get('currentSrc');
		}
	});
	Object.defineProperty(el, 'srcset', {
		get: function get() {
			return descriptors.get('srcset');
		},
		set: function set(ss) {
			return descriptors.set(ss, 'srcset');
		}
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if (supportsObjectPosition && !opts.skipTest || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

module.exports = fix;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Slidenav(options) {
    _classCallCheck(this, Slidenav);

    var defaults = {
      'slideNavClass': 'slide-nav',
      "slideNavInnerListClass": 'slide-nav__inner-list',
      'slideNavActiveClass': "slide-nav--active",
      'slideNavOverlayClass': 'slide-nav__overlay',
      "slideNavBtnCloseClass": "slide-nav__close",
      'overlayNavClass': 'overlay-nav',
      'overlayNavClassActive': 'overlay-nav--active',
      'overlayNavOpenBtnClass': 'overlay-nav__button',
      'showChildNavButtonClass': 'slide-nav__show-children'
    };

    var populated = Object.assign(defaults, options);
    for (var key in populated) {
      if (populated.hasOwnProperty(key)) {
        this[key] = populated[key];
      }
    }
    this.makeOverlayNavActive(this);
    this.toggleSlideNav(this);
    this.addSubNavigationShowButton(this);
    this.showHideSubNavItems(this);
  }

  _createClass(Slidenav, [{
    key: 'addSubNavigationShowButton',
    value: function addSubNavigationShowButton(obj) {
      var slideNavInnerLists = document.querySelectorAll("." + obj.slideNavInnerListClass);
      if (slideNavInnerLists) {
        for (var i = 0; i < slideNavInnerLists.length; i++) {
          var parentNode = slideNavInnerLists[i].parentNode;
          var showChildButton = document.createElement("div");
          showChildButton.classList.add(obj.showChildNavButtonClass);
          showChildButton.setAttribute("tabindex", "0");
          parentNode.appendChild(showChildButton);
        }
      }
    }
  }, {
    key: 'showHideSubNavItems',
    value: function showHideSubNavItems(obj) {
      document.addEventListener("click", function (event) {
        var target = event.target;
        if (target.classList.contains(obj.showChildNavButtonClass)) {
          var wantedListItem = target.parentNode.querySelector("." + obj.slideNavInnerListClass);
          if (wantedListItem.classList.contains("open")) {
            wantedListItem.classList.remove("open");
          } else {
            wantedListItem.classList.add("open");
          }
        }
      });
    }
  }, {
    key: 'makeOverlayNavActive',
    value: function makeOverlayNavActive(obj) {
      window.addEventListener("scroll", function (event) {
        var distanceScrolled = window.scrollY;
        var overlayNav = document.querySelector("." + obj.overlayNavClass);

        //check if the primary nav is already hidden
        if (typeof distanceScrolled != 'undefined' && distanceScrolled > 32 && !overlayNav.classList.contains(obj.overlayNavClassActive)) {

          overlayNav.classList.add(obj.overlayNavClassActive);
        }
        //check if the primary nav is not hidden
        else if (distanceScrolled < 32 && overlayNav.classList.contains(obj.overlayNavClassActive)) {

            overlayNav.classList.remove(obj.overlayNavClassActive);
          }
      });
    }
  }, {
    key: 'toggleSlideNav',
    value: function toggleSlideNav(obj) {
      var overlayNavOpenBtn = document.querySelector("." + obj.overlayNavOpenBtnClass);
      var slideNav = document.querySelector("." + obj.slideNavClass);
      // console.log(overlayNavOpenBtn);
      overlayNavOpenBtn.addEventListener("click", function (event) {
        if (slideNav.classList.contains(obj.slideNavActiveClass)) {
          slideNav.classList.remove(obj.slideNavActiveClass);
        } else {
          slideNav.classList.add(obj.slideNavActiveClass);
        }
      });

      document.addEventListener("click", function (event) {
        var target = event.target;
        // console.log(target);
        //hide slidenav if clicked else where
        if (target.classList.contains(obj.slideNavOverlayClass)) {
          slideNav.classList.remove(obj.slideNavActiveClass);
        }
        if (target.classList.contains(obj.slideNavBtnCloseClass)) {
          slideNav.classList.remove(obj.slideNavActiveClass);
        }
        if (target.classList.contains(obj.overlayNavClass)) {
          slideNav.classList.remove(obj.slideNavActiveClass);
        }
      });
    }
  }]);

  return Slidenav;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function Slidenav(options) {
    _classCallCheck(this, Slidenav);

    var defaults = {
      "formClass": "form-step",
      "hiddenClass": "form-step--hidden",
      "nextStepButtonClass": "form-step__next",
      "prevStepButtonClass": "form-step__previous",
      "lastStepNextBtnClass": "form-step__next--last",
      "stepsNavClass": "form-step__next--last",
      "stepsNavItemClass": "form-step__step-btn",
      "stepNavItemActiveClass": "form-step__item--active",
      "activeStep": 1,
      "formErrorHiddenClass": "form-error__hidden",
      "confirmationTableClass": "form-step__confirmation-table",
      "formSubmitButtonClass": "form-step__btn-submit"
    };

    var populated = Object.assign(defaults, options);
    for (var key in populated) {
      if (populated.hasOwnProperty(key)) {
        this[key] = populated[key];
      }
    }

    this.setup(this);
  }

  //hide all other form steps


  _createClass(Slidenav, [{
    key: "setup",
    value: function setup(obj) {
      var form = document.querySelector("." + obj.formClass);
      if (form) {
        var steps = form.querySelectorAll('fieldset');
        var totalSteps = steps.length;

        if (steps) {

          for (var i = 0; i < steps.length; i++) {

            if (steps[i].dataset.step != obj.activeStep) {
              steps[i].classList.add(obj.hiddenClass);
            }
          }

          var nextStepBtns = obj.getNextStepBtns(obj);
          var navItems = obj.getNavItems(obj);
          var previousStepBtns = obj.getPreviousStepBtns(obj);

          //next step functionality
          this.nextStep(this, nextStepBtns, steps, form);

          //previous step functionality
          this.previousStep(this, previousStepBtns, navItems);

          //navigation functionality
          navItems[0].classList.add(obj.stepNavItemActiveClass);
          this.navigateSteps(this, navItems, steps, form);

          //form submit
          obj.formSubmit(obj, form);
        }
      }
    }
  }, {
    key: "nextStep",
    value: function nextStep(obj, nextStepBtns, steps, form) {
      var navStepsBtns = obj.getNavItems(obj);
      if (nextStepBtns) {

        for (var i = 0; i < nextStepBtns.length; i++) {
          nextStepBtns[i].addEventListener('click', function (event) {

            if (obj.validateActiveStep(obj, steps) == true) {
              var wantedStep = event.target.parentNode;
              var nextStep = wantedStep.nextElementSibling || wantedStep.nextSibling;

              //hide the current tab
              wantedStep.classList.add(obj.hiddenClass);

              navStepsBtns[obj.activeStep - 1].classList.remove(obj.stepNavItemActiveClass);
              // //show the next tab
              nextStep.classList.remove(obj.hiddenClass);
              navStepsBtns[obj.activeStep].classList.add(obj.stepNavItemActiveClass);

              obj.activeStep = obj.activeStep + 1;
              console.log(obj.activeStep);

              obj.showAllDetails(obj, form);
            } else {
              console.log("Show Validation Errors");
            }
          });
        }
      }
    }
  }, {
    key: "previousStep",
    value: function previousStep(obj, previousStepBtns, navItems) {

      if (previousStepBtns) {
        for (var i = 0; i < previousStepBtns.length; i++) {
          previousStepBtns[i].addEventListener('click', function (event) {
            var wantedStep = event.target.parentNode;
            var prevStep = wantedStep.previousElementSibling || wantedStep.previousSibling;
            //hide the current tab
            wantedStep.classList.add(obj.hiddenClass);
            navItems[obj.activeStep - 1].classList.remove(obj.stepNavItemActiveClass);
            //show the next tab
            prevStep.classList.remove(obj.hiddenClass);
            navItems[obj.activeStep - 2].classList.add(obj.stepNavItemActiveClass);

            obj.activeStep = obj.activeStep - 1;
            console.log(obj.activeStep);
          });
        }
      }
    }
  }, {
    key: "navigateSteps",
    value: function navigateSteps(obj, navItems, steps, form) {

      if (navItems) {
        var allSteps = steps;

        for (var j = 0; j < navItems.length; j++) {
          navItems[j].addEventListener('click', function (event) {
            if (obj.validateActiveStep(obj, steps) == true) {
              var navText = event.target.textContent;

              for (var k = 0; k < allSteps.length; k++) {
                navItems[k].classList.remove(obj.stepNavItemActiveClass);
                var stepName = allSteps[k].dataset.name;
                var tempActive = obj.activeStep;

                if (navText != stepName) {
                  allSteps[k].classList.add(obj.hiddenClass);
                } else if (navText == stepName) {
                  allSteps[k].classList.remove(obj.hiddenClass);
                  obj.activeStep = k + 1;
                }
              }

              // console.log(stepName);
              event.target.classList.add(obj.stepNavItemActiveClass);
              console.log(obj.activeStep);

              obj.showAllDetails(obj, form);
            }
          });
        }
      }
    }
  }, {
    key: "validateActiveStep",
    value: function validateActiveStep(obj, steps) {

      //Getting the active form step node
      var activeFormStep = steps[obj.activeStep - 1];
      console.log(activeFormStep);

      var activeFormStepFields = activeFormStep.querySelectorAll("input");

      for (var l = 0; l < activeFormStepFields.length; l++) {
        if (activeFormStepFields[l].value === '' && activeFormStepFields[l].hasAttribute('required') && (activeFormStepFields[l].type == "text" || activeFormStepFields[l].type == "email")) {
          var errorNode = obj.getNextSibling(activeFormStepFields[l]);
          errorNode.classList.remove(obj.formErrorHiddenClass);
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getAllDetails",
    value: function getAllDetails(obj, form) {
      var allFieldsWrap = form.querySelectorAll(".form-group");

      console.log(allFieldsWrap);

      var fields = [];
      for (var m = 0; m < allFieldsWrap.length; m++) {

        var name,
            value,
            fieldText,
            fieldValue = "";

        //deal with the edge case
        if (allFieldsWrap[m].classList.contains("form-group--select") || allFieldsWrap[m].classList.contains("form__radio-group")) {
          name = allFieldsWrap[m].querySelector("h5").textContent;
        } else if (allFieldsWrap[m].querySelector("label")) {
          console.log(allFieldsWrap[m].querySelector("label"));
          name = allFieldsWrap[m].querySelector("label").textContent;
        }

        if (allFieldsWrap[m].querySelector("input")) {
          fieldText = allFieldsWrap[m].querySelector("input").textContent;
        }

        if (allFieldsWrap[m].querySelector("input")) {
          fieldValue = allFieldsWrap[m].querySelector("input").value;
        }

        if (allFieldsWrap[m].classList.contains("form__radio-group")) {
          var inputs = allFieldsWrap[m].querySelectorAll("input");
          value = "";
          for (var o = 0; o < inputs.length; o++) {
            if (inputs[o].checked == true) {
              value = inputs[o].value;
            }
          }
        } else if (allFieldsWrap[m].classList.contains("form-group--select")) {
          var inputSelect = allFieldsWrap[m].querySelector("select");
          value = inputSelect.value;
        } else if (fieldText == "" || (typeof fieldText === "undefined" ? "undefined" : _typeof(fieldText)) == undefined) {
          value = fieldValue;
        } else if (fieldText != "") {
          value = fieldText;
        }

        var field = {
          "name": name,
          "value": value
        };

        fields.push(field);
      }
      return fields;
    }
  }, {
    key: "showAllDetails",
    value: function showAllDetails(obj, form) {
      if (obj.activeStep == 4) {
        var formDetails = obj.getAllDetails(obj, form);

        var table = form.querySelector("." + obj.confirmationTableClass);
        // console.log(table);

        table.innerHTML = "";
        for (var n = 0; n < formDetails.length; n++) {

          var tr = document.createElement('tr');
          var td1 = formDetails[n].name;
          var td2 = formDetails[n].value;
          tr.innerHTML = "<td>" + td1 + "</td> <td>" + td2 + "</td>";
          table.appendChild(tr);
        }
      }
    }
  }, {
    key: "submitDetails",
    value: function submitDetails(obj, form) {
      var formDetails = obj.getAllDetails(obj, form);
      var inputToSave = document.createElement('input');
      inputToSave.type = "hidden";
      inputToSave.name = "fieldSave";
      // inputToSave.value = formDetails.join();
      for (var i = 0; i < formDetails.length; i++) {
        inputToSave.value += formDetails[i].name + ": " + formDetails[i].value + ", ";
      }
      // console.log(inputToSave);
      form.appendChild(inputToSave);

      var inputToSubmit = document.createElement('input');
      inputToSubmit.type = "hidden";
      inputToSubmit.name = "formFields";
      inputToSubmit.value = JSON.stringify(formDetails);
      // console.log(inputToSubmit);
      form.appendChild(inputToSubmit);
      form.submit();
    }
  }, {
    key: "formSubmit",
    value: function formSubmit(obj, form) {
      var submitBtn = obj.getSubmitBtn(obj);

      submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        obj.submitDetails(obj, form);
      });
    }
  }, {
    key: "getNextSibling",
    value: function getNextSibling(Node) {
      return Node.nextElementSibling || Node.nextSibling;
    }
  }, {
    key: "getPreviousSibling",
    value: function getPreviousSibling(Node) {
      return Node.previousElementSibling || Node.previousSibling;
    }
  }, {
    key: "getNavItems",
    value: function getNavItems(obj) {
      var navSteps = document.querySelectorAll("." + obj.stepsNavItemClass);
      return navSteps;
    }
  }, {
    key: "getNextStepBtns",
    value: function getNextStepBtns(obj) {
      var n = document.querySelectorAll("." + obj.nextStepButtonClass);
      return n;
    }
  }, {
    key: "getPreviousStepBtns",
    value: function getPreviousStepBtns(obj) {
      var p = document.querySelectorAll("." + obj.prevStepButtonClass);
      return p;
    }
  }, {
    key: "getLastNextStepBtn",
    value: function getLastNextStepBtn(obj) {
      return document.querySelector("." + obj.lastStepNextBtnClass);
    }
  }, {
    key: "getSubmitBtn",
    value: function getSubmitBtn(obj) {
      return document.querySelector("." + obj.formSubmitButtonClass);
    }
  }]);

  return Slidenav;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map