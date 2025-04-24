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
      var offsetPosition = targetPosition + window.scrollY - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      console.warn("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \"".concat(selector, "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D!"));
    }
  }

  // Menu Scroll
  var linklist = header.querySelectorAll('.header__nav-link');
  linklist.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target.getAttribute('href');
      scrollToTarget(target);
    });
  });
});

/***/ }),

/***/ "./src/js/components/_modal.js":
/*!*************************************!*\
  !*** ./src/js/components/_modal.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
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
        // Input masks
        var phoneMask;
        var inputTel = modal.querySelector('input[type="tel"]');
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
          var data = new URLSearchParams(new FormData(form));
          fetch(form.getAttribute("action"), {
            method: 'post',
            body: data
          }).then(function (response) {
            //response.json()
            // ----do something----
            closeModal(modal);
            showModal('success');
          });
          formReset(form);
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
/* harmony import */ var _components_animated_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_animated-title */ "./src/js/components/_animated-title.js");
/* harmony import */ var _components_animated_title__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_animated_title__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_fade_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_fade-block */ "./src/js/components/_fade-block.js");
/* harmony import */ var _components_fade_block__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_fade_block__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_animated_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_animated-numbers */ "./src/js/components/_animated-numbers.js");
/* harmony import */ var _components_animated_numbers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_animated_numbers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_typewriter */ "./src/js/components/_typewriter.js");
/* harmony import */ var _components_typewriter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_typewriter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_modal */ "./src/js/components/_modal.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_menu */ "./src/js/components/_menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_button */ "./src/js/components/_button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/_section-hero */ "./src/js/sections/_section-hero.js");
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sections_section_hero__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sections_section_kpi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/_section-kpi */ "./src/js/sections/_section-kpi.js");
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/_section-traffic */ "./src/js/sections/_section-traffic.js");
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sections_section_traffic__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/_section-sites */ "./src/js/sections/_section-sites.js");
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sections_section_sites__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/_section-company */ "./src/js/sections/_section-company.js");
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sections_section_company__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/_section-contract */ "./src/js/sections/_section-contract.js");
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sections_section_contract__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/_section-about */ "./src/js/sections/_section-about.js");
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sections_section_about__WEBPACK_IMPORTED_MODULE_13__);
// Components






//import './components/_overlap-box'


// Sections








/***/ }),

/***/ "./src/js/sections/_section-about.js":
/*!*******************************************!*\
  !*** ./src/js/sections/_section-about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var init = function init() {
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
};
document.addEventListener('DOMContentLoaded', init);

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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_marquee3000_marquee3k_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /node_modules/marquee3000/marquee3k.js */ "./node_modules/marquee3000/marquee3k.js");
/* harmony import */ var _node_modules_marquee3000_marquee3k_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_marquee3000_marquee3k_js__WEBPACK_IMPORTED_MODULE_0__);

document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('.section-kpi');
  if (section) {
    _node_modules_marquee3000_marquee3k_js__WEBPACK_IMPORTED_MODULE_0___default.a.init({
      selector: 'section-kpi__marquee'
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
      //rewind: true,
      loop: true,
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
          translate: [0, 10, 100],
          //([horizontal, vertical, depth])
          opacity: 0,
          scale: 1.4
        },
        next: {
          translate: [0, '-10%', -100] //([horizontal, vertical, depth])
        }
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
          // тип рендерера (может быть 'svg', 'canvas' или 'html')
          loop: true,
          // зацикливание анимации
          autoplay: false,
          // автоматический запуск анимации
          path: 'images/section-traffic/sound-animation.json' // путь к JSON-файлу с анимацией
        });
        soundBox.addEventListener('click', function () {
          return sound.play();
        });
        item.addEventListener('mouseenter', function () {
          animation.play();
        });
        item.addEventListener('mouseleave', function () {
          animation.stop();
          sound.pause();
          sound.currentTime = 0;
        });
      }
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map