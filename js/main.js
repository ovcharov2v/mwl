/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/_animated-numbers.js":
/*!************************************************!*\
  !*** ./src/js/components/_animated-numbers.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var mm = gsap.matchMedia();
  mm.add("(min-width: 768px)", function () {
    // Анимация цифр
    var digitsList = document.querySelectorAll('.animated-num__value-digits');
    if (digitsList.length) {
      digitsList.forEach(function (digits) {
        // Получаем исходное число и форматируем его с разделителями тысяч
        var originalNumber = digits.innerHTML.trim().replace(/\s/g, '');
        var formattedNumber = new Intl.NumberFormat('ru-RU').format(originalNumber);
        var symbolsArr = formattedNumber.split('');
        digits.innerHTML = '';
        symbolsArr.forEach(function (el) {
          var digitTrack = document.createElement("div");
          digitTrack.classList.add('animated-num__value-digits-track');

          // Если это разделитель (не цифра), просто добавляем его
          if (isNaN(parseInt(el))) {
            var separator = document.createElement("span");
            separator.classList.add('animated-num__value-separator');
            separator.textContent = el;
            digitTrack.appendChild(separator);
          } else {
            var digitsArr = [];
            var val = parseInt(el);
            for (var i = val - 6; i <= val; i++) {
              digitsArr.push(Math.abs(i));
            }
            digitsArr.forEach(function (n) {
              var digit = document.createElement("span");
              digit.classList.add('animated-num__value-digit');
              digit.textContent = n;
              digitTrack.appendChild(digit);
            });
          }
          digits.appendChild(digitTrack);
        });
        digits.closest('.animated-num').style.opacity = 1;
      });
      digitsList.forEach(function (box) {
        var trackList = box.querySelectorAll('.animated-num__value-digits-track');
        trackList.forEach(function (track, index) {
          // Пропускаем анимацию для разделителей
          if (track.querySelector('.animated-num__value-separator')) return;
          var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                gsap.to(track, {
                  duration: .6 + index / 5 + Math.random(),
                  yPercent: -600,
                  opacity: 1
                });
              }
            });
          }, {
            threshold: .2
          });
          observer.observe(box);
        });
      });
    }
  });
});

/***/ }),

/***/ "./src/js/components/_animated-title.js":
/*!**********************************************!*\
  !*** ./src/js/components/_animated-title.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  var titleElements = document.querySelectorAll('.animated-title');
  titleElements.forEach(function (text) {
    // Разбиваем текст на строки
    var split = new SplitText(text, {
      type: 'lines',
      linesClass: 'split-line'
    });

    // Оборачиваем каждую строку в div для анимации
    split.lines.forEach(function (line) {
      var wrapper = document.createElement('div');
      wrapper.classList.add('line-wrapper');
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });
    var tl = gsap.timeline();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          tl.to(split.lines, {
            duration: 1.2,
            y: 0,
            ease: 'power4.out',
            stagger: 0.15 // Задержка между строками
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.4
    });
    observer.observe(text);
  });
});

/***/ }),

/***/ "./src/js/components/_button.js":
/*!**************************************!*\
  !*** ./src/js/components/_button.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var btnList = document.querySelectorAll('.button');
  if (btnList.length) {
    btnList.forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        btn.classList.add('button--enter');
      });
      btn.addEventListener('mouseleave', function () {
        btn.classList.remove('button--enter');
        btn.classList.add('button--leave');
        setTimeout(function () {
          btn.classList.remove('button--leave');
        }, 400);
      });
    });
  }
});

/***/ }),

/***/ "./src/js/components/_fade-block.js":
/*!******************************************!*\
  !*** ./src/js/components/_fade-block.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var blockList = document.querySelectorAll('.fade-block');
  if (blockList.length) {
    blockList.forEach(function (block) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var tl = gsap.timeline();
            tl.to(block, {
              duration: 1.5,
              delay: block.dataset.delay,
              opacity: 1,
              y: 0,
              ease: 'power4.out'
            });
            observer.unobserve(block);
          }
        });
      }, {
        threshold: 0.3
      });
      observer.observe(block);
    });
  }
});

/***/ }),

/***/ "./src/js/components/_marquees3k.js":
/*!******************************************!*\
  !*** ./src/js/components/_marquees3k.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", function () {
  Marquee3k.init({
    selector: 'marquee-desktop'
  });
});
mm.add("(max-width: 1023px)", function () {
  Marquee3k.init({
    selector: 'marquee-mobile'
  });
});

/***/ }),

/***/ "./src/js/components/_menu.js":
/*!************************************!*\
  !*** ./src/js/components/_menu.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('.header');
  (function headerWatcher() {
    if (window.scrollY < 10) {
      header.classList.remove('header--bg');
    } else {
      header.classList.add('header--bg');
    }
    requestAnimationFrame(headerWatcher);
  })();
  function scrollToTarget(selector) {
    var target = document.querySelector(selector);
    if (target) {
      var headerHeight = 100;
      var targetPosition = target.getBoundingClientRect().top;
      var offsetPosition = parseInt(targetPosition + window.scrollY - headerHeight);
      var k = offsetPosition > window.scrollY ? -1000 : 1000;
      gsap.to(window, {
        scrollTo: {
          y: offsetPosition + k
        },
        duration: .5,
        ease: 'linear',
        onComplete: function onComplete() {
          Z;
          var targetPosition = target.getBoundingClientRect().top;
          var offsetPosition = parseInt(targetPosition + window.scrollY - headerHeight);
          gsap.to(window, {
            scrollTo: {
              y: offsetPosition
            },
            duration: .5,
            ease: 'linear'
          });
        }
      });
    } else {
      console.warn("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(selector, "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"));
    }
  }

  // Menu Scroll
  var linklist = document.querySelectorAll('.header__nav-link, .mobile-menu__nav-link');
  linklist.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      closeMobMenu();
      var target = e.target.getAttribute('href');
      scrollToTarget(target);
    });
  });
  var mmBtn = document.querySelector('.header__menu-btn');
  mmBtn.addEventListener('click', function () {
    if (document.body.classList.contains('mm-open')) {
      closeMobMenu();
    } else {
      openMobMenu();
    }
  });
  var openMobMenu = function openMobMenu() {
    document.body.classList.add('mm-open');
    setTimeout(function () {
      document.body.classList.add('mm-opened');
    }, 10);
  };
  var closeMobMenu = function closeMobMenu() {
    document.body.classList.remove('mm-opened');
    setTimeout(function () {
      document.body.classList.remove('mm-open');
    }, 300);
  };
});

/***/ }),

/***/ "./src/js/components/_modal.js":
/*!*************************************!*\
  !*** ./src/js/components/_modal.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
document.addEventListener('DOMContentLoaded', function () {
  function getUrlParams() {
    var params = {};
    if (!window.location.search.length) return params;
    var search = window.location.search.substring(1);
    if (!search.length) return params;
    var arr = search.split('&');
    if (arr.length) {
      arr.forEach(function (pair) {
        var pairArr = pair.split('=');
        if (!pairArr[1]) return;
        params[pairArr[0]] = pairArr[1];
      });
    }
    return params;
  }
  var urlParams = getUrlParams();
  function sendToBitrix24(_x) {
    return _sendToBitrix.apply(this, arguments);
  }
  function _sendToBitrix() {
    _sendToBitrix = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(form) {
      var webhookUrl, data, response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            webhookUrl = 'https://corp.mworks.ru/rest/1/8qdfjpi8mf745ntv/crm.lead.add';
            data = {
              fields: {
                SOURCE_DESCRIPTION: window.location.href,
                UF_CRM_1706178716453: 2087,
                // Сфера деятельности
                //UF_CRM_1625228153: '', // "Ройстат id"
                UTM_SOURCE: urlParams.utm_source || '',
                UTM_MEDIUM: urlParams.utm_medium || '',
                UTM_CAMPAIGN: urlParams.utm_campaign || '',
                UTM_TERM: urlParams.utm_term || '',
                NAME: form.elements.salon.value || '',
                PHONE: form.elements.tel.value || '',
                COMMENTS: form.elements.messenger.value || ''
              }
            };
            _context.prev = 2;
            _context.next = 5;
            return fetch(webhookUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            result = _context.sent;
            console.log('Успешно отправлено в Bitrix24:', result);
            return _context.abrupt("return", result);
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            console.error('Ошибка при отправке в Bitrix24:', _context.t0);
            throw _context.t0;
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 13]]);
    }));
    return _sendToBitrix.apply(this, arguments);
  }
  var modalList = document.querySelectorAll('.modal');
  if (modalList.length) {
    var showModal = function showModal(name) {
      var modal = document.querySelector(".modal-".concat(name));
      if (!modal) {
        console.error("\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E ".concat(name, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"));
        return;
      }
      document.body.style.overflow = 'hidden';
      modal.style.display = 'flex';
      setTimeout(function () {
        modal.classList.add('modal--show');
      }, 50);
    };
    var closeModal = function closeModal(modal) {
      modal.classList.remove('modal--show');
      setTimeout(function () {
        document.body.style.overflow = '';
        modal.style.display = '';
      }, 300);
    };
    modalList.forEach(function (modal) {
      var closeBtn = modal.querySelector('.modal__close');
      closeBtn.addEventListener('click', function () {
        return closeModal(modal);
      });
      modal.addEventListener('click', function (evt) {
        if (!evt.target.closest('.modal__window')) {
          closeModal(modal);
        }
      });
      var agreementCheck = modal.querySelector('input[name="agreement"]');
      var submitBtn = modal.querySelector('.modal__submit');
      if (agreementCheck) {
        agreementCheck.addEventListener('change', function () {
          submitBtn.disabled = !agreementCheck.checked;
        });
      }
      var form = modal.querySelector('.modal__form');
      if (form) {
        var phoneMask;
        var inputTel = modal.querySelector('input[type="tel"]');
        var inputTelRaw = modal.querySelector('input[name="tel-raw"]');
        var groupList = form.querySelectorAll('.form-group--required');
        if (groupList.length) {
          groupList.forEach(function (group) {
            var input = group.querySelector('.form-group__input');
            input.addEventListener('input', function () {
              group.classList.remove('form-group--error');
            });
          });
        }
        if (inputTel) {
          phoneMask = IMask(inputTel, {
            mask: '+{7}(000) 000-00-00',
            placeholder: '_',
            lazy: false
          });
        }
        var formReset = function formReset() {
          phoneMask.updateValue();
          form.reset();
        };
        form.addEventListener('submit', function (evt) {
          evt.preventDefault();
          /* ---валидация--- */
          var canSubmit = true;
          if (groupList.length) {
            groupList.forEach(function (group) {
              var input = group.querySelector('.form-group__input');
              if (input.type === 'tel') {
                if (phoneMask.unmaskedValue.length !== 11) {
                  canSubmit = false;
                  group.classList.add('form-group--error');
                }
              } else {
                if (!input.value.trim().length) {
                  canSubmit = false;
                  group.classList.add('form-group--error');
                }
              }
            });
          }
          /* ---валидация--- */

          if (!canSubmit) return false;

          /* ---отправка--- */
          sendToBitrix24(form).then(function (response) {
            if (modal.dataset.redirect) {
              window.open(modal.dataset.redirect, '_blank');
            }
            closeModal(modal);
            showModal('success');
          })["finally"](function () {
            formReset(form);
          });
        });
      }
    });
    var triggerList = document.querySelectorAll('*[data-modal]');
    if (triggerList.length) {
      triggerList.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
          showModal(trigger.dataset.modal);
        });
      });
    }
    var selectList = document.querySelectorAll('.form-group__select');
    if (selectList.length) {
      selectList.forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.closest('.form-group__select-box').classList.add('form-group__select-box--active');
        });
      });
    }
  }

  /*const form = document.querySelector('.section-vacancy__form')
  if (!form) return;
  
  
  
  // Form submit
  if (form) {
  	form.addEventListener('submit', (evt) => {
  		evt.preventDefault()
  		const data = new URLSearchParams(new FormData(form));
  		fetch("https://ovcharov2v.github.io/tanuki-tech/index.html", {
  			method: 'post',
  			body: data,
  		})
  			.then((response) => {
  				//response.json()
  				// ----do something----
  				showModal();
  			})
  		formReset()
  	})
  }
  const formReset = () => {
  	phoneMask.updateValue()
  	form.reset()
  }
  */
});

/***/ }),

/***/ "./src/js/components/_overlap-box.js":
/*!*******************************************!*\
  !*** ./src/js/components/_overlap-box.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

gsap.registerPlugin(ScrollTrigger);
var mm = gsap.matchMedia();
mm.add("(min-width: 1024px)", function () {
  gsap.to(".overlap-box", {
    y: -window.innerHeight,
    marginBottom: -document.querySelector('.section-hero').scrollHeight,
    scrollTrigger: {
      trigger: ".section-hero",
      start: "top top",
      end: "bottom top",
      scrub: 1.5,
      markers: false,
      pin: true
    }
  });
});
mm.add("(max-width: 1023px)", function () {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-hero",
      start: "center center",
      end: "bottom top",
      scrub: 1.5,
      markers: false,
      pin: true
    }
  });
  tl.to('.section-hero__img-col', {
    y: -300,
    duration: 1
  });
  tl.to(".overlap-box", {
    y: -window.innerHeight,
    marginBottom: -window.innerHeight,
    onComplete: function onComplete() {
      ScrollTrigger.refresh();
    }
  }, '-=1');
});

/***/ }),

/***/ "./src/js/components/_typewriter.js":
/*!******************************************!*\
  !*** ./src/js/components/_typewriter.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(TextPlugin);
  function typewriterEffect(element) {
    var tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5
    });
    var words = element.dataset.words.split(',');
    var currentLength = 0;
    words.forEach(function (word, index) {
      // Задаем длину
      var currentLength = parseInt(element.dataset.length || 0);
      if (word.length > currentLength) {
        element.style.minWidth = "".concat(word.length, "ch");
      }

      // Печатаем текст
      tl.to(element, {
        duration: word.length * 0.1,
        text: word,
        ease: 'none'
      });

      // Пауза после напечатания
      tl.to({}, {
        duration: 1
      });

      // Стираем текст
      tl.to(element, {
        duration: word.length * 0.05,
        text: '',
        ease: 'none'
      });
    });
    return tl;
  }
  var elementList = document.querySelectorAll('.typewriter');
  if (elementList.length > 0) {
    elementList.forEach(function (element) {
      typewriterEffect(element);
    });
  }
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utm.js */ "./src/js/utm.js");
/* harmony import */ var _utm_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utm_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_animated-title */ "./src/js/components/_animated-title.js");
/* harmony import */ var _components_animated_title__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_animated_title__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_fade_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_fade-block */ "./src/js/components/_fade-block.js");
/* harmony import */ var _components_fade_block__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_fade_block__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_animated_numbers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_animated-numbers */ "./src/js/components/_animated-numbers.js");
/* harmony import */ var _components_animated_numbers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_animated_numbers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_typewriter */ "./src/js/components/_typewriter.js");
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_typewriter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_modal */ "./src/js/components/_modal.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_menu */ "./src/js/components/_menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_overlap_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_overlap-box */ "./src/js/components/_overlap-box.js");
/* harmony import */ var _components_overlap_box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_overlap_box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_button */ "./src/js/components/_button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_marquees3k__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/_marquees3k */ "./src/js/components/_marquees3k.js");
/* harmony import */ var _components_marquees3k__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_marquees3k__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/_section-hero */ "./src/js/sections/_section-hero.js");
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sections_section_hero__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sections_section_kpi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/_section-kpi */ "./src/js/sections/_section-kpi.js");
/* harmony import */ var _sections_section_kpi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sections_section_kpi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/_section-traffic */ "./src/js/sections/_section-traffic.js");
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sections_section_traffic__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/_section-sites */ "./src/js/sections/_section-sites.js");
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sections_section_sites__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sections_section_leads__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/_section-leads */ "./src/js/sections/_section-leads.js");
/* harmony import */ var _sections_section_leads__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sections_section_leads__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/_section-company */ "./src/js/sections/_section-company.js");
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sections_section_company__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/_section-contract */ "./src/js/sections/_section-contract.js");
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sections_section_contract__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/_section-about */ "./src/js/sections/_section-about.js");
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_sections_section_about__WEBPACK_IMPORTED_MODULE_17__);
// Components











// Sections








window.onload = function () {
  ScrollTrigger.update();
};

/***/ }),

/***/ "./src/js/sections/_section-about.js":
/*!*******************************************!*\
  !*** ./src/js/sections/_section-about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", function () {
    var marqueeList = document.querySelectorAll('.section-about__img-track-box');
    if (!marqueeList.length) {
      return;
    }
    marqueeList.forEach(function (marquee, index) {
      var marqueeContent = marquee.querySelector('.section-about__img-track');
      var marqueeContentClone = marqueeContent.cloneNode(true);
      marquee.append(marqueeContentClone);
      var height = parseInt(window.getComputedStyle(marqueeContent).getPropertyValue("height"), 10);
      gsap.utils.toArray(marquee.children).forEach(function (child) {
        gsap.to(child, {
          y: "".concat(index === 0 ? '+' : '-', "=").concat(height),
          duration: 25,
          ease: "none",
          repeat: -1
        });
      });
    });
  });
});

/***/ }),

/***/ "./src/js/sections/_section-company.js":
/*!*********************************************!*\
  !*** ./src/js/sections/_section-company.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-company');
  if (section) {
    var sliderEl = section.querySelector('.section-company__slider');
    var slider = new Swiper(sliderEl, {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true
      }
    });
    slider.autoplay.stop();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          console.log("Element is visible!");

          // Выполняем наши действия
          slider.autoplay.start();
          section.querySelector(".section-company__nav-el[data-slide=\"0\"]").classList.add('section-company__nav-el--active');

          // Отключаем observer, если нужно срабатывание только один раз
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2 // Срабатывает когда 20% элемента видно (аналог "top 80%")
    });

    // Находим и наблюдаем за нашим элементом
    var targetElement = document.querySelector('.section-company__nav-slider');
    if (targetElement) {
      observer.observe(targetElement);
    }
    var sliderNavEl = section.querySelector('.section-company__nav-slider');
    var sliderNav = new Swiper(sliderNavEl, {
      slidesPerView: 'auto',
      spaceBetween: 16
    });
    slider.on('transitionStart', function () {
      section.querySelector(".section-company__nav-el[data-slide=\"".concat(slider.realIndex, "\"]")).click();
    });
    var btnList = section.querySelectorAll('.section-company__nav-el');
    btnList.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (!btn.classList.contains('section-company__nav-el--active')) {
          var id = parseInt(btn.dataset.slide);
          slider.slideTo(id);
          section.querySelector('.section-company__nav-el--active').classList.remove('section-company__nav-el--active');
          btn.classList.add('section-company__nav-el--active');
          section.querySelector('.section-company__img-box--active').classList.remove('section-company__img-box--active');
          section.querySelector(".section-company__img-box[data-slide=\"".concat(id, "\"]")).classList.add('section-company__img-box--active');
          sliderNav.slideTo(id);
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/js/sections/_section-contract.js":
/*!**********************************************!*\
  !*** ./src/js/sections/_section-contract.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-contract');
  if (section) {
    var box = document.querySelector(".section-contract__data-list");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, {
            opacity: 0,
            left: "10%"
          }, {
            opacity: 1,
            left: "4%",
            duration: 1,
            ease: "power2.out"
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    observer.observe(box);
  }
});

/***/ }),

/***/ "./src/js/sections/_section-hero.js":
/*!******************************************!*\
  !*** ./src/js/sections/_section-hero.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var init = function init() {
  var marqueeList = document.querySelectorAll('.section-hero__track-box');
  if (!marqueeList.length) {
    return;
  }
  marqueeList.forEach(function (marquee) {
    var marqueeContent = marquee.querySelector('.section-hero__track');
    var marqueeContentClone = marqueeContent.cloneNode(true);
    marquee.append(marqueeContentClone);
    var height = parseInt(window.getComputedStyle(marqueeContent).getPropertyValue("height"), 10);
    gsap.utils.toArray(marquee.children).forEach(function (child) {
      gsap.to(child, {
        y: "+=".concat(height),
        duration: 25,
        ease: "none",
        repeat: -1
      });
    });
  });
  var roadList = document.querySelectorAll('.section-hero__road-box');
  if (!roadList.length) {
    return;
  }
  roadList.forEach(function (road) {
    var roadContent = road.querySelector('.section-hero__road-track');
    var roadContentClone = roadContent.cloneNode(true);
    road.append(roadContentClone);
    var height = parseInt(window.getComputedStyle(roadContent).getPropertyValue("height"), 10);
    gsap.utils.toArray(road.children).forEach(function (child) {
      gsap.to(child, {
        y: "+=".concat(height),
        duration: .3,
        ease: "none",
        repeat: -1
      });
    });
  });
};
document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/js/sections/_section-kpi.js":
/*!*****************************************!*\
  !*** ./src/js/sections/_section-kpi.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-kpi');
  if (section) {}
});

/***/ }),

/***/ "./src/js/sections/_section-leads.js":
/*!*******************************************!*\
  !*** ./src/js/sections/_section-leads.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-leads');
  if (section) {
    // Функции анимации
    var slideUp = function slideUp(element) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
      gsap.to(element, {
        height: 0,
        duration: duration,
        ease: "power2.inOut",
        onComplete: function onComplete() {
          gsap.set(element, {
            display: "none"
          });
          ScrollTrigger.refresh();
          toggleBtn.scrollIntoView(false);
        }
      });
    };
    var slideDown = function slideDown(element) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
      gsap.set(element, {
        display: "block",
        height: "auto"
      });
      var height = element.offsetHeight;
      gsap.set(element, {
        height: 0
      });
      gsap.to(element, {
        height: height,
        duration: duration,
        ease: "power2.inOut",
        onComplete: function onComplete() {
          ScrollTrigger.refresh();
        }
      });
    };
    var cards = section.querySelectorAll('.section-leads__card:nth-child(n+5)');
    var toggleBtn = section.querySelector('.section-leads__btn');
    var isExpanded = false;
    cards.forEach(function (card) {
      gsap.set(card, {
        display: "none",
        height: 0
      });
    });
    toggleBtn.addEventListener('click', function () {
      if (isExpanded) {
        cards.forEach(function (card, index) {
          slideUp(card);
        });
        toggleBtn.querySelector('.button__text-box').textContent = 'Показать больше';
      } else {
        cards.forEach(function (card, index) {
          slideDown(card);
        });
        toggleBtn.querySelector('.button__text-box').textContent = 'Свернуть';
      }
      isExpanded = !isExpanded;
    });
  }
});

/***/ }),

/***/ "./src/js/sections/_section-sites.js":
/*!*******************************************!*\
  !*** ./src/js/sections/_section-sites.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-sites');
  if (section) {
    var sliderEl = section.querySelector('.section-sites__slider');
    new Swiper(sliderEl, {
      slidesPerView: 1.001,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: '.section-sites__slider-btn--next',
        prevEl: '.section-sites__slider-btn--prev'
      },
      pagination: {
        el: '.section-sites__slider-pagination'
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: [0, '5%', 100],
          //([horizontal, vertical, depth])
          opacity: 0
          //scale: 1.01
        },
        next: {
          translate: [0, '-10%', -100] //([horizontal, vertical, depth])
        }
      },
      transition: {
        duration: 1800
      }
    });
  }
});

/***/ }),

/***/ "./src/js/sections/_section-traffic.js":
/*!*********************************************!*\
  !*** ./src/js/sections/_section-traffic.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-traffic');
  if (section) {
    var itemList = section.querySelectorAll('.section-traffic__item');
    itemList.forEach(function (item) {
      var soundAnimation = item.querySelector('.section-traffic__sound-icon');
      var soundBox = item.querySelector('.section-traffic__sound-box');
      var sound = new Audio(item.dataset.sound);
      sound.loop = true;
      if (soundAnimation) {
        var animation = lottie.loadAnimation({
          container: soundAnimation,
          renderer: 'svg',
          loop: true,
          autoplay: false,
          path: 'images/section-traffic/sound-animation.json'
        });
        var toggle = function toggle() {
          if (soundBox.classList.contains('section-traffic__sound-box--active')) {
            stop();
          } else {
            play();
          }
        };
        var stop = function stop() {
          soundBox.classList.remove('section-traffic__sound-box--active');
          animation.stop();
          sound.pause();
          sound.currentTime = 0;
        };
        var play = function play() {
          soundBox.classList.add('section-traffic__sound-box--active');
          sound.play();
          animation.play();
        };
        soundBox.addEventListener('click', toggle);
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.section-traffic__item') || e.target.closest('.section-traffic__item') !== item) {
            stop();
          }
        });
        window.addEventListener('scroll', function () {
          stop();
        });
      }
    });
    var content = document.querySelector('.section-traffic__content');
    var cards = document.querySelectorAll(".section-traffic__item");
    var mm = gsap.matchMedia();
    mm.add("(max-width: 1023px)", function () {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "top 100px",
          end: "+=".concat(content.offsetHeight),
          scrub: 1.3,
          markers: false,
          pin: true,
          pinSpacer: false
        }
      });
      tl.to(cards[0], {
        scale: 0.8,
        opacity: .8,
        duration: .9
      });
      tl.to(cards[1], {
        y: "-=".concat(.98 * cards[1].offsetHeight),
        duration: 1
      }, '-=.65');
      tl.to(cards[1], {
        scale: 0.9,
        opacity: .9,
        duration: 1
      }, '-=.35');
      tl.to(cards[2], {
        y: "-=".concat(1.88 * cards[2].offsetHeight),
        duration: 1
      }, '-=.65');
      tl.to('.section-system', {
        marginTop: "-=".concat(cards[0].offsetHeight + cards[1].offsetHeight),
        duration: 1
      }, '-=.5');
    });
  }
});

/***/ }),

/***/ "./src/js/utm.js":
/*!***********************!*\
  !*** ./src/js/utm.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*function getUrlParams() {
  const params = {}
  if (!window.location.search.length) return params
  const search = window.location.search.substring(1)
  if (!search) return params

  search.split('&').forEach((pair) => {
    const pairArr = pair.split('=')
    if (!pairArr[1]) return;
    params[pairArr[0]] = pairArr[1];
  })

  return params;
}

document.addEventListener('DOMContentLoaded', function () {
  const urlParams = getUrlParams();

  //alert(urlParams.utm_source || '')

  const forms = document.querySelectorAll('form')

  //document.getElementById('utm_source').value = urlParams.utm_source || '';
  //document.getElementById('utm_medium').value = urlParams.utm_medium || '';
  //document.getElementById('utm_campaign').value = urlParams.utm_campaign || '';
  //document.getElementById('utm_term').value = urlParams.utm_term || '';
});*/

/***/ })

/******/ });
//# sourceMappingURL=main.js.map