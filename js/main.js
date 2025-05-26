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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
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
          /*inputTel.addEventListener('input', () => {
          	if(phoneMask.unmaskedValue.length === 11) {
          		inputTelRaw.value = phoneMask.unmaskedValue;
          	}
          	else {
          		inputTelRaw.value = ''
          	}
          	
            });*/
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
          var data = new URLSearchParams(new FormData(form));
          fetch(form.getAttribute("action"), {
            method: 'post',
            body: data
          }).then(function (response) {
            //response.json()
            // ----do something----

            if (modal.dataset.redirect) {
              window.open(modal.dataset.redirect, '_blank');
            }
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
/* harmony import */ var _components_overlap_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_overlap-box */ "./src/js/components/_overlap-box.js");
/* harmony import */ var _components_overlap_box__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_overlap_box__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/_button */ "./src/js/components/_button.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_marquees3k__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/_marquees3k */ "./src/js/components/_marquees3k.js");
/* harmony import */ var _components_marquees3k__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_marquees3k__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/_section-hero */ "./src/js/sections/_section-hero.js");
/* harmony import */ var _sections_section_hero__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sections_section_hero__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _sections_section_kpi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/_section-kpi */ "./src/js/sections/_section-kpi.js");
/* harmony import */ var _sections_section_kpi__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sections_section_kpi__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/_section-traffic */ "./src/js/sections/_section-traffic.js");
/* harmony import */ var _sections_section_traffic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_sections_section_traffic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/_section-sites */ "./src/js/sections/_section-sites.js");
/* harmony import */ var _sections_section_sites__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_sections_section_sites__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _sections_section_leads__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/_section-leads */ "./src/js/sections/_section-leads.js");
/* harmony import */ var _sections_section_leads__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_sections_section_leads__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/_section-company */ "./src/js/sections/_section-company.js");
/* harmony import */ var _sections_section_company__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_sections_section_company__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/_section-contract */ "./src/js/sections/_section-contract.js");
/* harmony import */ var _sections_section_contract__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_sections_section_contract__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/_section-about */ "./src/js/sections/_section-about.js");
/* harmony import */ var _sections_section_about__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_sections_section_about__WEBPACK_IMPORTED_MODULE_16__);
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
        window.addEventListener('scroll', function () {
          animation.stop();
          sound.pause();
          sound.currentTime = 0;
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
          scrub: 2,
          markers: false,
          pin: true,
          pinSpacer: true
        }
      });
      tl.to(cards[0], {
        scale: 0.8,
        opacity: .8,
        duration: 1
      }, '-=1');
      tl.to(cards[1], {
        y: "-=98%",
        scale: 0.9,
        opacity: .9,
        duration: 1
      }, '-=1');
      tl.to(cards[2], {
        y: "-=188%",
        duration: 1
      }, '-=1');
      tl.to('.section-system', {
        marginTop: "-=".concat(cards[0].offsetHeight + cards[1].offsetHeight),
        duration: 1
      }, '-=1');
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map