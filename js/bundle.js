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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/data.js":
/*!******************************!*\
  !*** ./src/js/parts/data.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function data() {
	// Data send
	let	formNews = document.querySelector(".feedback__form"),
		input = formNews.getElementsByTagName("input"),
		statusMessage = document.createElement("div"),
		message = {
			loading: "Загрузка...",
			success: "Спасибо! Скоро мы с Вами свяжемся!",
			failure: "Что-то пошло не так..."
		};
	
	statusMessage.classList.add("status");
	
	formNews.addEventListener("submit", (e) => {
		e.preventDefault();
		formNews.appendChild(statusMessage);
		
		let formData = new FormData(formNews);
		
		function postData(data) {
			return new Promise(function(resolve, reject) {
				let request = new XMLHttpRequest();
		
				request.open("POST", "server.php");
				request.setRequestHeader("Content-type", "application/json; charset=utf-8");
				
				let obj = {};
				
				formName.forEach(function(value, key) {
					obj[key] = value;
				});
				
				let json = JSON.stringify(obj);
				
				request.addEventListener("readystatechange", () => {
					if (request.readyState < 4) {
						resolve();
					} else if ((request.readyState == 4) && (request.status == 200)) {
						resolve();
					} else {
						reject();
					}
				});
				
				request.send(json);
			});
		}
		
		function clearInput() {
			for (let i = 0; i < input.length; i++) {
				input[i].value = "";
			}
		}
		
		postData(formData)
			.then(function() {
				statusMessage.textContent = message.loading;
			})
			.then(function() {
				statusMessage.textContent = message.success;
			})
			.catch(function() {
				statusMessage.textContent = message.failure;
			})
			.then(clearInput)
		
	})
}

module.exports = data;

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function menu() {
	// Menu
	let list = document.querySelector(".promo__list"),
		wrapper = document.querySelector(".promo__wrapper"),
		closeList = document.querySelector(".promo__close"),
		menu = document.querySelector(".promo__menu");
		
	wrapper.addEventListener("click", () => {
		wrapper.style.display = "none";
		closeList.style.display = "block";
		list.style.left = "15%";
	});
	
	closeList.addEventListener("click", () => {
		list.style.left = "-70%";
		wrapper.style.display = "block";
		closeList.style.display = "none";
	});
}

module.exports = menu;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
	// Modal
	let modal = document.querySelector(".modal"),
		closeWindow = document.querySelectorAll(".modal__close-window"),
		curtain = document.querySelector(".overlay"),
		buttonJoin = document.querySelector(".team .btn"); 
	
	buttonJoin.addEventListener("click", () => {
		modal.style.display = "block";
		curtain.style.display = "block";
	});
	
	closeWindow[0].addEventListener("click", () => {
		modal.style.display = "none";
		curtain.style.display = "none";
	});
	
	//Modal story
	let modalStory = document.querySelector(".modal_story"),
		btnStory = document.querySelector(".btn_story");  
	
	btnStory.addEventListener("click", () => {
		modalStory.style.display = "block";
		curtain.style.display = "block";
	});
	
	closeWindow[1].addEventListener("click", function() {
		console.log("Yes");
		modalStory.style.display = "none";
		curtain.style.display = "none"; 
	});
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/phone.js":
/*!*******************************!*\
  !*** ./src/js/parts/phone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function phone() {
	// Phone
	let phone = document.querySelector(".phone"),
		modal = document.querySelector(".modal-phone"),
		closeModal = document.querySelector(".modal-phone__close");
	
	phone.addEventListener("click", () => {
		closeModal.style.display = "flex";
		modal.style.display = "flex";
	});
	
	closeModal.addEventListener("click", () => {
		closeModal.style.display = "none";
		modal.style.display = "none";
	});
}

module.exports = phone;

/***/ }),

/***/ "./src/js/parts/scroll.js":
/*!********************************!*\
  !*** ./src/js/parts/scroll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function scrollPage() {
	// Scroll position
	localStorage.setItem("scrollPosition", 2300);
	
	if (localStorage.getItem("scrollPosition") === "2300") {
		document.documentElement.scrollTop = 2300;
	}
}

module.exports = scrollPage;

/***/ }),

/***/ "./src/js/parts/slider-autoplay.js":
/*!*****************************************!*\
  !*** ./src/js/parts/slider-autoplay.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliderAutoplay() {
	// Slider autoplay
	let promoDot = document.querySelectorAll(".promo__dot"),
		promoScreen = document.querySelectorAll(".promo__screen");
		
	for (let i = 0; i < promoDot.length; i++) {	
		let id = setInterval(function() {
			if ((promoDot[i].classList.contains("promo__dot_active")) && (i !== promoDot.length - 1)) {
				
				id = setTimeout(function() {
					promoDot[i].classList.remove("promo__dot_active");
					promoDot[i + 1].classList.add("promo__dot_active");
					
					let prepare = getSiblings(promoDot[i]),
						obj = promoScreen;
					
					function getSiblings(elem) {
						let siblings = [],
							sibling = elem;
							
						while (sibling.previousSibling) {
							sibling = sibling.previousSibling;
							sibling.nodeType == 1 && siblings.push(sibling);
						}
						
						sibling = elem;
						
						while (sibling.nextSibling) {
							sibling = sibling.nextSibling;
							sibling.nodeType == 1 && siblings.push(sibling);
						}
						
						return siblings;
					}
					
					promoScreen.forEach(function(item) {
						let prepare = getSiblings(item);
						
						function getSiblings(elem) {
							let siblings = [],
								sibling = elem;
								
							while (sibling.previousSibling) {
								sibling = sibling.previousSibling;
								sibling.nodeType == 1 && siblings.push(sibling);
							}
							
							sibling = elem;
							
							while (sibling.nextSibling) {
								sibling = sibling.nextSibling;
								sibling.nodeType == 1 && siblings.push(sibling);
							}
							
							return siblings;
						}
						
						for (let i = 0; i < prepare.length; i++) {
							prepare[i].classList.remove("promo__screen_active");
						};
						
						this.classList.add("promo__screen_active");
					}, obj[i + 1]);
					
				}, 1000);
			} else if ((promoDot[i].classList.contains("promo__dot_active")) && (i == promoDot.length - 1)) {
				id = setTimeout(function() {
					promoDot[i].classList.remove("promo__dot_active");
					promoDot[0].classList.add("promo__dot_active");
					
					let prepare = getSiblings(promoDot[i]),
						obj = promoScreen;
					
					function getSiblings(elem) {
						let siblings = [],
							sibling = elem;
							
						while (sibling.previousSibling) {
							sibling = sibling.previousSibling;
							sibling.nodeType == 1 && siblings.push(sibling);
						}
						
						sibling = elem;
						
						while (sibling.nextSibling) {
							sibling = sibling.nextSibling;
							sibling.nodeType == 1 && siblings.push(sibling);
						}
						
						return siblings;
					}
					
					promoScreen.forEach(function(item) {
						let prepare = getSiblings(item);
						
						function getSiblings(elem) {
							let siblings = [],
								sibling = elem;
								
							while (sibling.previousSibling) {
								sibling = sibling.previousSibling;
								sibling.nodeType == 1 && siblings.push(sibling);
							}
							
							sibling = elem;
							
							while (sibling.nextSibling) {
								sibling = sibling.nextSibling;
								sibling.nodeType == 1 && siblings.push(sibling);
							}
							
							return siblings;
						}
						
						for (let i = 0; i < prepare.length; i++) {
							prepare[i].classList.remove("promo__screen_active");
						};
						
						this.classList.add("promo__screen_active");
					}, obj[0]);
				}, 1000);
			};		
		}, 1000);
	};
}

module.exports = sliderAutoplay;

/***/ }),

/***/ "./src/js/parts/slider-avatar.js":
/*!***************************************!*\
  !*** ./src/js/parts/slider-avatar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliderAvatar() {
	// Slider avatar
	let arrowNav = document.querySelectorAll(".blockquote__img"),
		blockquoteItem = document.querySelectorAll(".blockquote__item"),
		blockquoteText = document.querySelectorAll(".blockquote__text"),
		blockquoteAuthor = document.querySelectorAll(".blockquote__author"); 		
	arrowNav[0].addEventListener("click", function() {
		for (let i = 0; i < blockquoteItem.length; i++) {
			if (blockquoteItem[i].classList.contains("blockquote__item_active")) {
				blockquoteItem.forEach(function(item) {
					item.style.order = "initial";
				});
				blockquoteItem[i].style.order = 4;
				
				if (i < blockquoteItem.length - 2) {
					blockquoteItem[i + 2].classList.add("blockquote__item_none");
				} else {
					blockquoteItem[i + 2 - blockquoteItem.length].classList.add("blockquote__item_none");
				} 
				
				if (i >= 3) {
					blockquoteItem[i - 3].classList.remove("blockquote__item_none");
				} else {
					blockquoteItem[i - 3 + blockquoteItem.length].classList.remove("blockquote__item_none");
				}
				
				switch(i) {
					case blockquoteItem.length - 1:
						blockquoteItem[i - 3].style.order = 1;
						blockquoteItem[i - 2].style.order = 2;
						blockquoteItem[i - 1].style.order = 3;
						blockquoteItem[i + 1 - blockquoteItem.length].style.order = 5;
						break;
					case (i < blockquoteItem.length - 1) && (i > 2):
						blockquoteItem[i - 3].style.order = 1;
						blockquoteItem[i - 2].style.order = 2;
						blockquoteItem[i - 1].style.order = 3;
						blockquoteItem[i + 1].style.order = 5;
						break;
					case 2:
						blockquoteItem[i - 3 + blockquoteItem.length].style.order = 1;
						blockquoteItem[i - 2].style.order = 2;
						blockquoteItem[i - 1].style.order = 3;
						blockquoteItem[i + 1].style.order = 5;
						break;
					case 1:
						blockquoteItem[i - 3 + blockquoteItem.length].style.order = 1;
						blockquoteItem[i - 2 + blockquoteItem.length].style.order = 2;
						blockquoteItem[i - 1].style.order = 3;
						blockquoteItem[i + 1].style.order = 5;
						break;
					case 0:
						blockquoteItem[i - 3 + blockquoteItem.length].style.order = 1;
						blockquoteItem[i - 2 + blockquoteItem.length].style.order = 2;
						blockquoteItem[i - 1 + blockquoteItem.length].style.order = 3;
						blockquoteItem[i + 1].style.order = 5;
						break;
				}
				
				// View
				blockquoteItem[i].classList.remove("blockquote__item_active");
				
				if (i > 0) {
					blockquoteItem[i - 1].classList.add("blockquote__item_active");
				} else if (i == 0) {
					blockquoteItem[blockquoteItem.length - 1].classList.add("blockquote__item_active");
				}				

				// Blockquote
				blockquoteText.forEach(function(item) {
					item.classList.add("blockquote__text_none");
				});	
				blockquoteAuthor.forEach(function(item) {
					item.classList.add("blockquote__author_none");
				});
				
				if (i >= 1) {
					blockquoteText[i - 1].classList.remove("blockquote__text_none");
					blockquoteAuthor[i - 1].classList.remove("blockquote__author_none");
				} else {
					blockquoteText[blockquoteText.length - 1].classList.remove("blockquote__text_none");
					blockquoteAuthor[blockquoteAuthor.length - 1].classList.remove("blockquote__author_none");
				}
				break;
			};
		}
	});
	
	arrowNav[1].addEventListener("click", function() {
		for (let i = 0; i < blockquoteItem.length; i++) {
			if (blockquoteItem[i].classList.contains("blockquote__item_active")) {
				blockquoteItem.forEach(function(item) {
					item.style.order = "revert";
				});
				
				if (i >= 2) {
					blockquoteItem[i - 2].classList.add("blockquote__item_none");
				} else {
					blockquoteItem[i - 2 + blockquoteItem.length].classList.add("blockquote__item_none");
				}
				
				if (i < blockquoteItem.length - 3) {
					blockquoteItem[i + 3].classList.remove("blockquote__item_none");
				} else {
					blockquoteItem[i + 3 - blockquoteItem.length].classList.remove("blockquote__item_none");
				}
				
				if (i == blockquoteItem.length - 1) {
					blockquoteItem[i - 1].style.order = 1;
					blockquoteItem[i].style.order = 2;
					blockquoteItem[i + 1 - blockquoteItem.length].style.order = 3;
					blockquoteItem[i + 2 - blockquoteItem.length].style.order = 4;
					blockquoteItem[i + 3 - blockquoteItem.length].style.order = 5;
				} else if (i == blockquoteItem.length - 2) {
					blockquoteItem[i - 1].style.order = 1;
					blockquoteItem[i].style.order = 2;
					blockquoteItem[i + 1].style.order = 3;
					blockquoteItem[i + 2 - blockquoteItem.length].style.order = 4;
					blockquoteItem[i + 3 - blockquoteItem.length].style.order = 5;
				} else if (i == blockquoteItem.length - 3) {
					blockquoteItem[i - 1].style.order = 1;
					blockquoteItem[i].style.order = 2;
					blockquoteItem[i + 1].style.order = 3;
					blockquoteItem[i + 2].style.order = 4;
					blockquoteItem[i + 3 - blockquoteItem.length].style.order = 5;
				} else if ((i >= 1) && (i < blockquoteItem.length - 3)) {
					blockquoteItem[i - 1].style.order = 1;
					blockquoteItem[i].style.order = 2;
					blockquoteItem[i + 1].style.order = 3;
					blockquoteItem[i + 2].style.order = 4;
					blockquoteItem[i + 3].style.order = 5;
				} else {
					blockquoteItem[i - 1 + blockquoteItem.length].style.order = 1;
					blockquoteItem[i].style.order = 2;
					blockquoteItem[i + 1].style.order = 3;
					blockquoteItem[i + 2].style.order = 4;
					blockquoteItem[i + 3].style.order = 5;
				}
				
				// View
				blockquoteItem[i].classList.remove("blockquote__item_active");
				
				if (i < blockquoteItem.length - 1) {
					blockquoteItem[i + 1].classList.add("blockquote__item_active");
				} else {
					blockquoteItem[i + 1 - blockquoteItem.length].classList.add("blockquote__item_active");
				}
				
				// Blockquote
				blockquoteText.forEach(function(item) {
					item.classList.add("blockquote__text_none");
				});	
				blockquoteAuthor.forEach(function(item) {
					item.classList.add("blockquote__author_none");
				});
				
				if ((i < blockquoteText.length - 1) && (i < blockquoteAuthor.length - 1)) {
					blockquoteText[i + 1].classList.remove("blockquote__text_none");
					blockquoteAuthor[i + 1].classList.remove("blockquote__author_none");
				} else {
					blockquoteText[0].classList.remove("blockquote__text_none");
					blockquoteAuthor[0].classList.remove("blockquote__author_none");
				}
				break;
			};
		}
	});
}

module.exports = sliderAvatar;

/***/ }),

/***/ "./src/js/parts/up-arrow.js":
/*!**********************************!*\
  !*** ./src/js/parts/up-arrow.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function upArrow() {
	// Up arrow
	let upArrow = document.querySelector(".up-arrow");
	
	upArrow.addEventListener("click", () => {
		let scrollFromTop = window.scrollY,
			id = setInterval(function() {
				window.scrollBy(0, -40);
				scrollFromTop = window.scrollY;
				
				if (scrollFromTop === 0) {
					clearInterval(id);
				}
			}, 20);
	});
}

module.exports = upArrow;

/***/ }),

/***/ "./src/js/parts/video.js":
/*!*******************************!*\
  !*** ./src/js/parts/video.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function video() {
	// Video
	let iframe = document.querySelector("iframe"),
		watchExplanation = document.querySelector(".watch__explanation"),
		watchWrapper = document.querySelector(".watch");
		
	watchExplanation.addEventListener("click", function() {
		this.style.display = "none";
		watchWrapper.style.alignItems = "stretch";
		iframe.style.display = "block";
	});
}

module.exports = video;

/***/ }),

/***/ "./src/js/parts/works.js":
/*!*******************************!*\
  !*** ./src/js/parts/works.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function works() {
	// Appearing works
	let loadWorks = document.querySelector(".btn_load"),
		moreWorks = document.querySelector(".more");
		
	loadWorks.addEventListener("click", function() {
		if ((moreWorks.classList.contains("hide")) && (moreWorks.style.display = "block")) {
			moreWorks.style.display = "none";
			
			moreWorks.classList.remove("hide");
			
			this.innerHTML = "Load works";
		} else if (moreWorks.classList.contains("hide")) {
			moreWorks.style.display = "none";
			this.innerHTML = "Load works";
		} else if (moreWorks.style.display = "none") {
			moreWorks.style.display = "block";
			
			moreWorks.classList.add("hide");
			
			this.innerHTML = "Hide works";
			moreWorks.style.opacity = 0;
			
			let visibility = 0,
				id = setInterval(() => {
					moreWorks.style.opacity = visibility;
					visibility = visibility + .05;
					
					if (moreWorks.style.opacity == 1) {
						clearInterval(id);
					}
				}, 50);
		} 
		
	});
}

module.exports = works;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", function() {
	"use strict";
	
	let data = __webpack_require__(/*! ./parts/data.js */ "./src/js/parts/data.js"),
		menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js"),
		modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
		scroll = __webpack_require__(/*! ./parts/scroll.js */ "./src/js/parts/scroll.js"),
		sliderAutoplay = __webpack_require__(/*! ./parts/slider-autoplay.js */ "./src/js/parts/slider-autoplay.js"),
		sliderAvatar = __webpack_require__(/*! ./parts/slider-avatar.js */ "./src/js/parts/slider-avatar.js"),
		upArrow = __webpack_require__(/*! ./parts/up-arrow.js */ "./src/js/parts/up-arrow.js"),
		phone = __webpack_require__(/*! ./parts/phone.js */ "./src/js/parts/phone.js"),
		video = __webpack_require__(/*! ./parts/video.js */ "./src/js/parts/video.js"),
		works = __webpack_require__(/*! ./parts/works.js */ "./src/js/parts/works.js");
	
	data();
	menu();
	modal();
	scroll();
	sliderAutoplay();
	sliderAvatar();
	upArrow();
	phone();
	video();
	works();
});

window.addEventListener("scroll", () => {
	// Up arrow + Phone
	let upArrow = document.querySelector(".up-arrow"),
		modalPhone = document.querySelector(".modal-phone"),
		phone = document.querySelector(".phone");
	
	if (document.documentElement.scrollTop > 1000) {
		upArrow.style.display = "block";
		modalPhone.style.bottom = "195px";
		phone.style.bottom = "115px";
	} else {
		upArrow.style.display = "none";
		modalPhone.style.bottom = "115px";
		phone.style.bottom = "30px";
	}
	
	// Scroll strip
	let scrollZip = document.querySelector(".scroll-zip"),
		percent,
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		
	percent = (document.documentElement.scrollTop / height) * 100;
	scrollZip.style.width = percent + "%";
	
	// Appearing item
	let card = document.querySelectorAll(".team__img"),
		name = document.querySelectorAll(".team__human"),
		teamHuman = document.querySelectorAll(".team__human");
	
	let opacity = 0,
		translate = 30,
		opacityName = 0,
		translateName = 30;
		
	card.forEach(function(item, i) {
		if (document.documentElement.scrollTop < 1900) {
			item.style.animation = "disappear 2s";
			item.style.transform = "translateY(150px)";
			item.style.opacity = "0";
		}
		
		if (document.documentElement.scrollTop > 1900) {
			item.style.animation = "appear 2s";
			let id = setTimeout(function() {
				teamHuman[i].style.borderTopColor = "transparent";
			}, 1500);
			item.style.transform = "translateY(0px)";
			item.style.opacity = "1";
		} 	
	});
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map