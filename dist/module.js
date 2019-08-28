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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdBlockDetect; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var consoleStyles = {
  danger: 'color: #F56C6C;',
  warning: 'color: #E6A23C;',
  success: 'color: #67C23A;',
  info: 'color: #409EFF;',
  disabled: 'color: #909399;',
  default: ''
};

function log() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  console.log('%c%s', consoleStyles[type], string);
}

var AdBlockDetect =
/*#__PURE__*/
function () {
  function AdBlockDetect() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AdBlockDetect);

    this._options = {
      id: 'xxxxxxxxxx'.replace(/x/g, function () {
        return (Math.random() * 16 | 0).toString(16);
      }),
      pixelClass: 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links adsbox partner_news adfox adsense' + (props.pixelClass || ''),
      pixelStyle: 'width: 1px!important; height: 1px!important; position: absolute!important; left: 0px!important; top: 0px!important; opacity: 0!important;' + (props.pixelStyle || ''),
      debug: typeof props.debug === 'boolean' ? props.debug : false,
      pixelInstance: null,
      adBlockDetected: false,
      intervalInstance: null,
      loopLimit: props.loopLimit || 5,
      loopInterval: props.loopInterval || 100,
      onDetected: typeof props.onDetected === 'function' ? props.onDetected : function (detected) {
        if (this.debug) log('Default onDetected Callback', 'danger');
      },
      onNotDetected: typeof props.onNotDetected === 'function' ? props.onNotDetected : function (detected) {
        if (this.debug) log('Default onNotDetected Callback', 'success');
      },
      onEnd: typeof props.onEnd === 'function' ? props.onEnd : function (detected) {
        if (this.debug) log('Default onNotDetected Callback', 'success');
      }
    };
  }

  _createClass(AdBlockDetect, [{
    key: "createPixel",
    value: function createPixel() {
      var pixel = document.createElement('div');
      pixel.setAttribute('id', 'adblock-check-pixel_' + this._options.id);
      pixel.setAttribute('class', this._options.pixelClass);
      pixel.setAttribute('style', this._options.pixelStyle);
      if (this._options.debug) log('Creating AdBlockDetect pixel instance', 'disabled');
      this._options.pixelInstance = pixel;
      return pixel;
    }
  }, {
    key: "insertPixelInDocument",
    value: function insertPixelInDocument() {
      var pixel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._options.pixelInstance;

      if (pixel) {
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(pixel);
        if (this._options.debug) log('AdBlockDetect pixel inserted into Document Body', 'disabled');
      } else if (this._options.debug) log('No AdBlockDetect pixel instance to insert into Document Body', 'danger');
    }
  }, {
    key: "removePixelFromDocument",
    value: function removePixelFromDocument() {
      var pixelInDoc = document.getElementById('adblock-check-pixel_' + this._options.id);
      pixelInDoc.parentNode.removeChild(pixelInDoc);
      if (this._options.debug) log('AdBlockDetect pixel removed from Document Body', 'disabled');
    }
  }, {
    key: "checkAdBlock",
    value: function checkAdBlock() {
      var _this = this;

      var intervalCount = 0;
      this._options.intervalInstance = setInterval(function () {
        if (intervalCount >= _this._options.loopLimit) {
          clearInterval(_this._options.intervalInstance);

          _this.removePixelFromDocument();

          _this._options.onNotDetected();

          if (_this._options.debug) log('No AdBlock detected', 'success');

          _this._options.onEnd(_this._options.adBlockDetected);

          return false;
        }

        var pixelInDoc = document.getElementById('adblock-check-pixel_' + _this._options.id);

        if (pixelInDoc) {
          var pixelStyles = window.getComputedStyle(pixelInDoc, null);

          if (pixelStyles && (pixelStyles.display === 'none' || pixelStyles.visibility === 'hidden')) {
            _this._options.adBlockDetected = true;
            clearInterval(_this._options.intervalInstance);

            _this.removePixelFromDocument();

            _this._options.onDetected();

            if (_this._options.debug) log('AdBlock is detected!', 'danger');

            _this._options.onEnd(_this._options.adBlockDetected);
          }
        }

        intervalCount++;
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this._options.debug) log('AdBlockDetect inited', 'info');
      this.createPixel();
      this.insertPixelInDocument();
      this.checkAdBlock();
    }
  }]);

  return AdBlockDetect;
}();



/***/ })
/******/ ]);